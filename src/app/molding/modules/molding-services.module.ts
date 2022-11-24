import { NgModule } from '@angular/core';
import { ScanService } from 'src/app/molding/services/scan.service';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { KitService } from '../services/kit.service';
import { ModalMaterialService } from '../services/modal-material.service';
import { MoldingService } from '../services/molding.service';
import { OtherMaterialsService } from '../services/other-materials.service';

@NgModule({
  providers: [
    ScanService,
    KitService,
    MoldingService,
    ToolService,
    ModalMaterialService,
    OtherMaterialsService,
  ]
})
export class MoldingServicesModule { }
