import { Component, OnInit } from '@angular/core';
import {WorldBankService} from "../../services/world-bank.service";
import {Observable} from "rxjs";
import {Region} from "../../models/IRegion";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private _wbService: WorldBankService) { }

  public regions$: Observable<Region[]>;

  ngOnInit() {
    this.regions$ = this._wbService.getContinentalRegions();
  }

}
