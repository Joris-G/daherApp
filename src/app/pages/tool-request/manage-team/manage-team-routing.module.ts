import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageTeamPage } from './manage-team.page';

const routes: Routes = [
  {
    path: '',
    component: ManageTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageTeamPageRoutingModule {}
