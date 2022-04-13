import { AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaintenanceItem } from 'src/app/_interface/spec-maint-rep';

@Component({
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html',
  styleUrls: ['./maintenance-item.component.scss'],
})
export class MaintenanceItemComponent implements OnInit, OnChanges {
  @Input() maintenanceItem: MaintenanceItem;
  @Output() evValidateItem: EventEmitter<MaintenanceItem> = new EventEmitter<MaintenanceItem>();
  @Output() evRemoveItem: EventEmitter<MaintenanceItem> = new EventEmitter<MaintenanceItem>();
  public maintenanceItemForm: FormGroup;
  public validate = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.maintenanceItem) {
      console.log('onchange');
    }
  }
  ionViewWillEnter() {

    // this.maintenanceItemForm.patchValue(
    //   {
    //     nonConformite: this.maintenanceItem.nonConformite,
    //     actionsCorrectives: this.maintenanceItem.actionsCorrectives,
    //     delaiAction: this.maintenanceItem.delaiAction,
    //   }
    // );
  }
  ngOnInit() {
    console.log('onInit');
    this.validate = (this.maintenanceItem.id) ? true : false;
    this.maintenanceItemForm = new FormGroup(
      {
        nonConformite: new FormControl(this.maintenanceItem.nonConformite),
        actionsCorrectives: new FormControl(this.maintenanceItem.actionsCorrectives),
        delaiAction: new FormControl(this.maintenanceItem.delaiAction),
      }
    );
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  validateItemClick() {
    this.evValidateItem.emit(this.maintenanceItem);
    this.validate = true;
  }

  removeItemClick() {
    this.evRemoveItem.emit(this.maintenanceItem);
    this.validate = true;
  }
}
