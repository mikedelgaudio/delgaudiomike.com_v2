import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  @Input("smoothScroll") smoothScroll: Function;
  public menuShow: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.smoothScroll();
  }

  toggleMenu(): void {
    this.menuShow = !this.menuShow;
  }
}
