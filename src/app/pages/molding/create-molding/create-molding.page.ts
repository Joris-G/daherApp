import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Core } from 'src/app/_interfaces/molding/core';
import { Kit } from 'src/app/_interfaces/molding/kit';
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
    public scanService: ScanService,
    public moldingService: MoldingService,
    public alertController: AlertController,
    public kitService: KitService,
    public router: Router,
    public navCtrl: NavController,
    private loadingService: LoadingService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService,
    private alertService: AlertService,
    private roleGuard: RoleGuard,
  ) { }


  /**
   * A la réception d'un objet on détermine de quel objet l'input est question puis on traite.
   *
   * @param  inputValue C'est l'objet retourné par le composant scan input
   * @return
   * @memberof CreateMoldingPage
   */
  onInput(inputValue: Tool | Kit | Core | undefined) {
    if (Kit.isKit(inputValue)) {
      this.onKitInput(inputValue as Kit);
      return;
    }
    if (Tool.isTool(inputValue)) {
      this.onToolInput(inputValue as Tool);
      return;
    }
    if (Core.isCore(inputValue)) {
      this.onCoreInput(inputValue as Core);
      return;
    }

  }


  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.loadMoldingData(id);
    }
  }

  ionViewWillLeave() {
    this.molding =
    {
      id: null,
      cores: [],
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
      cores: [],
      kits: [],
      moldingDay: new Date(),
      outillage: null,
      createdBy: null
    };
    this.isAdmin = this.roleGuard.isRole(['ROLE_ADMIN']);
  }


  /**
   * Supprime un kit de la liste de kit. Cette fonction n'a pas d'incidence tant que le moualge n'est pas sauvegardé
   *
   * @param index Index du kit dans la liste des kits
   * @memberof CreateMoldingPage
   */
  removeKitClick(index: number) {
    this.molding.kits.splice(index, 1);
    this.moldingService.updateDates(this.molding);
  }


  saveMoldingClick() {
    this.checkMoldingDatas()
      .then(() => {
        this.saveMolding()
          .then(() => {
            // On demande si on veut imprimer ou non
            this.alertService.presentAlertConfirm(
              'Enregistrement effectué',
              'Voulez-vous imprimer la fiche ?')
              .then((response) => { if (response) { this.printMolding(); } });
          },
            () => {
              this.alertService.simpleAlert(
                'Erreur de sauvegarde',
                'Le moulage n\'a pas été sauvegardé',
                'Veuillez ré-essayer'
              );
            });
      },
        () => {
          console.error('test');

        }
      );
  }


  saveMolding() {
    return new Promise<void>((resolve, reject) => {
      // sauvegarder le moulage en base de donnée
      this.molding.createdBy = this.authService.authUser;
      if (this.molding.id === null) {
        this.moldingService.saveMolding(this.moldingService.toIri(this.molding))
          .subscribe((responseMolding: Molding) => {
            this.molding = responseMolding;
            resolve();
          },
            () => {
              console.log('tout n\'est pas Ok la sauvegarde a échouée');
              reject();
            });
      } else {
        this.moldingService.updateMolding(this.moldingService.toIri(this.molding))
          .subscribe((responseMolding: Molding) => {
            this.molding = responseMolding;
            console.log('tout est OK le moulage est mis à jour');
            resolve();
          },
            () => {
              this.alertService.simpleAlert(
                'Message d\'erreur',
                'Sauvegarde échouée !',
                'La sauvegarde ne s\'est pas correctement effectuée. Veuillez recommencer');
              console.error('tout n\'est pas Ok la mise à jour du moulage a échouée');
              reject();
            });
      }
    });
  }

  checkMoldingDatas() {
    console.log('start check data');
    return new Promise<boolean>((resolve, reject) => {
      if (this.molding.outillage === null) {
        const missingTollMsg = 'L\'outillage de moulage n\'est pas associé. Voulez-vous continuer sans outillage ?';
        this.alertService.presentAlertConfirm('Alerte', missingTollMsg)
          .then((response) => {
            if (response) {
              console.log('onResolve : Je veux continuer sans outillage', response);
              // console.error('erreur', response);
              resolve(true);
            } else {
              console.log('onResolve : Je ne veux pas continuer sans outillage', response);
              resolve(false);
            }
          },
            (response) => {
              const message = 'Les données n\ont pas pu être contrôlées. OU Il n\'y a pas eu de réponse de l\'utilisateur';
              console.log(message, response);
              reject(message);
            });
      } else if (this.molding.kits.length === 0) {
        console.log('onResolve : Il n\'y a pas de kit');
        resolve(false);
      } else {
        resolve(true);
      }
    });

  }

  printMoldingClick() {
    this.saveMolding()
      .then(() => {
        this.printMolding();
      },
        () => {
          console.error('test error molding save');

        });
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
      console.log('kit not in kits');
      this.molding.kits.unshift(kitObj);
      this.moldingService.updateDates(this.molding);
      // this.presentToast('Kit ajouté !');
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
   * On  traite une entrée d'un core
   *
   * @private
   * @param coreObj
   * @memberof CreateMoldingPage
   */
  private onCoreInput(coreObj: Core) {
    this.alertService.presentToast('Nida Ajouté !');
    //     this.molding.cores.unshift(coreObj);
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
