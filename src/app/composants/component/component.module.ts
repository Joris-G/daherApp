import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';
import { IndicatorGraphComponentModule } from '../indicators/indicator-graph/indicator-graph.module';
import { IndicatorNumberComponentModule } from '../indicators/indicator-number/indicator-number.module';
import { IonicModule } from '@ionic/angular';
import { DirectiveModule } from 'src/app/_directives/directive.module';
import { SharedUserHeaderComponent } from '../shared-user-header/shared-user-header.component';

@NgModule({
  declarations: [
    UserSheetComponent,
    SharedUserHeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    IndicatorGraphComponentModule,
    IndicatorNumberComponentModule,
    DirectiveModule,

  ],
  exports: [
    IndicatorGraphComponentModule,
    IndicatorNumberComponentModule,
    UserSheetComponent,
    SharedUserHeaderComponent,
  ],
  providers: []
})
export class ComponentModule { }
