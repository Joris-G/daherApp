import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Core } from 'src/app/_interfaces/molding/composite-material-types';


@Component({
  selector: 'app-nida',
  templateUrl: './nida.component.html',
  styleUrls: ['./nida.component.scss']
})
export class NidaComponent implements OnInit {
  @Output() nidaEmitter: EventEmitter<Core> = new EventEmitter();
  @Input() batchNumberInput: string;
  public material: Core = {
    idCore: null,
    reference: '',
    batchNumber: ''
  };
  public references$: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
    this.material.batchNumber = this.batchNumberInput;
    this.references$ = of(['73P5522130C00301', '73P5522148C00401', '73P5522358C00301']);
  }

  validate() {
    this.nidaEmitter.emit(this.material);
  }

}
