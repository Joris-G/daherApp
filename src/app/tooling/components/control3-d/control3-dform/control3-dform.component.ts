import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestState, ToolRequestManager } from 'src/app/tooling/services/tool-request-manager.service';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { MoyenMesure, SpecCtrlFormGroup, ToolRequestFormGroup, TypeRapport } from 'src/app/_interfaces/tooling/tool-request';
import { catchError, concatMap, finalize, map, share, mergeMap, switchMap, concatMapTo, flatMap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';

@Component({
  selector: 'app-control3-dform',
  templateUrl: './control3-dform.component.html',
  styleUrls: ['./control3-dform.component.scss'],
})
export class Control3DFormComponent implements OnInit {
  requestState: RequestState
  canManage: boolean = true;
  canUpdate: boolean = true;

  toolRequestForm: FormGroup;
  controlForm: FormGroup;
  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;
  constructor(
    private formBuilder: FormBuilder,
    private toolRequestService: ToolRequestService,
    private toolRequestManager: ToolRequestManager,
    private loaderService: LoadingService,
  ) { }
  ngOnInit(): void {
    this.toolRequestForm = new ToolRequestFormGroup();
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
        //TODO  intervention
        interventionDate: new FormControl(),
        moyenMesure: new FormControl(),
        infosComplementaire: new FormControl(),
        outillage: new FormControl(),
        ligneBudgetaire: new FormControl(),
        statut: new FormControl(),
        visaControleur: new FormControl(),
      }
    ) as SpecCtrlFormGroup;

  }

  ionViewDidEnter() {
    console.log("subscription observable");
    this.loaderService.startLoading('Patienter pendant le chargement');
    const toolrequest$ = this.toolRequestService.toolRequest$
      .pipe(
        finalize(() => this.loaderService.stopLoading())
      )
    // .subscribe((resp) => {
    //   console.log(resp);
    //   this.toolRequestForm.patchValue(resp[0]);
    //   this.requestState = this.toolRequestManager.getStatus(resp[0].statut)
    // });
  }


  toolReceived(event) {
    this.controlForm.value.outillage = event;
  }


  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }
  submitControlForm() {
    console.log(this.controlForm);
    // this.loaderService.startLoading('Envoi de la demande en cours');
    this.toolRequestService.createControlRequest(this.controlForm.value)
      .subscribe(
        async () => {
          this.controlForm.reset();
          // await this.loaderService.stopLoading();
          // this.alertService.simpleAlert(
          //   'Message de l\'application',
          //   'Création d\'une demande',
          //   'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes')
          //   .then(() => {
          // this.navCtrl.navigateRoot('tooling/tool-request-list');
          // });
        },
        async (error) => {
          console.error(error);
          // await this.loaderService.stopLoading();
        });
  }

  // updateToolRequestForm() {
  //   console.log('updateForm', this.toolRequestForm);
  //   this.loaderService.startLoading('Chargement de la mise à jour');
  //   this.toolRequestService.updateRequest(this.toolRequestForm.value)
  //     .subscribe(
  //       (responseUpdatedRequest) => {
  //         console.log(responseUpdatedRequest);
  //         this.toolRequestService.updateControlRequest(this.controlForm.value)
  //           .subscribe(
  //             async () => {
  //               await this.loaderService.stopLoading();
  //               this.controlForm.reset();
  //               await this.alertService.simpleAlert(
  //                 'Message de l\'application',
  //                 'Mise à jour d\'une demande',
  //                 'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes')
  //                 .then(() => {
  //                   this.navCtrl.navigateRoot('tooling/tool-request-list');
  //                 });
  //             },
  //             async (error) => {
  //               await this.loaderService.stopLoading();
  //               this.alertService.simpleAlert(
  //                 'Erreur',
  //                 'Mise à jour d\'une demande',
  //                 'La demande n\'a pas pu être modifiée. Vérifiez les données');
  //               console.error(error);
  //               this.navCtrl.navigateRoot('tooling/tool-request-list');
  //             });
  //       },
  //       (err) => {
  //         this.loaderService.stopLoading();
  //         this.alertService.simpleAlert(
  //           'Erreur',
  //           'Mise à jour d\'une demande',
  //           'La demande n\'a pas pu être modifiée. Vérifiez les données');
  //         console.error(err);
  //         this.navCtrl.navigateRoot('tooling/tool-request-list');
  //       });
  // }

  onChangeStatut(event: any) {
    console.log('status change', this.toolRequestForm);
    this.toolRequestForm.controls.statut.patchValue(event);
  }

  ionViewDidLeave() {
    console.log('ctrl leave');
    this.controlForm.reset();
  }
}
