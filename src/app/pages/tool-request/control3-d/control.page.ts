import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { MoyenMesure, SpecCtrl, TypeRapport } from 'src/app/_interface/spec-ctrl';
import { Tool } from 'src/app/_interface/tool';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { User } from 'src/app/_interface/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { PdfService } from 'src/app/_services/divers/pdf.service';
import { ToolRequestService } from 'src/app/_services/toolRequest/tool-request.service';
import { ToolService } from 'src/app/_services/tools/tool.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import { RoleService } from 'src/app/_services/users/role.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class Control3DPage implements OnInit {
  // public toolRequest.controle: toolRequest.controle;
  public toolRequest: ToolRequest;
  public controlForm: FormGroup;
  public typeRapport = TypeRapport;
  public canManage: boolean;
  public canUpDate = false;
  public userList: User[];
  public moyenMesure: MoyenMesure;


  constructor(
    private pdfService: PdfService,
    private toolRequestService: ToolRequestService,
    private authService: AuthService,
    private toolService: ToolService,
    private alertService: AlertService,
    private activatedRoute: ActivatedRoute,
    private roleGuard: RoleGuard,
    private userService: UsersService,
    private navCtrl: NavController,
    private loadingControler: LoadingController,
    public formBuilder: FormBuilder,
  ) { }

  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      // this.pageTitle = 'Modification moulage';
      console.log('did enter');
      this.loadControlData(id);
      // this.canUpDate = true;
    } else {
      console.log('test');
      this.canUpDate = false;
    }
    this.loadUsers();
  }


  upDateSpec() {
    console.log('updateSpec');
    this.toolRequest.controle.cheminCAO = this.controlForm.controls.caoPath.value;
    this.toolRequest.controle.refPlan = this.controlForm.controls.refPlan.value;
    this.toolRequest.controle.indPlan = this.controlForm.controls.indPlan.value;
    this.toolRequest.controle.ctrlReasons = this.controlForm.controls.ctrlReasons.value;
    this.toolRequest.controle.description = this.controlForm.controls.ctrlReasons.value;
    this.toolRequest.controle.detailsControle = this.controlForm.controls.ctrlDetails.value;
    this.toolRequest.controle.typeRapport = this.controlForm.controls.typeRapport.value;
    this.toolRequest.controle.tolerances = this.controlForm.controls.precisionTolerances.value;
    this.toolRequest.controle.ligneBudgetaire = this.controlForm.controls.ligneBudgetaire.value;
    this.toolRequest.controle.infosComplementaire = this.controlForm.controls.infosComplementaire.value;
    this.toolRequest.controle.moyenMesure = this.controlForm.controls.moyenMesure.value;
    this.toolRequest.controle.ligneBudgetaire = this.controlForm.controls.ligneBudgetaire.value;
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  ngOnInit() {
    console.log('init');
    this.controlForm = this.formBuilder.group(
      {
        refPlan: new FormControl(),
        indPlan: new FormControl(),
        caoPath: new FormControl(),
        ctrlReasons: new FormControl(),
        ctrlDetails: new FormControl(),
        precisionTolerances: new FormControl(),
        dispoTool: new FormControl(),
        needDate: new FormControl(),
        typeRapport: new FormControl(),
        interventionDate: new FormControl(),
        moyenMesure: new FormControl(),
        infosComplementaire: new FormControl(),
        outillage: new FormControl(),
        ligneBudgetaire: new FormControl(),
        statut: new FormControl(),
      }
    );
    this.toolRequest = {
      createdAt: null,
      demandeur: '',
      toolSAP: '',
      dateBesoin: new Date(),
      type: '',
      controle: {
        refPlan: '',
        indPlan: '',
        cheminCAO: '',
        ctrlReasons: '',
        detailsControle: '',
        tolerances: '',
        dispoOut: new Date(),
        dateBesoin: new Date(),
        typeRapport: TypeRapport.dqrc,
        interventionDate: null,
        moyenMesure: MoyenMesure.bras,
        infosComplementaire: '',
        // reportDate: new Date(),
        userCreat: this.authService.authUser,
        outillage: null,
        ligneBudgetaire: '',
        visaControleur: ''
      }
    };
  }

  ionViewDidLeave() {
    this.controlForm.reset();
  }

  loadUsers() {
    this.userService.getUsers()
      .then((responseUsers: User[]) => {
        this.userList = responseUsers;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async loadControlData(idDemande: string) {
    const loading = await this.loadingControler.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant le chargement',
      spinner: 'lines-sharp'
    });
    await loading.present();
    this.toolRequestService.getToolRequest(idDemande)
      .then((responseRequest: ToolRequest) => {
        this.toolRequest = responseRequest;
        this.toolRequestService.getControl(this.toolRequest.controle.id)
          .then((controle: SpecCtrl) => {
            console.log(controle);
            this.toolRequest.controle = controle;
            this.toolService.getToolById(controle.outillage.toString().substr(controle.outillage.toString().length - 1, 1))
              .then((toolResponse: Tool) => {
                this.toolRequest.controle.outillage = toolResponse;

                this.userService.getUserById(controle.userCreat.toString().substr(controle.userCreat.toString().length - 1, 1))
                  .then((user: User) => {
                    this.toolRequest.controle.userCreat = user;
                    console.log(this.toolRequest);
                    this.controlForm.patchValue({
                      refPlan: this.toolRequest.controle.refPlan,
                      indPlan: this.toolRequest.controle.indPlan,
                      caoPath: this.toolRequest.controle.cheminCAO,
                      ctrlReasons: this.toolRequest.controle.ctrlReasons || this.toolRequest.controle.description,
                      ctrlDetails: this.toolRequest.controle.detailsControle,
                      precisionTolerances: this.toolRequest.controle.tolerances,
                      dispoTool: this.toolRequest.controle.dispoOut,
                      needDate: this.toolRequest.controle.dateBesoin,
                      typeRapport: this.toolRequest.controle.typeRapport,
                      interventionDate: this.toolRequest.controle.interventionDate,
                      moyenMesure: this.toolRequest.controle.moyenMesure,
                      infoComplementaires: this.toolRequest.controle.infosComplementaire,
                      outillage: this.toolRequest.controle.outillage.sapToolNumber,
                      ligneBudgetaire: this.toolRequest.controle.ligneBudgetaire,
                      statut: this.toolRequest.statut,
                    });
                    loading.dismiss();
                    if (this.toolRequest.statut === 'NOUVELLE') {
                      this.canUpDate = true;
                      console.log(this.canUpDate);
                      this.canManage = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
                    } else {
                      this.canUpDate = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
                      this.canManage = this.canUpDate;
                      console.log(this.canUpDate);
                    }
                  });
              });
          });



      })
      .finally(() => {

      })
      .catch((error) => {
        console.error(error);
      });
  }

  submitControlForm() {
    this.upDateSpec();
    console.log(this.toolRequest.controle);
    this.toolRequestService.createControlRequest(this.toolRequest.controle)
      .then(() => {
        this.controlForm.reset();
        this.alertService.simpleAlert(
          'Message de l\'application',
          'Création d\'une demande',
          'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes')
          .then(() => {
            this.navCtrl.navigateForward('tooling/tool-request-list');
          });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateForm() {
    this.toolRequestService.updateControlRequest(this.toolRequest.controle)
      .then(() => {
        this.controlForm.reset();
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
  }

  pdfExportClick() {
    this.pdfService.openPDF(document.getElementById('toExport'));
  }

  toolOnChange(inputOTValue: string) {
    switch (inputOTValue.length) {
      case 7:
        // this.toolService.getEquipement()
        break;
      case 8:
        if (inputOTValue.startsWith('OT')) {
          this.toolService.getToolByToolNumber(inputOTValue.substring(inputOTValue.length - 5))
            .then((responseTool: Tool) => {
              this.toolRequest.controle.outillage = responseTool;
            },
              (message: string) => {
                this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
                this.controlForm.controls.outillage.setValue('');
              })
            .catch((error) => {
              console.error(error);
            });
        }
        break;
      default:
        break;
    }
  }
}

