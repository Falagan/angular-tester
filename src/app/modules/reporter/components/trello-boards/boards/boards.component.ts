import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter } from '@angular/core';
import IBoard from '../../../services/api-trello/boards/IBoard';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardsComponent implements OnInit {

  @Input() boards: IBoard[];
  @Input() event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
