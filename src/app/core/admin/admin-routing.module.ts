import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { AdminPage } from './pages/admin-home/admin.page';
import { AdminMoldingPage } from './pages/admin-molding/admin-molding.page';
import { AdminUserPage } from './pages/admin-user/admin-user.page';

//TODO guard tooling et molding différents pour ségréguer les chef d'équipes
const routes: Routes = [
  {
    path: '',
    canActivate: [RoleGuard],
    component: AdminPage,
    data: {
      expectedRole: ['ROLE_ADMIN']
    },
    children:
      [{
        path: 'admin-user',
        component: AdminUserPage,
      },
      {
        path: 'admin-molding',
        component: AdminMoldingPage,
      },
      ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRootingModule {

}
