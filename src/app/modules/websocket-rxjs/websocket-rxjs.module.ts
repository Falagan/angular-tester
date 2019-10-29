import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsocketRxjsComponent } from './websocket-rxjs.component';
import { WebsocketConsoleComponent } from './websocket-console/websocket-console.component';



@NgModule({
  declarations: [WebsocketRxjsComponent, WebsocketConsoleComponent],
  imports: [
    CommonModule
  ]
})
export class WebsocketRxjsModule { }
