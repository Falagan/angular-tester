import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { IHeaderMenuData } from "src/app/shared/components/header-menu/IHeaderMenuData";
import Constants from 'src/assets/constants';


@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.sass"],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  
  public headerMenuData: IHeaderMenuData = Constants.HEADER_MENU_INIT_DATA;

  constructor(private _router: Router) {}

  ngOnInit() {
    /**Indicardor de Módulo - Subscripcion a eventos de las rutas*/
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.headerMenuData.module.name = event.url.split("/main/")[1];
      }
    });
  }


  public logOut() {
    this._router.navigate([""]);
  }
}
