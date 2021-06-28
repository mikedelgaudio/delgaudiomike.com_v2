import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { ListOfCodeProjects } from "src/app/models/projects/code-projects";
import { Project } from "src/app/models/projects/project";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  @ViewChild("work_container") section: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  public codeProjects: Project[] = ListOfCodeProjects;

  public action(event: any) {
    if (event === "VISIBLE") {
      this.section.nativeElement.classList.remove("hidden");
      this.section.nativeElement.classList.add("fade-in");
    }
  }
}
