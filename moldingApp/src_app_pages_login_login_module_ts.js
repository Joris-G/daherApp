"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 55806:
/*!********************************************************************!*\
  !*** ./src/app/_services/applicationUpdates/update-app.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateAppService": () => (/* binding */ UpdateAppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 23815);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../divers/alert.service */ 2853);
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/auth.service */ 27704);





let UpdateAppService = class UpdateAppService {
    constructor(authService, alertService) {
        this.authService = authService;
        this.alertService = alertService;
        this.tableUpdates = [
            {
                id: 1,
                dateUpdate: new Date(2022, 4, 9),
                description: 'Pour associer un outillage à un moulage il suffit de scanner le numéro d\'OT dans l\'OF.' +
                    'Vous devez le scanner comme un kit',
                title: 'Module Moulage'
            },
            {
                id: 2,
                dateUpdate: new Date(2022, 4, 9),
                description: 'Le module outillage est ouvert pour test',
                title: 'Module Outillage'
            },
        ];
    }
    /**
     *Si la promise retourn true c'est que toutes les updates sont vues
     *Si la promise return false l'utilisateur reverra les update à sa prochaine connexion
     *
     * @return
     * @memberof UpdateAppService
     */
    showUpdates() {
        this.getUpdatesToShow()
            .subscribe((updates) => {
            if (updates) {
                updates.forEach((update) => {
                    this.alertService.simpleAlert('Info sur la mise à jours', update.title, update.description);
                });
            }
        });
    }
    getUpdates(day1) {
        const updates = this.tableUpdates.filter(update => update.dateUpdate >= new Date(day1));
        if (updates.length > 0) {
            return updates;
        }
        else {
            return null;
        }
    }
    /**
     * Quand la base des mises à jours sera faites enlever le of
     *
     * @private
     * @return
     * @memberof UpdateAppService
     */
    getUpdatesToShow() {
        const lastConnection = this.authService.authUser.lastCon;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.getUpdates(lastConnection));
    }
};
UpdateAppService.ctorParameters = () => [
    { type: _users_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService }
];
UpdateAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], UpdateAppService);



/***/ }),

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 3020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_applicationUpdates_update_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/applicationUpdates/update-app.service */ 55806);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 27704);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/divers/loading.service */ 99172);
/* harmony import */ var src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/divers/alert.service */ 2853);












let LoginPage = class LoginPage {
    constructor(authService, formBuilder, loadingService, updateService, navControler, alertService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingService = loadingService;
        this.updateService = updateService;
        this.navControler = navControler;
        this.alertService = alertService;
        this.reRouteOpts = [
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
    }
    ionViewWillEnter() {
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.isDevMode)()) {
            this.loginForm.setValue({
                userName: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.username,
                password: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.password
            });
            // this.onSubmit();
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
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
        this.authService.authenticate(this.loginForm.get('userName').value, this.loginForm.get('password').value || this.loginForm.get('userName').value)
            .subscribe(() => {
            this.afterLoginActions();
        }, (error) => {
            this.logginError(error);
        });
    }
    afterLoginActions() {
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
    reRouteUser() {
        this.reRouteOpts.forEach((routeOpt) => {
            if (this.authService.authUser.roles.find(role => routeOpt.roles.find(roleOpt => roleOpt === role))) {
                this.navControler.navigateForward(routeOpt.route);
            }
            else {
                this.navControler.navigateForward('home');
            }
        });
    }
    logginError(error) {
        console.error(error);
        this.alertService.simpleAlert('Erreur d\'authentification', '', 'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct');
        this.loadingService.stopLoading();
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_services_applicationUpdates_update_app_service__WEBPACK_IMPORTED_MODULE_2__.UpdateAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService }
];
LoginPage.propDecorators = {
    userName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['userName',] }],
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['password',] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 3020:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".full-height {\n  height: 100%;\n  display: flex !important;\n  flex-direction: column;\n}\n\nion-title {\n  font-size: 60px !important;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDYwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Connection</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-grid fixed class=\"full-height ion-align-items-center ion-justify-content-center\">\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\">\r\n\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Nom d'utilisateur\r\n                        <ion-text color=\"danger\">*</ion-text>\r\n                    </ion-label>\r\n                    <ion-input autocapitalize=\"on\" #userName required formControlName=\"userName\" type=\"text\" autocomplete=off autofocus=\"true\" inputmode=numeric value=\"204292\"></ion-input>\r\n                    <ion-note>\r\n                        Le nom d'utilisateur est le numéro de matricule présent sur le badge\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Password\r\n                    </ion-label>\r\n                    <ion-input #password formControlName=\"password\" type=\"password\" value=\"\"></ion-input>\r\n                </ion-item>\r\n                <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">\r\n                    Se connecter\r\n                </ion-button>\r\n                <ion-button fill=\"clear\" [routerLink]=\"['/register']\"> Créer un compte\r\n                </ion-button>\r\n            </form>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map