import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorsPageRoutingModule } from './indicators-routing.module';

import { IndicatorsPage } from './indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorsPageRoutingModule
  ],
  declarations: [IndicatorsPage]
})
export class IndicatorsPageModule {}
