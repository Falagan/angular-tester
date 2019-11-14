import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorldBankRoutingModule } from './world-bank-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import {WorldBankComponent} from "./world-bank.component";
import {ContinentalTableComponent} from "./components/home/continental-table/continental-table.component";
import {RegionsComponent} from "./components/regions/regions.component";
import {RegionsTableComponent} from "./components/regions/regions-table/regions-table.component";
import {CountryInfoComponent} from "./components/country/country-info/country-info.component";


@NgModule({
  declarations: [WorldBankComponent, HomeComponent, RegionsComponent, CountryComponent, ContinentalTableComponent, RegionsTableComponent, CountryInfoComponent],
  imports: [
    CommonModule,
    WorldBankRoutingModule
  ]
})
export class WorldBankModule { }
