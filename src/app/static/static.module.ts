import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [NotFoundComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class StaticModule { }
