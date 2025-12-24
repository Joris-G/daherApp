import { Routes } from "@angular/router";
import { ToolingPage } from "../../pages/tooling/tooling.page";
import { NewToolPage } from "./pages/sbo-request/sbo-request.page";
import { RoleGuard } from "../../shared/services/users/role.guard";
import { ToolListPage } from "../../tooling/components/tool-list/tool-list.page";
import { MaintenanceReparationPage } from "../../tooling/components/maintenance-reparation/maintenance-reparation.page";
import { Control3DPage } from "./pages/control-request/control.page";
import { ManageTeamPage } from "../../tooling/components/manage-team/manage-team.page";
import { IndicatorsPage } from "../../tooling/components/indicators/indicators.page";
import { ToolRequestsPage } from "./pages/tool-request-list/tool-requests.page";

export const TOOLING_ROUTES: Routes = [
  {
    path: '',
    component: ToolingPage,
    children: [
      { path: 'new-tool', component: NewToolPage },
      { path: 'new-tool/:id', component: NewToolPage },
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