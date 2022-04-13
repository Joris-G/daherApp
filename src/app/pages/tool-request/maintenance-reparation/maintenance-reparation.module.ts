import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MaintenanceReparationPageRoutingModule } from './maintenance-reparation-routing.module';

import { MaintenanceReparationPage } from './maintenance-reparation.page';
import { MaintenanceItemComponentModule } from 'src/app/composants/maintenance-item/maintenance-item.module';
import { SpecMaintenanceReparationModule } from
  'src/app/composants/documents-pdf/spec-maintenance-reparation/spec-maintenance-reparation.module';
import { ToolInputModule } from 'src/app/composants/tool-input/tool-input.module';
import { ToolRequestFooterModule } from 'src/app/composants/tool-request-footer/tool-request-footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaintenanceReparationPageRoutingModule,
    MaintenanceItemComponentModule,
    SpecMaintenanceReparationModule,
    ToolInputModule,
    ToolRequestFooterModule,
  ],
  declarations: [MaintenanceReparationPage]
})
export class MaintenanceReparationPageModule { }
