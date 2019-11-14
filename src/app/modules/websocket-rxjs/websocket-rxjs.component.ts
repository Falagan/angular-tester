import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {WebsocketrxjsService} from './services/websocketrxjs/websocketrxjs.service';

@Component({
  selector: 'app-websocket-rxjs',
  templateUrl: './websocket-rxjs.component.html',
  styleUrls: ['./websocket-rxjs.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebsocketRxjsComponent implements OnInit, OnDestroy {

  public logs = [];

  constructor(private _webSocketRxJsService: WebsocketrxjsService, private cdr: ChangeDetectorRef) {
    this._webSocketRxJsService.create(' ws://demos.kaazing.com/echo');
  }

  ngOnInit() {
    this._webSocketRxJsService.bind().subscribe(
        next => {
          this.logs.push(next);
          this.cdr.detectChanges();
        }
    );

    let a = 0;

    setInterval(()=>{
      a++;
      this._webSocketRxJsService.send('Texto enviado y recibido numero: ' + a)
    }, 5000)
  }

  ngOnDestroy() {
    this._webSocketRxJsService.unBind();
  }

}
