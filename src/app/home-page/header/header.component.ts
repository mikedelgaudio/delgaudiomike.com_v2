import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input("smoothScroll") smoothScroll : Function;


  public scrolled : boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.smoothScroll();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event){
    const yAxis = window.scrollY;
    if(yAxis >= 80){
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

}
