import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageTeamPageRoutingModule } from './manage-team-routing.module';

import { ManageTeamPage } from './manage-team.page';
import { MatTableModule } from '@angular/material/table';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageTeamPageRoutingModule,
    MatTableModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
  ],
  declarations: [ManageTeamPage]
})
export class ManageTeamPageModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
