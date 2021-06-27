import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit {
  @Input("heading") heading: string;
  @Input("description") description: string;
  @Input("asset") asset: string;
  @Input("assetAlt") assetAlt: string;
  @Input("srcUrl") srcUrl: string;
  @Input("demoUrl") demoUrl: string;
  constructor() {}

  ngOnInit(): void {}
}
