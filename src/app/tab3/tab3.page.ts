import { Component } from '@angular/core';
import{ManejainventariosService}from "../../app/services/manejainventarios.service";
import {AngularFireAuth}from "@angular/fire/auth";
import{AuthserviceService}from "../../app/services/authservice.service"
import { ActionSheetController, ModalController } from '@ionic/angular';
import {InventComponent} from '../../app/componentes/invent/invent.component';
import { ControlComponent } from '../componentes/control/control.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public room: any;
  public room1: any;
  public foodListBackup: any[];
  public foodListBackup2: any[];
  public flag = 0;
  user= this.afauth.auth.currentUser;
  constructor(private inventariosservice: ManejainventariosService,
    private modal:ModalController,
    private afauth:AngularFireAuth,
    private actionSheetController: ActionSheetController,
    private authservice: AuthserviceService
    ) {}
  
  ngOnInit(){

  
    this.inventariosservice.consultaTodosInvetarios(this.user.email).subscribe(room =>{
      console.log(room);
      this.room = room;
      
     
        this.foodListBackup = this.room;
        this.foodListBackup2 = this.room;
      
    })


  }
  abrirInventario(inventario){
    this.modal.create({
      component: ControlComponent,
      componentProps:{
        name: inventario
      }
    }).then( (modal)=> modal.present())
}
  delete(id){
    this.inventariosservice.delete(id);
  }
  calcularCantidadOptimaDePedido(demanda, costoDePreparacion, CostoAnualDeMantenimiento){
    return (Math.sqrt( (2 *demanda * costoDePreparacion) / CostoAnualDeMantenimiento  ));
  }
  calcularPuntoDeReorden(demanda, tiempoDeEntrega){
    return ( (demanda / 365) * tiempoDeEntrega) ; 
  }
  calcularCostoAnualTotal(demanda, costoxunidad, cantidadoptimaDePediodo, costoDePreparacion, CostoAnualDeMantenimiento ){
    return ( (demanda * costoxunidad) + ( (demanda / cantidadoptimaDePediodo) * costoDePreparacion ) + ((costoDePreparacion / 2) * CostoAnualDeMantenimiento)) ;
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.Onlogout()
        },
      
      }]
    });
    await actionSheet.present();
  } Onlogout(){
    this.authservice.logout();
  }
 
  async filterList(evt) {
    this.foodListBackup = this.foodListBackup2;
    const searchTerm = evt.srcElement.value;
  
    if (!searchTerm) {
      return;
    }
  
    this.foodListBackup = this.foodListBackup.filter(currentFood => {
      if (currentFood.nombrei && searchTerm) {
        return (currentFood.nombrei.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });
  }
}
