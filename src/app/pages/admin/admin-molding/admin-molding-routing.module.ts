import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMoldingPage } from './admin-molding.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMoldingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMoldingPageRoutingModule {}
