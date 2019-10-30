import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './static/not-found/not-found.component';
import { AboutComponent } from './static/about/about.component';
import { RouterModule } from '@angular/router';
import { BootstrapCustomModule } from '../../lib/library-angular-tester/ui';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";

@NgModule({
  declarations: [HomeComponent,NotFoundComponent, AboutComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BootstrapCustomModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class CoreModule { }
