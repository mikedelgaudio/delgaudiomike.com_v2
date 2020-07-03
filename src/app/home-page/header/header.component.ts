import { Component, OnInit, HostListener, Input } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
	public scrolled: boolean = false;
	constructor() {}

	ngOnInit(): void {}

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
