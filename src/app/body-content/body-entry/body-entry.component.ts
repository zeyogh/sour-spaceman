import { Component, Input } from '@angular/core';
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

  get imagePath() {
    return this.img;
  }
}
