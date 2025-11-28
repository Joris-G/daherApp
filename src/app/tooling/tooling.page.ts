import { Component, inject } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { SharedUserHeaderComponent } from '../shared/components/shared-user-header/shared-user-header.component';
import { ToolRequestMenuComponent } from './components/tool-request-menu/tool-request-menu.component';
import { IonContent, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
    selector: 'app-tooling',
    templateUrl: './tooling.page.html',
    styleUrls: ['./tooling.page.scss'],
    standalone: true,
    imports: [
      IonContent,
      IonRouterOutlet,
      SharedUserHeaderComponent,
        ToolRequestMenuComponent,
    ],
})
export class ToolingPage {
  private titleService = inject(TitleService);
  ionViewWillEnter() {
    this.titleService.setTitle('MODULE OUTILLAGE');
  }
}
