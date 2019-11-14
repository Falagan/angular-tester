import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorldBankComponent} from "./world-bank.component";
import {HomeComponent} from "./components/home/home.component";
import {RegionsComponent} from "./components/regions/regions.component";
import {CountryComponent} from "./components/country/country.component";


const routes: Routes = [
  {
    path: '',
    component: WorldBankComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'region/:code/:name',
        component: RegionsComponent
      },
      {
        path: 'country/:id/:name',
        component: CountryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldBankRoutingModule { }
