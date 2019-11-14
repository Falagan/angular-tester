import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MainRoutingModule} from './main-routing.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ModulesModule} from 'src/app/modules/modules.module';
import {MainComponent} from './main.component';
import {SharedModule} from 'src/app/shared/shared.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatTreeModule} from "@angular/material/tree";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    FontAwesomeModule,
    ModulesModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTreeModule,
  ]
})
export class MainModule {
}
