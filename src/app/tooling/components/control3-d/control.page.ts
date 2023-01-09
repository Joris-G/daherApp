import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { OutillNoRefSAPFormGroup, SpecCtrlFormGroup, ToolRequestFormGroup } from 'src/app/_interfaces/tooling/tool-request';
import { ControlToolRequestService } from '../../services/control-tool-request.service';
import { RequestState, ToolRequestManager } from '../../services/tool-request-manager.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class Control3DPage {
  requestState: RequestState = new RequestState();

  controlForm: SpecCtrlFormGroup = new SpecCtrlFormGroup();
  toolRequestForm: ToolRequestFormGroup = new ToolRequestFormGroup();
  outillNoRefSAPForm: OutillNoRefSAPFormGroup = new OutillNoRefSAPFormGroup();


  public page = {
    title: 'Nouvelle demande de contrôle 3D'
  };


  constructor(
    private controlTooRequestService: ControlToolRequestService,
    private toolRequestManager: ToolRequestManager,
    private loaderService: LoadingService,
    private alertService: AlertService,
    private navCtrl: NavController
  ) { }

  ionViewCanEnter() {
    this.controlTooRequestService.initCtrlToolRequest();
    this.controlTooRequestService.ctrlToolRequest$
      .subscribe((resp) => {
        console.log(resp);
        this.toolRequestForm.patchValue(resp[0]);
        this.controlForm.patchValue(resp[1]);
        this.requestState = this.toolRequestManager.getStatus(resp[0].statut)
      });
  }

  ionViewDidLeave() {
    this.controlForm.reset();
  }


  submitControlForm() {
    console.log(this.controlForm);

    this.controlTooRequestService.createControlRequest(this.controlForm.value)
      .subscribe(
        () => {
          this.controlForm.reset();
          // this.alertService.simpleAlert(
          //   'Message de l\'application',
          //   'Création d\'une demande',
          //   'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes')
          //   .then(() => {
          // this.navCtrl.navigateRoot('tooling/tool-request-list');
          // });
        });
  }

  updateToolRequestForm() {
    console.log('updateForm', this.toolRequestForm);
    this.loaderService.startLoading('Chargement de la mise à jour');

    this.controlTooRequestService.updateControlRequest(this.controlForm.value, this.toolRequestForm.value)
      .subscribe(
        () => {
          // this.controlForm.reset();
          this.alertService.simpleAlert(
            'Message de l\'application',
            'Mise à jour d\'une demande',
            'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes')
          //   .then(() => {
          this.navCtrl.navigateRoot('tooling/tool-request-list');
          //   });
        },
        async (error) => {
          this.onError(error);
        });
  }

  private onError(error: any) {
    this.alertService.simpleAlert(
      'Erreur',
      'Mise à jour d\'une demande',
      'La demande n\'a pas pu être modifiée. Vérifiez les données');
    console.error(error);
  }

  onChangeStatut(event: any) {
    console.log('status change', this.toolRequestForm);
    this.toolRequestForm.controls.statut.patchValue(event);
  }


}
