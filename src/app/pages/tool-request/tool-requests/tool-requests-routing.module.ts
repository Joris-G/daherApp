import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolRequestsPage } from './tool-requests.page';

const routes: Routes = [
  {
    path: '',
    component: ToolRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolRequestsPageRoutingModule {}
