import { Component, ElementRef, inject, input, viewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-entry',
  imports: [DatePipe],
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.scss',
})
export class BlogEntryComponent {
  #el = inject(ElementRef);
  #router = inject(Router);

  id = input.required<string>();
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

  goToPage() {
    this.#router.navigate(['/blog/post'], {
      queryParams: { id: this.id() },
      queryParamsHandling: 'merge',
    });
  }
}
