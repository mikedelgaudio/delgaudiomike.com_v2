import { Component, OnInit } from "@angular/core";
import { ListOfCodeProjects } from "src/app/models/projects/code-projects";
import { Project } from "src/app/models/projects/project";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public codeProjects: Project[] = ListOfCodeProjects;
}
