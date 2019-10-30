import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo/todo.component';
import {RouterModule} from '@angular/router';
import {WebsocketRxjsModule} from './websocket-rxjs/websocket-rxjs.module';
import {BootstrapCustomModule} from '../../lib/library-angular-tester/ui';
import {ReporterModule} from './reporter/reporter.module';
import {MercurioServicesModule} from "./mercurio-services/mercurio-services.module";


@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    RouterModule,
    WebsocketRxjsModule,
    BootstrapCustomModule,
    ReporterModule,
    MercurioServicesModule
  ],
  exports: [TodoComponent]
})
export class ModulesModule {
}
