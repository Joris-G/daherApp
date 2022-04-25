import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_services/users/auth.guard';
import { RoleGuard } from 'src/app/_services/users/role.guard';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    canActivate: [RoleGuard],
    data: {
      expectedRole: ['ROLE_ADMIN']
    },
    children:
      [{
        path: 'admin-user',
        loadChildren: () => import('./admin-user/admin-user.module').then(m => m.AdminUserPageModule),
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN']
        },
      },
      {
        path: 'admin-molding',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN']
        },
        loadChildren: () => import('./admin-molding/admin-molding.module').then(m => m.AdminMoldingPageModule)
      }]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule { }
