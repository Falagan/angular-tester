import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-websocket-console',
  templateUrl: './websocket-console.component.html',
  styleUrls: ['./websocket-console.component.sass']
})
export class WebsocketConsoleComponent implements OnInit {

  @Input() websocketResponse;

  constructor() { }

  ngOnInit() {}

}
