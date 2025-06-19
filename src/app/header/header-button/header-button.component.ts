import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-button',
  imports: [RouterLink],
  templateUrl: './header-button.component.html',
  styleUrl: './header-button.component.scss',
})
export class HeaderButtonComponent {
  label = input.required<string>();
  link = input.required<string>();
}
