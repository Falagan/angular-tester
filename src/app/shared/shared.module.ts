import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { HeaderMenuComponent } from './header-menu/header-menu.component';



@NgModule({
  declarations: [AsideMenuComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports:[AsideMenuComponent]
})
export class SharedModule { }
