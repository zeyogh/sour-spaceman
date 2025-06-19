import { Component } from '@angular/core';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { DUMMY_POSTS } from './dummy_posts';

@Component({
  selector: 'app-blog-content',
  imports: [BlogEntryComponent],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.scss',
})
export class BlogContentComponent {
  posts = DUMMY_POSTS;
  counter = 0;

  countUp() {
    this.counter++;
    return this.counter;
  }
}
