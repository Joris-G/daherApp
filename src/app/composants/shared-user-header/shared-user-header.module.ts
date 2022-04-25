import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedUserHeaderComponent } from './shared-user-header.component';
import { IonicModule } from '@ionic/angular';
import { ComponentModule } from '../component/component.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SharedUserHeaderComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ComponentModule,
    FormsModule,
  ],
  exports: [SharedUserHeaderComponent]
})
export class SharedUserHeaderModule { }
