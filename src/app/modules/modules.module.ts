import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {RouterModule} from '@angular/router';
import {WebsocketRxjsModule} from './websocket-rxjs/websocket-rxjs.module';
import {ReporterModule} from './reporter/reporter.module';
import {AkitaStateManagementModule} from "./akita-state-management/akita-state-management.module";


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebsocketRxjsModule,
    ReporterModule,
    AkitaStateManagementModule
  ],
  exports: [TodoComponent]
})
export class ModulesModule {
}
