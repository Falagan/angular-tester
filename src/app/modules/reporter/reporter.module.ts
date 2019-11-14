import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReporterRoutingModule } from './reporter-routing.module';
import { ReporterComponent } from './reporter.component';

@NgModule({
  declarations: [ReporterComponent],
  imports: [
    CommonModule,
    ReporterRoutingModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[ReporterComponent]
})
export class ReporterModule { }
