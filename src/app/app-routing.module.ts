import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule), 
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'anadeinventario',
    loadChildren: () => import('./componentes/anadeinventario/anadeinventario.module').then( m => m.AnadeinventarioPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'todoslosinventarios',
    loadChildren: () => import('./componentes/todoslosinventarios/todoslosinventarios.module').then( m => m.TodoslosinventariosPageModule)
  },
  {
    path: 'modificainventario',
    loadChildren: () => import('./componentes/modificainventario/modificainventario.module').then( m => m.ModificainventarioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
