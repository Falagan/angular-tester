import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NotFoundComponent } from './static/not-found/not-found.component';
import { AboutComponent } from './static/about/about.component';
import { RouterModule } from '@angular/router';
import { BootstrapCustomModule } from 'ui';

@NgModule({
  declarations: [HomeComponent,NotFoundComponent, AboutComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    BootstrapCustomModule
  ]
})
export class CoreModule { }
