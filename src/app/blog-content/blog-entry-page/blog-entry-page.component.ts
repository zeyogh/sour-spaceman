import { Component, inject } from '@angular/core';
import { DUMMY_POSTS } from '../dummy_posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-entry-page',
  imports: [],
  templateUrl: './blog-entry-page.component.html',
  styleUrl: './blog-entry-page.component.scss',
})
export class BlogEntryPageComponent {
  #route = inject(ActivatedRoute);

  posts = DUMMY_POSTS;
  title = '';
  img = '';
  textContent = '';

  constructor() {
    const snapShot = this.#route.snapshot.queryParamMap;
    const id = snapShot.get('id');
    const post = this.posts.find((post) => post.id === id);
    this.title = post?.title!;
    this.img = post?.img!;
    this.textContent = post?.textContent!;
  }
}
