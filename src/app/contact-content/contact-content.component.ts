import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-content',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.scss',
})
export class ContactContentComponent {
  #formBuilder = inject(FormBuilder);

  form = this.#formBuilder.group({
    email: 'zeynepo@a-t-g.com',
    from_email: '',
    from_name: '',
    message: '',
  });

  async submitForm() {
    emailjs.init('n37SD3FTj1G7MuaNx');
    await emailjs.send('service_7qzowtf', 'template_o0sq1rc', {
      email: this.form.value.email,
      from_email: this.form.value.from_email,
      from_name: this.form.value.from_name,
      message: this.form.value.message,
    });

    this.form.reset();
  }
}
