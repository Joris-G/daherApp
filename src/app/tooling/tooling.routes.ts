import { Routes } from "@angular/router";
import { ToolingPage } from "./tooling.page";
import { NewToolPage } from "./components/new-tool/new-tool.page";
import { ToolRequestsPage } from "./components/tool-requests/tool-requests.page";
import { RoleGuard } from "../shared/services/users/role.guard";
import { ToolListPage } from "./components/tool-list/tool-list.page";
import { MaintenanceReparationPage } from "./components/maintenance-reparation/maintenance-reparation.page";
import { Control3DPage } from "./components/control3-d/control.page";
import { ManageTeamPage } from "./components/manage-team/manage-team.page";
import { IndicatorsPage } from "./components/indicators/indicators.page";

export const TOOLING_ROUTES: Routes = [
  {
    path: '',
    component: ToolingPage,
    children: [
      { path: 'new-tool', component: NewToolPage },
      { path: 'requests', component: ToolRequestsPage },
      {
        path: 'list',
        canActivate: [RoleGuard],
        data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL'] },
        component: ToolListPage
      },

      { path: 'repair', component: MaintenanceReparationPage },
      { path: 'repair/:id', component: MaintenanceReparationPage },

      { path: '3d', component: Control3DPage },
      { path: '3d/:id', component: Control3DPage },

      {
        path: 'manage-team',
        canActivate: [RoleGuard],
        data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL'] },
        component: ManageTeamPage
      },

      {
        path: 'indicators',
        canActivate: [RoleGuard],
        data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL'] },
        component: IndicatorsPage
      }
    ]
  }
];