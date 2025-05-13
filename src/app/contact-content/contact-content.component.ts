import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactForm } from './contact-content.model';

@Component({
  selector: 'app-contact-content',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.scss',
})
export class ContactContentComponent {
  formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: [''],
    email: [''],
    message: [''],
  });

  submitForm() {
    console.log(this.form.value);
  }
}
