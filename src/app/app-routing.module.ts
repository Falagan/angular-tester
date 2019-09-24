import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './static/not-found/not-found.component';
import { AboutComponent } from './static/about/about.component';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'main', loadChildren: () => import('./core/main/main.module').then(m => m.MainModule)},
  {path:'about', component: AboutComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
