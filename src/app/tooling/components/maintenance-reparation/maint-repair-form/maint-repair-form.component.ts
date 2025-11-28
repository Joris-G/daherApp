import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RequestState } from 'src/app/tooling/services/tool-request-manager.service';
import { MaintenanceItem } from 'src/app/tooling/tool-request-types';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolInputComponent } from '../../tool-input/tool-input.component';
import { NgIf, NgFor } from '@angular/common';
import { MaintenanceItemComponent } from '../maintenance-item/maintenance-item.component';

@Component({
    selector: 'app-maint-repair-form',
    templateUrl: './maint-repair-form.component.html',
    styleUrls: ['./maint-repair-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        IonicModule,
        ToolInputComponent,
        NgIf,
        NgFor,
        MaintenanceItemComponent,
    ],
})
export class MaintRepairFormComponent implements OnInit, OnChanges {
  @Input()
  requestState: RequestState = { canManage: false, canUpdate: false, canEdit: false };

  @Input()
  toolRequestForm: FormGroup;
  @Output()
  toolRequestFormChange = new EventEmitter<FormGroup>();

  @Input()
  maintForm: FormGroup;
  @Output()
  maintFormChange = new EventEmitter<FormGroup>();
  public selectedItem: MaintenanceItem;

  constructor() { }

  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.maintForm) { this.maintFormChange.emit(this.maintForm); }
    if (changes.toolRequestForm) { this.toolRequestFormChange.emit(this.toolRequestForm); }
  }
  addMaintenanceItemClick() {
    // const newItemIndex = this.maintForm.controls.itemActionCorrective.value.addMaintenanceItem();
    // this.selectedItem = this.maintForm.controls.itemActionCorrective[newItemIndex - 1];
  }
  onRemoveItem(ev: MaintenanceItem, item: MaintenanceItem) {
    // if (this.maintForm.controls.itemActionCorrective.value.length === 1) { return; }
    // this.maintForm.controls.itemActionCorrective.value.splice(item.rep - 1, 1);
    // this.selectedItem = this.maintForm.controls.itemActionCorrective[this.maintForm.controls.itemActionCorrective.value.length - 1];
  }
}
