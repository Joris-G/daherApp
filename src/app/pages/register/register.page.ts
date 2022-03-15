import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonSlides, LoadingController } from '@ionic/angular';
import { User } from 'src/app/_interface/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { RoleService } from 'src/app/_services/users/role.service';
import { SericesService } from 'src/app/_services/users/serices.service';
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

  constructor(
    private router: Router,
    private serviceService: SericesService,
    private roleService: RoleService,
    private loadingController: LoadingController,
    private userService: UsersService,
    private alertController: AlertController,
    private alertService: AlertService,

  ) {
    this.roleForm = new FormGroup({
      poste: new FormControl(),
      service: new FormControl(),
    });
    this.identityForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      matricule: new FormControl(),
      password: new FormControl()
    });
    this.getDatas();
  }

  async getDatas() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Patienter pendant le chargement des services',
    });
    await loading.present();

    const roleProm = this.roleService.getRoles();
    const serviceProm = this.serviceService.getServices();
    Promise.all([serviceProm, roleProm])
      .then((res: any[]) => {
        console.log(res);
        this.services = res[0];
        this.roles = res[1];
      })
      .finally(() => {
        loading.dismiss();
      });
    const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  ngOnInit() {
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
      programmeAvion: [`/api/programme_avions/${1}`]
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
