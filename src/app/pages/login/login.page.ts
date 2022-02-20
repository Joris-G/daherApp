import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonInput, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/_services/users/auth.service';
import { environment } from 'src/environments/environment';

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
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    if (!environment.production) {
      console.log(this.userName.value);
      this.userName.value = 34567;
      this.password.value = 'test';
      this.onSubmit();
    }
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
