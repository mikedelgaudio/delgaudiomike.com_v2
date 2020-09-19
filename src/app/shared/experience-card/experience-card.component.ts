import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-experience-card",
  templateUrl: "./experience-card.component.html",
  styleUrls: ["./experience-card.component.scss"],
})
export class ExperienceCardComponent implements OnInit {
  @Input("heading") heading: string;
  @Input("description") description: string;
  @Input("asset") asset: string;
  @Input("assetAlt") assetAlt: string;
  @Input("bgColor") bgColor: string;
  @Input("textColor") textColor: string;
  @Input("startDate") startDate: string;
  @Input("endDate") endDate: string;
  @Input("location") location: string;
  @Input("jobTitle") jobTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
