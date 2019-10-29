import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { RouterModule } from '@angular/router';
import { WebsocketRxjsModule } from './websocket-rxjs/websocket-rxjs.module';
import { BootstrapCustomModule } from '../../lib/library-angular-tester/ui';
import { ReporterModule } from './reporter/reporter.module';



@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebsocketRxjsModule,
    BootstrapCustomModule,
    ReporterModule
  ],
  exports: [TodoComponent]
})
export class ModulesModule { }
