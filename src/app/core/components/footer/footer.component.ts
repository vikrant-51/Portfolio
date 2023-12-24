import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class FooterComponent {

  isVisible: boolean = false;
  to!: string;
  sendMail = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  constructor(private emailService: EmailService) { }

  get name() {
    return this.sendMail.get('name');
  }

  get email() {
    return this.sendMail.get('email');
  }

  get message() {
    return this.sendMail.get('message');
  }

  onSubmit() {
    const nameValue = this.name!.value;
    const emailValue = this.email!.value;

    if (!nameValue || !emailValue) {
      console.error("Name and email are required.");
      return;
    }

    const emailData = {
      name: nameValue,
      email: emailValue,
      message: `Hello, this is a test email.`
    };

    const result = this.emailService.sendEmail(emailData);
    this.to = result.To;
    this.displaySuccessMessage();
    console.log(result);

  }

  displaySuccessMessage() {
    this.isVisible = true;
    // Automatically hide the success message after 3 seconds
    setTimeout(() => {
      this.isVisible = false;
      this.sendMail.reset();
    }, 3000);
  }

}

