import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import { AdminMoldingPage } from './admin-molding/admin-molding.page';
import { AdminUserPage } from './admin-user/admin-user.page';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:
      [{
        path: 'admin-user',
        component: AdminUserPage,
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
        component: AdminMoldingPage,
      },
      ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule { }
