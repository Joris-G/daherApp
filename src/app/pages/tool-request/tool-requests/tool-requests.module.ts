import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';

import { ToolRequestsPageRoutingModule } from './tool-requests-routing.module';

import { ToolRequestsPage } from './tool-requests.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolRequestsPageRoutingModule,
    SharedUserHeaderModule,
    MatTableModule,
  ],
  declarations: [ToolRequestsPage]
})
export class ToolRequestsPageModule { }
