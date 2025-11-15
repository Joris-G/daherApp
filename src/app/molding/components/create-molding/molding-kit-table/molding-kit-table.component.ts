import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlertController, IonItemSliding, ModalController, IonicModule } from '@ionic/angular';
import { ComponentProps } from '@ionic/core';
import { KitService } from 'src/app/molding/services/kit.service';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { KitDetailsComponent } from '../kit-details/kit-details.component';
import { NgFor, NgIf, DatePipe } from '@angular/common';
import { PerempDirective } from '../../../directives/peremp.directive';

@Component({
    selector: 'app-molding-kit-table',
    templateUrl: './molding-kit-table.component.html',
    styleUrls: ['./molding-kit-table.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgFor,
        NgIf,
        PerempDirective,
        DatePipe,
    ],
})
export class MoldingKitTableComponent {
  @Input() molding: Molding;
  public dataSource = new MatTableDataSource<Kit>();
  public displayedColumns = [
    'referenceSAP',
    'idMM',
    'designationSAP',
    'peremptionMoins18',
    'aDrapAv',
    'aCuirAv',
    'commands'
  ];
  constructor(
    private moldingService: MoldingService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private kitService: KitService,
  ) { }
  /**
   * Supprime un kit de la liste de kit. Cette fonction n'a pas d'incidence tant que le moualge n'est pas sauvegardé
   *
   * @param index Index du kit dans la liste des kits
   * @memberof CreateMoldingPage
   */
  removeKitClick(index: number) {
    //TODO réparer le click
    this.moldingService.removeKit(index);

    // this.molding.kits.splice(index, 1);
    // this.moldingService.updateDates(this.molding);
  }
  openOptions(slidingItem: IonItemSliding) {
    console.log(slidingItem);
    slidingItem.open('end');
    setTimeout(() => {
      slidingItem.close();
      //item-sliding-active-slide
    }, 3000);
  }

  async openDetails(kitToOpen: Kit) {
    const modalWindow = await this.modalCtrl
      .create({
        component: KitDetailsComponent,
        componentProps: { kit: kitToOpen },
      });
    modalWindow.present();
  }

  async layedKitClick(kit: Kit) {
    const alertWindow = await this.alertCtrl.create({
      message: 'Déclarer le kit comme moulé',
      buttons: [
        {
          text: `Oui maintenant : ${new Date().toISOString()}`,
          handler: (value) => {
            kit.layupDate = new Date();
            this.kitService.updateKit(kit);
            this.moldingService.updateMoldings()
          }
        },
        {
          text: 'Oui et modifier la date',
          handler: (value) => {

            kit.layupDate = new Date();
            this.kitService.updateKit(kit);
            this.moldingService.updateMoldings()
          }
        },
        {
          text: 'Non',
          handler: async (value) => {
            await alertWindow.dismiss();
          }
        }
      ]
    });
    await alertWindow.present();
  }
}
