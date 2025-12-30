import { Component, effect, inject } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { IonicModule } from '@ionic/angular';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormBuilder } from './register-forms-builder';
import { FormGroup } from '@angular/forms';
import { User, UserCreate } from 'src/app/_interfaces/user';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { UsersStore } from 'src/app/shared/services/users/users.store';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    imports: [IonicModule, RegisterFormComponent]
})
export class RegisterPage {
  private readonly registerFormBuilder = inject(RegisterFormBuilder);
  protected registerForm: FormGroup;
  private readonly userStore = inject(UsersStore);
  private readonly router: Router = inject(Router);
  private readonly alertService: AlertService = inject(AlertService);
  private readonly loadingService: LoadingService = inject(LoadingService);
  //TODO externaliser la mise à jours des titres de page dans un sercice qui intercept le routing
  private titleService: TitleService = inject(TitleService);

  constructor() {
    this.registerForm = this.registerFormBuilder.initRegisterForm();
    effect(() => {
      const isCreatingUser = this.userStore.isCreatingUser();
      if (isCreatingUser) {
        this.loadingService.startLoading(`Patienter pendant la création de l'utilisateur`);
      } else {
        this.loadingService.stopLoading();
      }

      const registeredUser = this.userStore.registeredUser();
      if (registeredUser) {
        this.alertService.presentToast("Utilisateur créé avec succes", 'success');
        this.redirectToLoginPage();
      }
    })
  }

  ionViewDidEnter() {
    this.titleService.setTitle(`Création d'un compte`);
  }

  // ACTIONS
  protected createUser(userToCreate: UserCreate) {
    this.userStore.createUser(userToCreate);
  }

  private redirectToLoginPage() {
    this.router.navigate(['login']);
  }


}
