import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import ICard from './ICard';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private baseUrl;
  private segment;
  private token;
  private key;

  constructor(private _http: HttpClient) {
    this.baseUrl = environment.apiUrls.boards;
    this.token = environment.apiToken;
    this.key = environment.apiKey;
    this.segment = '/cards';
  }

  public getByBoard(boardId) {
    return this._http.get<ICard[]>(`${this.baseUrl}${boardId}${this.segment}?key=${this.key}&token=${this.token}`)
  }

}