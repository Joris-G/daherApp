import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolListPage } from './tool-list.page';

const routes: Routes = [
  {
    path: '',
    component: ToolListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolListPageRoutingModule {}
