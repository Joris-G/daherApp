import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_services/users/auth.guard';
import { CreateMoldingPage } from '../../pages/molding/create-molding/create-molding.page';
import { MoldingPage } from './molding.page';
import { PrintMoldingSheetPage } from './print-molding-sheet/print-molding-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: MoldingPage,
    children: [
      {
        path: 'print-molding-sheet/:id',
        canActivate: [AuthGuard],
        component: PrintMoldingSheetPage
      },
      {
        path: 'print-molding-sheet',
        canActivate: [AuthGuard],
        component: PrintMoldingSheetPage
      },
      {
        path: 'create-molding',
        canActivate: [AuthGuard],
        component: CreateMoldingPage,
      },
      {
        path: 'create-molding/:id',
        canActivate: [AuthGuard],
        component: CreateMoldingPage,
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoldingPageRoutingModule {
}
