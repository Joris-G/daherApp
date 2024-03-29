import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, ValidatorFn, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IDivision } from 'src/app/_interfaces/division';
import { Poste } from 'src/app/_interfaces/poste';
import { Service } from 'src/app/_interfaces/service';
import { User, UserIri } from 'src/app/_interfaces/user';
import { IUsine } from 'src/app/_interfaces/usine';
import { AlertService } from 'src/app/core/services/divers/alert.service';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { RoleService } from 'src/app/core/services/users/role.service';
import { SericesService } from 'src/app/core/services/users/serices.service';
import { SiteService } from 'src/app/core/services/users/site.service';
import { UniteService } from 'src/app/core/services/users/unite.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { SwiperModule } from 'swiper/angular';
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
  public registerForm: FormGroup;
  public currentpage = 0;

  public slideOpts = {
    initialSlide: 0,
    speed: 400,
    allowTouchMove: false,
  };
  public services$ = new Observable<Service[]>();
  public roles$ = new Observable<Poste[]>();
  public unites$ = new Observable<IDivision[]>();
  public sites$ = new Observable<IUsine[]>();

  constructor(
    private router: Router,
    private serviceService: SericesService,
    private siteService: SiteService,
    private uniteService: UniteService,
    private roleService: RoleService,
    private loadingService: LoadingService,
    private userService: UsersService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.createForms();
    this.getDatas();
  }

  ionViewDidEnter() {
    this.slider.ionSlideWillChange.subscribe(() => {
      this.slider.getActiveIndex().then((responsePageIndex) => {
        this.currentpage = responsePageIndex;
        console.log(this.currentpage);
      });
    });
  }

  createForms() {
    this.registerForm = this.formBuilder.group({
      roleForm: this.formBuilder.group({
        poste: ['', Validators.required],
        service: ['', Validators.required],
        site: ['', Validators.required],
        unite: ['', Validators.required],
      }),
      identityForm: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        matricule: ['', Validators.required],
        telephone: [''],
        password: [''],
        confirmPassword: ['']
      })
    });
  }

  matchingPasswords(passwordKey: string, confirmPasswordKey: string, formGroup: FormGroup): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      const password = formGroup.controls.identityForm.value[passwordKey];
      const confirmPassword = formGroup.controls.identityForm.value[confirmPasswordKey];
      console.log(password.value !== confirmPassword.value);
      if (password.value !== confirmPassword.value) {
        return {
          mismatchedPasswords: true
        };
      }
    };
  }

  getDatas() {
    // this.loadingService.startLoading('Patienter pendant le chargement des services');
    this.roles$ = this.roleService.getRoles();
    this.services$ = this.serviceService.getServices();
    this.unites$ = this.uniteService.getUnites();
    this.sites$ = this.siteService.getSites();
  }
  //TODO ajouter message d'alerte pour aider à trouver un mot de passe valide
  submitRole() {
    if (this.registerForm.controls.roleForm.value.poste !== 1) {
      this.registerForm.controls.identityForm.get('password').setValidators([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
      this.registerForm.controls.identityForm.get('confirmPassword').setValidators([
        Validators.required,
        this.matchingPasswords('password', 'confirmPassword', this.registerForm)
      ]);
    }
    this.slider.slideNext();
  }


  submitNewUser() {
    this.loadingService.startLoading('Patienter pendant l\'enregistrement');
    const userToRegister: UserIri = {
      matricule: Number.parseInt(this.registerForm.controls.identityForm.value.matricule, 10),
      nom: this.registerForm.controls.identityForm.value.lastName,
      prenom: this.registerForm.controls.identityForm.value.firstName,
      poste: `/api/postes/${this.registerForm.controls.roleForm.value.poste}`,
      service: `/api/services/${this.registerForm.controls.roleForm.value.service}`,
      password: this.registerForm.controls.identityForm.value.password || '',
      programmeAvion: [`/api/programme_avions/${1}`],
      site: `/api/usines/${this.registerForm.controls.roleForm.value.site}`,
      unite: `/api/divisions/${this.registerForm.controls.roleForm.value.unite}`,
      tel: [`${this.registerForm.controls.identityForm.value.telephone}`]
    };
    this.userService.registerUser(userToRegister)
      .subscribe((user: User) => {
        this.loadingService.stopLoading();
        if (user.roles.includes('ROLE_CE_MOULAGE') || user.roles.includes('ROLE_CE_OUTILLAGE')) {
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
      },
        () => {
          this.loadingService.stopLoading();
        });
  }
}
