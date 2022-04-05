import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MaintenanceItem } from 'src/app/_interface/spec-maint-rep';

@Component({
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html',
  styleUrls: ['./maintenance-item.component.scss'],
})
export class MaintenanceItemComponent implements OnInit {
  @Input() maintenanceItem: MaintenanceItem;
  @Output() evValidateItem: EventEmitter<MaintenanceItem> = new EventEmitter<MaintenanceItem>();
  public maintenanceItemForm: FormGroup;
  public validate = false;

  constructor() { }

  ngOnInit() {
    console.log(this.maintenanceItem);
    this.maintenanceItemForm = new FormGroup(
      {
        nonConformite: new FormControl(''),
        actionsCorrectives: new FormControl(''),
        delaiAction: new FormControl(''),
      }
    );
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  validateItem() {
    this.evValidateItem.emit(this.maintenanceItem);
    this.validate = true;
  }

}
