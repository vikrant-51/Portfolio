import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true
})
export class HeaderComponent{
  tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  assetUrl: SafeResourceUrl;
  constructor(private scrollService: ScrollService, private sanitizer: DomSanitizer) {
    this.assetUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/Resume/Vikrant.pdf');
  }
  ngOnInit(): void {
  }
  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }


}
