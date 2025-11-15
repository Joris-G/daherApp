import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { UploadFileService } from 'src/app/shared/services/upload-file.service';
import { MaintenanceItem } from 'src/app/_interfaces/tooling/tool-request-types';

@Component({
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html',
  styleUrls: ['./maintenance-item.component.scss'],
})
export class MaintenanceItemComponent implements OnInit, OnChanges {
  @Input() maintenanceItem: MaintenanceItem;
  @Input() canUpdate: boolean;
  @Output() evValidateItem: EventEmitter<MaintenanceItem> = new EventEmitter<MaintenanceItem>();
  @Output() evRemoveItem: EventEmitter<MaintenanceItem> = new EventEmitter<MaintenanceItem>();


  public maintenanceRealisee = false;

  constructor(

    private uploadFileService: UploadFileService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.maintenanceItem.currentValue !== changes.maintenanceItem.previousValue) {
    //   this.maintenanceItemForm.reset(this.maintenanceItem);
    //   // this.maintenanceItemForm.patchValue(this.maintenanceItem);
    //   this.validate = (this.maintenanceItem.id) ? true : false;
    //   this.maintenanceRealisee = (this.maintenanceItem.dateReal) ? true : false;
    // }
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
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  // validateItemClick() {
  //   this.evValidateItem.emit(this.maintenanceItemForm.value);
  //   this.validate = true;
  // }





  validateRealMaintClick() {
    this.maintenanceRealisee = true;
  }


  uploadImage(ev: any) {
    console.log(ev);
    const file = ev.target.files[0];
    if (file) {
      this.uploadFileService.uploadFile(file)
        .subscribe(
          {
            next: (resp) => {

            }
          }
        );
    }

  }
}
