import { NgModule } from '@angular/core';
import { PerempDirective } from '../directives/peremp.directive';

@NgModule({
  declarations: [
    PerempDirective
  ],
  exports:[
    PerempDirective,
  ]
})
export class MoldingDirectivesModule { }
