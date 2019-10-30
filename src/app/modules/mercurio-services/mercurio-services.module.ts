import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestLoginComponent} from './test-login/test-login.component';
import {MercurioServicesComponent} from './mercurio-services.component';
import {RouterModule} from "@angular/router";
import {MercurioServicesRoutingModule} from "./mercurio-services-routing.module";


@NgModule({
  declarations: [TestLoginComponent, MercurioServicesComponent],
  imports: [
    CommonModule,
    MercurioServicesRoutingModule,
    RouterModule
  ]
})
export class MercurioServicesModule {
}
