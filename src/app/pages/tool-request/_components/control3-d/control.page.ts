import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ToolRequest, SpecCtrlFormGroup, MoyenMesure, TypeRapport, SpecCtrl, ToolRequestFormGroup }
  from 'src/app/_interfaces/tooling/tool-request';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { ToolRequestService } from 'src/app/_services/tooling/toolRequest/tool-request.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class Control3DPage implements OnInit {
  public toolRequestForm: FormGroup;
  public controlForm: FormGroup;
  public typeRapport = TypeRapport;
  public canManage: boolean;
  public canUpDate = false;
  public moyenMesure: MoyenMesure;
  public page = {
    title: 'Nouvelle demande de contrôle 3D'
  };


  constructor(
    private toolRequestService: ToolRequestService,
    private authService: AuthService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private roleGuard: RoleGuard,
    private navCtrl: NavController,
    private loadingControler: LoadingController,
    public formBuilder: FormBuilder,
    private loaderService: LoadingService
  ) { }


  ngOnInit() {
    console.log('init');
    this.toolRequestForm = this.formBuilder.group(
      {
        statut: new FormControl(),
        groupeAffectation: new FormControl(),
        id: new FormControl(),
      }
    ) as ToolRequestFormGroup;

    this.controlForm = this.formBuilder.group(
      {
        id: new FormControl(),
        refPlan: new FormControl(),
        indPlan: new FormControl(),
        cheminCAO: new FormControl(),
        description: new FormControl(),
        detailsControle: new FormControl(),
        tolerances: new FormControl(),
        dispoOut: new FormControl(),
        dateBesoin: new FormControl(),
        typeRapport: new FormControl(),
        // interventionDate: new FormControl(),
        moyenMesure: new FormControl(),
        infosComplementaire: new FormControl(),
        outillage: new FormControl(),
        ligneBudgetaire: new FormControl(),
        statut: new FormControl(),
      }
    ) as SpecCtrlFormGroup;
  }

  toolReceived(event) {
    this.controlForm.value.outillage = event;
  }

  upDateSpec() {
    console.log('updateSpec');
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }


  ionViewDidLeave() {
    console.log('ctrl leave');
    this.controlForm.reset();
  }



  submitControlForm() {
    console.log(this.controlForm);
    this.loaderService.startLoading('Envoi de la demande en cours');
    this.toolRequestService.createControlRequest(this.controlForm.value)
      .subscribe(
        async () => {
          await this.loaderService.stopLoading();
          //       this.controlForm.reset();
          this.alertService.simpleAlert(
            'Message de l\'application',
            'Création d\'une demande',
            'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes')
            .then(() => {
              this.navCtrl.navigateForward('tooling/tool-request-list');

            });

        },
        async (error) => {
          console.error(error);
          await this.loaderService.stopLoading();
        });
  }

  updateToolRequestForm() {
    console.log('updateForm', this.toolRequestForm);
    this.loaderService.startLoading('Chargement de la mise à jour');
    this.toolRequestService.updateRequest(this.toolRequestForm.value)
      .subscribe(
        (responseUpdatedRequest) => {
          console.log(responseUpdatedRequest);
          this.toolRequestService.updateControlRequest(this.controlForm.value)
            .subscribe(
              async () => {
                await this.loaderService.stopLoading();
                this.controlForm.reset();
                await this.alertService.simpleAlert(
                  'Message de l\'application',
                  'Mise à jour d\'une demande',
                  'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes')
                  .then(() => {
                    this.navCtrl.back();
                    // navigateForward('tooling/tool-request-list');
                  });
              },
              async (error) => {
                await this.loaderService.stopLoading();
                this.alertService.simpleAlert(
                  'Erreur',
                  'Mise à jour d\'une demande',
                  'La demande n\'a pas pu être modifiée. Vérifiez les données');
                console.error(error);
              });
        }
        ,
        (err) => {
          this.loaderService.stopLoading();
          this.alertService.simpleAlert(
            'Erreur',
            'Mise à jour d\'une demande',
            'La demande n\'a pas pu être modifiée. Vérifiez les données');
          console.error(err);
        });
  }

  onChangeStatut(event: any) {
    console.log('status change', this.toolRequestForm);
    // this.toolRequest.statut = event;
  }

  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (id) {
      this.loadControlData(id);
    } else {
      this.canUpDate = false;
    }
  }

  private loadControlData(idDemande: string) {
    this.loaderService.startLoading('Patienter pendant le chargement');
    this.toolRequestService.getToolRequest(idDemande)
      .subscribe((responseRequest: ToolRequest) => {
        console.log(responseRequest);
        this.toolRequestForm.patchValue(responseRequest);
        if (this.toolRequestForm.get('statut').value === 'NOUVELLE') {
          this.canUpDate = true;
          this.canManage = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
        } else {
          this.canUpDate = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
          this.canManage = this.canUpDate;
        }
        this.toolRequestService.getControl(responseRequest.controle.id)
          .subscribe((responseControle: SpecCtrl) => {
            console.log(responseControle.id);
            this.controlForm.patchValue(responseControle);
            this.controlForm.get('id').setValue(responseControle.id);
            console.log(this.controlForm.value);
            this.loaderService.stopLoading();
            this.page.title = 'Modification demande de contrôle 3D : ID ' + this.toolRequestForm.value.id;
          });
      },
        () => {
          this.navCtrl.back();
        });
  }


}
