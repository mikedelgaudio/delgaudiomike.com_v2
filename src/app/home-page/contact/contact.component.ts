import { ElementRef } from "@angular/core";
import { ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { SocialMedia, ListOfSocialMedia } from "src/app/models/social-media";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  @ViewChild("contact_container") section: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  public socialMedias: SocialMedia[] = ListOfSocialMedia;

  public action(event: any) {
    if (event === "VISIBLE") {
      this.section.nativeElement.classList.remove("hidden");
      this.section.nativeElement.classList.add("slide-up");
    }
  }
}
