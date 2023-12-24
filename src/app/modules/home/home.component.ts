import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';
import { ScrollingEffectService } from 'src/app/core/services/scrollingEffect/scrolling-effect.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true
})
export class HomeComponent implements OnInit {

  constructor(private scrollingEffect: ScrollingEffectService, private scrollService: ScrollService) {
  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.scrollingEffect.reveal);

    //Flash Light
    // shadowTransform: string = 'translate(0px, 0px)';
    // @HostListener('document:mousemove', ['$event'])
    // onMouseMove(event: MouseEvent) {
    //   const x = event.clientX - (document.documentElement.clientWidth * 1.5);
    //   const y = event.clientY - (document.documentElement.clientHeight * 1.5);
    //   this.shadowTransform = `translate(${x}px, ${y}px)`;
    // }

  }
  scrollToSection(sectionID: string){
    this.scrollService.scrollToSection(sectionID);
  }
}
