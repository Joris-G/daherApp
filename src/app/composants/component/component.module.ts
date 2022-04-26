import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';
import { UserSheetModule } from '../user-sheet/user-sheet.module';
import { IndicatorGraphComponentModule } from '../indicators/indicator-graph/indicator-graph.module';
import { IndicatorNumberComponentModule } from '../indicators/indicator-number/indicator-number.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UserSheetModule,
    IndicatorGraphComponentModule,
    IndicatorNumberComponentModule
  ],
  exports: [
    UserSheetComponent,
    IndicatorGraphComponentModule,
    IndicatorNumberComponentModule
  ]
})
export class ComponentModule { }
