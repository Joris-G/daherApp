import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolRequestPageRoutingModule } from './tool-request-routing.module';
import { ToolRequestPage } from './tool-request.page';
import { MenuModule } from 'src/app/composants/menu/menu.module';
import { RouterModule } from '@angular/router';
import * as fr from '@angular/common/locales/fr';
import { ComponentModule } from 'src/app/composants/component/component.module';
import { Control3DPage } from './_components/control3-d/control.page';
import { ControledddComponent } from './_components/controle3d/controleddd.component';
import { IndicatorsPage } from './_components/indicators/indicators.page';
import { MaintenanceItemComponent } from './_components/maintenance-item/maintenance-item.component';
import { MaintenanceReparationPage } from './_components/maintenance-reparation/maintenance-reparation.page';
import { ManageTeamPage } from './_components/manage-team/manage-team.page';
import { NewToolPage } from './_components/new-tool/new-tool.page';
import { SboComponent } from './_components/sbo/sbo.component';
import { SpecMaintenanceReparationComponent } from './_components/spec-maintenance-reparation/spec-maintenance-reparation.component';
import { ToolInputComponent } from './_components/tool-input/tool-input.component';
import { ToolListPage } from './_components/tool-list/tool-list.page';
import { ToolRequestFooterComponent } from './_components/tool-request-footer/tool-request-footer.component';
import { MatTableModule } from '@angular/material/table';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ToolRequestsPage } from './_components/tool-requests/tool-requests.page';
import { MatExpansionModule } from '@angular/material/expansion';
// import { NgxEditorModule } from 'ngx-editor';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentModule,
    EditorModule,
    MatTableModule,
    MatExpansionModule,
    MenuModule,
    ToolRequestPageRoutingModule,
    // NgxEditorModule,
  ],
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
    ToolRequestsPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],
})
export class ToolRequestPageModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
