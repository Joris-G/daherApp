import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_services/users/auth.guard';
import { RoleGuard } from './_services/users/role.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'molding',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/molding/molding.module')
      .then(m => m.MoldingPageModule)
  },
  {
    path: 'molding/:idMolding',
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'COMPAGNON'
    },
    loadChildren: () => import('./pages/molding/molding.module')
      .then(m => m.MoldingPageModule)
  },
  {
    path: 'printMolding/:molding',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/molding/print-molding-sheet/print-molding-sheet.module')
      .then(m => m.PrintMoldingSheetPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module')
      .then(m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
