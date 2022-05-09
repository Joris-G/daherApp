import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as JsBarcode from 'jsbarcode';
import { Kit } from 'src/app/_interfaces/molding/kit';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';

@Component({
  selector: 'app-print-molding-sheet',
  templateUrl: './print-molding-sheet.page.html',
  styleUrls: ['./print-molding-sheet.page.scss'],
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
    public kitService: KitService,
    private router: Router) { }

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

