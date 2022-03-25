import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() heading: string;
  @Input() description: string;
  @Input() asset: string;
  @Input() assetAlt: string;
  @Input() demoUrl: string;
  @Input() typeOfWork: string;
  @Input() subDescription: string;
  constructor() {}
}
