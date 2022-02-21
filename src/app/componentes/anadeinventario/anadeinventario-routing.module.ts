import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadeinventarioPage } from './anadeinventario.page';

const routes: Routes = [
  {
    path: '',
    component: AnadeinventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadeinventarioPageRoutingModule {}
