import { Component, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
declare let gtag: Function;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag("config", "UA-119776312-1", {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
