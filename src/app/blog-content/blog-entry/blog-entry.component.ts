import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-entry',
  imports: [DatePipe],
  templateUrl: './blog-entry.component.html',
  styleUrl: './blog-entry.component.scss',
})
export class BlogEntryComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) textContent!: string;
  @Input({ required: true }) img!: string;
  @Input({ required: true }) signoff!: string;
  @Input({ required: true }) date!: string;

  @ViewChild('myElementRef') myElementRef!: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const nativeElement = this.el.nativeElement;
    console.log(nativeElement.classList);
  }

  keepLeft(): boolean {
    if (this.el.nativeElement.classList.contains('imageOnLeft')) {
      return true;
    }
    return false;
  }

  get imagePath() {
    return this.img;
  }
}
