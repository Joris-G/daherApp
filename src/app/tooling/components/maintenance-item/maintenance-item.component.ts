import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController, IonInput } from '@ionic/angular';
import { UploadFileService } from 'src/app/shared/services/upload-file.service';
import { MaintenanceItem, MaintenanceItemFormGroup } from 'src/app/_interfaces/tooling/tool-request';

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
  public maintenanceItemForm = new FormGroup(
    {
      nonConformite: new FormControl(),
      rep: new FormControl(),
      actionsCorrectives: new FormControl(),
      delaiAction: new FormControl(),
      dateReal: new FormControl(),
    }
  ) as MaintenanceItemFormGroup;
  public validate = false;
  public maintenanceRealisee = false;

  constructor(
    private alertController: AlertController,
    private uploadFileService: UploadFileService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.maintenanceItem.currentValue !== changes.maintenanceItem.previousValue) {
      this.maintenanceItemForm.reset(this.maintenanceItem);
      // this.maintenanceItemForm.patchValue(this.maintenanceItem);
      this.validate = (this.maintenanceItem.id) ? true : false;
      this.maintenanceRealisee = (this.maintenanceItem.dateReal) ? true : false;
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
  }

  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

  // validateItemClick() {
  //   this.evValidateItem.emit(this.maintenanceItemForm.value);
  //   this.validate = true;
  // }

  async removeItemClick() {
    // êtes vous sûr ?
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerte confirmation',
      message: 'Message <strong>Etês vous sûr de vouloir supprimer cette maintenance?</strong>!!!',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => { }
        }, {
          text: 'OUI',
          id: 'confirm-button',
          handler: (value) => {
            this.confirmRemoveItem();
          }
        }
      ]
    });

    await alert.present();
  }

  confirmRemoveItem(): void {
    this.evRemoveItem.emit(this.maintenanceItem);
  }

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
        )
    }

  }
}
