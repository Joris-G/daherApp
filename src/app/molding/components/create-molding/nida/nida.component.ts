import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdditionalMaterial, AdditionalMaterialForm } from 'src/app/_interfaces/molding/composite-material-types';
import { environment } from 'src/environments/environment';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { RequestService } from 'src/app/shared/services/request.service';


@Component({
  selector: 'app-nida',
  templateUrl: './nida.component.html',
  styleUrls: ['./nida.component.scss']
})
export class NidaComponent implements OnInit {
  @Output() nidaEmitter: EventEmitter<AdditionalMaterial> = new EventEmitter();
  @Input() batchNumberInput: string;
  public nidaForm: FormGroup;
  public references$: Observable<any[]>;
  constructor(
    private formBuilder: FormBuilder,
    private requestService: RequestService,
    private moldingService: MoldingService
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
      {
        outillageMoulage: `api/tools/${this.moldingService.molding.OT.id}`,
        page: '1',
        itemsPerPage: '50'
      }
    );
  }

  validate() {
    this.moldingService.addNida(this.nidaForm.value);
    this.nidaEmitter.emit(this.nidaForm.value);
  }
  changeInput() {
    console.log('input change');
  }
}
