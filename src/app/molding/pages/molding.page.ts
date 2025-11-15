import { Component } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { SharedUserHeaderComponent } from '../../shared/components/shared-user-header/shared-user-header.component';
import { IonicModule } from '@ionic/angular';
import { MoldingMenuComponent } from '../components/molding-menu/molding-menu.component';

@Component({
    selector: 'app-molding',
    templateUrl: './molding.page.html',
    styleUrls: ['./molding.page.scss'],
    standalone: true,
    imports: [
        SharedUserHeaderComponent,
        IonicModule,
        MoldingMenuComponent,
    ],
})
export class MoldingPage {
  constructor(private titleService: TitleService) { }
  ionViewWillEnter() {
    this.titleService.setTitle('MODULE MOULAGE');
  }
}
