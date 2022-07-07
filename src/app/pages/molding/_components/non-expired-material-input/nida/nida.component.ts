import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { AdditionalMaterial, AdditionalMaterialForm, Core } from 'src/app/_interfaces/molding/composite-material-types';
import { RequestService } from 'src/app/_services/request.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-nida',
  templateUrl: './nida.component.html',
  styleUrls: ['./nida.component.scss']
})
export class NidaComponent implements OnInit {
  @Output() nidaEmitter: EventEmitter<AdditionalMaterial> = new EventEmitter();
  @Input() batchNumberInput: string;
  public nidaForm: FormGroup;
  public references$: Observable<string[]>;
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
  ) { }

  ngOnInit(): void {
    this.nidaForm = this.formBuilder.group({
      numLot: new FormControl(this.batchNumberInput),
      id: new FormControl(),
      designation: new FormControl(),
      ref: new FormControl(''),
      typeMaterial: new FormControl(),
      outillageMoulage: new FormControl()
    }) as AdditionalMaterialForm;

    this.references$ = this.requestService.createGetRequest(
      `${environment.moldingApi}additional_materials`,
      { outillageMoulage: '95898' }
    );
  }

  validate() {
    this.nidaEmitter.emit(this.nidaForm.value);
  }
  changeInput() {
    console.log('input change');
  }
}
