import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SboComponent } from './sbo.component';



@NgModule({
  declarations: [SboComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    SboComponent
  ]
})
export class SboModule { }
