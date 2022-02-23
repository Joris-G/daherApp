import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminMoldingPageRoutingModule } from './admin-molding-routing.module';

import { AdminMoldingPage } from './admin-molding.page';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminMoldingPageRoutingModule,
    MatTableModule,
  ],
  declarations: [AdminMoldingPage]
})
export class AdminMoldingPageModule { }
