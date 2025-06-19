import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-entry-page',
  imports: [],
  templateUrl: './blog-entry-page.component.html',
  styleUrl: './blog-entry-page.component.scss',
})
export class BlogEntryPageComponent {
  #route = inject(ActivatedRoute);

  title = '';
  img = '';

  constructor() {
    const snapShot = this.#route.snapshot.queryParamMap;
    this.title = snapShot.get('title') ?? '';
    this.img = snapShot.get('img') ?? '';
  }
}
