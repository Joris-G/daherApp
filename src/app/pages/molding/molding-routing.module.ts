import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoldingPage } from './molding.page';

const routes: Routes = [
  {
    path: '',
    component: MoldingPage,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'create-molding',
      //   pathMatch: 'full'
      // },
      {
        path: 'print-molding-sheet',
        // canActivate: [AuthGuard],
        loadChildren: () => import('../../pages/molding/print-molding-sheet/print-molding-sheet.module')
          .then(m => m.PrintMoldingSheetPageModule)
      },
      {
        path: 'create-molding',
        // canActivate: [AuthGuard],
        loadChildren: () => import('../../pages/molding/create-molding/create-molding.module')
          .then(m => m.CreateMoldingPageModule)
      },
      {
        path: 'create-molding/:id',
        // canActivate: [AuthGuard],
        loadChildren: () => import('../../pages/molding/create-molding/create-molding.module')
          .then(m => m.CreateMoldingPageModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoldingPageRoutingModule {
}
