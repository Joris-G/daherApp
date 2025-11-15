import { Routes } from "@angular/router";
import { AdminMoldingPage } from "./core/admin/pages/admin-molding/admin-molding.page";
import { AdminUserPage } from "./core/admin/pages/admin-user/admin-user.page";
import { HomePage } from "./core/pages/home/home.page";
import { LoginPage } from "./core/pages/login/login.page";
import { RegisterPage } from "./core/pages/register/register.page";
import { CreateMoldingPage } from "./molding/pages/create-molding/create-molding.page";
import { PrintMoldingSheetPage } from "./molding/pages/print-molding-sheet/print-molding-sheet.page";
import { AuthGuard } from "./shared/services/users/auth.guard";
import { RoleGuard } from "./shared/services/users/role.guard";
import { Control3DPage } from "./tooling/components/control3-d/control.page";
import { IndicatorsPage } from "./tooling/components/indicators/indicators.page";
import { MaintenanceReparationPage } from "./tooling/components/maintenance-reparation/maintenance-reparation.page";
import { ManageTeamPage } from "./tooling/components/manage-team/manage-team.page";
import { NewToolPage } from "./tooling/components/new-tool/new-tool.page";
import { ToolListPage } from "./tooling/components/tool-list/tool-list.page";
import { ToolRequestsPage } from "./tooling/components/tool-requests/tool-requests.page";


export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomePage,
      },
      {
        path: 'admin',
        children:
          [{
            path: 'admin-user',
            component: AdminUserPage,
          },
          {
            path: 'admin-molding',
            component: AdminMoldingPage,
          },
          ]
      },

    ]
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'register',
    component: RegisterPage
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'molding',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'print-molding-sheet/:id',
        canActivate: [AuthGuard],
        component: PrintMoldingSheetPage
      },
      {
        path: 'print-molding-sheet',
        canActivate: [AuthGuard],
        component: PrintMoldingSheetPage
      },
      {
        path: 'create-molding',
        canActivate: [AuthGuard],
        component: CreateMoldingPage,
      },
      {
        path: 'create-molding/:id',
        canActivate: [AuthGuard],
        component: CreateMoldingPage,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: 'tooling',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
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
        ]
      },
      {
        path: '',
        canActivate: [RoleGuard],
        data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL'] },
        children: [
          {
            path: 'manage-tool-team',

            component: ManageTeamPage
          },
          {
            path: 'tool-indicators',
            component: IndicatorsPage
          },
        ]
      },
    ]
  }
];