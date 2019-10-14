import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardsTableComponent } from './boards-table/boards-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [BoardsTableComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ReporterModule { }
