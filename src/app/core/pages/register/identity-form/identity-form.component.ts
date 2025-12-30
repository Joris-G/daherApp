import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { IonRow, IonGrid, IonInput, IonCol, IonItem, IonText } from "@ionic/angular/standalone";


@Component({
    selector: 'app-identity-form',
    templateUrl: './identity-form.component.html',
    styleUrls: ['./identity-form.component.scss'],
    imports: [IonGrid, IonRow, IonCol, IonInput, IonItem, IonText,
        ReactiveFormsModule,
        CardComponent
    ]
})
export class IdentityFormComponent {
  identityForm = input.required<FormGroup>();
}
