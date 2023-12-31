import { Component, OnInit } from '@angular/core';
import { FetchProjectsService } from 'src/app/core/services/fetchProject/fetch-projects.service';
import { ScrollService } from 'src/app/core/services/scroll/scroll.service';
import { ScrollingEffectService } from 'src/app/core/services/scrollingEffect/scrolling-effect.service';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [CommonModule]

})
export class HomeComponent implements OnInit {
  projects!: any[];
  hoveredIndex: number|null = null;

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

  changeColor(index:number){
    this.hoveredIndex = index;
  }
}
