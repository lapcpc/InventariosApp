import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { McComponent } from '../mc/mc.component';

@Component({
  selector: 'app-invent',
  templateUrl: './invent.component.html',
  styleUrls: ['./invent.component.scss'],
})
export class InventComponent implements OnInit {
  public name: any;
  public cop: number;
  constructor(private navparams : NavParams,
              private _modal : ModalController
      ) { }

  ngOnInit() {
    this.name = this.navparams.get('name');

  }
  
onReturn(){
  this._modal.dismiss()
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
modificarInventario(){
  this._modal.dismiss()
  this._modal.create({
    component: McComponent,
    componentProps:{
      name: this.name
    }
  }).then( (modal) => modal.present());
}
}
