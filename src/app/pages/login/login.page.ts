import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonInput, NavController } from '@ionic/angular';
import { UpdateAppService } from 'src/app/_services/applicationUpdates/update-app.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { environment } from 'src/environments/environment';
import { isDevMode } from '@angular/core';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { AlertService } from 'src/app/_services/divers/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('userName') userName: IonInput;
  @ViewChild('password') password: IonInput;
  public loginForm: FormGroup;
  private reRouteOpts = [
    {
      roles: ['ROLE_MOULEUR', '	ROLE_RESP_MOULAGE', 'ROLE_CE_MOULAGE'],
      route: 'molding'
    },
    {
      roles: ['ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL', 'ROLE_OUTILLEUR'],
      route: 'tooling'
    },
    {
      roles: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_METHODE'],
      route: 'molding/create-molding'
    },
  ];



  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private updateService: UpdateAppService,
    private navControler: NavController,
    private alertService: AlertService,
  ) { }

  ionViewWillEnter(): void {
    if (isDevMode()) {
      this.loginForm.setValue({
        userName: environment.username,
        password: environment.password
      });
      // this.onSubmit();
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
    // Notification.requestPermission().then((result) => {
    //   if (!('Notification' in window)) {
    //     alert('Ce navigateur ne prend pas en charge la notification de bureau');
    //   }
    //   console.log(result);
    //   const img = 'assets/images/logoDaher.png';
    //   const text = 'Coucou ! Votre tâche "' + '" arrive maintenant à échéance.';
    //   const notification = new Notification('Liste de trucs à faire', { body: text, icon: img });
    // });

  }

  onSubmit() {
    this.loadingService.startLoading('Patienter pendant la connexion');
    this.authService.authenticate(
      this.loginForm.get('userName').value,
      this.loginForm.get('password').value || this.loginForm.get('userName').value)
      .subscribe(() => {
        this.afterLoginActions();
      },
        (error) => {
          this.logginError(error);
        },
      );
  }

  private afterLoginActions() {
    this.loadingService.stopLoading()
      .then(() => {
        this.loginForm.reset();
        this.reRouteUser();
        this.updateService.showUpdates();
      });

  }


  /**
   * Trouve la route privilégiée de l'utilisateur. Puis navigue vers la route
   *
   * @private
   * @memberof LoginPage
   */
  private reRouteUser() {
    this.reRouteOpts.forEach((routeOpt) => {
      if (this.authService.authUser.roles.find(role => routeOpt.roles.find(roleOpt => roleOpt === role))) {
        this.navControler.navigateForward(routeOpt.route);
      } else {
        this.navControler.navigateForward('home');
      }
    });
  }
  private logginError(error: any) {
    console.error(error);
    this.alertService.simpleAlert(
      'Erreur d\'authentification',
      '',
      'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct',
    );
    this.loadingService.stopLoading();
  }

}
