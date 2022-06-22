import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoldingPageRoutingModule } from './molding-routing.module';
import { MoldingPage } from './molding.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'src/app/composants/menu/menu.module';
import { CreateMoldingPage } from './create-molding/create-molding.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { ScanService } from 'src/app/_services/scan/scan.service';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';
import { ScanMoldingInputComponent } from './_components/scan-molding-input/scan-molding-input.component';
import { PrintMoldingSheetPage } from './print-molding-sheet/print-molding-sheet.page';
import { NonExpiredMaterialInputComponent } from './_components/non-expired-material-input/non-expired-material-input.component';
import { ModalMaterialService } from 'src/app/_services/molding/modal/modal-material.service';
import { NidaComponent } from './_components/non-expired-material-input/nida/nida.component';
import { OtherMaterialsService } from 'src/app/_services/molding/otherMaterials/other-materials.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedUserHeaderModule,
    MenuModule,
    RouterModule,
    MatExpansionModule,
    MatDividerModule,
    MatTableModule,
    MoldingPageRoutingModule,
  ],
  declarations: [
    MoldingPage,
    CreateMoldingPage,
    ScanMoldingInputComponent,
    PrintMoldingSheetPage,
    NonExpiredMaterialInputComponent,
    NidaComponent,
  ],
  providers: [
    ScanService,
    KitService,
    MoldingService,
    ToolService,
    ModalMaterialService,
    OtherMaterialsService,
  ]
})
export class MoldingPageModule { }
