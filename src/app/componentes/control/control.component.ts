import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from "@ionic/angular";
import { McComponent } from '../mc/mc.component';

import {ManejainventariosService} from '../../services/manejainventarios.service';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  public room: any;
  public name: any;
  public cop: number;
  constructor(private navparams : NavParams,
              private _modal : ModalController,
              private inventariosservice : ManejainventariosService
      ) { }

  ngOnInit() {
    this.name = this.navparams.get('name');
    this.inventariosservice.get_inputoutput().subscribe(room =>{
      console.log(room);
      this.room = room;
      })
      }
      onReturn(){
        this._modal.dismiss()
      }

}
