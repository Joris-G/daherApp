import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
// import Swiper core and required modules

const LANGUAGES = ['FR', 'EN'];
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('slider') slider: IonSlides;
  public roleForm: FormGroup;
  public identityForm: FormGroup;
  public language: string;
  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
  };

  constructor(private router: Router) {
    this.roleForm = new FormGroup({
      role: new FormControl(),
    });
    this.identityForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      matricule: new FormControl(),
    });
  }

  ngOnInit() {
  }

  onRegisterSubmit() {
    console.log(this.roleForm.value, this.identityForm.value);
  }
  switchToEnglish() {
    this.language = 'EN';
  }
  switchToFrench() {
    this.language = 'FR';
  }
  submitRole() {
    this.slider.slideNext();
  }
  submitNewUser() {
    this.router.navigate(['home']);
  }
}
