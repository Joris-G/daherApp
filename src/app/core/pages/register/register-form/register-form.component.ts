import { Component, OnInit } from '@angular/core';
import { FormGroup, ValidatorFn, Validators, FormBuilder, ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { User, UserIri } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;


  constructor(
    private router: Router,
    private userService: UsersService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForms();
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
        firstName: [''],
        lastName: [''],
        matricule: [''],
        telephone: [''],
        password: [''],
        confirmPassword: ['', [
          // this.matchingPasswords('password', 'confirmPassword', this.registerForm)
          this.matchValues('password'),
        ]]
      }
      )
    });
  }

  /**
   * //TODO A mettre dans une classe générale
   *
   * @param {string} matchTo  name of the control to match to
   * @return {*}  {((AbstractControl) => ValidationErrors | null)}
   * @memberof RegisterFormComponent
   */
  matchValues(matchTo: string): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

  //TODO remove formControl "confirmPassword" sur role ===1
  // submitRole() {
  //   if (this.registerForm.controls.roleForm.value.poste !== 1) {
  //   }
  // }


  submitNewUser() {
    //TODO voir comment améliorer cet objet il transform les formulaires 
    //en objet user que l'on peut intégrer directement dans le body de la requete

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
      .subscribe((user) => {
        this.confirmationProcess(user);
      });
  }

  private confirmationProcess(user: User): void {
    const validationRequired = this.isValidationRequired(user);
    this.sendConfirmationMessage(validationRequired)
      .then(() => {
        this.redirectToLoginPage();
      });
  }

  private sendConfirmationMessage(validationRequired: boolean) {
    return this.alertService.simpleAlert(
      'Message d\'information',
      'Enregistrement effectué !',
      this.getCustomSuccessMessage(validationRequired)
    );
  }

  private redirectToLoginPage() {
    this.router.navigate(['login']);
  }

  private getCustomSuccessMessage(validationRequired: boolean): string {
    const redirectMsg = `Vous allez être redirigé vers la page de connexion`;
    return (validationRequired) ? redirectMsg : `Votre demande nécessite une validation. ${redirectMsg}`;
  }

  private isValidationRequired(user: User) {
    return user.roles.includes('ROLE_CE_MOULAGE') || user.roles.includes('ROLE_CE_OUTILLAGE');
  }
}
