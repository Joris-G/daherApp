import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

interface CardTitles {
  title: string;
  subtitle?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:true,
  imports:[
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardSubtitle,
        IonCardContent,
  ]
})
export class CardComponent  implements OnInit {
  public titles = input<CardTitles>();
  constructor() { }

  ngOnInit() {}

}
