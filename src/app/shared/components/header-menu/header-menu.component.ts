import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import IHeaderMenuData from './IHeaderMenuData';



@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass']
})
export class HeaderMenuComponent implements OnInit {

  @Input() data:IHeaderMenuData;
  @Output() logOut = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit() {
  }


}
