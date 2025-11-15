import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-identity-form',
    templateUrl: './identity-form.component.html',
    styleUrls: ['./identity-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        IonicModule,
        NgIf,
    ],
})
export class IdentityFormComponent implements OnInit {
  @Input('formGroup')
  registerForm: FormGroup;
  constructor() { }

  ngOnInit() { }

}
