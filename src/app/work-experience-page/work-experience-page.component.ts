import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/models/projects/project";
import { ListOfWorkExperience } from "src/app/models/projects/work-experience";

@Component({
  selector: "app-work-experience-page",
  templateUrl: "./work-experience-page.component.html",
  styleUrls: ["./work-experience-page.component.scss"],
})
export class WorkExperiencePageComponent implements OnInit {
  constructor() {}
  public workExperiences: Project[] = ListOfWorkExperience;
  ngOnInit(): void {}
}
