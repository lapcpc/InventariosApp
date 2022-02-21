import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificainventario',
  templateUrl: './modificainventario.page.html',
  styleUrls: ['./modificainventario.page.scss'],
})
export class ModificainventarioPage implements OnInit {
  nombre:string;
  cantidad:string;
  cam: string;
  demanda : string;
  cp: string;
  te: string;
  cxu: string;
  constructor() { }

  ngOnInit() {
  }

}
