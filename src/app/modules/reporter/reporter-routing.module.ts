import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporterComponent } from './reporter.component';
import { TrelloCardsComponent } from './components/trello-cards/trello-cards.component';
import { TrelloBoardsComponent } from './components/trello-boards/trello-boards.component';

const routes: Routes = [
  {
    path: '',
    component: ReporterComponent,
    children: [
      {
        path: '',
        component: TrelloBoardsComponent
      },
      {
        path: 'cards/:id',
        component: TrelloCardsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporterRoutingModule { }