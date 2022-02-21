import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoslosinventariosPageRoutingModule } from './todoslosinventarios-routing.module';

import { TodoslosinventariosPage } from './todoslosinventarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoslosinventariosPageRoutingModule
  ],
  declarations: [TodoslosinventariosPage]
})
export class TodoslosinventariosPageModule {}
