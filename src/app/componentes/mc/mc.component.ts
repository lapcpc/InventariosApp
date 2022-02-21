import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import {ManejainventariosService}from '../../services/manejainventarios.service';

@Component({
  selector: 'app-mc',
  templateUrl: './mc.component.html',
  styleUrls: ['./mc.component.scss'],
})
export class McComponent implements OnInit {
  public name: any;
  public room : any;
  public flag : number;
  cantidad: number;
  public tinput : number;
  public toutput : number;
  constructor(private navparams: NavParams,
              private _modal: ModalController,
              private inventariosService: ManejainventariosService,
              private router: Router

    )
 {this.flag = 0 ; }

ngOnInit() {
this.name = this.navparams.get('name');
this.inventariosService.get_input_output().subscribe(room =>{
  console.log(room);
  this.room = room;



  var i = 0;
  this.room.forEach(element =>{
  if(i == 0){
    this.tinput = element.input;
    console.log(this.tinput) ;
    i++;
  }else if(i == 1){
    this.toutput = element.output;
    console.log(this.toutput )
  }
})
  this.flag=1;

})

}
  onReturn(){
    this._modal.dismiss();
  }
  actualiza(decide){



    if(this.flag == 1){
    if (decide == 1 ){
      let cambio =  this.name.cantidad + this.cantidad;

      this.inventariosService.update(this.name.docid, cambio);
      this._modal.dismiss();
      this.router.navigate(['/todoslosinventarios']);
      this.inventariosService.anadeinput(this.name.docid, this.cantidad,this.tinput);
   

    }else if (decide == 0){
      let cambio2 =  this.name.cantidad - this.cantidad;


      this.inventariosService.update(this.name.docid, cambio2);
      this._modal.dismiss();
      this.router.navigate(['/todoslosinventarios']);
      this.inventariosService.anadeoutput(this.name.docid, this.cantidad, this.toutput);
    }

  }
}
}
