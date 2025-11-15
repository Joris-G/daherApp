import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { Control3DPage } from '../components/control3-d/control.page';
import { Control3DFormComponent } from '../components/control3-d/control3-dform/control3-dform.component';
import { ControledddComponent } from '../components/controle3d/controleddd.component';
import { IndicatorsPage } from '../components/indicators/indicators.page';
import { MaintenanceItemFormComponent } from '../components/maintenance-reparation/maintenance-item-form/maintenance-item-form.component';
import { MaintenanceItemComponent } from '../components/maintenance-reparation/maintenance-item/maintenance-item.component';
import { MaintRepairFormComponent } from '../components/maintenance-reparation/maint-repair-form/maint-repair-form.component';
import { MaintenanceReparationPage } from '../components/maintenance-reparation/maintenance-reparation.page';
import { ManageTeamPage } from '../components/manage-team/manage-team.page';
import { NewToolPage } from '../components/new-tool/new-tool.page';
import { SboComponent } from '../components/sbo/sbo.component';
import { ToolInputComponent } from '../components/tool-input/tool-input.component';
import { ToolInputDirective } from '../components/tool-input/tool-input.directive';
import { ToolListPage } from '../components/tool-list/tool-list.page';
import { ToolRequestFooterComponent } from '../components/tool-request-footer/tool-request-footer.component';
import { ToolRequestMenuComponent } from '../components/tool-request-menu/tool-request-menu.component';
import { ToolRequestsPage } from '../components/tool-requests/tool-requests.page';
import { ToolingPage } from '../pages/tooling.page';
import { ToolRequestFiltersComponent } from
  '../components/tool-requests/tool-requests-components/tool-request-filters/tool-request-filters.component';
import { ToolRequestTableComponent } from
  '../components/tool-requests/tool-requests-components/tool-request-table/tool-request-table.component';
import { SpecMaintenanceReparationComponent } from
  '../components/maintenance-reparation/spec-maintenance-reparation/spec-maintenance-reparation.component';

@NgModule({
    exports: [
        ToolingPage,
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
        ToolRequestMenuComponent,
        ToolRequestTableComponent,
        ToolRequestFiltersComponent,
        Control3DFormComponent,
        ToolInputDirective,
        MaintRepairFormComponent,
        MaintenanceItemFormComponent
    ],
    imports: [
        AppSharedModule,
        ToolingPage,
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
        ToolRequestMenuComponent,
        ToolRequestTableComponent,
        ToolRequestFiltersComponent,
        Control3DFormComponent,
        ToolInputDirective,
        MaintRepairFormComponent,
        MaintenanceItemFormComponent,
    ]
})
export class ToolingComponentsModule { }
