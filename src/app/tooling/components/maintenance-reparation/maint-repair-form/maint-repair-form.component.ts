import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToolInputComponent } from '../../tool-input/tool-input.component';
import { MaintenanceItemComponent } from '../maintenance-item/maintenance-item.component';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonToggle } from '@ionic/angular/standalone';
import { CardComponent } from "src/app/shared/components/card/card.component";
import { MaintenanceItem } from 'src/app/tooling/models/maintenance-and-repair.model';

@Component({
    selector: 'app-maint-repair-form',
    templateUrl: './maint-repair-form.component.html',
    styleUrls: ['./maint-repair-form.component.scss'],
    standalone: true,
    imports: [
      ReactiveFormsModule,
      ToolInputComponent,
      MaintenanceItemComponent,
      IonGrid, IonRow, IonCol,
      IonCard, IonCardHeader, IonCardTitle, IonCardContent,
      IonItem, IonList, IonListHeader, IonLabel,
      IonButton, IonToggle,
      IonIcon,
      CardComponent
  ],
})
export class MaintRepairFormComponent {
  public readonly maintForm = input<FormGroup>();
  selectedItem: MaintenanceItem;
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   if (changes.maintForm) { this.maintFormChange.emit(this.maintForm); }
  //   if (changes.toolRequestForm) { this.toolRequestFormChange.emit(this.toolRequestForm); }
  // }
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
