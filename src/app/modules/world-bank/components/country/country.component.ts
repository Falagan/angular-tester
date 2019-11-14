import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WorldBankService} from "../../services/world-bank.service";
import {Country} from "../../models/ICountry";
import {Observable} from "rxjs";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryComponent implements OnInit {

  public country$: Observable<Country>;
  private countryCode: string;
  public countryName: string;

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _worldBankService: WorldBankService
  ) {}

  ngOnInit() {
    this.countryCode = this._activatedRoute.snapshot.params['id'];
    this.countryName = this._activatedRoute.snapshot.params['name'];
    this.country$ = this._worldBankService.getCountry(this.countryCode);
  }

}
