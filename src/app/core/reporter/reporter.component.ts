import { Component, OnInit } from '@angular/core';
import { IBoard } from 'src/app/models/IBoard';
import { BoardsService } from 'src/app/services/api-trello/boards.service';
import { ListsService } from 'src/app/services/api-trello/lists.service';
import IList from 'src/app/models/ICard copy';

@Component({
  selector: 'app-reporter',
  templateUrl: './reporter.component.html',
  styleUrls: ['./reporter.component.sass']
})
export class ReporterComponent implements OnInit {

  public boards: IBoard[];
  public lists: IList[];

  constructor(
    private _boardsService: BoardsService,
    private _listsService: ListsService) { }

  ngOnInit() {

    this._boardsService.get().subscribe(
      (next) => {this.boards = next;
        console.log(this.boards);}
    );
  }

  getLists(boardId){
    this._listsService.getByBoard(boardId).subscribe(
      next => this.lists = next
    )
  }

}
