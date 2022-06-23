import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { ToolRequest, SpecCtrlFormGroup, MoyenMesure, TypeRapport, SpecCtrl } from 'src/app/_interfaces/tooling/tool-request';
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
  // @ViewChild('ctrlReasons') ctrlReasons: IonTextarea;
  // @ViewChild('statut') ctrlStatut: IonSelect;
  // public toolRequest: ToolRequest;
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
    this.controlForm = this.formBuilder.group(
      {
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


    // this.toolRequest = {
    //   createdAt: new Date(),
    //   demandeur: this.authService.authUser,
    //   toolSAP: '',
    //   dateBesoin: new Date(),
    //   type: '',
    //   controle: {
    //     refPlan: '',
    //     indPlan: '',
    //     cheminCAO: '',
    //     description: '',
    //     detailsControle: '',
    //     tolerances: '',
    //     dispoOut: new Date(),
    //     dateBesoin: new Date(),
    //     typeRapport: TypeRapport.dqrc,
    //     interventionDate: null,
    //     moyenMesure: MoyenMesure.bras,
    //     infosComplementaire: '',
    //     // reportDate: new Date(),
    //     demandeur: [this.authService.authUser],
    //     outillage: null,
    //     OT: null,
    //     ligneBudgetaire: '',
    //     visaControleur: ''
    //   }
    // };
  }

  toolReceived(event) {
    console.log(event);
    this.controlForm.value.outillage = event;
    console.log(this.controlForm);
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


  test(test) {
    console.log(test);
    // this.ctrlReasons.getInputElement()
    //   .then((htmlElement) => {
    //     console.log(htmlElement);
    //     this.toolRequest.controle.description = htmlElement.innerHTML;
    //   });
  }

  upDateSpec() {
    console.log('updateSpec');
    // this.toolRequest.controle.cheminCAO = this.controlForm.controls.caoPath.value;
    // this.toolRequest.controle.refPlan = this.controlForm.controls.refPlan.value;
    // this.toolRequest.controle.indPlan = this.controlForm.controls.indPlan.value;
    // this.toolRequest.controle.typeRapport = this.controlForm.controls.typeRapport.value;
    // this.toolRequest.controle.tolerances = this.controlForm.controls.precisionTolerances.value;
    // this.toolRequest.controle.ligneBudgetaire = this.controlForm.controls.ligneBudgetaire.value;
    // this.toolRequest.controle.infosComplementaire = this.controlForm.controls.infosComplementaire.value;
    // this.toolRequest.controle.description = this.controlForm.controls.ctrlReasons.value;
    // this.toolRequest.controle.moyenMesure = this.controlForm.controls.moyenMesure.value;
    // this.toolRequest.controle.ligneBudgetaire = this.controlForm.controls.ligneBudgetaire.value;
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }


  ionViewDidLeave() {
    console.log('ctrl leave');
    this.controlForm.reset();
  }

  loadControlData(idDemande: string) {
    this.loaderService.startLoading('Patienter pendant le chargement');
    console.log('load ctrl data');

    this.toolRequestService.getToolRequest(idDemande)
      .subscribe((responseRequest: ToolRequest) => {
        console.log(responseRequest);
        this.toolRequestService.getControl(responseRequest.controle.id)
          .subscribe((responseControle: SpecCtrl) => {
            this.controlForm.patchValue(responseControle);
            this.loaderService.stopLoading();
            //         console.log(responseRequest);
            //         this.toolRequest = responseRequest;
            //         this.toolRequest.controle = responseControle;
            //         // this.ctrlStatut.value = this.toolRequest.statut;
            //         this.controlForm.patchValue({
            //           refPlan: this.toolRequest.controle.refPlan,
            //           indPlan: this.toolRequest.controle.indPlan,
            //           caoPath: this.toolRequest.controle.cheminCAO,
            //           ctrlReasons: this.toolRequest.controle.description,
            //           ctrlDetails: this.toolRequest.controle.detailsControle,
            //           precisionTolerances: this.toolRequest.controle.tolerances,
            //           dispoTool: this.toolRequest.controle.dispoOut,
            //           needDate: this.toolRequest.controle.dateBesoin,
            //           typeRapport: this.toolRequest.controle.typeRapport,
            //           interventionDate: this.toolRequest.controle.interventionDate,
            //           moyenMesure: this.toolRequest.controle.moyenMesure,
            //           infoComplementaires: this.toolRequest.controle.infosComplementaire,
            //           outillage: this.toolRequest.controle.OT.sapToolNumber,
            //           ligneBudgetaire: this.toolRequest.controle.ligneBudgetaire,
            //           statut: this.toolRequest.statut,
            //         });
            //         this.page.title = 'Modification demande de contrôle 3D : ID ' + this.toolRequest.id;
            //         this.loaderService.stopLoading();
          });

        //     if (this.toolRequest.statut === 'NOUVELLE') {
        //       this.canUpDate = true;
        //       console.log(this.canUpDate);
        //       this.canManage = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
        //     } else {
        //       this.canUpDate = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
        //       this.canManage = this.canUpDate;
        //       console.log(this.canUpDate);
        //     }
        //   },
        //     () => {
        //       this.navCtrl.back();
      });
  }

  submitControlForm() {
    console.log(this.controlForm);
    // this.loaderService.startLoading('Envoie de la demande en cours');
    // this.upDateSpec();
    // console.log(this.toolRequest.controle);
    this.toolRequestService.createControlRequest(this.controlForm.value)
      .subscribe(
        () => {
          //       this.controlForm.reset();
          this.alertService.simpleAlert(
            'Message de l\'application',
            'Création d\'une demande',
            'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes');
          //         .then(() => {
          //           this.navCtrl.navigateForward('tooling/tool-request-list');
          //           this.loaderService.stopLoading();
          //         });

        }, (error) => {
          console.error(error);
          //       this.loaderService.stopLoading();
        });
  }

  updateForm() {
    console.log('updateForm');
    // this.loaderService.startLoading('Chargement de la mise à jour');
    // this.toolRequestService.updateRequest(this.toolRequest)
    //   .subscribe((responseUpdatedRequest) => {
    //     console.log(responseUpdatedRequest);
    //     this.toolRequestService.updateControlRequest(this.toolRequest)
    //       .subscribe(
    //         () => {
    //           this.loaderService.stopLoading();
    //           this.controlForm.reset();
    //           this.alertService.simpleAlert(
    //             'Message de l\'application',
    //             'Mise à jour d\'une demande',
    //             'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes')
    //             .then(() => {
    //               this.navCtrl.navigateForward('tooling/tool-request-list');
    //             });
    //         },
    //         (error) => {
    //           this.alertService.simpleAlert(
    //             'Erreur',
    //             'Mise à jour d\'une demande',
    //             'La demande n\'a pas pu être modifiée. Vérifiez les données');
    //           console.error(error);
    //         });
    //   });
  }

  onChangeStatut(event: any) {
    // this.toolRequest.statut = event;
  }
}
