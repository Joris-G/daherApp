import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IonSegment, IonicModule } from '@ionic/angular';
import { Subject } from 'rxjs';
import { AdditionalMaterial, Core, Densif } from 'src/app/_interfaces/molding/composite-material-types';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { NidaComponent } from '../nida/nida.component';

@Component({
    selector: 'app-non-expired-material-input',
    templateUrl: './non-expired-material-input.component.html',
    styleUrls: ['./non-expired-material-input.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        ReactiveFormsModule,
        FormsModule,
        NgIf,
        NidaComponent,
    ],
})
export class NonExpiredMaterialInputComponent implements OnInit, OnDestroy {
  @Input() materialObject: Subject<AdditionalMaterial>;
  @Input() batchNumber: string;
  @Output() typeInputEv: EventEmitter<Core | Densif> = new EventEmitter();
  @ViewChild('materialSegment') materialSegment: IonSegment;
  public nidaIsSelected: boolean;
  public otherIsSelected: boolean;
  public material: AdditionalMaterial | any;

  selectedType: any;
  constructor() { }
  ngOnDestroy(): void {
    this.materialObject.unsubscribe();
  }
  ngOnInit(): void {
    // if (Core.isCore(this.batchNumber)) {
    //   this.materialSegment.value = 'nida';
    // }
    console.log('init');

  }

  typeClick(type: string) {
    this.selectedType = type;
    // switch (type.target.value) {
    //   case 'densif':
    //     this.nidaIsSelected = false;
    //     this.otherIsSelected = true;
    //     break;
    //   case 'nida':
    //     this.nidaIsSelected = true;
    //     this.otherIsSelected = false;
    //     break;
    //   case 'clinquant':
    //     this.nidaIsSelected = false;
    //     this.otherIsSelected = true;
    //     break;
    // }
  }
  validate() {
    // switch
    // this.material.batchNumber = this.materialObject.value;
    this.materialObject.next(this.material);

    // console.log(this.material);
    // this.typeInputEv.emit(this.material);
  }
}
