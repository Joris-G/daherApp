import { AfterViewChecked, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MaintenanceItem } from 'src/app/_interface/spec-maint-rep';
import { AlertService } from 'src/app/_services/divers/alert.service';

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
  public maintenanceItemForm: FormGroup;
  public validate = false;
  public maintenanceRealisee = false;

  constructor(
    private alertService: AlertService,
    private alertController: AlertController,
  ) { }

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
    this.maintenanceRealisee = (this.maintenanceItem.dateReal) ? true : false;
    this.maintenanceItemForm = new FormGroup(
      {
        nonConformite: new FormControl(this.maintenanceItem.nonConformite),
        actionsCorrectives: new FormControl(this.maintenanceItem.actionsCorrectives),
        delaiAction: new FormControl(this.maintenanceItem.delaiAction),
        dateReal: new FormControl(this.maintenanceItem.dateReal),
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
    this.validate = true;
  }

  validateRealMaintClick() {
    this.maintenanceRealisee = true;
  }
}
