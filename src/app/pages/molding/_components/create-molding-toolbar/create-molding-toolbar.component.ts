import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';

@Component({
  selector: 'app-create-molding-toolbar',
  templateUrl: './create-molding-toolbar.component.html',
  styleUrls: ['./create-molding-toolbar.component.scss'],
})
export class CreateMoldingToolbarComponent {
  @Input() molding: Molding;
  constructor(
    private alertService: AlertService,
    public moldingService: MoldingService,
    public router: Router,
  ) { }


  saveMoldingClick(print?: boolean) {
    this.checkMoldingDatas()
      .then(() => {
        this.saveMolding()
          .subscribe(() => {
            if (print) {
              this.printMolding();
            } else {
              // On demande si on veut imprimer ou non
              this.alertService.presentAlertConfirm(
                'Enregistrement effectué',
                'Voulez-vous imprimer la fiche ?')
                .then((response) => { if (response) { this.printMolding(); } });
            }
          },
            (err) => {
              this.alertService.simpleAlert(
                'Erreur de sauvegarde',
                'Le moulage n\'a pas été sauvegardé',
                err
              );
            });
      },
        (err) => {
          this.alertService.simpleAlert('La vérification du moulage a échoué', err.title, err.message);
        }
      );
  }

  /**
 * Vérifie les données du moulage :
 * # vérifie la présence de l'outillage
 * # vérifie s'il y a au moins un kit
 *
 * @return
 * @memberof CreateMoldingPage
 */
  checkMoldingDatas() {
    return new Promise<void>((resolve, reject) => {
      if (this.molding.OT === undefined) {
        const missingToolMsg = 'L\'outillage de moulage n\'est pas associé. Voulez-vous continuer sans outillage ?';
        this.alertService.presentAlertConfirm('OUTILLAGE MANQUANT', missingToolMsg)
          .then((response) => {
            if (response) {
              resolve();
            } else {
              const title = 'OUTILLAGE MANQUANT';
              const message = 'Veuillez renseigner l\'outillage de moulage';
              reject({ title, message });
            }
          },
            (response) => {
              const title = `Outillage de moulage manquant`;
              const message = 'Il n\'y a pas eu de réponse de l\'utilisateur';
              console.log(message, response);
              reject({ title, message });
            });
      } else if (this.molding.kits.length === 0) {
        const title = 'Il n\'y a pas de kit';
        const message = `Pour insérer un kit matière munissez vous d'une fiche de vie et scannez le code barre.
            Si besoin d'aide complémentaire appelez le 06.87.89.24.25`;
        reject({ title, message });
      } else {
        resolve();
      }
    });

  }


  saveMolding() {
    const moldingToSave = this.moldingService.toIri(this.molding);
    if (this.molding.id === null) {
      return this.moldingService.saveMolding(moldingToSave);
    } else {
      return this.moldingService.updateMolding(moldingToSave);
    }
  }


  /**
  * Navigue vers l'impression des moulages
  *
  * @private
  * @memberof CreateMoldingPage
  */
  private printMolding() {
    this.router.navigate(['molding/print-molding-sheet', this.molding.id]);
  }
}
