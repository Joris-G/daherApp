import { Component, inject } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { SharedUserHeaderComponent } from '../../shared/components/shared-user-header/shared-user-header.component';
import { IonicModule } from '@ionic/angular';
import { ToolRequestMenuComponent } from '../components/tool-request-menu/tool-request-menu.component';

@Component({
    selector: 'app-tooling',
    templateUrl: './tooling.page.html',
    styleUrls: ['./tooling.page.scss'],
    standalone: true,
    imports: [
        SharedUserHeaderComponent,
        IonicModule,
        ToolRequestMenuComponent,
    ],
})
export class ToolingPage {
  private titleService = inject(TitleService);
  ionViewWillEnter() {
    this.titleService.setTitle('MODULE OUTILLAGE');
  }
}
