import { Component, effect, inject, signal } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RequestState, ToolRequestManager } from '../../services/tool-request-manager.service';
import { Control3DFormComponent } from './control3-dform/control3-dform.component';
import { ToolRequestFooterComponent } from '../tool-request-footer/tool-request-footer.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/angular/standalone';
import { RequestStatus, ToolRequest, ToolRequestCreation } from 'src/app/_interfaces/tooling/tool-request-types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToolRequestService } from '../../services/tool-request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-control',
    templateUrl: './control.page.html',
    styleUrls: ['./control.page.scss'],
    standalone: true,
  imports: [
        Control3DFormComponent,
        ToolRequestFooterComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter
    ],
})
export class Control3DPage {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly toolRequestService = inject(ToolRequestService);
  private readonly toolRequestManager: ToolRequestManager = inject(ToolRequestManager);
  private readonly loaderService: LoadingService = inject(LoadingService);
  private readonly alertService: AlertService = inject(AlertService);
  private readonly navCtrl: NavController = inject(NavController);
  private readonly route = inject(ActivatedRoute);
  // ============================================================================
  // SIGNALS (État réactif)
  // ============================================================================
  protected readonly toolRequest = signal<ToolRequest | null>(null);
  // protected readonly controlRequest = signal<ControlRequest | null>(null);
  protected readonly requestState = signal<RequestState>(new RequestState());
  protected readonly pageTitle = signal('Nouvelle demande de contrôle 3D');

  readonly toolRequestId: string;
  // controlForm: FormGroup
  // toolRequestForm: FormGroup
  // outillNoRefSAPForm: FormGroup;

  // ============================================================================
  // LIFECYCLE HOOKS
  // ============================================================================
  constructor() {
    // Access route parameters from snapshot
    this.toolRequestId = this.route.snapshot.paramMap.get('id');
    // Écouter les changements de requête pour mettre à jour le titre
    effect(() => {
      const tool = this.toolRequest();
      // this.controlRequest.set(tool.typeData);
      if (tool?.id) {
        this.pageTitle.set(`Modification demande de contrôle 3D : ID ${tool.id}`);
      }
    });
  }

  ionViewCanEnter() {

    this.toolRequestService.getToolRequest(this.toolRequestId)
      .pipe(
        takeUntilDestroyed()
      )
      .subscribe({
        next: (toolRequest) => {
          this.toolRequest.set(toolRequest);
          this.requestState.set(
            this.toolRequestManager.getStatus(toolRequest.statut)
          );
        },
        error: (error) => this.handleError('Chargement de la demande', error)
      });
  }


  // ============================================================================
  // HANDLERS D'ÉVÉNEMENTS
  // ============================================================================
  protected onSubmit(toolRequest: ToolRequestCreation) {
    this.loaderService.startLoading('Création de la demande');

    this.toolRequestService.createToolRequest(toolRequest)
      .subscribe({
        next: () => {
          this.alertService.simpleAlert(
            'Succès',
            'Création d\'une demande',
            'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes'
          ).then(() => {
            this.navCtrl.navigateRoot('tooling/tool-request-list');
          });
        },
        error: (error) => this.handleError('Création de la demande', error),
        complete: () => this.loaderService.stopLoading()
      });
  }


  protected onUpdate(toolRequest: Partial<ToolRequest>) {
    this.loaderService.startLoading('Mise à jour de la demande');

    this.toolRequestService.updateToolRequest(toolRequest)
      .subscribe({
        next: () => {
          this.alertService.simpleAlert(
            'Succès',
            'Mise à jour d\'une demande',
            'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes'
          ).then(() => {
            this.navCtrl.navigateRoot('tooling/tool-request-list');
          });
        },
        error: (error) => this.handleError('Mise à jour de la demande', error),
        complete: () => this.loaderService.stopLoading()
      });
  }

  protected onStatusChange(newStatus: RequestStatus) {
    const currentToolRequest = this.toolRequest();
    if (currentToolRequest) {
      this.toolRequest.set({ ...currentToolRequest, statut: newStatus });
    }
  }


  // ============================================================================
  // MÉTHODES PRIVÉES
  // ============================================================================
  private handleError(operation: string, error: any) {
    console.error(`[Control3DPage] ${operation}:`, error);
    this.alertService.simpleAlert(
      'Erreur',
      operation,
      'Une erreur est survenue. Veuillez vérifier les données et réessayer.'
    );
    this.loaderService.stopLoading();
  }



}

