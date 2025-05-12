import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ScreenBorderComponent } from './screen-border/screen-border.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, ScreenBorderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sour-spaceman-app';

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
