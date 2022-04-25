import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserSheetComponent } from './user-sheet.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,],
  declarations: [UserSheetComponent],
  exports: [UserSheetComponent]
})
export class UserSheetModule { }
