"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 26587:
/*!********************************************************************!*\
  !*** ./src/app/_services/applicationUpdates/update-app.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateAppService": () => (/* binding */ UpdateAppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../divers/alert.service */ 15243);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 33521);
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/auth.service */ 36607);





let UpdateAppService = class UpdateAppService {
    constructor(authService, alertService, requestService) {
        this.authService = authService;
        this.alertService = alertService;
        this.requestService = requestService;
    }
    /**
     *Si la promise retourn true c'est que toutes les updates sont vues
     *Si la promise return false l'utilisateur reverra les update à sa prochaine connexion
     *
     * @return {*}  {Promise<boolean>}
     * @memberof UpdateAppService
     */
    showUpdates() {
        return new Promise((resolve, reject) => {
            this.getUpdatesToShow()
                .then((updates) => {
                updates.forEach((update) => {
                    this.alertService.simpleAlert('Info sur la mise à jours', update.title, update.description)
                        .then(() => {
                        resolve(true);
                    });
                });
            });
        });
    }
    getUpdates(day1, day2) {
        return new Promise((resolve, reject) => {
            resolve([{
                    id: 1,
                    dateUpdate: new Date(),
                    description: 'Le scan de l\'outillage de moulage est effectif. Il suffit de le scanner au même endroit qu\'un kit',
                    title: 'Scan outillage de moulage à la place de la saisie'
                }]);
        });
        // return this.requestService.createGetRequest('');
    }
    getUpdatesToShow() {
        const day = new Date();
        const lastConnection = this.authService.authUser.lastCon;
        return this.getUpdates(lastConnection, day);
    }
};
UpdateAppService.ctorParameters = () => [
    { type: _users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService },
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
UpdateAppService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], UpdateAppService);



/***/ }),

/***/ 15243:
/*!***************************************************!*\
  !*** ./src/app/_services/divers/alert.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    simpleAlert(header, subHeader, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'simple-alert',
                header,
                subHeader,
                message,
                buttons: [
                    {
                        text: 'Fermer',
                        role: 'cancel',
                        id: 'cancel-button',
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 16215:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 59004);




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

/***/ 82371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 16215);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 59004);







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

/***/ 59004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 57230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 80863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_applicationUpdates_update_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/applicationUpdates/update-app.service */ 26587);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 36607);









let LoginPage = class LoginPage {
    constructor(authService, formBuilder, router, alertController, loadingController, updateService, navControler) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.updateService = updateService;
        this.navControler = navControler;
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ['']
        });
    }
    ngAfterViewInit() {
        // this.userName.value = '';
        // this.password.value = '';
        // this.onSubmit();
    }
    ngOnInit() {
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Patienter pendant la connexion',
                spinner: 'lines-sharp'
            });
            yield loading.present();
            this.authService.authenticate(this.loginForm.get('userName').value, this.loginForm.get('password').value || this.loginForm.get('userName').value)
                .then(() => {
                this.updateService.showUpdates()
                    .then(() => {
                    console.log(this.getSpecialRole(this.authService.authUser.roles));
                    switch (this.getSpecialRole(this.authService.authUser.roles)) {
                        case 'ROLE_MOULEUR':
                            this.navControler.navigateForward('molding');
                            break;
                        case 'ROLE_ADMIN':
                            this.navControler.navigateForward('tooling');
                            break;
                        default:
                            this.navControler.navigateForward('home');
                            break;
                    }
                    this.loginForm.reset();
                });
            }, () => {
                this.presentAlertLoginError();
            })
                .finally(() => {
                loading.dismiss();
            });
        });
    }
    presentAlertLoginError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Erreur d\'authentification',
                message: 'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct',
                buttons: [
                    {
                        text: 'Fermer',
                        role: 'cancel',
                        id: 'cancel-button',
                    }
                ]
            });
            yield alert.present();
        });
    }
    getSpecialRole(userRoles) {
        return userRoles[0];
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_services_applicationUpdates_update_app_service__WEBPACK_IMPORTED_MODULE_2__.UpdateAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
LoginPage.propDecorators = {
    userName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['userName',] }],
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['password',] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 57230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>Connection</ion-title>\r\n    </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n    <ion-grid fixed class=\"full-height ion-align-items-center ion-justify-content-center\">\r\n        <!-- <ion-row>\r\n            <ion-col size=\"12\">\r\n                <ion-title color=primary>Application traçabilité</ion-title>\r\n            </ion-col>\r\n        </ion-row> -->\r\n        <ion-row class=\"ion-align-items-center\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\">\r\n\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Nom d'utilisateur\r\n                        <ion-text color=\"danger\">*</ion-text>\r\n                    </ion-label>\r\n                    <ion-input autocapitalize=\"on\" #userName required formControlName=\"userName\" type=\"text\" autocomplete=off autofocus=\"true\" inputmode=numeric value=\"204292\"></ion-input>\r\n                    <ion-note>\r\n                        Le nom d'utilisateur est le numéro de matricule présent sur le badge\r\n                    </ion-note>\r\n                </ion-item>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Password\r\n                        <!-- <ion-text color=\"danger\">*</ion-text> -->\r\n                    </ion-label>\r\n                    <ion-input #password formControlName=\"password\" type=\"password\" value=\"\"></ion-input>\r\n                </ion-item>\r\n                <ion-button block color=\"primary\" type=\"submit\" [disabled]=\"loginForm.invalid\">\r\n                    Se connecter\r\n                </ion-button>\r\n                <ion-button fill=\"clear\" [routerLink]=\"['/register']\"> Créer un compte\r\n                </ion-button>\r\n            </form>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ 80863:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".full-height {\n  height: 100%;\n  display: flex !important;\n  flex-direction: column;\n}\n\nion-title {\n  font-size: 60px !important;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDYwcHggIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map