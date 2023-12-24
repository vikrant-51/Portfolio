import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }
  scrollToSection(sectionID: string) {
    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



}
