import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyncfusionComponent } from './syncfusion.component';

const routes: Routes = [
  {
    path: '',
    component: SyncfusionComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncfusionRoutingModule { }
