import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestClusterService {
  private obs: Observable<any>;
  constructor(private http: HttpClient) {}

  get() {
    const httpC = [
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000',
      'http://localhost:3000'
    ];

    forkJoin(httpC.map(element => this.http.get(element))).subscribe(
      next => console.log(next)
    );
  }
}
