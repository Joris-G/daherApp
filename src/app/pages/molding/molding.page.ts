import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertButton, AlertController, IonButton, IonInput, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Kit } from 'src/app/_interface/kit';
import { Molding } from 'src/app/_interface/molding';
import { MoldingTool } from 'src/app/_interface/molding-tool';
import { KitService } from 'src/app/_services/kits/kit.service';
import { MoldingService } from 'src/app/_services/moldings/molding.service';
import { MoldingToolService } from 'src/app/_services/moldingTools/molding-tool.service';
import { ScanService } from 'src/app/_services/scan/scan.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage implements OnInit, AfterViewInit {
  @ViewChild('scanInput') scanInput: IonInput;
  @ViewChild('scanButton') scanButton: IonButton;

  public pageTitle: string;
  public scanButtonText: string;
  public molding: Molding;

  constructor(
    public scanService: ScanService,
    public moldingService: MoldingService,
    public moldingToolService: MoldingToolService,
    public alertController: AlertController,
    public kitService: KitService,
    public router: Router,
    public navCtrl: NavController,
    private loadingController: LoadingController,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    public authService: AuthService,
  ) {
    this.molding =
    {
      id: null,
      kits: [],
      moldingDay: new Date(),
      outillage: null,
      moldingUser: null
    };

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.pageTitle = 'Modification moulage';
      this.loadMoldingData(id);
    } else {
      this.pageTitle = 'Nouveau moulage';
    }

  }

  async loadMoldingData(moldingId: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant le chargement du moulage',
    });
    this.moldingService.getMoldingById(moldingId)
      .then((molding: Molding) => {
        this.molding = molding;
        this.moldingService.updateDates(this.molding);
        this.molding.updatedAt = new Date();
        console.log(this.molding);
        loading.dismiss();
      });
  }

  ngAfterViewInit(): void {
    this.scanButtonText = 'SCAN INACTIF';
    this.scanButton.color = 'danger';
    this.scanService.scanState = false;
  }

  ngOnInit() {
  }

  associateToolClick() {
    this.associateToolAlertPrompt();
  }


  async associateToolAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Associer l\'outillage de moulage',
      inputs: [
        {
          name: 'toolNumber',
          type: 'text',
          placeholder: 'Scannez l\'outillage',
          tabindex: 1,
          id: 'toolNumberInput',
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'ion-color-secondary',
          handler: (data) => {
            console.log('Confirm Cancel', data);
          }
        }, {
          text: 'Valider',
          cssClass: ['ion-color-primary', 'button', 'button-solid'],
          handler: (data) => {
            this.setLinkedTool(data.toolNumber);
          }
        }
      ]
    });

    await alert.present().then(() => {
      const toolNumberInput = document.getElementById('toolNumberInput');
      if (toolNumberInput) {
        toolNumberInput.focus();
      }
    });
  }


  setLinkedTool(toolNumber: string) {
    console.log(toolNumber);
    this.moldingToolService.getToolByToolNumber(toolNumber)
      .then((tool: MoldingTool) => {
        this.molding.outillage = tool;
        this.presentToast('Outillage associé !');
      });
  }

  switchScanState() {
    this.scanService.scanState = !this.scanService.scanState;
    if (this.scanService.scanState) {
      this.scanInput.setFocus();
    }
  }

  inputOnBlur() {
    this.scanButton.color = 'danger';
    this.scanButtonText = 'SCAN INACTIF';
    this.scanService.scanState = false;
  }
  inputOnFocus() {
    this.scanButton.color = 'success';
    this.scanButtonText = 'SCAN ACTIF';
    this.scanService.scanState = true;
  }


  async scanInputAction() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant le chargement du kit',
    });
    await loading.present();
    this.scanService.getScanInput(this.scanInput.value.toString())
      .then((kit: Kit) => {
        if (!this.kitService.kitIsInKits(kit, this.molding.kits)) {
          this.molding.kits.push(kit);
          this.moldingService.updateDates(this.molding);
          this.presentToast('Kit ajouté !');
        } else {
          this.presentToast('Le kit a déjà été scanné');
          console.log('kit en doublon');
        }
      })
      .catch(() => {
        this.wrongKitInputAlert();
        console.error('Le kit scanné ne semble pas être un kit');
      })
      .finally(() => {
        this.scanInput.value = '';
        loading.dismiss();
      });
    const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  removeKit(index: number) {
    try {
      this.molding.kits.splice(index, 1);
      console.log(`Kit removed ${index}`);
      this.moldingService.updateDates(this.molding);
    } catch (error) {
      console.error(error);
    }
  }

  saveMoldingClick() {
    this.saveMolding()
      .then(() => {
        // On demande si on veut imprimer ou non
        console.log('Kit sauvegardé. Voulez-vous imprimer ?');
        this.presentAlertConfirm();
      },
        () => {
          this.saveMoldingErrorAlert();
        });
  }

  saveMolding() {
    return new Promise<void>((resolve, reject) => {
      this.checkMoldingDatas()
        .then((moldingDatasStatus) => {
          console.log('le moulage à le statut : ', moldingDatasStatus);
          if (moldingDatasStatus) {
            // sauvegarder le moulage en base de donnée
            this.molding.moldingUser = this.authService.authUser;
            if (this.molding.id === null) {
              this.moldingService.saveMolding(this.moldingService.toIri(this.molding))
                .then((responseMolding: Molding) => {
                  this.molding = this.moldingService.moldingServerToMoldingObject(responseMolding);
                  console.log('tout est OK le moulage est sauvegardé', this.molding);
                  resolve();
                },
                  () => {
                    console.log('tout n\'est pas Ok la sauvegarde a échouée');
                    reject();
                  });
            } else {
              this.moldingService.updateMolding(this.moldingService.toIri(this.molding))
                .then((responseMolding: Molding) => {
                  this.molding = responseMolding;
                  console.log('tout est OK le moulage est mis à jour');
                  resolve();
                },
                  () => {
                    console.error('tout n\'est pas Ok la mise à jour du moulage a échouée');
                    reject();
                  });
            }
          } else {
            console.error('sauvegarde abandonnée');
            reject();
          }
        });
    });
  }

  checkMoldingDatas() {
    return new Promise<boolean>((resolve, reject) => {
      if (this.molding.outillage === null) {
        console.log('le moulage n\'a pas d\'outillage associé. Voulez-vous continuer sans outillage ?');
        this.presentAlertToolMissing()
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

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Enregistrement effectué',
      message: 'Voulez-vous imprimer la fiche ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: ['ion-color-primary', 'ion-button'],
          id: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Oui',
          id: 'confirm-button',
          cssClass: 'ion-color-danger',
          handler: () => {
            this.printMolding();
          },
        }
      ]
    });

    await alert.present();
  }

  presentAlertToolMissing() {
    return new Promise<boolean>((resolve, reject) => {
      this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alerte',
        message: 'L\'outillage de moulage n\'est pas associé. voulez-vous continuer sans outillage ?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            cssClass: ['ion-color-primary', 'ion-button'],
            id: 'cancel-button',
            handler: () => {
              console.log('Response false');
              resolve(false);
            }
          }, {
            text: 'Oui',
            id: 'confirm-button',
            cssClass: 'ion-color-danger',
            handler: () => {
              console.log('Response true');
              resolve(true);
            },
          }
        ]
      })
        .then((alert) => {
          alert.present();
        });
    });

  }

  printMolding() {
    // this.moldingService.molding = this.molding;
    console.log(this.molding);
    this.router.navigate(['/printMolding', this.molding.id]);
  }

  printMoldingClick() {
    this.saveMolding()
      .then(() => {
        this.printMolding();
      });
  }

  async wrongKitInputAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur Kit',
      subHeader: 'Kit non conforme',
      message: 'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  async saveMoldingErrorAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur de sauvegarde',
      subHeader: 'Le moulage n\'a pas été sauvegardé',
      message: 'Veuillez ré-essayer',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    // console.log('onDidDismiss resolved with role', role);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      translucent: true,
      animated: true,
    });
    toast.present();
  }

  async kitAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Scannez un kit',
      inputs: [
        {
          name: 'kitnumber',
          type: 'text',
          placeholder: 'Scannez le kit',
          tabindex: 1,
          id: 'kitNumberInput',
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'ion-color-secondary',
          handler: (data) => {
            console.log('Confirm Cancel', data);
          }
        }, {
          text: 'Valider',
          cssClass: ['ion-color-primary', 'button', 'button-solid'],
          handler: (data) => {
            this.scanInputAction();
          }
        }
      ]
    });

    await alert.present().then(() => {
      const toolNumberInput = document.getElementById('toolNumberInput');
      if (toolNumberInput) {
        toolNumberInput.focus();
      }
    });
  }
}
