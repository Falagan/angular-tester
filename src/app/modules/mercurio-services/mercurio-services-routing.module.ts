import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {TestLoginComponent} from "./test-login/test-login.component";
import {MercurioServicesComponent} from "./mercurio-services.component";


const routes: Routes = [
  {
    path: '',
    component: MercurioServicesComponent,
    children: [
      {
        path: '',
        component: TestLoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MercurioServicesRoutingModule {}
