import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';
import { IndicatorGraphComponentModule } from '../indicators/indicator-graph/indicator-graph.module';
import { IndicatorNumberComponentModule } from '../indicators/indicator-number/indicator-number.module';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    UserSheetComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    IndicatorGraphComponentModule,
    IndicatorNumberComponentModule,
  ],
  exports: [
    IndicatorGraphComponentModule,
    IndicatorNumberComponentModule,
    UserSheetComponent,
  ],
  providers: [

  ]
})
export class ComponentModule { }
