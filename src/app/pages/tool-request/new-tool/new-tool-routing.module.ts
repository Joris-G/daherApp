import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewToolPage } from './new-tool.page';

const routes: Routes = [
  {
    path: '',
    component: NewToolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewToolPageRoutingModule {}
