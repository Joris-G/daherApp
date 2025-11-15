import { Component, inject } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-tooling',
  templateUrl: './tooling.page.html',
  styleUrls: ['./tooling.page.scss'],
})
export class ToolingPage {
  private titleService = inject(TitleService);
  ionViewWillEnter() {
    this.titleService.setTitle('MODULE OUTILLAGE');
  }
}
