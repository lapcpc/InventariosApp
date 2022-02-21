import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificainventarioPageRoutingModule } from './modificainventario-routing.module';

import { ModificainventarioPage } from './modificainventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificainventarioPageRoutingModule
  ],
  declarations: [ModificainventarioPage]
})
export class ModificainventarioPageModule {}
