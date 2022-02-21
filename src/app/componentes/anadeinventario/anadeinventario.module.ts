import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadeinventarioPageRoutingModule } from './anadeinventario-routing.module';

import { AnadeinventarioPage } from './anadeinventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadeinventarioPageRoutingModule
  ],
  declarations: [AnadeinventarioPage]
})
export class AnadeinventarioPageModule {}
