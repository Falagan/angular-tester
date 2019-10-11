import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { ReporterComponent } from '../reporter/reporter.component';
import { TodoComponent } from '../todo/todo.component';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestModule } from 'ui';



@NgModule({
  declarations: [MainComponent, ReporterComponent, TodoComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TestModule
  ]
})
export class MainModule { }
