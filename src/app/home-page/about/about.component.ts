import { Component, OnInit } from "@angular/core";
import { ListOfSkills, Skill } from "../../models/skill";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor() {}

  public skills: Skill[] = ListOfSkills;

  ngOnInit(): void {}
}
