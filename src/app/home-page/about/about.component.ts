import { ElementRef, Renderer2, ViewChild } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ListOfSkills, Skill } from "../../models/skill";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  @ViewChild("container") el: ElementRef;

  constructor() {}

  public skills: Skill[] = ListOfSkills;

  ngOnInit(): void {}

  public _visibilityChangeHandler(event: any) {
    if (event === "VISIBLE") {
      this.el.nativeElement.classList.remove("hidden");
      this.el.nativeElement.classList.add("slide-up");
    }
  }
}
