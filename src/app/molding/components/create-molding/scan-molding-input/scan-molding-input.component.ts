import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { IonButton, IonInput, IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdditionalMaterial, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Tool } from 'src/app/tooling/tool';
import { ScanService } from 'src/app/molding/services/scan.service';
import { NgIf } from '@angular/common';


@Component({
    selector: 'app-scan-molding-input',
    templateUrl: './scan-molding-input.component.html',
    styleUrls: ['./scan-molding-input.component.scss'],
    standalone: true,
    imports: [IonicModule, NgIf],
})
export class ScanMoldingInputComponent implements AfterViewInit, OnInit {
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
  @ViewChild('scanButton') scanButton: IonButton;

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
  public getScanInput$: Observable<AdditionalMaterial | Kit | Tool>;

  public loading: boolean;

  /**
   * Creates an instance of ScanMoldingInputComponent.
   *
   * @param scanService
   * @param loadingService
   * @memberof ScanMoldingInputComponent
   */
  constructor(
    private scanService: ScanService,
  ) {
    scanService.focusState$.subscribe((state) => {
      if (state) {
        this.scanInput.setFocus();
      }
    });
  }
  // ngAfterViewChecked() {
  //   this.scanInput.setFocus();
  // }
  ngOnInit(): void {
    // this.scanService.scanInput$.subscribe(
    //   (input) => {
    //     // this.loadingService.stopLoading();
    //     // console.log(input);
    //     // this.evOnInput.emit(input);
    //     this.scanInput.value = '';
    //     setTimeout(() => {
    //       this.scanInput.setFocus();
    //     }, 300);
    //   },
    //   (error) => {
    //     // this.loadingService.stopLoading();
    //     console.error(error);
    //     this.scanInput.value = '';
    //     this.alertService.simpleAlert(
    //       'Erreur lors du scan',
    //       'L\'élement scanné ne correspond à rien de connu',
    //       'Ré-essayer ou contacter j.grangier 06.87.89.24.25'
    //     );
    //   }
    // );
  }


  /**
   * Initialisation de la page create molding
   *
   * @memberof ScanMoldingInputComponent
   */
  ngAfterViewInit(): void {
    // this.scanButtonText = 'SCAN INACTIF';
    // this.scanButton.color = 'danger';
    // this.scanService.scanState = false;
  }


  /**
   *Action du bouton.
   *Change l'état de la fonction "scan".
   *Si l'état est actif le focus est envoyé dans l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  switchScanState() {
    this.scanService.toggleFocusOnInput();
  }


  /**
   * Actions lors de la perte de focus sur l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  inputOnBlur() {
    this.scanButton.color = 'danger';
    this.scanButtonText = 'SCAN INACTIF';
    // this.scanService.scanState = false;
  }


  /**
   * Actions lors de la reception du focus sur l'input
   *
   * @memberof ScanMoldingInputComponent
   */
  inputOnFocus() {
    this.scanButton.color = 'success';
    this.scanButtonText = 'SCAN ACTIF';
  }


  /**
   * fonction lancée après l'entrée douchette.
   * Détecte l'objet d'entrée et l'emmet.
   *
   * @param inputValue entrée texte de l'input
   * @memberof ScanMoldingInputComponent
   */
  onInputChange(inputValue: string) {
    this.startLoading();
    this.scanService.getScanInput(inputValue)
      .subscribe(() => {
        this.stopLoading();
      },
      (err)=>{
        console.error(err);
        this.stopLoading();

      });
  }


  private startLoading() {
    this.loading = true;
  }

  private stopLoading() {
    this.scanInput.value = '';
    this.loading = false;
    // this.scanService.tofocusOnInput();
  }
}
