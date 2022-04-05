import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/_services/users/auth.guard';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import { ToolRequestPage } from './tool-request.page';


const routes: Routes = [
  {
    path: '',
    component: ToolRequestPage,
    children: [
      {
        path: 'new-tool',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('../../pages/tool-request/new-tool/new-tool.module')
          .then(m => m.NewToolPageModule)
      },
      {
        path: 'tool-request-list',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('../../pages/tool-request/tool-requests/tool-requests.module')
          .then(m => m.ToolRequestsPageModule)
      },
      {
        path: 'tool-list',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('../../pages/tool-request/tool-list/tool-list.module')
          .then(m => m.ToolListPageModule)
      },
      {
        path: 'repair-tool',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('./maintenance-reparation/maintenance-reparation.module').then(m => m.MaintenanceReparationPageModule)
      },
      {
        path: 'repair-tool/:id',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('./maintenance-reparation/maintenance-reparation.module').then(m => m.MaintenanceReparationPageModule)
      },
      {
        path: '3D-tool',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('./control3-d/control.module').then(m => m.Control3DPageModule)
      },
      {
        path: '3D-tool/:id',
        canActivate: [RoleGuard],
        data: {
          expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL']
        },
        loadChildren: () => import('./control3-d/control.module').then(m => m.Control3DPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolRequestPageRoutingModule { }
