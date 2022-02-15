import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUserHeaderComponent } from './shared-user-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    SharedUserHeaderComponent,
  ],
  imports: [

    IonicModule,
  ],
  exports: [SharedUserHeaderComponent,]
})
export class SharedUserHeaderModule { }
