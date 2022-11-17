import { Component } from '@angular/core';
import { TitleService } from 'src/app/core/services/title.service';

@Component({
  selector: 'app-tooling',
  templateUrl: './tooling.page.html',
  styleUrls: ['./tooling.page.scss'],
})
export class ToolingPage {
  constructor(private titleService: TitleService) { }
  ionViewWillEnter() {
    this.titleService.setTitle('MODULE OUTILLAGE');
  }
}
