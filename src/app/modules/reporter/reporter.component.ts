import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {User} from "../../../lib/library-angular-tester/models";



@Component({
  selector: "app-reporter",
  templateUrl: "./reporter.component.html",
  styleUrls: ["./reporter.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReporterComponent implements OnInit {

  public LoginUser: User;

  constructor() {}

  ngOnInit() {
    this.LoginUser = new User(10,'Manolo');
    console.log('User', this.LoginUser);
  }


}
