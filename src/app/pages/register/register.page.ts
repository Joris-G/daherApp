import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
const LANGUAGES = ['FR', 'EN'];
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public registerForm: FormGroup;
  public language: string;
  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      matricule: new FormControl(),
      role: new FormControl(),
    });
  }

  ngOnInit() {
  }
  onRegisterSubmit() {
    console.log(this.registerForm.value);

  }
  switchToEnglish() {
    this.language = 'EN';
  }
  switchToFrench() {
    this.language = 'FR';
  }

}
