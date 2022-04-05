import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RequestType } from 'src/app/_enums/request-type';
import { MaintenanceItem, SpecMaintRep } from 'src/app/_interface/spec-maint-rep';
import { Tool } from 'src/app/_interface/tool';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { PdfService } from 'src/app/_services/divers/pdf.service';
import { ToolRequestService } from 'src/app/_services/toolRequest/tool-request.service';
import { ToolService } from 'src/app/_services/tools/tool.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-maintenance-reparation',
  templateUrl: './maintenance-reparation.page.html',
  styleUrls: ['./maintenance-reparation.page.scss'],
})
export class MaintenanceReparationPage implements OnInit {
  public toolRequest: ToolRequest;
  public maintRepForm: FormGroup;

  constructor(
    private pdfService: PdfService,
    private toolRequestService: ToolRequestService,
    private authService: AuthService,
    private toolService: ToolService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.maintRepForm = new FormGroup(
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

    this.toolRequest = {
      createdAt: new Date(),
      dateBesoin: new Date(),
      demandeur: this.authService.authUser,
      toolSAP: null,
      type: RequestType.modifyAndMaintain,

      maintenance:
      {
        description: '',
        dateBesoin: null,
        userCreat: this.authService.authUser,
        outillage: null,
        equipement: null,
        image: '',
        fichier: '',
        sigle: '',
        userValideur: null,
        dateValid: new Date(),
        maintenanceItems: [],
        rep: [],
      }
    };
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }
  onValidateItem(ev: MaintenanceItem, item: MaintenanceItem) {
    item = ev;
    console.log(this.toolRequest.maintenance.maintenanceItems);
  }
  upDateSpec() {
    this.toolRequest.maintenance.dateBesoin = this.maintRepForm.controls.dateBesoin.value;
    this.toolRequest.maintenance.description = this.maintRepForm.controls.description.value;
    this.toolRequest.maintenance.image = this.maintRepForm.controls.image.value;
    this.toolRequest.maintenance.fichier = this.maintRepForm.controls.fichier.value;
  }

  toolOnChange(inputOTValue: string) {

    console.log(inputOTValue);
    switch (inputOTValue.length) {
      case 7:
        // this.toolService.getEquipement()
        break;
      case 8:
        if (inputOTValue.startsWith('OT')) {
          this.toolService.getToolByToolNumber(inputOTValue.substring(inputOTValue.length - 5))
            .then((responseTool: Tool) => {
              this.toolRequest.maintenance.outillage = responseTool;
            },
              (message: string) => {
                this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
                this.maintRepForm.controls.outillage.setValue('');
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
  addMaintenanceItem() {
    const maintenanceItem: MaintenanceItem = {
      rep: this.toolRequest.maintenance.maintenanceItems.length + 1
    };
    this.toolRequest.maintenance.maintenanceItems.push(maintenanceItem);
  }
  submitMaintenanceForm() {

  }

  pdfExportClick() {

  }
}
