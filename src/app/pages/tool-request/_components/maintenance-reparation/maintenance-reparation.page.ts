import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonSelect, NavController } from '@ionic/angular';
import { RequestType } from 'src/app/_enums/request-type';
import { MaintenanceItem, SpecMaintRep } from 'src/app/_interfaces/tooling/spec-maint-rep';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
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
  public canManage: boolean;
  public canUpDate = false;
  public toolRequest: ToolRequest;
  // public maintRepForm: FormGroup;
  public maintRepForm = new FormGroup(
    {
      outillage: new FormControl(),
      needDate: new FormControl(),
      equipment: new FormControl(),
      image: new FormControl(),
      fichier: new FormControl(),
      sigle: new FormControl(),
      userValideur: new FormControl(),
      dateValid: new FormControl(),
    }
  );
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

    this.toolRequest = {
      createdAt: new Date(),
      dateBesoin: new Date(),
      demandeur: this.authService.authUser,
      toolSAP: null,
      type: RequestType.maintenance,

      maintenance:
      {
        dateBesoin: null,
        userCreat: this.authService.authUser,
        outillage: null,
        OT: null,
        equipement: null,
        image: '',
        fichier: '',
        sigle: '',
        userValideur: null,
        dateValid: new Date(),
        itemActionCorrective: [],
        rep: [],
      }
    };
  }

  loadMaintenanceData(idDemande: string) {
    this.toolRequest = null;
    this.toolRequestService.getToolRequest(idDemande)
      .subscribe((responseRequest: ToolRequest) => {
        this.toolRequestService.getMaintenance(responseRequest.maintenance.id)
          .subscribe((responseMaint: SpecMaintRep) => {
            this.toolRequest = responseRequest;
            this.toolRequest.maintenance = responseMaint;
            this.toolRequest.maintenance.itemActionCorrective.map((item: MaintenanceItem, index: number) => item.rep = index + 1);
            this.maintRepForm.patchValue({
              outillage: this.toolRequest.maintenance.outillage,
              needDate: this.toolRequest.maintenance.dateBesoin,
              equipment: this.toolRequest.maintenance.equipement,
              image: this.toolRequest.maintenance.image,
              fichier: this.toolRequest.maintenance.fichier,
              sigle: this.toolRequest.maintenance.sigle,
              userValideur: this.toolRequest.maintenance.userReal,
              dateValid: this.toolRequest.maintenance.dateValid,
            });
            this.page.title = 'Modification demande de maintenance : ID ' + this.toolRequest.id;
            if (this.toolRequest.statut === 'NOUVELLE') {
              this.canUpDate = true;
              console.log(this.canUpDate);
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
    console.log(this.toolRequest.maintenance.itemActionCorrective);
  }

  onRemoveItem(ev: MaintenanceItem, item: MaintenanceItem) {
    this.toolRequest.maintenance.itemActionCorrective.splice(item.rep - 1, 1);
    console.log(this.toolRequest.maintenance.itemActionCorrective);
  }

  upDateSpec() {
    this.toolRequest.maintenance.dateBesoin = this.maintRepForm.controls.dateBesoin.value;
    this.toolRequest.maintenance.image = this.maintRepForm.controls.image.value;
    this.toolRequest.maintenance.fichier = this.maintRepForm.controls.fichier.value;
  }

  addMaintenanceItem() {
    const maintenanceItem: MaintenanceItem = {
      rep: this.toolRequest.maintenance.itemActionCorrective.length + 1
    };
    this.toolRequest.maintenance.itemActionCorrective.push(maintenanceItem);
    console.log(this.toolRequest.maintenance.itemActionCorrective);
  }

  submitMaintenanceForm() {
    this.toolRequestService.createMaintenanceRequest(this.toolRequest.maintenance)
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
    this.toolRequestService.updateRequest(this.toolRequest)
      .subscribe((responseUpdatedRequest) => {
        console.log(responseUpdatedRequest);
        this.toolRequestService.updateMainteanceRequest(this.toolRequest)
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
