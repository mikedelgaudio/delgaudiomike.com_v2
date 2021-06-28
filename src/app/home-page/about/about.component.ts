import { ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ListOfSkills, Skill } from "../../models/skill";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @ViewChild("about_container") section: ElementRef;
  @ViewChild("scroller") scroller: ElementRef;

  constructor() {}

  public skills: Skill[] = ListOfSkills;

  ngOnInit(): void {}

  public action(event: any) {
    if (event === "VISIBLE") {
      this.section.nativeElement.classList.remove("hidden");
      this.section.nativeElement.classList.add("slide-up");
      this.scroller.nativeElement.classList.add("fade-out");
    }
  }
}
