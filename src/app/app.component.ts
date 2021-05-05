import { Component, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
declare var $: any;
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

  /* SMOOTH SCROLLING */

  get getSmoothScroll() {
    return this.smoothScroll.bind(this);
  }
  public smoothScroll() {
    const $root = $("html, body");

    $(".scroller").click(() => {
      $root.animate(
        {
          scrollTop: $("#page-top").offset().top,
        },
        800,
        () => {
          window.location.hash = "#page-top";
        }
      );
    });

    $("a").on("click", function (e) {
      if (this.hash !== "") {
        e.preventDefault();
        // Store hash
        const hash = this.hash;

        $root.animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          () => {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      }
    });

    //Allow scroll animation interruption
    $root.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function (e) {
      if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart") {
        $root.stop();
      }
    });
  }
}
