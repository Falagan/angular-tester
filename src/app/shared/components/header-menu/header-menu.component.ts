import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import IHeaderMenuData from './IHeaderMenuData';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMenuComponent implements OnInit {

  @Input() data:IHeaderMenuData;
  @Output() logOut = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit() {
  }


}
