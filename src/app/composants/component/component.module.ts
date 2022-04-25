import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';
import { UserSheetModule } from '../user-sheet/user-sheet.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    UserSheetModule
  ],
  exports: [
    UserSheetComponent
  ]
})
export class ComponentModule { }
