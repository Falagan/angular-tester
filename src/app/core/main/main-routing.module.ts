import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
        loadChildren: () => import('../../modules/reporter/reporter.module').then(m => m.ReporterModule)
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
