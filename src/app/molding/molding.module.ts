import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/services/users/auth.guard';
import { AppSharedModule } from '../shared/shared.module';
import { MoldingComponentsModule } from './modules/molding-components.module';
import { MoldingDirectivesModule } from './modules/molding-directives.module';
import { MoldingServicesModule } from './modules/molding-services.module';
import { CreateMoldingPage } from './pages/create-molding/create-molding.page';
import { MoldingPage } from './pages/molding.page';
import { PrintMoldingSheetPage } from './pages/print-molding-sheet/print-molding-sheet.page';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
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
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MoldingDirectivesModule,
    MoldingComponentsModule,
    MoldingServicesModule,
  ]
})
export class AppMoldingModule { }
