import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterComponent } from '../../modules/reporter/reporter.component';
import { TodoComponent } from '../../modules/todo/todo.component';
import { WebsocketRxjsComponent } from 'src/app/modules/websocket-rxjs/websocket-rxjs.component';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'reporter',
        component: ReporterComponent
      },
      {
        path: 'todo',
        component: TodoComponent
      },
      {
        path: 'websocketrxjs',
        component: WebsocketRxjsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
