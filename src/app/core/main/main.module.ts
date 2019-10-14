import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './main.component';
import { ReporterComponent } from './reporter/reporter.component';
import { TodoComponent } from './todo/todo.component';
import { MainRoutingModule } from './main-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestModule } from 'ui';
import { BoardsTableComponent } from './reporter/boards-table/boards-table.component';



@NgModule({
  declarations: [MainComponent, ReporterComponent, TodoComponent, BoardsTableComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TestModule
  ]
})
export class MainModule { }
