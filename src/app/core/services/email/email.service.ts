import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
interface emailData{
  name: string,
  email: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  private emailUrl = 'vikrantpathania59@gmail.com';
  constructor(private http: HttpClient){}
  sendEmail(emailData: emailData){
    const data = {
      name: emailData.name,
      email: emailData.email,
      message: emailData.message
    };

    const resultBack = {
      To: this.emailUrl,
      From: data.email,
      Name: data.name,
      Message: data.message
    }
    return resultBack;
  }
}
