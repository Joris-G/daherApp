import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/shared/components/card/card.component';


@Component({
  standalone: true,
    selector: 'app-identity-form',
    templateUrl: './identity-form.component.html',
    styleUrls: ['./identity-form.component.scss'],
  imports: [
        ReactiveFormsModule,
    // CardComponent
    ]
})
export class IdentityFormComponent {
  identityForm = input.required<FormGroup>();
}
