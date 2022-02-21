import { Component } from '@angular/core';
import{ManejainventariosService}from "../../app/services/manejainventarios.service";
import {AngularFireAuth}from "@angular/fire/auth";
import{AuthserviceService}from "../../app/services/authservice.service"
import { ActionSheetController, ModalController } from '@ionic/angular';
import {InventComponent} from '../../app/componentes/invent/invent.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  public room : any;
  public total: number;
  public messages  = [];
  user= this.afauth.auth.currentUser;
  constructor(private inventariosservice: ManejainventariosService,
    private afauth:AngularFireAuth,
    private authservice: AuthserviceService,
    private actionSheetController: ActionSheetController,
    private modal: ModalController
   
    ) { this.total=0;}
    ngOnInit() {
        this.inventariosservice.consultaInvetarios(this.user.email).subscribe(room =>{
          console.log(room);
          this.room = room;
          this.restart_total();
          this.room.forEach(element =>
            
            this.set_total(element.cantidad)
            )
          
        })
   
    } Onlogout(){
      this.authservice.logout();
    }
    get_total(){
      return this.total;
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
    }
    abrirInventario(inventario){
        this.modal.create({
          component: InventComponent,
          componentProps:{
            name: inventario
          }
        }).then( (modal)=> modal.present())
    }
    set_total(i){
      this.total = this.total + i ;
    }
    restart_total(){
      this.total = 0;
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
}
