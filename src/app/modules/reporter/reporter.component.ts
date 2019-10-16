import { Component, OnInit } from "@angular/core";
import { IBoard } from "src/app/services/api-trello/boards/IBoard";
import { BoardsService } from "src/app/services/api-trello/boards/boards.service";
import { ListsService } from "src/app/services/api-trello/lists/lists.service";
import IList from "src/app/services/api-trello/lists/IList";
import Constants from "src/assets/constants";

@Component({
  selector: "app-reporter",
  templateUrl: "./reporter.component.html",
  styleUrls: ["./reporter.component.sass"]
})
export class ReporterComponent implements OnInit {
  public boards: IBoard[];
  public boardsEvent;
  public lists: IList[];
  public asideMenuData = Constants.ASIDE_MENU_INIT_DATA;
  public asideMenuShow = false;

  constructor(
    private _boardsService: BoardsService,
    private _listsService: ListsService
  ) {}

  ngOnInit() {
    this._boardsService.get().subscribe(next => (this.boards = next));
  }

  public openCloseAsideMenu(event) {
    this.asideMenuShow = !this.asideMenuShow;
  }

  // getLists(boardId) {
  //   this._listsService
  //     .getByBoard(boardId)
  //     .subscribe(next => (this.lists = next));
  // }
}
