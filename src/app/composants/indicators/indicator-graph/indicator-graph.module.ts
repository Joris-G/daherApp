import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndicatorGraphComponent } from './indicator-graph.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [IndicatorGraphComponent],
  exports: [IndicatorGraphComponent]
})
export class IndicatorGraphComponentModule {}
