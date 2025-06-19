import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-entry',
  imports: [DatePipe],
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.scss',
})
export class BlogEntryComponent {
  #el = inject(ElementRef);

  title = input.required<string>();
  textContent = input.required<string>();
  img = input.required<string>();
  signoff = input.required<string>();
  date = input.required<string>();

  blogContainer = viewChild<ElementRef>('blogContainer');

  keepLeft(): boolean {
    if (this.#el.nativeElement.classList.contains('imageOnLeft')) {
      return true;
    }
    return false;
  }

  get imagePath() {
    return this.img;
  }
}
