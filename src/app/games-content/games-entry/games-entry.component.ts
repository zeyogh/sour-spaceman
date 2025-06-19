import { Component, input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-games-entry',
  imports: [YouTubePlayer],
  templateUrl: './games-entry.component.html',
  styleUrl: './games-entry.component.scss',
})
export class GamesEntryComponent {
  title = input.required<string>();
  logo = input.required<string>();
  description = input.required<string>();
  video = input.required<string>();
}
