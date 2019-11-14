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
      },
      {
        path: 'world-bank',
        loadChildren: () => import('../../modules/world-bank/world-bank.module').then(m => m.WorldBankModule)
      },
      {
        path: 'akita-state-management',
        loadChildren: () => import('../../modules/akita-state-management/akita-state-management.module').then(m => m.AkitaStateManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
