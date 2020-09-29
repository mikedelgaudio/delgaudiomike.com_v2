import { Component, OnInit } from "@angular/core";
import { Project } from "src/app/models/projects/project";
import { ListOfWorkExperience } from "src/app/models/experience/work-experience";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-work-experience-page",
  templateUrl: "./work-experience-page.component.html",
  styleUrls: ["./work-experience-page.component.scss"],
})
export class WorkExperiencePageComponent implements OnInit {
  public workExperiences: Project[] = ListOfWorkExperience;
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Work Experience - Mike DelGaudio");
  }
}
