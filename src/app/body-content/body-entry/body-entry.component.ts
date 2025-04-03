import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-body-entry',
  imports: [DatePipe],
  templateUrl: './body-entry.component.html',
  styleUrl: './body-entry.component.scss',
})
export class BodyEntryComponent {
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
      console.log(this.title + ' has left');
      return true;
    }
    console.log(this.title + ' has right');
    return false;
  }

  get imagePath() {
    return this.img;
  }
}
