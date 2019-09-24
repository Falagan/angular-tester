import { Component, OnInit } from '@angular/core';
import { ModalsService } from './services/modals/modals.service';
import { IModal } from './models/IModal';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-modals [hidden]="!modalData?.show" [modalData]="modalData"></app-modals>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent implements OnInit {
   
  public title;
  public modalData: IModal;

  constructor(
    private _modalsService: ModalsService,
    private _router: Router){
    this.title = 'pinol';
  }

  ngOnInit() {
    /**Servicio global de modales*/
    this._modalsService.get().subscribe(
      (next) => {
        this.modalData = next;
      }
    );
    /** Navigate Events */
    this._router.events.subscribe(next =>
      next instanceof NavigationStart ? this._modalsService.show('waiter') :
        next instanceof NavigationEnd ? this._modalsService.hide(500) : null
    );
  }
}
