import {
  Component,
  OnInit,
  ChangeDetectionStrategy
} from "@angular/core";
import IBoard from "../../services/api-trello/boards/IBoard";
import { Observable } from "rxjs";
import Constants from "src/assets/constants";
import { BoardsService } from "../../services/api-trello/boards/boards.service";

@Component({
  selector: "app-trello-boards",
  templateUrl: "./trello-boards.component.html",
  styleUrls: ["./trello-boards.component.sass"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrelloBoardsComponent implements OnInit {
  public boards$: Observable<IBoard[]>;
  public asideMenuData = Constants.ASIDE_MENU_INIT_DATA;

  constructor(private _boardsService: BoardsService) {}

  ngOnInit() {
    this.boards$ = this._boardsService.get();
  }
}
