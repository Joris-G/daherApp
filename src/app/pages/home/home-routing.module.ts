import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_services/users/auth.guard';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  // {
  //   path: 'molding',
  //   // canActivate: [AuthGuard],
  //   loadChildren: () => import('../../pages/molding/molding.module')
  //     .then(m => m.MoldingPageModule)
  // },
  // {
  //   path: 'admin',
  //   // canActivate: [RoleGuard],
  //   data: {
  //     expectedRole: 'ROLE_ADMIN'
  //   },
  //   loadChildren: () => import('../../pages/admin/admin.module').then(m => m.AdminPageModule)
  // },
  // {
  //   path: 'tool-request',
  //   // canActivate: [RoleGuard],
  //   loadChildren: () => import('../../pages/tool-request/tool-request.module')
  //     .then(m => m.ToolRequestPageModule),
  //   data: {
  //     expectedRole: 'ROLE_ADMIN'
  //   },
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {
  constructor() {
  }

}
