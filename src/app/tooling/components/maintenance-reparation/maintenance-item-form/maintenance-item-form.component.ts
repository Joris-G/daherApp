import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { MaintenanceItem, MaintenanceItemFormGroup } from 'src/app/_interfaces/tooling/tool-request-types';
import { NgIf, DatePipe } from '@angular/common';

@Component({
    selector: 'app-maintenance-item-form',
    templateUrl: './maintenance-item-form.component.html',
    styleUrls: ['./maintenance-item-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        IonicModule,
        NgIf,
        DatePipe,
    ],
})
export class MaintenanceItemFormComponent implements OnInit {
  @Input() maintenanceItem: MaintenanceItem;
  @Output() evRemoveItem: EventEmitter<MaintenanceItem> = new EventEmitter<MaintenanceItem>();
  public validate = false;
  public maintenanceItemForm = new FormGroup(
    {
      nonConformite: new FormControl(),
      rep: new FormControl(),
      actionsCorrectives: new FormControl(),
      delaiAction: new FormControl(),
      dateReal: new FormControl(),
    }
  ) as MaintenanceItemFormGroup;
  private alertController = inject(AlertController);

  ngOnInit() { }
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
}
