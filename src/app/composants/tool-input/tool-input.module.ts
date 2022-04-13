import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolInputComponent } from './tool-input.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ToolInputComponent
  ],
  imports: [
    CommonModule, IonicModule
  ],
  exports: [
    ToolInputComponent
  ]
})
export class ToolInputModule { }
