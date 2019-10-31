import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import Constants from "src/assets/constants";
import { ModalsService } from 'src/app/shared/services/modals/modals.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {


  constructor(private _modalsService: ModalsService) {}

  ngOnInit() {}

}
