import { Component, OnInit, HostListener, Input } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public scrolled: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.getSmoothScroll();
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
          scrollTop: $("#about").offset().top,
        },
        800,
        () => {
          window.location.hash = "#about";
        }
      );
    });

    //Allow scroll animation interruption
    $root.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function (e) {
      if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel" || e.type === "touchstart") {
        $root.stop();
      }
    });
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {
    const yAxis = window.scrollY;
    if (yAxis >= 80) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}
