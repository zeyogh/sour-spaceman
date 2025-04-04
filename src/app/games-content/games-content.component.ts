import { Component } from '@angular/core';
import { DUMMY_GAMES } from './dummy_games';
import { GamesEntryComponent } from './games-entry/games-entry.component';

@Component({
  selector: 'app-games-content',
  imports: [GamesEntryComponent],
  templateUrl: './games-content.component.html',
  styleUrl: './games-content.component.scss',
})
export class GamesContentComponent {
  games = DUMMY_GAMES;
}
