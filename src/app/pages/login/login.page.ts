import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public alertController: AlertController,) {
    this.loginForm = this.formBuilder.group({
      userName: ['JorisG', Validators.required],
      password: ['123', Validators.required]
    });
  }
  ngAfterViewInit(): void {
    this.onSubmit();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.authenticate(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value)
      .then(() => {
        this.loginForm.reset();
        this.router.navigate(['/home']);
      },
        () => {
          this.presentAlertConfirm();
        }
      );
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Erreur d\'authentification',
      message: 'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct',
      buttons: [
        {
          text: 'Fermer',
          role: 'cancel',
          id: 'cancel-button',
        }
      ]
    });

    await alert.present();
  }
}
