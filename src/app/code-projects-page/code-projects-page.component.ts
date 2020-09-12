import { Component, OnInit } from "@angular/core";
import { Project } from "../models/projects/project";
import { ListOfCodeProjects } from "../models/projects/code-projects";
@Component({
  selector: "app-code-projects-page",
  templateUrl: "./code-projects-page.component.html",
  styleUrls: ["./code-projects-page.component.scss"],
})
export class CodeProjectsPageComponent implements OnInit {
  constructor() {}
  public codeProjects: Project[] = ListOfCodeProjects;

  ngOnInit(): void {}
}
