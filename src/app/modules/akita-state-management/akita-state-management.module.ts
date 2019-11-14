import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaStateManagementRoutingModule } from './akita-state-management-routing.module';
import { AkitaStateManagementComponent } from './akita-state-management.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';


@NgModule({
  declarations: [AkitaStateManagementComponent, UsersComponent, UsersListComponent],
  imports: [
    CommonModule,
    AkitaStateManagementRoutingModule
  ]
})
export class AkitaStateManagementModule { }
