import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUserHeaderComponent } from './shared-user-header.component';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [
    SharedUserHeaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
  ],
  exports: [SharedUserHeaderComponent]
})
export class SharedUserHeaderModule { }
