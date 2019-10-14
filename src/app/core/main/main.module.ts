import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReporterComponent } from 'src/app/modules/reporter/reporter.component';
import { TodoComponent } from 'src/app/modules/todo/todo.component';




@NgModule({
  declarations: [MainComponent, ReporterComponent, TodoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class MainModule { }
