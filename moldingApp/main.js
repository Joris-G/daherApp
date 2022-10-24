(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/users/auth.guard */ 38555);




const routes = [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_pages_login_login_page_ts"), __webpack_require__.e("src_app_core_core_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./core/core.module */ 40294))
            .then(m => m.CoreModule)
    },
    {
        path: 'molding',
        canActivate: [_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_core_services_users_role_guard_ts-src_app_molding_services_molding_service_ts"), __webpack_require__.e("src_app_molding_molding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./molding/molding.module */ 91295))
            .then(m => m.AppMoldingModule)
    },
    {
        path: 'tooling',
        canActivate: [_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tooling_tooling_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tooling/tooling.module */ 18211))
            .then(m => m.AppToolingModule)
    },
    {
        path: 'login',
        // canActivate: [AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_core_pages_login_login_page_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./core/pages/login/login.page */ 18466))
            .then(m => m.LoginPage)
    },
    // {
    //   path: 'admin',
    //   canActivate: [RoleGuard],
    //   data:
    //   {
    //     expectedRole: ['ROLE_ADMIN'],
    //   },
    //   loadChildren: () => import('./pages/admin/admin.module')
    //     .then(m => m.AdminPageModule)
    // },
    // {
    //   path: '',
    //   redirectTo: 'home',
    //   pathMatch: 'full'
    // },
    {
        path: '**',
        redirectTo: '',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);






let AppComponent = class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }
    ngOnInit() {
        this.initTitle();
    }
    initTitle() {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.name === 'QUAL') {
            const newTitle = `QUAL - ${this.titleService.getTitle()}`;
            this.titleService.setTitle(newTitle);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/service-worker */ 64933);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/file/ngx */ 12358);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 37330);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 23081);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-socket-io */ 84935);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _core_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/auth.interceptor */ 97047);

















const config = { url: 'http://localhost:3000', options: { transports: ['websocket', 'polling', 'flashsocket'] } };
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_12__.SocketIoModule.forRoot(config),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.AppSharedModule,
            // Toujours déclarer en dernier pour éviter les erreurs de routes
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _core_services_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor, multi: true },
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_0__.File,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener,
            _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_1__.PDFGenerator
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 97047:
/*!***************************************************!*\
  !*** ./src/app/core/services/auth.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users/auth.service */ 73919);



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        // Get the auth token from the service.
        if (req.method === 'GET') {
            return next.handle(req);
        }
        const authToken = this.authService.authToken;
        if (authToken) {
            // Clone the request and replace the original headers with
            // cloned headers, updated with the authorization.
            const authReq = req.clone({
                headers: req.headers.set('x-auth-token', authToken)
            });
            // send cloned request with header to the next handler.
            return next.handle(authReq);
        }
        return next.handle(req);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _users_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthInterceptor);



/***/ }),

/***/ 512:
/*!*******************************************************!*\
  !*** ./src/app/core/services/divers/alert.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



let AlertService = class AlertService {
    constructor(alertController, toastController) {
        this.alertController = alertController;
        this.toastController = toastController;
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
    presentAlertConfirm(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.alertController.create({
                    cssClass: 'my-custom-class',
                    header,
                    message,
                    buttons: [
                        {
                            text: 'Non',
                            role: 'cancel',
                            cssClass: ['ion-color-primary', 'ion-button'],
                            id: 'cancel-button',
                            handler: () => {
                                console.log('Response false');
                                resolve(false);
                            }
                        }, {
                            text: 'Oui',
                            id: 'confirm-button',
                            cssClass: 'ion-color-danger',
                            handler: () => {
                                console.log('Response true');
                                resolve(true);
                            },
                        }
                    ]
                })
                    .then((alert) => {
                    alert.present();
                });
            });
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1000,
                position: 'bottom',
                translucent: true,
                animated: true,
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 74501:
/*!*********************************************************!*\
  !*** ./src/app/core/services/divers/loading.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 93819);



/**
 * Création d'un loader simple
 *
 * @export
 * @class LoadingService
 */
let LoadingService = class LoadingService {
    /**
     * Creates an instance of LoadingService.
     *
     * @param  loadingController
     * @memberof LoadingService
     */
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    /**
     * Création d'un loader avec un message personalisé. Lancement du loader.
     *
     * @param message C'est le message que verra l'utilisateur pendant le chargement
     * @memberof LoadingService
     */
    startLoading(message = 'Chargement ...') {
        this.loadingController.create({
            spinner: 'lines',
            cssClass: 'app-loader',
            message,
        })
            .then((response) => {
            response.present();
        });
    }
    /**
     * Arrête le loader
     *
     * @memberof LoadingService
     */
    stopLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => {
                this.loadingController.dismiss();
            }, 100);
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 84993:
/*!********************************************************!*\
  !*** ./src/app/core/services/notice/notice.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoticeService": () => (/* binding */ NoticeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_shared_notices_login_notice_login_notice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/notices/login-notice/login-notice.component */ 56439);




let NoticeService = class NoticeService {
    constructor(modalController) {
        this.modalController = modalController;
    }
    presentModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.modal = yield this.modalController.create({
                component: src_app_shared_notices_login_notice_login_notice_component__WEBPACK_IMPORTED_MODULE_0__.LoginNoticeComponent,
                cssClass: 'fullscreen'
            });
            yield this.modal.present();
        });
    }
    closeModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modal.dismiss();
        });
    }
};
NoticeService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
NoticeService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NoticeService);



/***/ }),

/***/ 22996:
/*!************************************************************!*\
  !*** ./src/app/core/services/programs/programs.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramsService": () => (/* binding */ ProgramsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 39305);




let ProgramsService = class ProgramsService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    getPrograms() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}programme_avions`);
    }
    getIri(programAvion) {
        if (typeof (programAvion) == 'string') {
            return programAvion;
        }
        else {
            return `/api/programme_avions/${programAvion.id}`;
        }
    }
};
ProgramsService.ctorParameters = () => [
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
ProgramsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProgramsService);



/***/ }),

/***/ 39305:
/*!**************************************************!*\
  !*** ./src/app/core/services/request.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19019);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);





/**
 * Service des requêtes.
 *
 * @export
 * @class RequestService
 */
let RequestService = class RequestService {
    /**
     * Creates an instance of RequestService.
     *
     * @param http client http Angular
     * @memberof RequestService
     */
    constructor(http) {
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Content-Type', 'application/json')
            // .append('Access-Control-Allow-Origin', 'http://localhost:8100')
            .append('Accept', 'application/json');
        this.postHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
        this.patchHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Content-Type', 'application/merge-patch+json')
            .append('Accept', 'application/json');
        this.deleteHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Accept', '*/*');
    }
    createPostRequest(url, body, full = false) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer + url, body, {
            headers: this.httpHeaders
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((val) => {
            if (val.status === 500) {
                throw (val);
            }
            console.table(val);
            return val;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(3));
    }
    createPutRequest(url, body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, body, {
            headers: this.httpHeaders
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.timeout)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((val) => {
            if (val.status === 500) {
                throw (val);
            }
            console.table(val);
            return val;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2));
    }
    createPatchRequest(url, body) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, body, {
            headers: this.patchHttpHeaders
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((val) => {
            if (val.status === 500) {
                throw (val);
            }
            console.table(val);
            return val;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2));
    }
    createGetRequest(url, params) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, { headers: this.httpHeaders, params })
            .pipe(
        // timeout(15000),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((val) => {
            if (val.status === 500) {
                throw (val);
            }
            console.log(val);
            return val;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retry)(2));
    }
    createDeleteRequest(url) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, { headers: this.httpHeaders });
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], RequestService);



/***/ }),

/***/ 38555:
/*!***************************************************!*\
  !*** ./src/app/core/services/users/auth.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../divers/alert.service */ 512);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 73919);





let AuthGuard = class AuthGuard {
    constructor(router, authService, alerteService) {
        this.router = router;
        this.authService = authService;
        this.alerteService = alerteService;
    }
    canActivate(route) {
        if (!this.authService.isAuth) { //|| environment.name === 'DEV' || environment.name === 'QUAL') {
            return this.router.parseUrl('/login');
        }
        const expectedRole = route.data.expectedRole;
        if (expectedRole) {
            const isRole = this.isRole(expectedRole);
            if (!isRole) {
                // console.error('Impossible d\'accéder à la page');
                this.alerteService.simpleAlert('Alerte de l\'application', 'Autorisation', 'Vous n\'avez pas accès à cette page');
                this.router.navigate(['home']);
            }
            return (this.authService.isAuth && isRole && this.authService.authUser.isActive);
        }
    }
    isRole(expectedRoles) {
        // console.log(expectedRoles);
        if (this.authService.authUser) {
            return expectedRoles.some((expectedRole => this.authService.authUser.roles.includes(expectedRole)));
        }
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 73919:
/*!*****************************************************!*\
  !*** ./src/app/core/services/users/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 39305);





let AuthService = class AuthService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    getToken() {
        if (this.authUser) {
            return this.authUser.apiToken;
        }
        return '';
    }
    authenticate(userName, password) {
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}login`, { matricule: userName, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((returnsData) => {
            if (returnsData) {
                console.log(returnsData.apiToken);
                this.authToken = returnsData.apiToken;
                this.isAuth = true;
                this.authUser = returnsData.user;
            }
            else {
                this.authUser = null;
                this.isAuth = false;
            }
        }));
    }
    logout() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}logout`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => {
            // console.log(response);
            this.isAuth = false;
            this.authUser = null;
        }));
    }
    getAuthUser() {
        return new Promise((resolve, reject) => {
            console.log(this.authUser);
            resolve(this.authUser);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 59841:
/*!*****************************************************!*\
  !*** ./src/app/core/services/users/role.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 39305);




const ROLES = [
    'ROLE_USER',
    'ROLE_ADMIN'
];
let RoleService = class RoleService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    getRoles() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}postes`);
    }
    getIri(poste) {
        if (typeof (poste) == 'string') {
            return poste;
        }
        else {
            return `/api/postes/${poste.id}`;
        }
    }
};
RoleService.ctorParameters = () => [
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
RoleService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RoleService);



/***/ }),

/***/ 714:
/*!********************************************************!*\
  !*** ./src/app/core/services/users/serices.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SericesService": () => (/* binding */ SericesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 39305);




let SericesService = class SericesService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    getServices() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}services`);
    }
    getIri(service) {
        if (typeof (service) == 'string') {
            return service;
        }
        else {
            return `/api/services/${service.id}`;
        }
    }
};
SericesService.ctorParameters = () => [
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
SericesService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SericesService);



/***/ }),

/***/ 23040:
/*!******************************************************!*\
  !*** ./src/app/core/services/users/unite.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniteService": () => (/* binding */ UniteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 39305);




let UniteService = class UniteService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    getUnites() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}divisions`);
    }
    getIri(unite) {
        if (typeof (unite) == 'string') {
            return unite;
        }
        else {
            return `/api/services/${unite.id}`;
        }
    }
};
UniteService.ctorParameters = () => [
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
UniteService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], UniteService);



/***/ }),

/***/ 88896:
/*!******************************************************!*\
  !*** ./src/app/core/services/users/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _programs_programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs/programs.service */ 22996);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ 39305);
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role.service */ 59841);
/* harmony import */ var _serices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serices.service */ 714);
/* harmony import */ var _unite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unite.service */ 23040);
/* harmony import */ var _usine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usine.service */ 98);









const JORIS = {
    id: 1,
    username: 'j.grangier',
    mail: 'j.grangier@daher.com',
    matricule: 204292,
    nom: 'GRANGIER',
    prenom: 'JORIS',
    roles: ['COMPAGNON'],
};
let UsersService = class UsersService {
    constructor(requestService, roleService, serviceService, programService, uniteService, usineService) {
        this.requestService = requestService;
        this.roleService = roleService;
        this.serviceService = serviceService;
        this.programService = programService;
        this.uniteService = uniteService;
        this.usineService = usineService;
    }
    /**
     *
     *
     * @param idUser c'est l'id de l'utilisateur en base de donnée
     * @return retourne une Promise<User>
     * @memberof UsersService
     */
    getUserById(idUser) {
        return this.requestService.createGetRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi + `users/${idUser}`);
    }
    /**
     *
     *
     * @param  [filters] ajoute des filtres pour la recherche d'utilisateurs
     * @return retourne une Promise<User[]>
     * @memberof UsersService
     */
    getUsers(filters) {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}users`, filters);
    }
    /**
     *
     *
     * @param userObj un objet User
     * @return retourne une Promise<User>
     * @memberof UsersService
     */
    registerUser(userObj) {
        return this.requestService.createPostRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi + 'users', userObj);
    }
    /**
     *
     *
     * @param user un object User ou l'iri d'un user
     * @return  retourne l'iri du user
     * @memberof UsersService
     */
    getIri(user) {
        if (typeof (user) == 'string') {
            return user;
        }
        else {
            return `/api/users/${user.id}`;
        }
    }
    getGroups() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}groupe_affectations`);
    }
    createGroup(groupObj) {
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}groupe_affectations`, groupObj);
    }
    updateUser(user) {
        const userToUpdate = {
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
        return this.requestService.createPatchRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}users/${user.id}`, userToUpdate);
    }
    addUserToGroup(user) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            for (const group of user.groupeAffected) {
                const groupAffectationIri = {
                    libelle: group.libelle,
                    population: group.population.map(userGroup => this.getIri(userGroup))
                };
                groupAffectationIri.population.push(this.getIri(user));
                yield this.requestService.createPatchRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}groupe_affectations/${group.id}/addUsers`, { population: groupAffectationIri.population })
                    .subscribe((responseGroup) => {
                    user.groupeAffected = responseGroup;
                });
            }
            resolve(user);
        }));
    }
    getUsersByService(serviceId) {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}services/${serviceId}`);
    }
    deleteUser(userId) {
        return this.requestService.createDeleteRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}users/${userId}`);
    }
    confirmUser(userId, status) {
        return this.requestService.createPatchRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}users/${userId}`, { isActive: status });
    }
};
UsersService.ctorParameters = () => [
    { type: _request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService },
    { type: _role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService },
    { type: _serices_service__WEBPACK_IMPORTED_MODULE_4__.SericesService },
    { type: _programs_programs_service__WEBPACK_IMPORTED_MODULE_1__.ProgramsService },
    { type: _unite_service__WEBPACK_IMPORTED_MODULE_5__.UniteService },
    { type: _usine_service__WEBPACK_IMPORTED_MODULE_6__.UsineService }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ 98:
/*!******************************************************!*\
  !*** ./src/app/core/services/users/usine.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsineService": () => (/* binding */ UsineService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let UsineService = class UsineService {
    constructor() { }
    getIri(usine) {
        if (typeof (usine) == 'string') {
            return usine;
        }
        else {
            return `/api/services/${usine.id}`;
        }
    }
};
UsineService.ctorParameters = () => [];
UsineService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], UsineService);



/***/ }),

/***/ 21545:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/shared-user-header/shared-user-header.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUserHeaderComponent": () => (/* binding */ SharedUserHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_user_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-user-header.component.html?ngResource */ 2810);
/* harmony import */ var _shared_user_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-user-header.component.scss?ngResource */ 75829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/users/auth.service */ 73919);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-popover/user-popover.component */ 54262);









let SharedUserHeaderComponent = class SharedUserHeaderComponent {
    constructor(authService, loadingService, navCtrl, popoverCtrl) {
        this.authService = authService;
        this.loadingService = loadingService;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.user = this.authService.authUser;
    }
    ngOnDestroy() {
        console.log('destroy header');
    }
    ngOnInit() {
        this.envMode = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.name;
    }
    logoutClick() {
        this.loadingService.startLoading('Déconnexion');
        this.authService.logout()
            .subscribe(() => {
            this.loadingService.stopLoading();
            this.navCtrl.navigateRoot('/login');
        });
    }
    triggerUserPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            ev.preventDefault();
            const popover = yield this.popoverCtrl.create({
                component: _user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_5__.UserPopoverComponent,
                reference: 'trigger',
                showBackdrop: true,
                backdropDismiss: true,
                animated: true,
                dismissOnSelect: true
            });
            popover.present();
        });
    }
    navigate(path) {
        this.navCtrl.navigateRoot(path);
    }
};
SharedUserHeaderComponent.ctorParameters = () => [
    { type: src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController }
];
SharedUserHeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    hideMenuIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }]
};
SharedUserHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-shared-user-header',
        template: _shared_user_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shared_user_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedUserHeaderComponent);



/***/ }),

/***/ 54262:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/user-popover/user-popover.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPopoverComponent": () => (/* binding */ UserPopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-popover.component.html?ngResource */ 91388);
/* harmony import */ var _user_popover_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-popover.component.css?ngResource */ 62297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/users/auth.service */ 73919);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! package.json */ 4147);








let UserPopoverComponent = class UserPopoverComponent {
    constructor(navCtrl, authService, loadingService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingService = loadingService;
        this.isUserOpen = false;
        this.version = package_json__WEBPACK_IMPORTED_MODULE_4__.version;
    }
    ngOnInit() {
    }
    navigate(path) {
        this.navCtrl.navigateRoot(path);
    }
    logoutClick() {
        this.loadingService.startLoading('Déconnexion');
        this.authService.logout()
            .subscribe(() => {
            this.loadingService.stopLoading();
            this.navCtrl.navigateRoot('/login');
        });
    }
};
UserPopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService }
];
UserPopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-user-popover',
        template: _user_popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_popover_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserPopoverComponent);



/***/ }),

/***/ 38300:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-sheet/user-sheet.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSheetComponent": () => (/* binding */ UserSheetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _user_sheet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-sheet.component.html?ngResource */ 49594);
/* harmony import */ var _user_sheet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-sheet.component.scss?ngResource */ 53984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/users/users.service */ 88896);







let UserSheetComponent = class UserSheetComponent {
    constructor(loadingService, alertService, userService) {
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.userService = userService;
        this.userState = false;
        this.stateChangeEv = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    updateUserClick() {
        this.loadingService.startLoading('Mise à jour de l\'utilisateur');
        this.userService.updateUser(this.user)
            .subscribe((resp) => {
            console.log(resp);
            this.loadingService.stopLoading();
        }, (err) => {
            console.error(err);
            this.loadingService.stopLoading();
            this.alertService.simpleAlert(`Erreur serveur`, `Problème lors de la mise à jour`, `L'utilisateur n'a pas été modifié. Veuillez recommencer.`);
        });
    }
    deleteUserClick() {
        this.loadingService.startLoading('Suppression de l\'utilisateur');
        this.userService.deleteUser(this.user.id)
            .subscribe(() => {
            this.loadingService.stopLoading();
        }, (err) => {
            this.alertService.simpleAlert('Erreur', 'Suppression d\'un utilisateur', 'Une erreur est survenue pendant la suppression de l\'utilisateur. ' + err.message);
            this.loadingService.stopLoading();
        });
    }
};
UserSheetComponent.ctorParameters = () => [
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService }
];
UserSheetComponent.propDecorators = {
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    userState: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    stateChangeEv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }]
};
UserSheetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-user-sheet',
        template: _user_sheet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_user_sheet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserSheetComponent);



/***/ }),

/***/ 77674:
/*!********************************************************************************!*\
  !*** ./src/app/shared/indicators/indicator-graph/indicator-graph.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorGraphComponent": () => (/* binding */ IndicatorGraphComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _indicator_graph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-graph.component.html?ngResource */ 47312);
/* harmony import */ var _indicator_graph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator-graph.component.scss?ngResource */ 73117);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ 93566);





let IndicatorGraphComponent = class IndicatorGraphComponent {
    constructor() { }
    ngAfterViewInit() {
        console.log(this.indicator);
        this.pieChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](this.canvas.nativeElement, {
            type: 'pie',
            data: {
                labels: Object.entries(this.indicator.repartitionObj).map(test => test[0]),
                datasets: [
                    {
                        label: `Prefix-${this.indicator.name}`,
                        backgroundColor: ['#505F69', '#6EB4CD'],
                        borderColor: '#E1E1D7',
                        borderWidth: 1,
                        borderJoinStyle: 'miter',
                        data: Object.entries(this.indicator.repartitionObj).map(test => test[1]),
                    }
                ]
            },
            options: {
                plugins: {}
            }
        });
        this.pieChart.update();
    }
    ngOnInit() {
        console.log('init', this.indicator);
    }
};
IndicatorGraphComponent.ctorParameters = () => [];
IndicatorGraphComponent.propDecorators = {
    indicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    canvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['canvas',] }]
};
IndicatorGraphComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-indicator-graph',
        template: _indicator_graph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indicator_graph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndicatorGraphComponent);



/***/ }),

/***/ 65583:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/indicators/indicator-number/indicator-number.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorNumberComponent": () => (/* binding */ IndicatorNumberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _indicator_number_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-number.component.html?ngResource */ 5811);
/* harmony import */ var _indicator_number_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator-number.component.scss?ngResource */ 54474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let IndicatorNumberComponent = class IndicatorNumberComponent {
    constructor() { }
    ngOnInit() { }
};
IndicatorNumberComponent.ctorParameters = () => [];
IndicatorNumberComponent.propDecorators = {
    indicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
IndicatorNumberComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-indicator-number',
        template: _indicator_number_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_indicator_number_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndicatorNumberComponent);



/***/ }),

/***/ 9096:
/*!********************************************************!*\
  !*** ./src/app/shared/indicators/indicators.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorsModule": () => (/* binding */ IndicatorsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _indicator_number_indicator_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-number/indicator-number.component */ 65583);
/* harmony import */ var _indicator_graph_indicator_graph_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator-graph/indicator-graph.component */ 77674);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





let IndicatorsModule = class IndicatorsModule {
};
IndicatorsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _indicator_number_indicator_number_component__WEBPACK_IMPORTED_MODULE_0__.IndicatorNumberComponent,
            _indicator_graph_indicator_graph_component__WEBPACK_IMPORTED_MODULE_1__.IndicatorGraphComponent,
        ],
        exports: [
            _indicator_number_indicator_number_component__WEBPACK_IMPORTED_MODULE_0__.IndicatorNumberComponent,
            _indicator_graph_indicator_graph_component__WEBPACK_IMPORTED_MODULE_1__.IndicatorGraphComponent,
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ]
    })
], IndicatorsModule);



/***/ }),

/***/ 94872:
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 97217);





let MaterialModule = class MaterialModule {
};
MaterialModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        exports: [
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__.MatExpansionModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDividerModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule
        ]
    })
], MaterialModule);



/***/ }),

/***/ 56439:
/*!***********************************************************************!*\
  !*** ./src/app/shared/notices/login-notice/login-notice.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginNoticeComponent": () => (/* binding */ LoginNoticeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_notice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-notice.component.html?ngResource */ 20877);
/* harmony import */ var _login_notice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-notice.component.scss?ngResource */ 74447);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_notice_notice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/notice/notice.service */ 84993);





let LoginNoticeComponent = class LoginNoticeComponent {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    ngOnInit() { }
    backClick() {
        this.noticeService.closeModal();
    }
};
LoginNoticeComponent.ctorParameters = () => [
    { type: src_app_core_services_notice_notice_service__WEBPACK_IMPORTED_MODULE_2__.NoticeService }
];
LoginNoticeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-login-notice',
        template: _login_notice_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_notice_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginNoticeComponent);



/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSharedModule": () => (/* binding */ AppSharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_shared_user_header_shared_user_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/shared-user-header/shared-user-header.component */ 21545);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 94872);
/* harmony import */ var _indicators_indicators_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indicators/indicators.module */ 9096);
/* harmony import */ var _components_user_sheet_user_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-sheet/user-sheet.component */ 38300);
/* harmony import */ var _components_user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-popover/user-popover.component */ 54262);
/* harmony import */ var _notices_login_notice_login_notice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notices/login-notice/login-notice.component */ 56439);
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinymce/tinymce-angular */ 28155);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/divers/loading.service */ 74501);
/* harmony import */ var _core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/divers/alert.service */ 512);
















let AppSharedModule = class AppSharedModule {
};
AppSharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _components_shared_user_header_shared_user_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedUserHeaderComponent,
            _components_user_sheet_user_sheet_component__WEBPACK_IMPORTED_MODULE_3__.UserSheetComponent,
            _components_user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_4__.UserPopoverComponent,
            _notices_login_notice_login_notice_component__WEBPACK_IMPORTED_MODULE_5__.LoginNoticeComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _indicators_indicators_module__WEBPACK_IMPORTED_MODULE_2__.IndicatorsModule,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__.EditorModule,
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule,
            _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
            _indicators_indicators_module__WEBPACK_IMPORTED_MODULE_2__.IndicatorsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _components_shared_user_header_shared_user_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedUserHeaderComponent,
            _components_user_sheet_user_sheet_component__WEBPACK_IMPORTED_MODULE_3__.UserSheetComponent,
            _components_user_popover_user_popover_component__WEBPACK_IMPORTED_MODULE_4__.UserPopoverComponent,
            _notices_login_notice_login_notice_component__WEBPACK_IMPORTED_MODULE_5__.LoginNoticeComponent,
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__.EditorModule,
        ],
        providers: [
            _core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_6__.LoadingService,
            _core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
        ]
    })
], AppSharedModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    name: 'DEV',
    apiServer: 'http://152.60.136.236:81/',
    moldingApi: 'Tracakit-api-dev/public/index.php/api/',
    toolApi: 'outillage-api-dev/public/index.php/api/',
    usineApi: 'usine-api-dev/public/index.php/api/',
    username: '204292',
    password: 'test'
    // toolApiServer: 'http://localhost/apiTooling/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 68150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 62297:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/user-popover/user-popover.component.css?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXBvcG92ZXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 75829:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/shared-user-header/shared-user-header.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".margin {\n  margin-right: 10px;\n}\n\n.logo {\n  width: 100px;\n}\n\n@media print {\n  :host {\n    display: none;\n  }\n}\n\n.dev {\n  color: red;\n  text-transform: uppercase;\n  font-size: large;\n  font-weight: bold;\n  padding-right: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC11c2VyLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoic2hhcmVkLXVzZXItaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5kZXYge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 53984:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/user-sheet/user-sheet.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-content {\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItc2hlZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxXQUFBO0FBSEYiLCJmaWxlIjoidXNlci1zaGVldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDpob3N0IHtcclxuLy8gICBvdmVyZmxvdzogYXV0bztcclxuLy8gfVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 73117:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/indicators/indicator-graph/indicator-graph.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2F0b3ItZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 54474:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/indicators/indicator-number/indicator-number.component.scss?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-text {\n  font-size: 500%;\n  color: var(--ion-color-primary-contrast);\n}\n\nion-card-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvci1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaW5kaWNhdG9yLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdClcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 74447:
/*!************************************************************************************!*\
  !*** ./src/app/shared/notices/login-notice/login-notice.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1ub3RpY2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 2810:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/shared-user-header/shared-user-header.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=primary>\r\n    <!--  -->\r\n    <!-- left side -->\r\n    <!--  -->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=false color=\"light\" *ngIf=!hideMenuIcon></ion-menu-button>\r\n      <ion-img class=\"ion-hide-sm-down logo\" src=\"assets/images/logoDaherFondBleu.png\" (click)=\"navigate('home')\">\r\n      </ion-img>\r\n    </ion-buttons>\r\n    <!--  -->\r\n    <!-- middle side -->\r\n    <!--  -->\r\n    <ion-title class=\"ion-text-uppercase ion-text-center\">{{title}}</ion-title>\r\n    <!--  -->\r\n    <!-- right side -->\r\n    <!--  -->\r\n    <ion-label slot=end class=\"dev ion-hide-sm-down\">{{envMode}}</ion-label>\r\n    <ion-chip #buttonProfil color=light slot=end class=ion-margin-end outline\r\n      (contextmenu)=\"triggerUserPopover($event)\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label color=light>{{user?.username}}</ion-label>\r\n    </ion-chip>\r\n    <!-- <ion-popover trigger=\"button-profil\" triggerAction=\"context-menu\" alignment=\"end\" side=\"bottom\"\r\n      dismissOnSelect=\"true\">\r\n      <ng-template>\r\n        <ion-content>\r\n\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover> -->\r\n    <ion-button class=\"ion-hide-sm-down margin\" slot=end color=\"danger\" (click)=\"logoutClick()\">\r\n      <ion-icon slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n      <ion-label class=\"ion-hide-md-down\">Déconnexion</ion-label>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- <ion-content> -->\r\n<!-- TODO transformer en modale -->\r\n<!-- <app-user-sheet [user]=\"user\" [userState]=\"isUserOpen\" (stateChangeEv)=\"isUserOpen = $event\"></app-user-sheet> -->\r\n<!-- </ion-content> -->\r\n<!-- <app-user-sheet [user]=\"selectedUser\" [userState]=\"isUserSelected\" (stateChangeEv)=\"isUserSelected=$event\">\r\n</app-user-sheet> -->\r\n";

/***/ }),

/***/ 91388:
/*!***************************************************************************************!*\
  !*** ./src/app/shared/components/user-popover/user-popover.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- <ion-popover>\n  <ng-template #name> -->\n<ion-list>\n  <ion-item button id=\"trigger-button\" (click)=\"isUserOpen=true\">\n    <ion-label>Profil</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Préférences</ion-label>\n    <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n  <ion-item button (click)=\"navigate('admin')\">\n    <ion-label>Administration</ion-label>\n    <ion-icon name=\"construct-outline\" slot=\"start\"></ion-icon>\n  </ion-item>\n  <ion-item color=\"danger\" class=\"ion-hide-sm-up\" (click)=\"logoutClick()\">\n    <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n    <ion-label>Déconnexion</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>\n      Version : {{version}}\n    </ion-label>\n  </ion-item>\n</ion-list>\n<!-- </ng-template>\n\n</ion-popover> -->\n";

/***/ }),

/***/ 49594:
/*!***********************************************************************************!*\
  !*** ./src/app/shared/components/user-sheet/user-sheet.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-modal [isOpen]=\"userState\" trigger=\"trigger-button\"\r\n  (ionModalDidDismiss)=\"userState=false; stateChangeEv.emit(false)\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title> Fiche utilisateur : {{user.nom}} {{user.prenom}}</ion-title>\r\n        <ion-icon button slot=\"end\" name=\"close-outline\" size=\"large\" (click)=\"userState=false;\">\r\n        </ion-icon>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-item>\r\n        <ion-label>Nom</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.nom\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Prénom</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.prenom\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Matricule</ion-label>\r\n        <ion-input disabled=\"true\" type=\"text\" [value]=\"user.matricule\"></ion-input>\r\n        <ion-icon slot=\"end\" name=\"lock-closed-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>E-Mail</ion-label>\r\n        <ion-input disabled=\"true\" type=\"text\" [value]=\"user.mail\"></ion-input>\r\n        <ion-icon slot=\"end\" name=\"lock-closed-outline\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Téléphone</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.tel\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Date de création</ion-label>\r\n        <ion-input disabled=\"true\" type=\"text\" [value]=\"user.createdAt | date\"></ion-input>\r\n        <ion-icon slot=\"end\" name=\"lock-closed-outline\"></ion-icon>\r\n      </ion-item>\r\n    </ion-content>\r\n\r\n    <ion-footer>\r\n      <ion-toolbar>\r\n        <ion-buttons>\r\n          <ion-button slot=end size=small (click)=\"updateUserClick()\">\r\n            <label>Enregistrer</label>\r\n            <ion-icon slot=\"start\" name=\"sync-outline\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button slot=end size=small (click)=\"deleteUserClick()\">\r\n            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ }),

/***/ 47312:
/*!*********************************************************************************************!*\
  !*** ./src/app/shared/indicators/indicator-graph/indicator-graph.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card color=primary class=\"ion-no-padding\">\n  <ion-card-header>\n    <ion-card-subtitle>\n      {{indicator.name}}\n    </ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <canvas #canvas></canvas>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 5811:
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/indicators/indicator-number/indicator-number.component.html?ngResource ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card color=primary>\n    <ion-card-header>\n        <ion-card-subtitle>{{indicator.name}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-text>\n            {{indicator.value}}\n        </ion-text>\n\n    </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 20877:
/*!************************************************************************************!*\
  !*** ./src/app/shared/notices/login-notice/login-notice.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button slot=start (click)=\"backClick()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Notice page Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen=\"true\">\n  <section class=\"ion-margin ion-padding\" style=\"background-color:red\">\n    <ion-title>Connexion</ion-title>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Sans mot de passe</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Votre rôle est : COMPAGNON, USER ... votre nom d'utilisateur est le numéro de matricule (avec ou sans les\n          zéros de la gauche)</p>\n        <p>Vous pouvez soit scanner le qr-code soit le taper directement</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Avec mot de passe</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Taper votre matricule en nom d'utilisateur. Taper votre mot de passe puis cliquer sur \"SE CONNECTER\"</p>\n      </ion-card-content>\n    </ion-card>\n  </section>\n  <section class=\"ion-margin ion-padding\" color=light style=\"background-color:red\">\n    <ion-title>Vous n'avez pas de compte</ion-title>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Créer un compte</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Si vous voulez vous créer un compte cliquer sur \"CREER UN COMPTE\"</p>\n      </ion-card-content>\n    </ion-card>\n\n  </section>\n  <section class=\"ion-margin ion-padding\">\n    <ion-title>Questions fréquentes</ion-title>\n    <p>Vous tapez votre nom d'utilisateur mais impossible de vous connecter : vérifiez si vous avez créer un comte.</p>\n  </section>\n</ion-content>\n";

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"moldingApp","version":"1.5.8","author":"DAHER by Joris GRANGIER","homepage":"","scripts":{"ng":"ng","start":"ionic serve cypress:open","build":"ionic build --prod & ionic build --configuration=qual","test":"ng test","lint":"ng lint","e2e":"ng e2e","cypress:open":"cypress open"},"private":true,"dependencies":{"@angular/animations":"~14.1.3","@angular/cdk":"^14.1.3","@angular/common":"~14.1.3","@angular/core":"~14.1.3","@angular/forms":"~14.1.3","@angular/material":"^14.1.3","@angular/platform-browser":"~14.1.3","@angular/platform-browser-dynamic":"~14.1.3","@angular/router":"~14.1.3","@angular/service-worker":"~14.1.3","@awesome-cordova-plugins/barcode-scanner":"^5.39.1","@capacitor/filesystem":"^1.1.0","@capacitor/haptics":"1.1.4","@capacitor/keyboard":"1.2.1","@capacitor/status-bar":"1.0.7","@ionic-native/browser-tab":"^5.36.0","@ionic-native/camera":"^5.36.0","@ionic-native/core":"^5.36.0","@ionic-native/file":"^5.36.0","@ionic-native/file-opener":"^5.36.0","@ionic-native/pdf-generator":"^5.36.0","@ionic/angular":"^6.0.0","@ionic/pwa-elements":"^3.1.1","@tinymce/tinymce-angular":"^6.0.1","@types/dom-to-image":"^2.6.4","@types/jspdf":"^2.0.0","chart.js":"^3.7.1","chartjs-plugin-datalabels":"^2.0.0","cordova-pdf-generator":"^2.1.1","cordova-plugin-browsertab":"^0.2.0","cordova-plugin-file":"^6.0.2","cordova-plugin-file-opener2":"^3.0.5","dom-to-image":"^2.6.0","jsbarcode":"^3.11.5","jspdf":"^2.5.1","ngx-socket-io":"^4.2.0","ngx-webcam":"^0.4.1","pdfmake":"^0.2.4","phonegap-plugin-barcodescanner":"^8.1.0","rxjs":"~6.6.0","swiper":"^8.0.6","tinymce":"^6.0.2","tslib":"^2.2.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"^14.1.3","@angular-eslint/builder":"~13.0.1","@angular-eslint/eslint-plugin":"~13.0.1","@angular-eslint/eslint-plugin-template":"~13.0.1","@angular-eslint/template-parser":"~13.0.1","@angular/cli":"~14.1.3","@angular/compiler":"~14.1.3","@angular/compiler-cli":"~14.1.3","@angular/language-service":"~14.1.3","@capacitor/cli":"3.4.0","@ionic/angular-toolkit":"^5.0.0","@tsconfig/cypress":"^1.0.1","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/node":"^12.11.1","@typescript-eslint/eslint-plugin":"5.3.0","@typescript-eslint/parser":"5.3.0","cypress":"^10.8.0","eslint":"^7.6.0","eslint-plugin-import":"2.22.1","eslint-plugin-jsdoc":"30.7.6","eslint-plugin-prefer-arrow":"1.2.2","jasmine-core":"~3.8.0","jasmine-spec-reporter":"~5.0.0","karma":"^6.3.19","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","protractor":"~7.0.0","ts-node":"~8.3.0","typescript":"~4.7.4"},"description":"An Ionic project"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map