import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './core/pages/home/home.page';
import { AuthGuard } from './core/services/users/auth.guard';
import { RoleGuard } from './core/services/users/role.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./core/core.module')
      .then(m => m.CoreModule)
  },
  {
    path: 'molding',
    canActivate: [AuthGuard],
    loadChildren: () => import('./molding/molding.module')
      .then(m => m.AppMoldingModule)
  },
  {
    path: 'tooling',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tooling/tooling.module')
      .then(m => m.AppToolingModule)
  },
  // {
  //   path: 'admin',
  //   canActivate: [RoleGuard],
  //   data:
  //   {
  //     expectedRole: ['ROLE_ADMIN'],
  //   },
  //   loadChildren: () => import('./pages/admin/admin.module')
  //     .then(m => m.AdminPageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
