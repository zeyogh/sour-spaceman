import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactForm } from './contact-content.model';

@Component({
  selector: 'app-contact-content',
  imports: [FormsModule],
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.scss',
})
export class ContactContentComponent {
  form: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  send() {
    // emailjs.send();
  }
}
