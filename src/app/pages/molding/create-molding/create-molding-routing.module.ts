import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_services/users/auth.guard';
import { CreateMoldingPage } from './create-molding.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMoldingPage,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMoldingPageRoutingModule { }
