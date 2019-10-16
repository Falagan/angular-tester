import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalsService } from "src/app/services/modals/modals.service";
import Constants from "src/assets/constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"]
})
export class HomeComponent implements OnInit {

  public homeLoginData = Constants.HOME_LOGIN_INIT_DATA;

  constructor(private _router: Router, private _modalsService: ModalsService) {}

  ngOnInit() {}

  public navigateTo(event) {
    event ? this._router.navigate(['main']) : this._modalsService.show('error');
  }
}
