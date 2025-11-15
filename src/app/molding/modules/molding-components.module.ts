import { NgModule } from '@angular/core';
import { CreateMoldingToolbarComponent } from '../components/create-molding/create-molding-toolbar/create-molding-toolbar.component';
import { MoldingMenuComponent } from '../components/molding-menu/molding-menu.component';

import { ScanMoldingInputComponent } from '../components/create-molding/scan-molding-input/scan-molding-input.component';
import { NonExpiredMaterialInputComponent }
  from '../components/create-molding/non-expired-material-input/non-expired-material-input.component';
import { NidaComponent } from '../components/create-molding/nida/nida.component';
import { MoldingKitTableComponent } from '../components/create-molding/molding-kit-table/molding-kit-table.component';
import { MoldingMaterialsTableComponent } from '../components/create-molding/molding-materials-table/molding-materials-table.component';
import { MoldingInfoToolbarComponent } from '../components/create-molding/molding-info-toolbar/molding-info-toolbar.component';
import { MoldingPage } from '../pages/molding.page';
import { CreateMoldingPage } from '../pages/create-molding/create-molding.page';
import { PrintMoldingSheetPage } from '../pages/print-molding-sheet/print-molding-sheet.page';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { DateHeurePipe } from 'src/app/_pipes/dateHeure.pipe';

import { KitDetailsComponent } from '../components/create-molding/kit-details/kit-details.component';

@NgModule({
    imports: [
    AppSharedModule,
    ScanMoldingInputComponent,
    MoldingMenuComponent,
    NonExpiredMaterialInputComponent,
    NidaComponent,
    MoldingKitTableComponent,
    MoldingMaterialsTableComponent,
    MoldingInfoToolbarComponent,
    CreateMoldingToolbarComponent,
    MoldingPage,
    CreateMoldingPage,
    PrintMoldingSheetPage,
    KitDetailsComponent,
],
    exports: [
        MoldingMenuComponent,
        ScanMoldingInputComponent,
        NonExpiredMaterialInputComponent,
        NidaComponent,
        MoldingKitTableComponent,
        MoldingMaterialsTableComponent,
        MoldingInfoToolbarComponent,
        CreateMoldingToolbarComponent,
        MoldingPage,
        CreateMoldingPage,
        PrintMoldingSheetPage,
        KitDetailsComponent
    ],
})
export class MoldingComponentsModule { }
