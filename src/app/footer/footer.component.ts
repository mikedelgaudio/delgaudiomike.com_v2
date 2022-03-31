import { Component, OnInit } from '@angular/core';
import { SocialMedia, ListOfSocialMedia } from 'src/app/models/social-media';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor() {}

  public socialMedias: SocialMedia[] = ListOfSocialMedia;
  public currentYear: number = new Date().getFullYear();
}
