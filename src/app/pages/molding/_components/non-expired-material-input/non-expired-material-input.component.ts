import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Subject } from 'rxjs';
import { Core, Densif } from 'src/app/_interfaces/molding/composite-material-types';

@Component({
  selector: 'app-non-expired-material-input',
  templateUrl: './non-expired-material-input.component.html',
  styleUrls: ['./non-expired-material-input.component.scss'],
})
export class NonExpiredMaterialInputComponent implements OnInit, OnDestroy {
  @Input() materialObject: Subject<any>;
  @Input() batchNumber: string;
  @Output() typeInputEv: EventEmitter<Core | Densif> = new EventEmitter();
  @ViewChild('materialSegment') materialSegment: IonSegment;
  public nidaIsSelected: boolean;
  public otherIsSelected: boolean;
  public material: Core | any;

  selectedType: any;
  constructor() { }
  ngOnDestroy(): void {
    this.materialObject.unsubscribe();
  }
  ngOnInit(): void {
    if (Core.isCore(this.batchNumber)) {
      this.materialSegment.value = 'nida';
    }
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
