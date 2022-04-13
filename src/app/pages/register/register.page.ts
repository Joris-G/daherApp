import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController } from '@ionic/angular';
import { User } from 'src/app/_interface/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { RoleService } from 'src/app/_services/users/role.service';
import { SericesService } from 'src/app/_services/users/serices.service';
import { SiteService } from 'src/app/_services/users/site.service';
import { UniteService } from 'src/app/_services/users/unite.service';
import { UsersService } from 'src/app/_services/users/users.service';
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
  public services: any;
  public roles: any;
  public unites: any;
  public sites: any;

  constructor(
    private router: Router,
    private serviceService: SericesService,
    private siteService: SiteService,
    private uniteService: UniteService,
    private roleService: RoleService,
    private loadingController: LoadingController,
    private userService: UsersService,
    private alertController: AlertController,
    private alertService: AlertService,

  ) {
    this.roleForm = new FormGroup({
      poste: new FormControl(),
      service: new FormControl(),
      site: new FormControl(),
      unite: new FormControl(),
    });
    this.identityForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      matricule: new FormControl(),
      telephone: new FormControl(),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')])),
      confirmPassword: new FormControl('', Validators.required)
    }, this.matchingPasswords('password', 'confirmPassword'));
    this.getDatas();
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    // TODO maybe use this https://github.com/yuyang041060120/ng2-validation#notequalto-1
    return (group: FormGroup): { [key: string]: any } => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  async getDatas() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant le chargement des services',
    });
    await loading.present();
    const roleProm = this.roleService.getRoles();
    const serviceProm = this.serviceService.getServices();
    const uniteProm = this.uniteService.getUnites();
    const siteProm = this.siteService.getSites();
    Promise.all([serviceProm, roleProm, siteProm, uniteProm])
      .then((res: any[]) => {
        this.services = res[0];
        this.roles = res[1];
        this.sites = res[2];
        this.unites = res[3];

      })
      .finally(() => {
        loading.dismiss();
      });
    const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  ngOnInit() {
    this.language = 'FR';
  }

  switchToEnglish() {
    this.language = 'EN';
  }
  switchToFrench() {
    this.language = 'FR';
  }

  submitRole() {
    console.log(this.roleForm.value, this.identityForm.value);
    if (this.roleForm.value.poste !== 1) {
      this.identityForm.get('password').setValidators(Validators.required);
    }
    this.slider.slideNext();
  }
  submitNewUser() {
    console.log(this.roleForm.value, this.identityForm.value);
    const userToRegister: User = {
      matricule: Number.parseInt(this.identityForm.value.matricule, 10),
      nom: this.identityForm.value.lastName,
      prenom: this.identityForm.value.firstName,
      poste: `/api/postes/${this.roleForm.value.poste}`,
      service: `/api/services/${this.roleForm.value.service}`,
      password: this.identityForm.value.password || '',
      programmeAvion: [`/api/programme_avions/${1}`],
      site: `/api/usines/${this.roleForm.value.site}`,
      unite: `/api/divisions/${this.roleForm.value.unite}`,
    };
    this.userService.registerUser(userToRegister)
      .then((user: User) => {
        if (user.roles.includes('ROLE_CE_MOULAGE')) {
          this.alertService.simpleAlert(
            'Message d\'information',
            'Enregistrement effectué !',
            'Vous êtes bien enregistré. Vous allez être redirigé vers la page de connexion'
          )
            .then(() => {
              this.router.navigate(['login']);
            });
        } else {
          this.alertService.simpleAlert(
            'Message d\'information',
            'Enregistrement effectué !',
            'Vous êtes bien enregistré. Votre demande nécessite une validation. Vous allez être redirigé vers la page de connexion'
          )
            .then(() => {
              this.router.navigate(['login']);
            });
        }


      });
  }
}
