import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides, LoadingController } from '@ionic/angular';
import { User, UserIri } from 'src/app/_interface/user';
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
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.createForms();
  }

  ngOnInit(): void {
    this.getDatas();
  }

  createForms() {
    this.roleForm = this.formBuilder.group({
      poste: [''],
      service: [''],
      site: [''],
      unite: [''],
    });
    this.identityForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      matricule: [''],
      telephone: [''],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]],
      confirmPassword: ['', [
        Validators.required,
        this.matchingPasswords('password', 'confirmPassword')
      ]]
    });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      console.log(group);
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

  submitRole() {
    console.log(this.roleForm.value, this.identityForm.value);
    if (this.roleForm.value.poste !== 1) {
      this.identityForm.get('password').setValidators(Validators.required);
    }
    this.slider.slideNext();
  }


  submitNewUser() {
    console.log(this.roleForm.value, this.identityForm.value);
    const userToRegister: UserIri = {
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
