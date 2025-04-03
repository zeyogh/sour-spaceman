import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-button',
  imports: [],
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.scss',
})
export class HeaderButtonComponent {
  @Input() label!: string;
}
