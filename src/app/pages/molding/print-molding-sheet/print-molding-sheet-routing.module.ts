import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintMoldingSheetPage } from './print-molding-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: PrintMoldingSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintMoldingSheetPageRoutingModule {}
