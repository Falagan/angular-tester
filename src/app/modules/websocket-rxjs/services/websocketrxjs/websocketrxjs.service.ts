import {Injectable} from "@angular/core";
import {webSocket} from 'rxjs/webSocket';
import {delay, retryWhen, tap} from "rxjs/operators";
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class WebsocketrxjsService {

  private socket$: Subject<any>;
  private socketData$: ReplaySubject<any>;

  constructor() {
    this.socketData$ = new ReplaySubject<any>(10);
  }

  public create(url) {
    this.socket$ = webSocket(url);
    console.log("Websocket creado.");
    console.log("Subscrito a eventos do socket.");

    this.socket$.pipe(
        retryWhen(errors => errors.pipe(
            tap(err => {
              console.log('Error webSocket', err)
            }),
            delay(60000)
        ))
    ).subscribe(
        msg => {
          console.log('Mensaje recibido: ' + JSON.stringify(msg));
          this.socketData$.next(JSON.stringify(msg));
        },
        err => console.log('Error: ', err),
        () => console.log('Completado')
    );
  }

  public bind() {
    return this.socketData$.asObservable();
  }

  public unBind(){
    this.socket$.unsubscribe();
    this.socketData$.unsubscribe();
  }


}
