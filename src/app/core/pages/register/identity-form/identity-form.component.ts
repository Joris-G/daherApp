import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.scss'],
})
export class IdentityFormComponent implements OnInit {
  @Input('formGroup')
  registerForm: FormGroup;
  constructor() { }

  ngOnInit() { }

}
