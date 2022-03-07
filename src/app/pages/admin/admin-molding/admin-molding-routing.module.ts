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
    path: 'create-molding/:id',
    loadChildren: () => import('../../molding/create-molding/create-molding.module').then(m => m.CreateMoldingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMoldingPageRoutingModule { }
