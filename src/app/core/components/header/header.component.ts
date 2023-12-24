import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true
})
export class HeaderComponent{
  tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  constructor(private scrollService: ScrollService) {
  }
  ngOnInit(): void {
  }
  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }


}
