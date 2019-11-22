import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { SyncfusionComponent } from './syncfusion.component';
import { PruebaGridComponent } from './prueba-grid/prueba-grid.component';
import { SyncfusionRoutingModule } from './syncfusion-routing.module';



@NgModule({
  declarations: [PruebaGridComponent, SyncfusionComponent],
  imports: [
    CommonModule,
    GridModule,
    SyncfusionRoutingModule
  ]
})
export class SyncfusionModule { }
