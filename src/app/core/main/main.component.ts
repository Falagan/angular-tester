import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BoardsService } from 'src/app/services/api-trello/boards.service';
import { Observable } from 'rxjs';
import IBoard from 'src/app/models/IBoard';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {

  constructor() { }


}
