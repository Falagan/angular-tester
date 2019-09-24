import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterComponent } from '../reporter/reporter.component';
import { TodoComponent } from '../todo/todo.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
