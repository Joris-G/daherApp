import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorsPageRoutingModule } from './indicators-routing.module';

import { IndicatorsPage } from './indicators.page';
import { ComponentModule } from 'src/app/composants/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndicatorsPageRoutingModule,
    ComponentModule,
  ],
  declarations: [IndicatorsPage]
})
export class IndicatorsPageModule { }
