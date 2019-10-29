import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TrelloBoardsComponent } from './components/trello-boards/trello-boards.component';
import { TrelloCardsComponent } from './components/trello-cards/trello-cards.component';
import { RouterModule } from '@angular/router';
import { ReporterRoutingModule } from './reporter-routing.module';
import { ReporterComponent } from './reporter.component';
import { BootstrapCustomModule } from 'libraryTester/ui';
import { BoardsComponent } from './components/trello-boards/boards/boards.component';

@NgModule({
  declarations: [ReporterComponent,TrelloBoardsComponent, TrelloCardsComponent, BoardsComponent],
  imports: [
    CommonModule,
    ReporterRoutingModule,
    FontAwesomeModule,
    RouterModule,
    BootstrapCustomModule
  ],
  exports:[ReporterComponent,TrelloBoardsComponent, TrelloCardsComponent]
})
export class ReporterModule { }
