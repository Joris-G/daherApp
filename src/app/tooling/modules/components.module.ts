import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { Control3DPage } from '../components/control3-d/control.page';
import { ControledddComponent } from '../components/controle3d/controleddd.component';
import { IndicatorsPage } from '../components/indicators/indicators.page';
import { MaintenanceItemComponent } from '../components/maintenance-item/maintenance-item.component';
import { MaintenanceReparationPage } from '../components/maintenance-reparation/maintenance-reparation.page';
import { ManageTeamPage } from '../components/manage-team/manage-team.page';
import { NewToolPage } from '../components/new-tool/new-tool.page';
import { SboComponent } from '../components/sbo/sbo.component';
import { SpecMaintenanceReparationComponent } from '../components/spec-maintenance-reparation/spec-maintenance-reparation.component';
import { ToolInputComponent } from '../components/tool-input/tool-input.component';
import { ToolListPage } from '../components/tool-list/tool-list.page';
import { ToolRequestFooterComponent } from '../components/tool-request-footer/tool-request-footer.component';
import { ToolRequestMenuComponent } from '../components/tool-request-menu/tool-request-menu.component';
import { ToolRequestsPage } from '../components/tool-requests/tool-requests.page';
import { ToolRequestPage } from '../pages/tool-request.page';

@NgModule({
  declarations: [
    ToolRequestPage,
    Control3DPage,
    ControledddComponent,
    IndicatorsPage,
    MaintenanceItemComponent,
    MaintenanceReparationPage,
    ManageTeamPage,
    NewToolPage,
    SboComponent,
    SpecMaintenanceReparationComponent,
    ToolInputComponent,
    ToolListPage,
    ToolRequestFooterComponent,
    ToolRequestsPage,
    ToolRequestMenuComponent
  ],
  exports: [
    ToolRequestPage,
    Control3DPage,
    ControledddComponent,
    IndicatorsPage,
    MaintenanceItemComponent,
    MaintenanceReparationPage,
    ManageTeamPage,
    NewToolPage,
    SboComponent,
    SpecMaintenanceReparationComponent,
    ToolInputComponent,
    ToolListPage,
    ToolRequestFooterComponent,
    ToolRequestsPage,
    ToolRequestMenuComponent
  ],
  imports: [
    AppSharedModule
  ]
})
export class ToolingComponentsModule { }
