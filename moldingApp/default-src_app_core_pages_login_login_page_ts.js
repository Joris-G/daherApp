"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_pages_login_login_page_ts"],{

/***/ 18466:
/*!************************************************!*\
  !*** ./src/app/core/pages/login/login.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 25121);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 58129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_applicationUpdates_update_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/applicationUpdates/update-app.service */ 8931);
/* harmony import */ var src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/users/auth.service */ 73919);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! package.json */ 4147);
/* harmony import */ var src_app_core_services_notice_notice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/notice/notice.service */ 84993);














let LoginPage = class LoginPage {
    constructor(authService, formBuilder, loadingService, updateService, navControler, alertService, noticeService) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingService = loadingService;
        this.updateService = updateService;
        this.navControler = navControler;
        this.alertService = alertService;
        this.noticeService = noticeService;
        this.version = package_json__WEBPACK_IMPORTED_MODULE_7__.version;
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
                roles: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_METHODES'],
                route: 'home'
            },
        ];
    }
    showNotice() {
        this.noticeService.presentModal();
    }
    ionViewWillEnter() {
        if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.isDevMode)()) {
            this.loginForm.setValue({
                userName: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.username,
                password: src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.password
            });
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
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
        const prefRoute = this.reRouteOpts.find((curRouteOpt) => this.authService.authUser.roles.some((role) => curRouteOpt.roles.find(roleOpt => roleOpt === role)));
        console.log(prefRoute);
        if (prefRoute !== undefined) {
            this.navControler.navigateRoot(prefRoute.route);
            return;
        }
        this.navControler.navigateRoot('home');
    }
    logginError(error) {
        console.error(error);
        this.alertService.simpleAlert('Erreur d\'authentification', '', 'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct');
        this.loadingService.stopLoading();
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: src_app_core_services_applicationUpdates_update_app_service__WEBPACK_IMPORTED_MODULE_2__.UpdateAppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: src_app_core_services_notice_notice_service__WEBPACK_IMPORTED_MODULE_8__.NoticeService }
];
LoginPage.propDecorators = {
    userName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['userName',] }],
    password: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild, args: ['password',] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8931:
/*!************************************************************************!*\
  !*** ./src/app/core/services/applicationUpdates/update-app.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateAppService": () => (/* binding */ UpdateAppService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../divers/alert.service */ 512);
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/auth.service */ 73919);





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

/***/ 58129:
/*!*************************************************************!*\
  !*** ./src/app/core/pages/login/login.page.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".full-height {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.inputs {\n  display: flex;\n  flex-direction: column;\n}\n\n.inputs ion-item {\n  width: 100%;\n}\n\n.buttons {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 768px) {\n  .buttons {\n    flex-direction: column;\n  }\n  .buttons ion-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFIRjtJQUlJLHNCQUFBO0VBR0Y7RUFGRTtJQUNFLFdBQUE7RUFJSjtBQUNGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmlucHV0c3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIGlvbi1pdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 25121:
/*!*************************************************************!*\
  !*** ./src/app/core/pages/login/login.page.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\r\n  <form class=\"full-height\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" (keyup.enter)=\"onSubmit()\">\r\n    <div>\r\n      <div class=\"inputs ion-padding\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nom d'utilisateur\r\n            <ion-text color=\"danger\">*</ion-text>\r\n          </ion-label>\r\n          <ion-input autocapitalize=\"on\" #userName required formControlName=\"userName\" type=\"text\" autocomplete=off\r\n            autofocus=\"true\" inputmode=numeric value=\"204292\"></ion-input>\r\n          <ion-note>\r\n            Le nom d'utilisateur est le numéro de matricule présent sur le badge\r\n          </ion-note>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Mot de passe\r\n          </ion-label>\r\n          <ion-input #password formControlName=\"password\" type=\"password\" value=\"\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n      <div class=\"ion-justify-content-center ion-padding\">\r\n        <ion-buttons class=\"buttons\">\r\n          <ion-button block color=\"primary\" type=\"submit\" fill=solid [disabled]=\"loginForm.invalid\">\r\n            Se connecter\r\n          </ion-button>\r\n          <ion-button color=\"primary\" [routerLink]=\"['/register']\"> Créer un compte\r\n          </ion-button>\r\n          <ion-button disabled=\"true\" color=\"secondary\" fill=solid type=\"submit\">\r\n            <ion-icon slot=\"start\" name=\"accessibility-outline\"></ion-icon>\r\n            Visiteur\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button size=\"small\" color=\"light\" (click)=\"showNotice()\">\r\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <div class=\"title\" slot=end class=\"ion-padding\">\r\n      Version : {{version}}\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_core_pages_login_login_page_ts.js.map