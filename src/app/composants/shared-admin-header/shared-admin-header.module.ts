import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedAdminHeaderComponent } from './shared-admin-header.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,],
  declarations: [SharedAdminHeaderComponent],
  exports: [SharedAdminHeaderComponent]
})
export class SharedAdminHeaderModule { }
