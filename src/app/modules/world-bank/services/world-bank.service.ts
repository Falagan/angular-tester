import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Region} from "../models/IRegion";
import {Country} from "../models/ICountry";


@Injectable()
export class WorldBankService {
  constructor(private _httpClient: HttpClient) {}

  public getContinentalRegions(){
    return this._httpClient
      .get<[]>('http://api.worldbank.org/v2/region/?format=json')
      .pipe(map(this.transformContinentalRegionsData));
  }

  private transformContinentalRegionsData(infoRegions): Region[] {
    const regions: Region[] = infoRegions[1].filter(region => region.id != '');
    return regions;
  }

  public getRegions(regionCode: string) {
    return this._httpClient
      .get<[]>(
        `http://api.worldbank.org/v2/region/${regionCode}/country?per_page=1000&format=json`
      )
      .pipe(map(this.transformRegionsData));
  }

  private transformRegionsData(infoRegion): Country[] {
    const countries: Country[] = infoRegion[1];
    return countries;
  }

  public getCountry(countryCode: string){
    return this._httpClient
      .get<Country>(
        `http://api.worldbank.org/V2/country/${countryCode}?format=json`
      )
      .pipe(map(this.transformCountryData));
  }

  private transformCountryData(infoCountry): Country {
    const country: Country = infoCountry[1][0];
    return country;
  }
}
