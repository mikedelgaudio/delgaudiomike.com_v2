import { Component, OnInit, HostListener } from "@angular/core";
import { ListOfSkills, Skill } from "../../models/skill";

declare var $: any;

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  public skills: Skill[] = ListOfSkills;
  public scrolled: boolean = false;

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {
    const yAxis = window.scrollY;
    if (yAxis >= 80) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  ngOnInit(): void {}
}
