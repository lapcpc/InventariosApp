import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificainventarioPage } from './modificainventario.page';

const routes: Routes = [
  {
    path: '',
    component: ModificainventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificainventarioPageRoutingModule {}
