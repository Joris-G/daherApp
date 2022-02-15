import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoldingPage } from './molding.page';

const routes: Routes = [
  {
    path: '',
    component: MoldingPage
  },
  {
    path: 'print-molding-sheet',
    loadChildren: () => import('./print-molding-sheet/print-molding-sheet.module').then( m => m.PrintMoldingSheetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoldingPageRoutingModule {}
