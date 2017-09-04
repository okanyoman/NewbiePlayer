import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GamesRoutingModule } from './games/games-routing.module';

import { GameListComponent } from './games/game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    GamesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
