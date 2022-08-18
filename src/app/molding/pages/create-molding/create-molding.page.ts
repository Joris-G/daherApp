import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { RoleGuard } from 'src/app/core/services/users/role.guard';

@Component({
  selector: 'app-create-molding',
  templateUrl: './create-molding.page.html',
  styleUrls: ['./create-molding.page.scss'],
})

export class CreateMoldingPage implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @ViewChild('kitPanel') kitPanel: MatExpansionPanel;

  public expanded = false;
  public isAdmin = false;

  public molding$: Subject<Molding> = new Subject();

  constructor(
    private moldingService: MoldingService,
    private activatedRoute: ActivatedRoute,
    private roleGuard: RoleGuard,
  ) {
    this.molding$ = this.moldingService.molding$;
  }


  ionViewWillEnter() {
    // const pageParam: PageParams = { title: 'MOULAGE', visible: true };
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // pageParam.title = `MODIFICATION MOULAGE n°${id}`;
      this.loadMoldingData(id);
    }
  }

  ngOnInit() {
    this.isAdmin = this.roleGuard.isRole(['ROLE_ADMIN']);
  }

  /**
   * Charge le moulage dans la page
   *
   * @private
   * @param moldingId
   * @memberof CreateMoldingPage
   */
  private loadMoldingData(moldingId: string) {
    this.moldingService.loadMolding(moldingId);
  }

  // async kitAlertPrompt() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Scannez un kit',
  //     inputs: [
  //       {
  //         name: 'kitnumber',
  //         type: 'text',
  //         placeholder: 'Scannez le kit',
  //         tabindex: 1,
  //         id: 'kitNumberInput',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Annuler',
  //         role: 'cancel',
  //         cssClass: 'ion-color-secondary',
  //         handler: (data) => {
  //           console.log('Confirm Cancel', data);
  //         }
  //       }, {
  //         text: 'Valider',
  //         cssClass: ['ion-color-primary', 'button', 'button-solid'],
  //         handler: (data) => {
  //           // if (data.kitnumber !== '') { this.scanInputAction(data.kitnumber, 'test'); };
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present().then(() => {
  //   });
  // }
  // associateToolClick() {
  //   this.associateToolAlertPrompt();
  // }

  // associateCoreClick() {
  //   this.alertService.simpleAlert(
  //     'Message d\'information',
  //     'Fonction inactive',
  //     'La fonction permettra de lier un nida au moulage'
  //   );
  // }
  // async associateToolAlertPrompt() {
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Associer l\'outillage de moulage',
  //     inputs: [
  //       {
  //         name: 'toolNumber',
  //         type: 'text',
  //         placeholder: 'Scannez l\'outillage',
  //         tabindex: 1,
  //         id: 'toolNumberInput',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Annuler',
  //         role: 'cancel',
  //         cssClass: 'ion-color-secondary',
  //         handler: (data) => {
  //           console.log('Confirm Cancel', data);
  //         }
  //       }, {
  //         text: 'Valider',
  //         cssClass: ['ion-color-primary', 'button', 'button-solid'],
  //         handler: (data) => {
  //           // this.setLinkedTool(data.toolNumber);
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present().then(() => {
  //     const toolNumberInput = document.getElementById('toolNumberInput');
  //     if (toolNumberInput) {
  //       toolNumberInput.focus();
  //     }
  //   });
  // }
}
