import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  public menuShow: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(location?: string): void {
    if (location !== undefined) {
      this.menuShow = false;
    } else {
      this.menuShow = !this.menuShow;
    }
  }
}
