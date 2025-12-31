import { Component, input, OnInit } from '@angular/core';

interface CardTitles {
  title: string;
  subtitle?: string;
}

@Component({
  standalone: true,
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
  imports: [
    ]
})
export class CardComponent  implements OnInit {
  public titles = input<CardTitles>();
  constructor() { }

  ngOnInit() {}

}
