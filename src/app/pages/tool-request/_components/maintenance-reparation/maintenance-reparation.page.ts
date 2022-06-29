import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonSelect, NavController } from '@ionic/angular';
import { RequestType } from 'src/app/_enums/request-type';
import { ToolRequest, MaintenanceItem, SpecMaintRep, MaintFormGroup, ToolRequestFormGroup } from 'src/app/_interfaces/tooling/tool-request';
import { User } from 'src/app/_interfaces/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { ToolRequestService } from 'src/app/_services/tooling/toolRequest/tool-request.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';

@Component({
  selector: 'app-maintenance-reparation',
  templateUrl: './maintenance-reparation.page.html',
  styleUrls: ['./maintenance-reparation.page.scss'],
})
export class MaintenanceReparationPage implements OnInit, OnDestroy {
  @ViewChild('statut') ctrlStatut: IonSelect;
  public selectedItem: MaintenanceItem;
  public canManage: boolean;
  public canUpDate = false;
  public toolRequestForm = new FormGroup(
    {
      id: new FormControl(),
      statut: new FormControl(),
      groupeAffectation: new FormControl(),
    }) as ToolRequestFormGroup;
  // public maintRepForm: FormGroup;
  public maintRepForm = new FormGroup(
    {
      outillage: new FormControl(),
      dateBesoin: new FormControl(),
      // equipment: new FormControl(),
      image: new FormControl(),
      fichier: new FormControl(),
      sigle: new FormControl(),
      userValideur: new FormControl(),
      dateValid: new FormControl(),
      itemActionCorrective: new FormControl()
    }
  ) as MaintFormGroup;
  // public needDate = new FormControl();
  // public outillage = new FormControl();
  // public equipment = new FormControl();
  // public image = new FormControl();
  // public fichier = new FormControl();
  // public sigle = new FormControl();
  // public userValideur = new FormControl();
  // public dateValid = new FormControl();

  public page = {
    title: 'Maintenance et Réparation'
  };
  public userList: User[];

  constructor(
    private toolRequestService: ToolRequestService,
    private authService: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private loadingService: LoadingService,
    private roleGuard: RoleGuard,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnDestroy(): void {
    console.log('destroy');
  }
  ionViewDidLeave() {
    console.log('test lezave');
  }
  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.loadingService.startLoading('Patienter pendant le chargement');
      this.loadMaintenanceData(id);
      // this.canUpDate = true;
    } else {
      this.canUpDate = false;
    }
  }

  // ionViewDidEnter() {
  //   this.maintRepForm = new FormGroup(
  //     {
  //       outillage: new FormControl(),
  //       needDate: new FormControl(),
  //       equipment: new FormControl(),
  //       image: new FormControl(),
  //       fichier: new FormControl(),
  //       sigle: new FormControl(),
  //       userValideur: new FormControl(),
  //       dateValid: new FormControl(),
  //     }
  //   );
  // }

  ngOnInit() {
    // this.maintRepForm = new FormGroup(
    //   {
    //     outillage: new FormControl(),
    //     needDate: new FormControl(),
    //     equipment: new FormControl(),
    //     image: new FormControl(),
    //     fichier: new FormControl(),
    //     sigle: new FormControl(),
    //     userValideur: new FormControl(),
    //     dateValid: new FormControl(),
    //   }
    // );

    // this.toolRequest = {
    //   createdAt: new Date(),
    //   dateBesoin: new Date(),
    //   demandeur: this.authService.authUser,
    //   outillage: null,
    //   type: RequestType.maintenance,

    //   maintenance:
    //   {
    //     dateBesoin: null,
    //     userCreat: this.authService.authUser,
    //     outillage: null,
    //     OT: null,
    //     equipement: null,
    //     image: '',
    //     fichier: '',
    //     sigle: '',
    //     userValideur: null,
    //     dateValid: new Date(),
    //     itemActionCorrective: [],
    //     rep: [],
    //   }
    // };
  }

  loadMaintenanceData(idDemande: string) {
    // this.toolRequest = null;
    this.toolRequestService.getToolRequest(idDemande)
      .subscribe((responseRequest: ToolRequest) => {
        this.toolRequestForm.patchValue(responseRequest);
        this.toolRequestService.getMaintenance(responseRequest.maintenance.id)
          .subscribe((responseMaint: SpecMaintRep) => {
            console.log('maintenance : ' + responseMaint, 'demande : ' + responseRequest);
            this.maintRepForm.patchValue(responseMaint);
            this.maintRepForm.value.itemActionCorrective.map((item: MaintenanceItem, index: number) => item.rep = index + 1);
            this.page.title = 'Modification demande de maintenance : ID ' + this.toolRequestForm.value.id;
            if (this.toolRequestForm.value.statut === 'NOUVELLE') {
              this.canUpDate = true;
              console.log('can update : ' + this.canUpDate);
              this.canManage = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
            } else {
              this.canUpDate = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
              this.canManage = this.canUpDate;
              console.log(this.canUpDate);
            }
            this.loadingService.stopLoading();
          });
      },
        () => {
          this.navCtrl.back();
        });
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  onValidateItem(ev: MaintenanceItem, item: MaintenanceItem) {
    item = ev;
    console.log(this.maintRepForm.value.itemActionCorrective);
  }

  onRemoveItem(ev: MaintenanceItem, item: MaintenanceItem) {
    this.maintRepForm.value.itemActionCorrective.splice(item.rep - 1, 1);
    console.log(this.maintRepForm.value.itemActionCorrective);
  }

  onChangeStatut(event: any) {
    console.log('status change', this.toolRequestForm);
    this.toolRequestForm.controls.statut.patchValue(event);
  }
  // upDateSpec() {
  //   this.maintRepForm.dateBesoin = this.maintRepForm.controls.dateBesoin.value;
  //   this.toolRequest.maintenance.image = this.maintRepForm.controls.image.value;
  //   this.toolRequest.maintenance.fichier = this.maintRepForm.controls.fichier.value;
  // }
  affectationChange(event: any) {
    this.toolRequestForm.controls.groupeAffectation.patchValue(event);
  }
  addMaintenanceItem() {
    let rep: number;
    if (!this.maintRepForm.value.itemActionCorrective) {
      rep = 1;
      this.maintRepForm.value.itemActionCorrective = [];
    } else {
      rep = this.maintRepForm.value.itemActionCorrective.length + 1;
    }
    const maintenanceItem: MaintenanceItem = {
      actionsCorrectives: '',
      nonConformite: '',
      rep,
      delaiAction: new Date(),
    };
    this.maintRepForm.value.itemActionCorrective.push(maintenanceItem);
    this.selectedItem = maintenanceItem;
  }

  submitMaintenanceForm() {
    this.toolRequestService.createMaintenanceRequest(this.maintRepForm.value)
      .then(() => {
        this.maintRepForm.reset();
        this.alertService.simpleAlert(
          'Message de l\'application',
          'Création d\'une demande',
          'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes')
          .then(() => {
            this.navCtrl.navigateForward('tooling/tool-request-list');
          });
      },
        () => {
          console.log('reject');
        })
      .catch((error) => {
        console.error(error);
      });
  }

  updateForm() {
    this.loadingService.startLoading('Patienter pendant la mise à jour de la demande');
    this.toolRequestService.updateRequest(this.toolRequestForm.value)
      .subscribe((responseUpdatedRequest) => {
        console.log(responseUpdatedRequest);
        this.toolRequestService.updateMainteanceRequest(this.maintRepForm.value)
          .then(() => {
            this.maintRepForm.reset();
            this.loadingService.stopLoading();
            this.alertService.simpleAlert(
              'Message de l\'application',
              'Mise à jour d\'une demande',
              'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes')
              .then(() => {
                this.navCtrl.navigateForward('tooling/tool-request-list');
              });

          })
          .catch((error) => {
            this.alertService.simpleAlert(
              'Erreur',
              'Mise à jour d\'une demande',
              'La demande n\'a pas pu être modifiée. Vérifiez les données');
            console.error(error);
          });
      });
  }
}
