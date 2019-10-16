import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporterComponent } from './reporter/reporter.component';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { WebsocketRxjsModule } from './websocket-rxjs/websocket-rxjs.module';
import { BootstrapCustomModule } from 'ui';



@NgModule({
  declarations: [ReporterComponent,TodoComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebsocketRxjsModule,
    BootstrapCustomModule
  ],
  exports: [ReporterComponent,TodoComponent]
})
export class ModulesModule { }
