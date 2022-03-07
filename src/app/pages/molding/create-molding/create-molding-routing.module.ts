import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMoldingPage } from './create-molding.page';

const routes: Routes = [
  {
    path: '',
    component: CreateMoldingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateMoldingPageRoutingModule { }
