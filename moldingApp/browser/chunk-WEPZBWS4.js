import {
  AlertService,
  AuthStore,
  Component,
  DatePipe,
  EventEmitter,
  FormBuilder,
  HttpClient,
  Injectable,
  Input,
  IonicModule,
  LoadingService,
  ModalController,
  NgIf,
  Output,
  ReactiveFormsModule,
  RequestService,
  Validators,
  __decorate,
  catchError,
  environment,
  finalize,
  forkJoin,
  inject,
  isDevMode,
  map,
  of
} from "./chunk-BEQVXJQK.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-B3DYXOBH.js";

// src/app/shared/services/programs/programs.service.ts
var ProgramsService = class ProgramsService2 {
  http = inject(HttpClient);
  getPrograms() {
    return this.http.get(`${environment.usineApi}programme_avions`).pipe(map((resp) => resp.data));
  }
  getIri(programAvion) {
    if (typeof programAvion == "string") {
      return programAvion;
    } else {
      return `/api/programme_avions/${programAvion.id}`;
    }
  }
};
ProgramsService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ProgramsService);

// src/app/shared/services/users/serices.service.ts
var SericesService = class SericesService2 {
  requestService;
  constructor(requestService) {
    this.requestService = requestService;
  }
  getServices() {
    return this.requestService.createGetRequest(`${environment.usineApi}services`);
  }
  getIri(service) {
    if (typeof service == "string") {
      return service;
    } else {
      return `/api/services/${service.id}`;
    }
  }
  static ctorParameters = () => [
    { type: RequestService }
  ];
};
SericesService = __decorate([
  Injectable({
    providedIn: "root"
  })
], SericesService);

// src/app/shared/services/users/role.service.ts
var RoleService = class RoleService2 {
  requestService;
  constructor(requestService) {
    this.requestService = requestService;
  }
  getRoles() {
    return this.requestService.createGetRequest(`${environment.usineApi}postes`);
  }
  getIri(poste) {
    if (typeof poste == "string") {
      return poste;
    } else {
      return `/api/postes/${poste.id}`;
    }
  }
  static ctorParameters = () => [
    { type: RequestService }
  ];
};
RoleService = __decorate([
  Injectable({
    providedIn: "root"
  })
], RoleService);

// src/app/shared/services/users/unite.service.ts
var UniteService = class UniteService2 {
  requestService;
  constructor(requestService) {
    this.requestService = requestService;
  }
  getUnites() {
    return this.requestService.createGetRequest(`${environment.usineApi}divisions`);
  }
  getIri(unite) {
    if (typeof unite == "string") {
      return unite;
    } else {
      return `/api/divisions/${unite.id}`;
    }
  }
  static ctorParameters = () => [
    { type: RequestService }
  ];
};
UniteService = __decorate([
  Injectable({
    providedIn: "root"
  })
], UniteService);

// src/app/shared/services/users/usine.service.ts
var UsineService = class UsineService2 {
  constructor() {
  }
  getIri(usine) {
    if (typeof usine == "string") {
      return usine;
    } else {
      return `/api/usines/${usine.id}`;
    }
  }
  static ctorParameters = () => [];
};
UsineService = __decorate([
  Injectable({
    providedIn: "root"
  })
], UsineService);

// src/app/shared/services/users/users.service.ts
var UsersService = class UsersService2 {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  http = inject(HttpClient);
  roleService = inject(RoleService);
  serviceService = inject(SericesService);
  programService = inject(ProgramsService);
  uniteService = inject(UniteService);
  usineService = inject(UsineService);
  loadingService = inject(LoadingService);
  /**
   *
   *
   * @param idUser c'est l'id de l'utilisateur en base de donnée
   * @return retourne une Promise<User>
   * @memberof UsersService
   */
  getUserById(idUser) {
    return this.http.get(environment.usineApi + `users/${idUser}`);
  }
  /**
   *
   *
   * @param  [filters] ajoute des filtres pour la recherche d'utilisateurs
   * @return retourne une Promise<User[]>
   * @memberof UsersService
   */
  getUsers(filters) {
    return this.http.get(`${environment.usineApi}users`, { params: filters });
  }
  /**
   *
   *
   * @param userObj un objet User
   * @return retourne un Observable<User>
   * @memberof UsersService
   */
  registerUser(userObj) {
    this.loadingService.startLoading(`Patienter pendant la cr\xE9ation de l'utilisateur`);
    return this.http.post(environment.usineApi + "users", userObj).pipe(finalize(() => this.loadingService.stopLoading()));
  }
  /**
   *
   *
   * @param user un object User ou l'iri d'un user
   * @return  retourne l'iri du user
   * @memberof UsersService
   */
  getIri(user) {
    if (typeof user == "string") {
      return user;
    } else {
      return `/api/users/${user.id}`;
    }
  }
  getGroups() {
    return this.http.get(`${environment.usineApi}groupe_affectations`);
  }
  createGroup(groupObj) {
    return this.http.post(`${environment.usineApi}groupe_affectations`, groupObj);
  }
  updateUser(user) {
    const userToUpdate = {
      password: user.password,
      matricule: user.matricule,
      nom: user.nom,
      prenom: user.prenom,
      poste: this.roleService.getIri(user.poste),
      service: this.serviceService.getIri(user.service),
      programmeAvion: user.programmeAvion.map((progAvion) => this.programService.getIri(progAvion)),
      unite: this.uniteService.getIri(user.unite),
      site: this.usineService.getIri(user.site),
      tel: user.tel
    };
    return this.http.patch(`${environment.usineApi}users/${user.id}`, userToUpdate);
  }
  addUserToGroup(user) {
    const groupRequests = user.groupeAffected.map((group) => this.http.patch(`${environment.usineApi}groupe_affectations/${group.id}/addUsers`, { population: group.population }).pipe(catchError((error) => {
      console.error(`Erreur avec le groupe ${group.id}:`, error);
      return of(group);
    })));
    return forkJoin(groupRequests).pipe(map((updatedGroups) => __spreadProps(__spreadValues({}, user), {
      groupeAffected: updatedGroups
    })));
  }
  getUsersByService(serviceId) {
    if (isDevMode()) {
      return of();
    }
    return this.http.get(`${environment.usineApi}services/${serviceId}`);
  }
  deleteUser(userId) {
    return this.http.delete(`${environment.usineApi}users/${userId}`);
  }
  confirmUser(userId, status) {
    return this.http.patch(`${environment.usineApi}users/${userId}`, { isActive: status });
  }
};
UsersService = __decorate([
  Injectable({
    providedIn: "root"
  })
], UsersService);

// angular:jit:template:file:src\app\shared\components\user-sheet\user-sheet.component.html
var user_sheet_component_default = '<!-- <ion-modal [isOpen]="userState" trigger="trigger-button" -->\r\n<!-- (ionModalDidDismiss)="userState=false; stateChangeEv.emit(false)"> -->\r\n<ion-header>\r\n  <ion-toolbar color="dark">\r\n    <ion-title slot="start"> Fiche utilisateur</ion-title>\r\n    <ion-icon slot="end" name="close-circle" (click)="closeUserSheetClick()" size="large">\r\n    </ion-icon>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ng-container *ngIf="user">\r\n  <ion-content>\r\n    <ion-item>\r\n      <ion-label>Nom</ion-label>\r\n      <ion-input type="text" [value]="user.nom"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Pr\xE9nom</ion-label>\r\n      <ion-input type="text" [value]="user.prenom"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Matricule</ion-label>\r\n      <ion-input disabled="true" type="text" [value]="user.matricule"></ion-input>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>E-Mail</ion-label>\r\n      <ion-input disabled="true" type="text" [value]="user.mail"></ion-input>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>T\xE9l\xE9phone</ion-label>\r\n      <ion-input type="text" [value]="user.tel"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Date de cr\xE9ation</ion-label>\r\n      <ion-input disabled="true" type="text" [value]="user.createdAt | date"></ion-input>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Date de derni\xE8re connexion</ion-label>\r\n      <ion-input disabled="true" type="text" [value]="user.lastCon | date"></ion-input>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Site</ion-label>\r\n      <ion-label>{{user.site.nom}}</ion-label>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Service</ion-label>\r\n      <ion-label>{{user.service.nom}}</ion-label>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Division</ion-label>\r\n      <ion-label>{{user.unite.nom}}</ion-label>\r\n      <ion-icon slot="end" name="lock-closed-outline"></ion-icon>\r\n    </ion-item>\r\n  </ion-content>\r\n\r\n  <ion-footer>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=start>\r\n        <ion-button slot=end size=small (click)="updatePasswordClick()">\r\n          <label>Changer mot de passe</label>\r\n          <ion-icon slot="start" name="key-outline"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-buttons slot=end>\r\n        <ion-button slot=end size=small (click)="updateUserClick()">\r\n          <label>Enregistrer</label>\r\n          <ion-icon slot="start" name="save-outline"></ion-icon>\r\n        </ion-button>\r\n        <!-- <ion-button slot=end size=small (click)="deleteUserClick()">\r\n          <ion-icon slot="icon-only" name="trash-outline"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</ng-container>';

// angular:jit:style:file:src\app\shared\components\user-sheet\user-sheet.component.scss
var user_sheet_component_default2 = "/* src/app/shared/components/user-sheet/user-sheet.component.scss */\nion-content {\n  height: 50%;\n}\n/*# sourceMappingURL=user-sheet.component.css.map */\n";

// angular:jit:template:file:src\app\shared\components\change-password\change-password.component.html
var change_password_component_default = '<form [formGroup]="changePasswordForm" (ngSubmit)="onSubmit()">\r\n\r\n\r\n  <ion-header>\r\n    <ion-toolbar color=dark>\r\n      <ion-title>Changement du mot de passe</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n    <ion-item>\r\n      <ion-label>Nouveau mot de passe</ion-label>\r\n      <ion-input formControlName="newPassword" type="password" [value]=""></ion-input>\r\n      <ion-icon slot="end" name="checkmark-outline"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Confirmer mot de passe</ion-label>\r\n      <ion-input formControlName="password" type="password" [value]=""></ion-input>\r\n      <ion-icon color="success" slot="end" name="checkmark-done-outline"></ion-icon>\r\n    </ion-item>\r\n\r\n  </ion-content>\r\n  <ion-footer>\r\n    <ion-toolbar color="light">\r\n      <ion-buttons slot="end">\r\n        <ion-button fill="solid" (click)="confirmChangePasswordClick()" [disabled]="changePasswordForm.invalid">\r\n          <ion-icon slot="end" name="airplane"></ion-icon>\r\n          Confirmer\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n</form>';

// angular:jit:style:file:src\app\shared\components\change-password\change-password.component.scss
var change_password_component_default2 = "/* src/app/shared/components/change-password/change-password.component.scss */\n/*# sourceMappingURL=change-password.component.css.map */\n";

// src/app/shared/components/change-password/change-password.component.ts
var ChangePasswordComponent = class ChangePasswordComponent2 {
  fb;
  userService;
  authStore = inject(AuthStore);
  changePasswordForm;
  constructor(fb, userService) {
    this.fb = fb;
    this.userService = userService;
    this.changePasswordForm = this.fb.group({
      newPassword: ["", Validators.required]
    });
  }
  confirmChangePasswordClick() {
    const newUser = this.authStore.user();
    newUser.password = this.changePasswordForm.get("newPassword").value;
    this.userService.updateUser(newUser);
  }
  onSubmit() {
  }
  static ctorParameters = () => [
    { type: FormBuilder },
    { type: UsersService }
  ];
};
ChangePasswordComponent = __decorate([
  Component({
    selector: "app-change-password",
    template: change_password_component_default,
    standalone: true,
    imports: [ReactiveFormsModule, IonicModule],
    styles: [change_password_component_default2]
  })
], ChangePasswordComponent);

// src/app/shared/components/user-sheet/user-sheet.component.ts
var UserSheetComponent = class UserSheetComponent2 {
  loadingService;
  alertService;
  userService;
  modalCtrl;
  user;
  stateChangeEv = new EventEmitter();
  constructor(loadingService, alertService, userService, modalCtrl) {
    this.loadingService = loadingService;
    this.alertService = alertService;
    this.userService = userService;
    this.modalCtrl = modalCtrl;
  }
  updateUserClick() {
    this.loadingService.startLoading("Mise \xE0 jour de l'utilisateur");
    this.userService.updateUser(this.user).subscribe((resp) => {
      console.log(resp);
      this.loadingService.stopLoading();
    }, (err) => {
      console.error(err);
      this.loadingService.stopLoading();
      this.alertService.simpleAlert(`Erreur serveur`, `Probl\xE8me lors de la mise \xE0 jour`, `L'utilisateur n'a pas \xE9t\xE9 modifi\xE9. Veuillez recommencer.`);
    });
  }
  deleteUserClick() {
    this.loadingService.startLoading("Suppression de l'utilisateur");
    this.userService.deleteUser(this.user.id).subscribe(() => {
      this.loadingService.stopLoading();
    }, (err) => {
      this.alertService.simpleAlert("Erreur", "Suppression d'un utilisateur", "Une erreur est survenue pendant la suppression de l'utilisateur. " + err.message);
      this.loadingService.stopLoading();
    });
  }
  closeUserSheetClick() {
    this.modalCtrl.dismiss();
  }
  updatePasswordClick() {
    return __async(this, null, function* () {
      const changePasswordModal = yield this.modalCtrl.create({
        component: ChangePasswordComponent,
        cssClass: "modal-adjusted"
      });
      changePasswordModal.present();
    });
  }
  static ctorParameters = () => [
    { type: LoadingService },
    { type: AlertService },
    { type: UsersService },
    { type: ModalController }
  ];
  static propDecorators = {
    user: [{ type: Input, args: ["user"] }],
    stateChangeEv: [{ type: Output }]
  };
};
UserSheetComponent = __decorate([
  Component({
    selector: "app-user-sheet",
    template: user_sheet_component_default,
    standalone: true,
    imports: [
      IonicModule,
      NgIf,
      DatePipe
    ],
    styles: [user_sheet_component_default2]
  })
], UserSheetComponent);

export {
  ProgramsService,
  RoleService,
  SericesService,
  UniteService,
  UsersService,
  UserSheetComponent
};
//# sourceMappingURL=chunk-WEPZBWS4.js.map
