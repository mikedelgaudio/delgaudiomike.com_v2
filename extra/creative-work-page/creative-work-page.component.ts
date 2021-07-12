import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-creative-work-page",
  templateUrl: "./creative-work-page.component.html",
  styleUrls: ["./creative-work-page.component.scss"],
})
export class CreativeWorkPageComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle("Creative Work - Mike DelGaudio");
  }
}
