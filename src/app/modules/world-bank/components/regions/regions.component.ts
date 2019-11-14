import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ModalsService} from "../../../../shared/services/modals/modals.service";
import {WorldBankService} from "../../services/world-bank.service";
import {Country} from "../../models/ICountry";
import {Observable} from "rxjs";

@Component({
  selector: 'wb-informer-region',
  templateUrl: './regions.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegionsComponent implements OnInit {
  public countries$: Observable<Country[]>;
  private regionCode: string;
  public regionName: string;

  constructor(
      private _activatedRoute: ActivatedRoute,
      private _worldBankService: WorldBankService,
      private _modalsService: ModalsService
  ) {}

  ngOnInit() {
    this.regionCode = this._activatedRoute.snapshot.params['code'];
    this.regionName = this._activatedRoute.snapshot.params['name'];
    this.countries$ = this._worldBankService.getRegions(this.regionCode);
  }

}
