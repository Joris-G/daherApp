import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
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
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['34567', Validators.required],
      password: ['test', Validators.required]
    });
  }
  ngAfterViewInit(): void {
    this.onSubmit();
  }

  ngOnInit() {

  }

  onSubmit() {
    this.login();
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

  async login() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant la connexion',
      spinner: 'lines-sharp'
    });
    await loading.present();
    console.log('loading');
    // setTimeout(() => {
    this.authService.authenticate(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value)
      .then(() => {
        this.loginForm.reset();
        this.router.navigate(['/home']);
      },
        () => {
          this.presentAlertConfirm();
        },
      )
      .finally(() => {
        loading.dismiss();
      });
    // }, 2000);
  }
}
