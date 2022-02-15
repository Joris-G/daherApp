import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';

import { PrintMoldingSheetPageRoutingModule } from './print-molding-sheet-routing.module';

import { PrintMoldingSheetPage } from './print-molding-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintMoldingSheetPageRoutingModule,
    MatDividerModule,
    MatTableModule,
  ],
  declarations: [PrintMoldingSheetPage]
})
export class PrintMoldingSheetPageModule { }
