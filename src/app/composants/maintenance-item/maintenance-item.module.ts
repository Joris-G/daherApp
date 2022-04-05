import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaintenanceItemComponent } from './maintenance-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  declarations: [MaintenanceItemComponent],
  exports: [MaintenanceItemComponent]
})
export class MaintenanceItemComponentModule { }
