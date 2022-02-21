import { Component, OnInit } from '@angular/core';
import{ManejainventariosService}from "../../services/manejainventarios.service";
import {AngularFireAuth}from "@angular/fire/auth";
import{AuthserviceService}from '../../services/authservice.service'
import { ActionSheetController, ModalController } from '@ionic/angular';
import { first } from 'rxjs/operators';
import {InventComponent} from '../invent/invent.component';
@Component({
  selector: 'app-todoslosinventarios',
  templateUrl: './todoslosinventarios.page.html',
  styleUrls: ['./todoslosinventarios.page.scss'],
})
export class TodoslosinventariosPage implements OnInit {

  public room : any[];
  public messages  = [];
  public foodListBackup: any[];
  public foodListBackup2: any[];
 
  user= this.afauth.auth.currentUser;
  constructor(private inventariosservice: ManejainventariosService,
    private afauth:AngularFireAuth,
    private authservice: AuthserviceService,
    private actionSheetController: ActionSheetController,
    private modal: ModalController) {
  

    }
    ngOnInit() {
        this.inventariosservice.consultaTodosInvetarios(this.user.email).subscribe(room =>{
          console.log(room);
          this.room = room;
         
          this.foodListBackup = this.room;
          this.foodListBackup2 = this.room;
          
          
        })
        
    }
    
    Onlogout(){
      this.authservice.logout();
    }

    delete(id){
      this.inventariosservice.delete(id);
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
    calcularCantidadOptimaDePedido(demanda,costoDePreparacion, CostoAnualDeMantenimiento){
      return Math.sqrt( (2*demanda*costoDePreparacion)/CostoAnualDeMantenimiento  );
    }
    calcularPuntoDeReorden(demanda, tiempoDeEntrega){
      return ( (demanda/365) * tiempoDeEntrega); 
    }
    calcularCostoAnualTotal(demanda, costoxunidad, cantidadoptimaDePediodo, costoDePreparacion, CostoAnualDeMantenimiento ){
      return ( (demanda*costoxunidad) + ( (demanda/cantidadoptimaDePediodo)*costoDePreparacion ) + ((costoDePreparacion/2)*CostoAnualDeMantenimiento));
    }
}
