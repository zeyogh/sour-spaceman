import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-games-entry',
  imports: [YouTubePlayer],
  templateUrl: './games-entry.component.html',
  styleUrl: './games-entry.component.scss',
})
export class GamesEntryComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) logo!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) video!: string;
}
