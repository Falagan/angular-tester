import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {WebsocketrxjsService} from './services/websocketrxjs/websocketrxjs.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-websocket-rxjs',
  templateUrl: './websocket-rxjs.component.html',
  styleUrls: ['./websocket-rxjs.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebsocketRxjsComponent implements OnInit, OnDestroy {

  public logs = [];

  constructor(private _webSocketRxJsService: WebsocketrxjsService, private cdr: ChangeDetectorRef) {
    this._webSocketRxJsService.create('ws://172.16.43.59:8080/bookingService/tareas?id=5604');
  }

  ngOnInit() {
    this._webSocketRxJsService.bind().subscribe(
        next => {
          this.logs.push(next);
          this.cdr.detectChanges();
        }
    );
  }

  ngOnDestroy() {
    this._webSocketRxJsService.unBind();
  }

}
