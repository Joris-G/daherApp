import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonInput, LoadingController, NavController } from '@ionic/angular';
import { UpdateAppService } from 'src/app/_services/applicationUpdates/update-app.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { environment } from 'src/environments/environment';
import { isDevMode } from '@angular/core';

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
    private loadingController: LoadingController,
    private updateService: UpdateAppService,
    private navControler: NavController
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
  }

  ngAfterViewInit(): void {
    if (isDevMode()) {
      this.loginForm.setValue({
        userName: environment.username,
        password: environment.password
      });
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
    this.authService.authenticate(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value || this.loginForm.get('userName').value)
      .then(() => {
        this.updateService.showUpdates()
          .then(() => {
            console.log(this.getSpecialRole(this.authService.authUser.roles));
            switch (this.getSpecialRole(this.authService.authUser.roles)) {
              case 'ROLE_MOULEUR':
                this.navControler.navigateForward('molding');
                break;
              case 'ROLE_ADMIN':
                this.navControler.navigateForward('tooling');
                break;
              case 'ROLE_RESP_OUTIL':
                this.navControler.navigateForward('tooling');
                break;
              default:
                this.navControler.navigateForward('home');
                break;
            }
            this.loginForm.reset();
          });

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

  getSpecialRole(userRoles: any): string {
    return userRoles[0];
  }
}
