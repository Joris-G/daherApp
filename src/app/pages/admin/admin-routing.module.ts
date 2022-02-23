import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'admin-user',
    loadChildren: () => import('./admin-user/admin-user.module').then(m => m.AdminUserPageModule)
  },
  {
    path: 'admin-user',
    loadChildren: () => import('./admin-user/admin-user.module').then(m => m.AdminUserPageModule)
  },
  {
    path: 'admin-molding',
    loadChildren: () => import('./admin-molding/admin-molding.module').then( m => m.AdminMoldingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule { }
