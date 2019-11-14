import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AkitaStateManagementComponent} from "./akita-state-management.component";
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  {
    path: '',
    component: AkitaStateManagementComponent,
    children: [
      {
        path: '',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AkitaStateManagementRoutingModule { }
