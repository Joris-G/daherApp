import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../../home/home.page';

import { NewToolPage } from './new-tool.page';

const routes: Routes = [
  {
    path: '',
    component: NewToolPage
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
export class NewToolPageRoutingModule { }
