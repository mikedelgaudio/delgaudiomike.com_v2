import { Component, OnInit } from "@angular/core";
import { Project } from "../../src/app/models/projects/project";
import { ListOfCodeProjects } from "../../src/app/models/projects/code-projects";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-code-projects-page",
  templateUrl: "./code-projects-page.component.html",
  styleUrls: ["./code-projects-page.component.scss"],
})
export class CodeProjectsPageComponent implements OnInit {
  public codeProjects: Project[] = ListOfCodeProjects;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Code Projects - Mike DelGaudio");
  }
}
