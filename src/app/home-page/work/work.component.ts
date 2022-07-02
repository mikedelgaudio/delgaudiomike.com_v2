import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ListOfCodeProjects } from 'src/app/models/projects/code-projects';
import { Project } from 'src/app/models/projects/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  @ViewChild('work_container') section: ElementRef;
  @ViewChild('work_container_projects') workContainerProjects: ElementRef;
  constructor(private renderer: Renderer2) {}

  public codeProjects: Project[] = ListOfCodeProjects;

  public action(event: any) {
    if (event === 'VISIBLE') {
      this.renderer.removeClass(this.section.nativeElement, 'hidden');
      this.renderer.addClass(this.section.nativeElement, 'fade-in');
      this.renderer.addClass(this.workContainerProjects.nativeElement, 'fade-in');
    }
  }
}
