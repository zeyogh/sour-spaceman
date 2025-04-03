import { Component, Input } from '@angular/core';
import { BodyEntryComponent } from './body-entry/body-entry.component';
import { DUMMY_POSTS } from './dummy_posts';

@Component({
  selector: 'app-body-content',
  imports: [BodyEntryComponent],
  templateUrl: './body-content.component.html',
  styleUrl: './body-content.component.scss',
})
export class BodyContentComponent {
  posts = DUMMY_POSTS;
  counter = 0;

  countUp() {
    this.counter++;
    return this.counter;
  }
}
