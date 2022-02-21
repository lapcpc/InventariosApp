import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoslosinventariosPage } from './todoslosinventarios.page';

const routes: Routes = [
  {
    path: '',
    component: TodoslosinventariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoslosinventariosPageRoutingModule {}
