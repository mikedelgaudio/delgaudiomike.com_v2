import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  public menuShow: boolean = false;

  constructor() {}

  toggleMenu(location?: string): void {
    if (location) {
      this.menuShow = false;
    } else {
      this.menuShow = !this.menuShow;
    }
  }
}
