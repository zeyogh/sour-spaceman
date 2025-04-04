import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import { HeaderButtonComponent } from '../../header/header-button/header-button.component';

@Component({
  selector: 'app-games-entry',
  imports: [YouTubePlayer, HeaderButtonComponent],
  templateUrl: './games-entry.component.html',
  styleUrl: './games-entry.component.scss',
})
export class GamesEntryComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) logo!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) video!: string;
}
