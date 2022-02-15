import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import * as JsBarcode from 'jsbarcode';
import { Kit } from 'src/app/_interface/kit';
import { Molding } from 'src/app/_interface/molding';
import { KitService } from 'src/app/_services/kits/kit.service';
import { MoldingService } from 'src/app/_services/moldings/molding.service';

@Component({
  selector: 'app-print-molding-sheet',
  templateUrl: './print-molding-sheet.page.html',
  styleUrls: ['./print-molding-sheet.page.scss'],
})
export class PrintMoldingSheetPage implements OnInit {
  public molding: Molding;
  public displayedColumns: string[] = ['idMM', 'referenceSAP', 'designationSAP', 'peremptionMoins18', 'aDrapAv', 'aCuirAv'];
  public dataSource: Kit[];
  constructor(
    private activatedRoute: ActivatedRoute,
    public moldingService: MoldingService,
    private loadingController: LoadingController,
    public kitService: KitService,
    private router: Router) {
  }

  ngOnInit() {
    this.loadMoldingSheet();
  }


  async loadMoldingSheet() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant le chargement du moulage',
    });
    await loading.present();
    const id = this.activatedRoute.snapshot.paramMap.get('molding');
    this.moldingService.getMoldingById(id)
      .then((molding: Molding) => {
        // this.molding = molding;
        this.molding = molding;
      },
        () => {
          this.molding = this.moldingService.molding;
        })
      .finally(() => {
        this.dataSource = this.molding.kits;
        JsBarcode('#barcode', this.molding.idMolding.toString(), {
          height: 20,
          displayValue: false,
        });
        loading.dismiss();
      });
    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }

}

