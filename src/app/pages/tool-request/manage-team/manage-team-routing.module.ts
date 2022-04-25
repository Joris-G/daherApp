import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../../home/home.page';

import { ManageTeamPage } from './manage-team.page';

const routes: Routes = [
  {
    path: '',
    component: ManageTeamPage
  },
  {
    path: '**',
    component: HomePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTeamPageRoutingModule { }
