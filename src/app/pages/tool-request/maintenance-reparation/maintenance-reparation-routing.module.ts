import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceReparationPage } from './maintenance-reparation.page';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceReparationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintenanceReparationPageRoutingModule {}
