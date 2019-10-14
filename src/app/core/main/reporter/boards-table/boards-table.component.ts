import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-boards-table',
  templateUrl: './boards-table.component.html',
  styleUrls: ['./boards-table.component.sass']
})
export class BoardsTableComponent implements OnInit {

  @Input() boards;
  @Output() event = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

}
