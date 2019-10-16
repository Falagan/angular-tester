import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import IBoard from './IBoard';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  private baseUrl;
  private segment;
  private token;
  private key;
  private userId;

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.apiUrls.members;
    this.token = environment.apiToken;
    this.key = environment.apiKey;
    this.segment = '/boards';
    this.userId = environment.apiUser;
  }

  public get() {
    return this._http.get<IBoard[]>(`${this.baseUrl}${this.userId}${this.segment}?key=${this.key}&token=${this.token}`)
  }

}
