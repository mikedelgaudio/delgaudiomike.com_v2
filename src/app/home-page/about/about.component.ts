import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ListOfSkills, Skill } from '../../models/skill';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @ViewChild('about_container') section: ElementRef;
  @ViewChild('about_section_1') aboutSection1: ElementRef;
  @ViewChild('about_section_2') aboutSection2: ElementRef;
  // @ViewChild('about_section_3') aboutSection3: ElementRef;

  constructor(private renderer: Renderer2) {}

  public skills: Skill[] = ListOfSkills;

  public action(event: any) {
    if (event === 'VISIBLE') {
      this.renderer.removeClass(this.section.nativeElement, 'hidden');
      this.renderer.addClass(this.section.nativeElement, 'fade-in');
      this.renderer.addClass(this.aboutSection1.nativeElement, 'fade-in');
      this.renderer.addClass(this.aboutSection2.nativeElement, 'fade-in');
      // this.renderer.addClass(this.aboutSection3.nativeElement, 'fade-in');
    }
  }
}
