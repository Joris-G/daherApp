import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolRequestPage } from './tool-request.page';


const routes: Routes = [
  {
    path: '',
    component: ToolRequestPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolRequestPageRoutingModule { }
