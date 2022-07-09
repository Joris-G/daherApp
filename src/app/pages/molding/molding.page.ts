import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage {
  public page: any = {
    pageTitle: 'MODULE MOULAGE',
    contentId: 'molding-content'
  };
}
