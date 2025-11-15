import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RequestState } from 'src/app/tooling/services/tool-request-manager.service';
import { ToolRequestFormGroup, MaintFormGroup, MaintenanceItem } from 'src/app/_interfaces/tooling/tool-request-types';

@Component({
  selector: 'app-maint-repair-form',
  templateUrl: './maint-repair-form.component.html',
  styleUrls: ['./maint-repair-form.component.scss'],
})
export class MaintRepairFormComponent implements OnInit, OnChanges {
  @Input()
  requestState: RequestState = { canManage: false, canUpdate: false };

  @Input()
  toolRequestForm: ToolRequestFormGroup;
  @Output()
  toolRequestFormChange = new EventEmitter<ToolRequestFormGroup>();

  @Input()
  maintForm: MaintFormGroup;
  @Output()
  maintFormChange = new EventEmitter<MaintFormGroup>();
  public selectedItem: MaintenanceItem;

  constructor() { }

  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.maintForm) { this.maintFormChange.emit(this.maintForm); }
    if (changes.toolRequestForm) { this.toolRequestFormChange.emit(this.toolRequestForm); }
  }
  addMaintenanceItemClick() {
    const newItemIndex = this.maintForm.controls.itemActionCorrective.value.addMaintenanceItem();
    this.selectedItem = this.maintForm.controls.itemActionCorrective[newItemIndex - 1];
  }
  onRemoveItem(ev: MaintenanceItem, item: MaintenanceItem) {
    if (this.maintForm.controls.itemActionCorrective.value.length === 1) { return; }
    this.maintForm.controls.itemActionCorrective.value.splice(item.rep - 1, 1);
    this.selectedItem = this.maintForm.controls.itemActionCorrective[this.maintForm.controls.itemActionCorrective.value.length - 1];
  }
}
