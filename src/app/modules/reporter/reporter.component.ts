import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import Constants from "src/assets/constants";

@Component({
  selector: "app-reporter",
  templateUrl: "./reporter.component.html",
  styleUrls: ["./reporter.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReporterComponent implements OnInit {

  public asideMenuData = Constants.ASIDE_MENU_INIT_DATA;

  constructor() {}

  ngOnInit() {}


}
