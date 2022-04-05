import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../../home/home.page';

import { Control3DPage } from './control.page';

const routes: Routes = [
  {
    path: '',
    component: Control3DPage,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Control3DPageRoutingModule { }
