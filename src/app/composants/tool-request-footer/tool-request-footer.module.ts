import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolRequestFooterComponent } from './tool-request-footer.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    ToolRequestFooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ToolRequestFooterComponent
  ]
})
export class ToolRequestFooterModule { }
