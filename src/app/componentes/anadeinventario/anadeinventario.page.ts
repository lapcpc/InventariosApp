import { Component, OnInit } from '@angular/core';
import{ManejainventariosService}from "../../services/manejainventarios.service";
import {AngularFireAuth}from "@angular/fire/auth";
import { Router} from "@angular/router";

@Component({
  selector: 'app-anadeinventario',
  templateUrl: './anadeinventario.page.html',
  styleUrls: ['./anadeinventario.page.scss'],
})
export class AnadeinventarioPage implements OnInit {

  constructor(private inventariosservice: ManejainventariosService,
    private afauth:AngularFireAuth, 
    private router: Router) { }
  nombre:string;
  cantidad:string;
  cam: string;
  demanda : string;
  cp: string;
  te: string;
  cxu: string;
 
  user= this.afauth.auth.currentUser;



  ngOnInit() {
  }
  anadeinventario(){
    this.inventariosservice.anadeInventario(this.cam,this.demanda,this.cp,this.te,this.cxu,this.user.uid, this.user.email,this.nombre,this.cantidad)
    this.router.navigate(['/tabs/tab2']);
  }
  OnReturn(){
    this.router.navigate(['/tabs/tab2']);
  }

}
