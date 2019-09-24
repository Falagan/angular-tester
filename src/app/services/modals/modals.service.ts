import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IModal } from 'src/app/models/IModal';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  private modalSubject: Subject<any>;

  constructor() {
    this.modalSubject = new Subject();
  }

  public get(): Observable<any> {
    return this.modalSubject.asObservable();
  }

 
  public show(template: string) {

    const modalData: IModal = {
      show: true,
      template
    };

    this.modalSubject.next(modalData);
  }


  public hide(Delay?) {

    const modalData: IModal = {
      show: false
    };

    setTimeout(() => {
      this.modalSubject.next(modalData);
    }, Delay);
  }
}