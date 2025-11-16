// import { registerLocaleData } from '@angular/common';
// import * as fr from '@angular/common/locales/fr';
// import { LOCALE_ID, NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
// import { RoleGuard } from '../shared/services/users/role.guard';
// import { Control3DPage } from './components/control3-d/control.page';
// import { IndicatorsPage } from './components/indicators/indicators.page';
// import { MaintenanceReparationPage } from './components/maintenance-reparation/maintenance-reparation.page';
// import { ManageTeamPage } from './components/manage-team/manage-team.page';
// import { NewToolPage } from './components/new-tool/new-tool.page';
// import { ToolInputService } from './components/tool-input/tool-input.service';
// import { ToolListPage } from './components/tool-list/tool-list.page';
// import { ToolRequestsService } from './components/tool-requests/tool-requests-data/tool-requests.service';
// import { ToolRequestsPage } from './components/tool-requests/tool-requests.page';
// import { ToolingComponentsModule } from './modules/components.module';
// import { ToolingPage } from './pages/tooling.page';
// import { ControlToolRequestService } from './services/control-tool-request.service';
// import { MaintenanceToolRequestService } from './services/maintenance-tool-request.service';
// import { ToolRequestManager } from './services/tool-request-manager.service';
// import { ToolRequestService } from './services/tool-request.service';
// import { ToolService } from './services/tool.service';


// const routes: Routes = [
//   {
//     path: '',
//     component: ToolingPage,
//   },
//   {
//     path: '',
//     children: [
//       {
//         path: 'new-tool', component: NewToolPage
//       },
//       {
//         path: 'tool-request-list', component: ToolRequestsPage
//       },
//       {
//         path: 'tool-list', canActivate: [RoleGuard], data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL'] }, component: ToolListPage
//       },
//       {
//         path: 'repair-tool', component: MaintenanceReparationPage
//       },
//       {
//         path: 'repair-tool/:id', component: MaintenanceReparationPage
//       },
//       {
//         path: '3D-tool', component: Control3DPage
//       },
//       {
//         path: '3D-tool/:id', component: Control3DPage
//       }
//     ]
//   },
//   {
//     path: '',
//     canActivate: [RoleGuard],
//     data: { expectedRole: ['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL'] },
//     children: [
//       {
//         path: 'manage-tool-team',

//         component: ManageTeamPage
//       },
//       {
//         path: 'tool-indicators',
//         component: IndicatorsPage
//       },
//     ]
//   },
//   {
//     path: '**',
//     redirectTo: ''
//   }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forChild(routes),
//     ToolingComponentsModule,
//   ],
//   exports: [
//     ToolingComponentsModule,
//   ],
//   providers: [
//     ToolService,
//     ToolRequestService,
//     ToolRequestsService,
//     ToolRequestManager,
//     ToolInputService,
//     ControlToolRequestService,
//     MaintenanceToolRequestService,
//     { provide: LOCALE_ID, useValue: 'fr-FR' },
//     { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
//   ],
// })
// export class AppToolingModule {
//   constructor() {
//     registerLocaleData(fr.default);
//   }
// }
