import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface emailData{
  name: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  private adminEmail = 'vikrantpathania59@gmail.com';
  constructor(private http: HttpClient){}
  sendEmail(emailData: emailData){
    const data = {
      name: emailData.name,
      message: emailData.message
    };
    const mailto = `mailto:${this.adminEmail}?subject=${encodeURIComponent(`${data.name} contacted via Portfolio`)}&body=${encodeURIComponent(data.message)}`;
    window.location.href = mailto;
    return mailto;
  }
}
