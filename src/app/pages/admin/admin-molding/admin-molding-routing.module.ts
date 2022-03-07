import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoldingPage } from '../../molding/molding.page';

import { AdminMoldingPage } from './admin-molding.page';

const routes: Routes = [
  {
    path: '',
    component: AdminMoldingPage
  },
  {
    path: 'molding/:id',
    component: MoldingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMoldingPageRoutingModule { }
