import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorNumberComponent } from './indicator-number.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [IndicatorNumberComponent],
  exports: [IndicatorNumberComponent]
})
export class IndicatorNumberComponentModule {}
