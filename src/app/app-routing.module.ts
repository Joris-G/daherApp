import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/services/users/auth.guard';

const routes: Routes = [
  {
    path: '',
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
  {
    path: 'login',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./core/pages/login/login.page')
      .then(m => m.LoginPage)
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
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
