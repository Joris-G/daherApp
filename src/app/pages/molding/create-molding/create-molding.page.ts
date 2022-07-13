import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HeaderService } from 'src/app/composants/shared-user-header/header.service';
import { PageParams } from 'src/app/composants/shared-user-header/page-params';
import { AdditionalMaterial, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';
import { ScanService } from 'src/app/_services/scan/scan.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';

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
  public molding: Molding;

  constructor(
    public moldingService: MoldingService,
    public kitService: KitService,
    public navCtrl: NavController,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    private roleGuard: RoleGuard,
    private headerService: HeaderService,
  ) { }


  /**
   * A la réception d'un objet on détermine de quel objet l'input est question puis on traite.
   *
   * @param  inputValue C'est l'objet retourné par le composant scan input
   * @return
   * @memberof CreateMoldingPage
   */
  onInput(inputValue: Tool | Kit | AdditionalMaterial | undefined) {
    if (Kit.isKit(inputValue)) {
      this.onKitInput(inputValue as Kit);
      return;
    }
    if (Tool.isTool(inputValue)) {
      this.onToolInput(inputValue as Tool);
      return;
    }
    this.onMatInput(inputValue as AdditionalMaterial);
    // this.alertService.presentToast('Erreur kit non trouvé');

  }

  ionViewWillEnter() {
    const pageParam: PageParams = { title: 'MOULAGE', visible: true };
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      pageParam.title = `MODIFICATION MOULAGE n°${id}`;
      this.loadMoldingData(id);
    }
    this.headerService.changePageParams(pageParam, 'molding');
  }

  ionViewWillLeave() {
    this.molding =
    {
      id: null,
      materialSupplementary: [],
      kits: [],
      moldingDay: new Date(),
      outillage: null,
      createdBy: null
    };
  }

  ngOnInit() {
    this.molding =
    {
      id: null,
      materialSupplementary: [],
      kits: [],
      moldingDay: new Date(),
      outillage: null,
      createdBy: null
    };
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
    this.loadingService.startLoading('Patienter pendant le chargement du moulage');
    this.moldingService.getMoldingById(moldingId)
      .subscribe((molding: Molding) => {
        this.molding = molding;
        this.moldingService.updateDates(this.molding);
        this.molding.updatedAt = new Date();
        this.loadingService.stopLoading();
      },
        (error) => {
          console.error(error);
          this.loadingService.stopLoading();
          this.alertService.simpleAlert(
            'Erreur moulage',
            `Erreur de récupération du moulage`,
            `Le moulage ${moldingId} n'existe pas`,
          );
          this.navCtrl.navigateBack('home');
        });
  }

  /**
   * On  traite une entrée d'un kit
   *
   * @private
   * @param kitObj
   * @memberof CreateMoldingPage
   */
  private onKitInput(kitObj: Kit) {
    if (!this.kitService.kitIsInKits(kitObj, this.molding.kits)) {
      this.molding.kits.unshift(kitObj);
      this.moldingService.updateMoldings(this.molding);
      this.moldingService.updateDates(this.molding);
    } else {
      this.alertService.presentToast('Le kit a déjà été scanné');
      console.error('kit en doublon');
    }
  }

  /**
   * On  traite une entrée d'un Tool
   *
   * @private
   * @param toolObj
   * @memberof CreateMoldingPage
   */
  private onToolInput(toolObj: Tool) {
    this.molding.OT = toolObj;
    this.alertService.presentToast('Outillage associé !');
  }

  /**
   * On  traite une entrée d'un autre matéiraux
   *
   * @private
   * @param matObj
   * @memberof CreateMoldingPage
   */
  private onMatInput(matObj: AdditionalMaterial) {
    this.alertService.presentToast('Matière Ajoutée !');
    if (this.molding.materialSupplementary) {
      this.molding.materialSupplementary.unshift(matObj);
    } else {
      this.molding.materialSupplementary = [matObj];
    }
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
