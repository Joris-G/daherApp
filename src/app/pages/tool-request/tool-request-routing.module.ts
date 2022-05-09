import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import { ToolRequestPage } from './tool-request.page';
import { Control3DPage } from './_components/control3-d/control.page';
import { IndicatorsPage } from './_components/indicators/indicators.page';
import { MaintenanceReparationPage } from './_components/maintenance-reparation/maintenance-reparation.page';
import { ManageTeamPage } from './_components/manage-team/manage-team.page';
import { NewToolPage } from './_components/new-tool/new-tool.page';
import { ToolListPage } from './_components/tool-list/tool-list.page';
import { ToolRequestsPage } from './_components/tool-requests/tool-requests.page';


const routes: Routes = [
  {
    path: '',
    component: ToolRequestPage,
    children: [
      {
        path: 'new-tool', component: NewToolPage
      },
      {
        path: 'tool-request-list', component: ToolRequestsPage
      },
      {
        path: 'tool-list', canActivate: [RoleGuard], data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL'] }, component: ToolListPage
      },
      {
        path: 'repair-tool', component: MaintenanceReparationPage
      },
      {
        path: 'repair-tool/:id', component: MaintenanceReparationPage
      },
      {
        path: '3D-tool', component: Control3DPage
      },
      {
        path: '3D-tool/:id', component: Control3DPage
      },
      {
        path: 'manage-tool-team',
        canActivate: [RoleGuard],
        data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL'] },
        component: ManageTeamPage
      },
      {
        path: 'tool-indicators',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL']
        },
        component: IndicatorsPage
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolRequestPageRoutingModule { }
