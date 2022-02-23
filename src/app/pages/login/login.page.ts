import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, AfterViewInit {
  @ViewChild('userName') userName: IonInput;
  @ViewChild('password') password: IonInput;
  public loginForm: FormGroup;


  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
  }

  ngAfterViewInit(): void {
    this.userName.value = '';
    this.password.value = '';
  }

  ngOnInit() {
  }

  async onSubmit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant la connexion',
      spinner: 'lines-sharp'
    });
    await loading.present();
    this.authService.authenticate(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value || this.loginForm.get('userName').value)
      .then(() => {
        this.router.navigate(['/home']);
        this.loginForm.reset();
      },
        () => {
          this.presentAlertLoginError();
        },
      )
      .finally(() => {
        loading.dismiss();
      });
  }

  async presentAlertLoginError() {
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
