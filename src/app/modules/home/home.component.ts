import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FetchProjectsService } from 'src/app/core/services/fetchProject/fetch-projects.service';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';
import { ScrollingEffectService } from 'src/app/core/services/scrollingEffect/scrolling-effect.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true
})
export class HomeComponent implements OnInit {
  projects!: any[];

  constructor(private scrollingEffect: ScrollingEffectService, private scrollService: ScrollService, private fetchProjects: FetchProjectsService) {
  }

  ngOnInit(): void {
    window.addEventListener("scroll", this.scrollingEffect.reveal);
    this.fetchProjects.getProjects().subscribe((data)=>{
      this.projects = data;
    });
  }
  scrollToSection(sectionID: string){
    this.scrollService.scrollToSection(sectionID);
  }
}
