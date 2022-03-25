import { ElementRef, Renderer2 } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SocialMedia, ListOfSocialMedia } from 'src/app/models/social-media';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @ViewChild('contact_container') section: ElementRef;
  @ViewChild('contact_container_links') contactContainerLinks: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  public socialMedias: SocialMedia[] = ListOfSocialMedia;

  public action(event: any) {
    if (event === 'VISIBLE') {
      this.renderer.removeClass(this.section.nativeElement, 'hidden');
      this.renderer.addClass(this.section.nativeElement, 'fade-in');
      this.renderer.addClass(this.contactContainerLinks.nativeElement, 'fade-in');
    }
  }
}
