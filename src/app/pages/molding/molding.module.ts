import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MoldingPageRoutingModule } from './molding-routing.module';

import { MoldingPage } from './molding.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoldingPageRoutingModule,
    SharedUserHeaderModule,
  ],
  declarations: [MoldingPage]
})
export class MoldingPageModule { }
