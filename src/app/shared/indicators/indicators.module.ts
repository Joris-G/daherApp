import { NgModule } from '@angular/core';
import { IndicatorNumberComponent } from './indicator-number/indicator-number.component';
import { IndicatorGraphComponent } from './indicator-graph/indicator-graph.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    IndicatorNumberComponent,
    IndicatorGraphComponent,
  ],
  exports: [
    IndicatorNumberComponent,
    IndicatorGraphComponent,
  ],
  imports: [
    IonicModule
  ]
})
export class IndicatorsModule { }
