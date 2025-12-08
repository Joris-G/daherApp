import { Component, input } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { IonRow, IonGrid, IonInput, IonCol, IonLabel, IonItem, IonText, IonNote } from "@ionic/angular/standalone";


@Component({
    selector: 'app-identity-form',
    templateUrl: './identity-form.component.html',
    styleUrls: ['./identity-form.component.scss'],
    standalone: true,
  imports: [IonNote, IonLabel, IonGrid, IonRow, IonCol, IonInput, IonItem, IonText, IonNote,
    ReactiveFormsModule,
    CardComponent
    ],
})
export class IdentityFormComponent {
  identityForm = input<AbstractControl>();
}
