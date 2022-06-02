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
      roles: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_METHODES'],
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
    const userName = this.loginForm.get('userName').value.replace(/^0+/, '');
    const password = this.loginForm.get('password').value || userName;

    this.authService.authenticate(userName, password)
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
    const prefRoute = this.reRouteOpts.find(
      (curRouteOpt) => this.authService.authUser.roles.some(
        (role) => curRouteOpt.roles.find(roleOpt => roleOpt === role)));
    if (prefRoute !== undefined) {
      this.navControler.navigateForward(prefRoute.route);
      return;
    }
    this.navControler.navigateForward('home');
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
