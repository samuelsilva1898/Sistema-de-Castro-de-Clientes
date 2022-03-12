import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { ClientCrudComponent } from "./views/client-crud/client-crud.component";
import { ClientCreatComponent } from './components/client/client-creat/client-creat.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"clientes",
  component: ClientCrudComponent
},{
  path:"clients/create",
  component: ClientCreatComponent
},
{
  path:"clientes/update/:id",
  component: ClientUpdateComponent
},
{
  path:"clientes/delete/:id",
  component: ClientDeleteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
