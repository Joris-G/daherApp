import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { ToolRequestsPageRoutingModule } from './tool-requests-routing.module';

import { ToolRequestsPage } from './tool-requests.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolRequestsPageRoutingModule,
    SharedUserHeaderModule,
    MatTableModule,
    MatExpansionModule,
  ],
  declarations: [ToolRequestsPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
})
export class ToolRequestsPageModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
