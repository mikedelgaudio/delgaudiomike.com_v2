import { Component, OnInit } from "@angular/core";
import { GoogleAnalyticsService } from "../../google-analytics/google-analytics.service";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.scss"],
})
export class WorkComponent implements OnInit {
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit(): void {}

  sendClickEvent(sectionName: string) {
    this.googleAnalyticsService.eventEmitter("page_click", "work", sectionName, "click", 10);
  }
}
