import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/services/api-trello/boards.service';
import { Observable } from 'rxjs';
import IBoard from 'src/app/models/IBoard';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  private boards: Observable<IBoard>[];

  constructor(private _boardsService: BoardsService) { }

  ngOnInit() {

    this._boardsService.get().subscribe(
      next => console.log(next)
    );

  }

}
