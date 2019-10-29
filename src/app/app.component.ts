import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { IModal } from './shared/services/modals/IModal';
import { ModalsService } from './shared/services/modals/modals.service';

@Component({
  selector: 'app-root',
  template: `
    <app-modals [hidden]="!modalData?.show" [modalData]="modalData"></app-modals>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
   
  public title;
  public modalData: IModal;

  constructor(
    private _modalsService: ModalsService,
    private _router: Router,
    private _cdr: ChangeDetectorRef){
    this.title = 'Angular Tester';
  }

  ngOnInit() {
    /**Servicio global de modales*/
    this._modalsService.get().subscribe(
      (next) => {
        this.modalData = next;
        this._cdr.detectChanges();
      }
    );
    /** Navigate Events */
    this._router.events.subscribe(next =>
      next instanceof NavigationStart ? this._modalsService.show('waiter') :
        next instanceof NavigationEnd ? this._modalsService.hide(250) : undefined
    );
  }
}
