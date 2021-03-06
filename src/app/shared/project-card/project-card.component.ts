import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-card",
  templateUrl: "./project-card.component.html",
  styleUrls: ["./project-card.component.scss"],
})
export class ProjectCardComponent implements OnInit {
  @Input("heading") heading: string;
  @Input("description") description: string;
  @Input("asset") asset: string;
  @Input("assetAlt") assetAlt: string;
  @Input("srcUrl") srcUrl: string;
  @Input("bgColor") bgColor: string;
  @Input("textColor") textColor: string;
  @Input("borderColor") borderColor: string;
  @Input("demoUrl") demoUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
