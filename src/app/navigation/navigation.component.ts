import { Component, OnInit, Input } from "@angular/core";
declare var $: any;

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
	@Input("smoothScroll") smoothScroll: Function;

	constructor() {}

	ngOnInit(): void {
		this.smoothScroll();
	}
}
