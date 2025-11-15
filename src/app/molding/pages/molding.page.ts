import { Component } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage {
  constructor(private titleService: TitleService) { }
  ionViewWillEnter() {
    this.titleService.setTitle('MODULE MOULAGE');
  }
}
