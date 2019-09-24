import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.sass']
})
export class AsideMenuComponent implements OnInit {

  public showMenu: boolean;

  constructor() {
    this.showMenu = false;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    if (event.target.className === 'menu-label open') {
      this.showMenu = false;
    }
  }

  ngOnInit() {}

  public showHideMenu() {
    this.showMenu = !this.showMenu;
  }

}