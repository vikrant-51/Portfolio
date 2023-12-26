import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';
import { ToastrService, ToastContainerDirective} from 'ngx-toastr';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class FooterComponent {
  mailtoLinkElement!: string;
  isVisible: boolean = false;
  to!: string;
  sendMail = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  constructor(private emailService: EmailService, private toastr: ToastrService) { }
  ngOnInit(): void {
    // this.toastr.overlayContainer = this.toastContainer;
  }
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
      message: `Hello, this is a test email.`
    };

    this.mailtoLinkElement = this.emailService.sendEmail(emailData);
    this.toastr.success('Email sent successfully!', 'Success');
    // console.log(this.emailService.sendEmail(emailData));

    this.sendMail.reset();
  }

}

