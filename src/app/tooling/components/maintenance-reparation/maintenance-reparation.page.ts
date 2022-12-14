import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonSelect, NavController } from '@ionic/angular';
import { MaintenanceItem, SpecMaintRep, ToolRequestFormGroup } from 'src/app/_interfaces/tooling/tool-request';
import { User } from 'src/app/_interfaces/user';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-maintenance-reparation',
  templateUrl: './maintenance-reparation.page.html',
  styleUrls: ['./maintenance-reparation.page.scss'],
})
export class MaintenanceReparationPage {

  @ViewChild('statut') ctrlStatut: IonSelect;
  public page = {
    title: 'Nouvelle demande Maintenance et Réparation'
  };


  public canManage: boolean;
  public canUpDate = false;
  //TODO quelle est la différence entre formbuilder et new FormGroup ?
  public toolRequestForm = new ToolRequestFormGroup();

  public maintRep: SpecMaintRep = new SpecMaintRep();
  public selectedItem: MaintenanceItem;
  public userList: User[];

  constructor(
    private toolRequestService: ToolRequestService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private loadingService: LoadingService,
    private roleGuard: RoleGuard,
    private activatedRoute: ActivatedRoute,
  ) { }

  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.loadMaintenanceData(id);
      this.canUpDate = true;
    } else {
      this.canUpDate = false;
    }
  }

  private loadMaintenanceData(idDemande: string) {
    this.loadingService.startLoading('Patienter pendant le chargement');
    this.toolRequestService.loadMaintenanceData(idDemande)
      .subscribe((response) => {
        this.toolRequestForm.patchValue(response.request);
        this.maintRep = response.specMaint;
        response.specMaint.itemActionCorrective.map((item, indexItem) => item.rep = indexItem + 1);
        this.maintRep.itemActionCorrective = response.specMaint.itemActionCorrective;
        this.selectedItem = this.maintRep.itemActionCorrective[0];
        this.loadingService.stopLoading();
      });
    // this.toolRequest = null;
    // this.toolRequestService.getToolRequest(idDemande)
    //   .subscribe((responseRequest: ToolRequest) => {
    //     // Change le titre de la page
    //     this.page.title = 'Modification demande de maintenance : ID ' + responseRequest.id;




    //     this.toolRequestService.getMaintenance(responseRequest.maintenance.id)
    //       .subscribe((responseMaint: SpecMaintRep) => {
    //         console.log('demande : ' + responseRequest, 'maintenance : ' + responseMaint);

    //         //Populate forms
    //         this.toolRequestForm.patchValue(responseRequest);
    //         this.maintRepForm.patchValue(responseMaint);

    //         //modifie l'objet pour le repère
    //         this.maintRepForm.value.itemActionCorrective.map((item: MaintenanceItem, index: number) => item.rep = index + 1);



    //         if (this.toolRequestForm.value.statut === 'NOUVELLE') {
    //           this.canUpDate = true;
    //           console.log('can update : ' + this.canUpDate);
    //           this.canManage = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
    //         } else {
    //           this.canUpDate = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);
    //           this.canManage = this.canUpDate;
    //           console.log(this.canUpDate);
    //         }
    //         this.loadingService.stopLoading();
    //       });
    //   },
    //     () => {
    //       this.navCtrl.back();
    //     });
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  // private onValidateItem(ev: MaintenanceItem, item: MaintenanceItem) {
  //   item = ev;
  //   this.maintRepForm.value.itemActionCorrective.push(item);
  //   console.log(this.maintRepForm.value.itemActionCorrective);
  // }

  onRemoveItem(ev: MaintenanceItem, item: MaintenanceItem) {
    if (this.maintRep.itemActionCorrective.length == 1) { return; }
    this.maintRep.itemActionCorrective.splice(item.rep - 1, 1);
    this.selectedItem = this.maintRep.itemActionCorrective[this.maintRep.itemActionCorrective.length - 1];
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
  onAffectationChange(event: any) {
    this.toolRequestForm.controls.groupeAffectation.patchValue(event);
  }

  addMaintenanceItemClick() {
    const newItemIndex = this.maintRep.addMaintenanceItem();
    this.selectedItem = this.maintRep.itemActionCorrective[newItemIndex - 1];
  }

  submitMaintenanceForm() {
    console.log(this.maintRep);
    this.toolRequestService.createMaintenanceRequest(this.maintRep)
      .then(() => {
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
      .pipe(
        switchMap(() => this.toolRequestService.updateMainteanceRequest(this.maintRep))
      )
      .subscribe(() => {
        this.loadingService.stopLoading();
        this.alertService.simpleAlert(
          'Message de l\'application',
          'Mise à jour d\'une demande',
          'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes')
          .then(() => {
            this.navCtrl.navigateForward('tooling/tool-request-list');
          });

      },
        (error) => {
          this.loadingService.stopLoading();
          this.alertService.simpleAlert(
            'Erreur',
            'Mise à jour d\'une demande',
            'La demande n\'a pas pu être modifiée. Vérifiez les données');
          console.error(error);
        }
      );
  }
}
