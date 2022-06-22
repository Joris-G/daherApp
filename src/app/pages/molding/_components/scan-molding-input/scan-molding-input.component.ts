import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AlertController, IonInput } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdditionalMaterial, Core, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { ScanService } from 'src/app/_services/scan/scan.service';


@Component({
  selector: 'app-scan-molding-input',
  templateUrl: './scan-molding-input.component.html',
  styleUrls: ['./scan-molding-input.component.scss'],
})
export class ScanMoldingInputComponent implements AfterViewInit {

  /**
   *
   *
   * @type {IonInput}
   * @memberof ScanMoldingInputComponent
   */
  @ViewChild('scanInput') scanInput: IonInput;

  /**
   *
   *
   * @type {IonInput}
   * @memberof ScanMoldingInputComponent
   */
  @ViewChild('scanButton') scanButton: IonInput;

  /**
   * Emet un évènement au moulage
   *
   * @type {(EventEmitter<Kit | Core | Tool>)}
   * @memberof ScanMoldingInputComponent
   */
  @Output() evOnInput: EventEmitter<Kit | AdditionalMaterial | Tool> = new EventEmitter<Kit | AdditionalMaterial | Tool | any>();


  /**
   *
   *
   * @type {string}
   * @memberof ScanMoldingInputComponent
   */
  public scanButtonText: string;

  /**
   *
   *
   * @type {boolean}
   * @memberof ScanMoldingInputComponent
   */
  public isOpenNonExpiredMaterial: boolean;


  /**
   *
   *
   * @type {Observable<any>}
   * @memberof ScanMoldingInputComponent
   */
  public getScanInput$: Observable<Core | Kit | Tool>;


  /**
   * Creates an instance of ScanMoldingInputComponent.
   *
   * @param scanService
   * @param loadingService
   * @memberof ScanMoldingInputComponent
   */
  constructor(
    private scanService: ScanService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private alertCtrl: AlertController,
  ) { }


  /**
   * Initialisation de la page create molding
   *
   * @memberof ScanMoldingInputComponent
   */
  ngAfterViewInit(): void {
    this.scanButtonText = 'SCAN INACTIF';
    this.scanButton.color = 'danger';
    this.scanService.scanState = false;
    this.scanInput.setFocus();
  }


  /**
   *Action du bouton.
   *Change l'état de la fonction "scan".
   *Si l'état est actif le focus est envoyé dans l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  switchScanState() {
    this.scanService.scanState = !this.scanService.scanState;
    if (this.scanService.scanState) {
      this.scanInput.setFocus();
    }
  }


  /**
   * Actions lors de la perte de focus sur l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  inputOnBlur() {
    this.scanButton.color = 'danger';
    this.scanButtonText = 'SCAN INACTIF';
    this.scanService.scanState = false;
  }


  /**
   * Actions lors de la reception du focus sur l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  inputOnFocus() {
    this.scanButton.color = 'success';
    this.scanButtonText = 'SCAN ACTIF';
    this.scanService.scanState = true;
  }


  /**
   * fonction lancée après l'entrée douchette.
   * Détecte l'objet d'entrée et l'emmet.
   *
   * @param inputValue entrée texte de l'input
   * @memberof ScanMoldingInputComponent
   */
  onInputChange(inputValue: string) {
    // this.loadingService.startLoading('Patienter pendant le chargement');
    this.scanService.getScanInput(inputValue).subscribe(
      (input) => {
        console.log(input);
        this.evOnInput.emit(input);
        this.scanInput.value = '';
        // this.loadingService.stopLoading();
        setTimeout(() => {
          this.scanInput.setFocus();
        }, 300);
      },
      (error) => {
        console.error(error);
        this.scanInput.value = '';
        // this.loadingService.stopLoading();
        this.alertService.simpleAlert(
          'Erreur lors du scan',
          'L\'élement scanné ne correspond à rien de connu',
          'Ré-essayer ou contacter j.grangier 06.87.89.24.25'
        );
      }
    );

    // this.alertService.simpleAlert(
    //   'Erreur lors du scan',
    //   'L\'élement scanné ne correspond à rien de connu',
    //   'Ré-essayer ou contacter j.grangier 06.87.89.24.25');
  }

}
