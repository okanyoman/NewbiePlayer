import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GameListComponent } from './game-list/game-list.component';

const routes: Routes = [
  { path: 'game-list', component: GameListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class GamesRoutingModule { }
