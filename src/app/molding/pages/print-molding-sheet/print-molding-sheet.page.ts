import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import JsBarcode from 'jsbarcode';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { KitService } from 'src/app/molding/services/kit.service';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor, JsonPipe, DatePipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { MatTable, MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell, MatHeaderRowDef, MatHeaderRow, MatRowDef, MatRow } from '@angular/material/table';

@Component({
    selector: 'app-print-molding-sheet',
    templateUrl: './print-molding-sheet.page.html',
    styleUrls: ['./print-molding-sheet.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgIf,
        MatDivider,
        MatTable,
        MatColumnDef,
        MatHeaderCellDef,
        MatHeaderCell,
        MatCellDef,
        MatCell,
        MatHeaderRowDef,
        MatHeaderRow,
        MatRowDef,
        MatRow,
        NgFor,
        JsonPipe,
        DatePipe,
    ],
})
export class PrintMoldingSheetPage implements OnInit {
  public molding: Molding;
  public displayedColumns: string[] = ['idMM', 'referenceSAP', 'designationSAP', 'peremptionMoins18', 'aDrapAv', 'aCuirAv'];
  public dataSource: Kit[];
  public kitList: Kit[];
  constructor(
    private activatedRoute: ActivatedRoute,
    public moldingService: MoldingService,
    private loadingService: LoadingService,
    private router: Router,
    public kitService: KitService,
  ) { }

  ngOnInit() {
    this.loadMoldingSheet();
  }

  loadMoldingSheet() {
    this.loadingService.startLoading('Patienter pendant le chargement du moulage');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.moldingService.getMoldingById(id)
      .subscribe((molding: Molding) => {
        this.molding = molding;
        this.dataSource = this.molding.kits;
        JsBarcode('#barcode', this.molding.id.toString(), {
          height: 20,
          displayValue: false,
        });
        this.loadingService.stopLoading();
      });
  }



  navigateHome() {
    this.router.navigate(['/home']);
  }

}

