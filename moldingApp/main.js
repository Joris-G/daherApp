(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 2853:
/*!***************************************************!*\
  !*** ./src/app/_services/divers/alert.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 95472);



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

/***/ 99172:
/*!*****************************************************!*\
  !*** ./src/app/_services/divers/loading.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 95472);



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
            cssClass: 'my-custom-class',
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

/***/ 78627:
/*!********************************************************!*\
  !*** ./src/app/_services/programs/programs.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramsService": () => (/* binding */ ProgramsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 48219);




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

/***/ 48219:
/*!**********************************************!*\
  !*** ./src/app/_services/request.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
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
        this.apiToken = '';
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json');
        this.postHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Content-Type', 'application/json')
            .append('Accept', 'application/json')
            .append('Authorization', this.apiToken);
        this.patchHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Content-Type', 'application/merge-patch+json')
            .append('Accept', 'application/json');
        this.deleteHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
            .append('Accept', '*/*');
    }
    createPostRequest(url, body) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer + url, body, {
            headers: (this.apiToken !== '') ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Accept', 'application/json')
                .append('x-auth-token', localStorage.getItem('token')) : this.httpHeaders
        });
    }
    createPutRequest(url, body) {
        return this.http.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, body, {
            headers: (this.apiToken !== '') ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .append('Content-Type', 'application/json')
                .append('Accept', 'application/json')
                .append('x-auth-token', localStorage.getItem('token')) : this.httpHeaders
        });
    }
    createPatchRequest(url, body) {
        return this.http.patch(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, body, {
            headers: (this.apiToken !== '') ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .append('Accept', 'application/json')
                .append('Content-Type', 'application/merge-patch+json')
                .append('x-auth-token', localStorage.getItem('token')) : this.patchHttpHeaders
        });
    }
    createGetRequest(url) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, { headers: this.httpHeaders });
    }
    createDeleteRequest(url) {
        return this.http.delete(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}${url}`, { headers: this.httpHeaders });
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
RequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], RequestService);



/***/ }),

/***/ 34699:
/*!***********************************************!*\
  !*** ./src/app/_services/users/auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 27704);




let AuthGuard = class AuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate() {
        if (this.authService.isAuth) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 27704:
/*!*************************************************!*\
  !*** ./src/app/_services/users/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 89258);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 48219);





let AuthService = class AuthService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    authenticate(userName, password) {
        this.requestService.apiToken = '';
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}login`, { matricule: userName, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((returnsData) => {
            if (returnsData) {
                console.log(returnsData.user.apiToken);
                localStorage.setItem('token', returnsData.user.apiToken);
                this.requestService.apiToken = returnsData.user.apiToken;
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log(response);
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

/***/ 82833:
/*!***********************************************!*\
  !*** ./src/app/_services/users/role.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../divers/alert.service */ 2853);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 27704);





let RoleGuard = class RoleGuard {
    constructor(auth, alerteService, router) {
        this.auth = auth;
        this.alerteService = alerteService;
        this.router = router;
    }
    canActivate(route) {
        const expectedRole = route.data.expectedRole;
        const isRole = this.isRole(expectedRole);
        if (!isRole) {
            console.error('Impossible d\'accéder à la page');
            this.alerteService.simpleAlert('Alerte de l\'application', 'Autorisation', 'Vous n\'avez pas accès à cette page');
            this.router.navigate(['home']);
        }
        return (this.auth.isAuth && isRole && this.auth.authUser.isActive);
    }
    isRole(expectedRoles) {
        // console.log(expectedRoles);
        if (this.auth.authUser) {
            return expectedRoles.some((expectedRole => this.auth.authUser.roles.includes(expectedRole)));
        }
        return false;
    }
};
RoleGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RoleGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], RoleGuard);



/***/ }),

/***/ 60181:
/*!*************************************************!*\
  !*** ./src/app/_services/users/role.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": () => (/* binding */ RoleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 48219);




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

/***/ 74337:
/*!****************************************************!*\
  !*** ./src/app/_services/users/serices.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SericesService": () => (/* binding */ SericesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 48219);




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

/***/ 57847:
/*!**************************************************!*\
  !*** ./src/app/_services/users/unite.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UniteService": () => (/* binding */ UniteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 48219);




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

/***/ 1824:
/*!**************************************************!*\
  !*** ./src/app/_services/users/users.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _programs_programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs/programs.service */ 78627);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ 48219);
/* harmony import */ var _role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./role.service */ 60181);
/* harmony import */ var _serices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serices.service */ 74337);
/* harmony import */ var _unite_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unite.service */ 57847);
/* harmony import */ var _usine_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usine.service */ 33418);









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
        return this.requestService.createGetRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi + `users`);
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
        return this.requestService.createPutRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}users/${user.id}`, userToUpdate);
    }
    addUserToGroup(user) {
        return new Promise((resolve, reject) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            for (const group of user.groupeAffectations) {
                const groupAffectationIri = {
                    libelle: group.libelle,
                    population: group.population.map(userGroup => this.getIri(userGroup))
                };
                groupAffectationIri.population.push(this.getIri(user));
                yield this.requestService.createPatchRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.usineApi}groupe_affectations/$${group.id}/addUsers`, { population: groupAffectationIri.population })
                    .subscribe((responseGroup) => {
                    user.groupeAffectations = responseGroup;
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

/***/ 33418:
/*!**************************************************!*\
  !*** ./src/app/_services/users/usine.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsineService": () => (/* binding */ UsineService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_services/users/auth.guard */ 34699);
/* harmony import */ var _services_users_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/users/role.guard */ 82833);





const routes = [
    {
        path: 'home',
        canActivate: [_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 57994))
            .then(m => m.HomePageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053))
            .then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 60207))
            .then(m => m.RegisterPageModule)
    },
    {
        path: 'molding',
        canActivate: [_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_tooling_tools_tool_service_ts-node_modules_angular_material_fesm201-9718ac"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_expansion_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_molding_molding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/molding/molding.module */ 87947))
            .then(m => m.MoldingPageModule)
    },
    {
        path: 'tooling',
        canActivate: [_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_tooling_tools_tool_service_ts-node_modules_angular_material_fesm201-9718ac"), __webpack_require__.e("default-node_modules_angular_material_fesm2015_expansion_mjs"), __webpack_require__.e("src_app_pages_tool-request_tool-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tool-request/tool-request.module */ 37494))
            .then(m => m.ToolRequestPageModule)
    },
    {
        path: 'admin',
        canActivate: [_services_users_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
        data: {
            expectedRole: ['ROLE_ADMIN'],
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_tooling_tools_tool_service_ts-node_modules_angular_material_fesm201-9718ac"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/admin/admin.module */ 61496))
            .then(m => m.AdminPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 32009);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);




let AppComponent = class AppComponent {
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 78394);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./composants/shared-user-header/shared-user-header.module */ 68890);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 78336);
/* harmony import */ var _composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./composants/menu/menu.module */ 36091);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 18232);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 1670);
/* harmony import */ var _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/pdf-generator/ngx */ 26859);











// import { SharedAdminHeaderComponentModule } from './composants/shared-admin-header/shared-admin-header.module';



let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        ],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
            _composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__.MenuModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__.FileOpener,
            _ionic_native_pdf_generator_ngx__WEBPACK_IMPORTED_MODULE_6__.PDFGenerator,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        exports: []
    })
], AppModule);



/***/ }),

/***/ 6868:
/*!**********************************************************!*\
  !*** ./src/app/composants/component/component.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentModule": () => (/* binding */ ComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _user_sheet_user_sheet_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-sheet/user-sheet.component */ 52361);
/* harmony import */ var _indicators_indicator_graph_indicator_graph_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../indicators/indicator-graph/indicator-graph.module */ 81540);
/* harmony import */ var _indicators_indicator_number_indicator_number_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../indicators/indicator-number/indicator-number.module */ 98755);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);







let ComponentModule = class ComponentModule {
};
ComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _user_sheet_user_sheet_component__WEBPACK_IMPORTED_MODULE_0__.UserSheetComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _indicators_indicator_graph_indicator_graph_module__WEBPACK_IMPORTED_MODULE_1__.IndicatorGraphComponentModule,
            _indicators_indicator_number_indicator_number_module__WEBPACK_IMPORTED_MODULE_2__.IndicatorNumberComponentModule,
        ],
        exports: [
            _indicators_indicator_graph_indicator_graph_module__WEBPACK_IMPORTED_MODULE_1__.IndicatorGraphComponentModule,
            _indicators_indicator_number_indicator_number_module__WEBPACK_IMPORTED_MODULE_2__.IndicatorNumberComponentModule,
            _user_sheet_user_sheet_component__WEBPACK_IMPORTED_MODULE_0__.UserSheetComponent,
        ],
        providers: []
    })
], ComponentModule);



/***/ }),

/***/ 33015:
/*!************************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-graph/indicator-graph.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorGraphComponent": () => (/* binding */ IndicatorGraphComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _indicator_graph_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-graph.component.html?ngResource */ 48533);
/* harmony import */ var _indicator_graph_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator-graph.component.scss?ngResource */ 65296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ 73110);





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

/***/ 81540:
/*!*********************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-graph/indicator-graph.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorGraphComponentModule": () => (/* binding */ IndicatorGraphComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _indicator_graph_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-graph.component */ 33015);






let IndicatorGraphComponentModule = class IndicatorGraphComponentModule {
};
IndicatorGraphComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,],
        declarations: [_indicator_graph_component__WEBPACK_IMPORTED_MODULE_0__.IndicatorGraphComponent],
        exports: [_indicator_graph_component__WEBPACK_IMPORTED_MODULE_0__.IndicatorGraphComponent]
    })
], IndicatorGraphComponentModule);



/***/ }),

/***/ 83325:
/*!**************************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-number/indicator-number.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorNumberComponent": () => (/* binding */ IndicatorNumberComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _indicator_number_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-number.component.html?ngResource */ 83907);
/* harmony import */ var _indicator_number_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicator-number.component.scss?ngResource */ 11346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);




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

/***/ 98755:
/*!***********************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-number/indicator-number.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndicatorNumberComponentModule": () => (/* binding */ IndicatorNumberComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _indicator_number_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicator-number.component */ 83325);






let IndicatorNumberComponentModule = class IndicatorNumberComponentModule {
};
IndicatorNumberComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,],
        declarations: [_indicator_number_component__WEBPACK_IMPORTED_MODULE_0__.IndicatorNumberComponent],
        exports: [_indicator_number_component__WEBPACK_IMPORTED_MODULE_0__.IndicatorNumberComponent]
    })
], IndicatorNumberComponentModule);



/***/ }),

/***/ 19769:
/*!***************************************************!*\
  !*** ./src/app/composants/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component.html?ngResource */ 67672);
/* harmony import */ var _menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component.scss?ngResource */ 89564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);




let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() { }
    idMoldingInputChange() {
        console.log('test');
    }
};
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-menu',
        template: _menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MenuComponent);



/***/ }),

/***/ 36091:
/*!************************************************!*\
  !*** ./src/app/composants/menu/menu.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ 19769);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 65485);






let MenuModule = class MenuModule {
};
MenuModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        ],
        exports: [
            _menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent
        ]
    })
], MenuModule);



/***/ }),

/***/ 45681:
/*!*******************************************************************************!*\
  !*** ./src/app/composants/shared-user-header/shared-user-header.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUserHeaderComponent": () => (/* binding */ SharedUserHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _shared_user_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-user-header.component.html?ngResource */ 94870);
/* harmony import */ var _shared_user_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-user-header.component.scss?ngResource */ 14748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 27704);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! package.json */ 4147);







let SharedUserHeaderComponent = class SharedUserHeaderComponent {
    constructor(authService, navCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.isPopoverOpen = false;
        this.isUserOpen = false;
        this.version = package_json__WEBPACK_IMPORTED_MODULE_3__.version;
    }
    log(text) {
        console.log(text);
    }
    ngAfterViewInit() {
        // this.menu.open();
    }
    ngAfterViewChecked() {
        // this.menu.open();
    }
    ngOnChanges(changes) {
        // console.log(this.page);
        this.user = this.authService.authUser;
    }
    ngOnInit() {
        // console.log(this.page);
    }
    logoutClick() {
        this.authService.logout()
            .subscribe(() => {
            this.navCtrl.navigateBack('/login');
        });
    }
    navigate(path) {
        this.navCtrl.navigateForward(path);
    }
};
SharedUserHeaderComponent.ctorParameters = () => [
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
SharedUserHeaderComponent.propDecorators = {
    pageTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['menu',] }]
};
SharedUserHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-shared-user-header',
        template: _shared_user_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shared_user_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedUserHeaderComponent);



/***/ }),

/***/ 68890:
/*!****************************************************************************!*\
  !*** ./src/app/composants/shared-user-header/shared-user-header.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUserHeaderModule": () => (/* binding */ SharedUserHeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _shared_user_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-user-header.component */ 45681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/component.module */ 6868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31777);








let SharedUserHeaderModule = class SharedUserHeaderModule {
};
SharedUserHeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [
            _shared_user_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedUserHeaderComponent,
        ],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _component_component_module__WEBPACK_IMPORTED_MODULE_1__.ComponentModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        ],
        exports: [_shared_user_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedUserHeaderComponent]
    })
], SharedUserHeaderModule);



/***/ }),

/***/ 52361:
/*!***************************************************************!*\
  !*** ./src/app/composants/user-sheet/user-sheet.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSheetComponent": () => (/* binding */ UserSheetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _user_sheet_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-sheet.component.html?ngResource */ 27035);
/* harmony import */ var _user_sheet_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-sheet.component.scss?ngResource */ 99049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/divers/alert.service */ 2853);
/* harmony import */ var src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/divers/loading.service */ 99172);
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/users/users.service */ 1824);







let UserSheetComponent = class UserSheetComponent {
    constructor(loadingService, alertService, userService) {
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.userService = userService;
        this.userState = false;
        this.stateChangeEv = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    log(text) {
        console.log(text);
    }
    ngOnInit() { }
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
    { type: src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService }
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
    apiServer: 'http://152.60.136.236:81/',
    moldingApi: 'Tracakit-api/public/index.php/api/',
    toolApi: 'outillage-api/public/index.php/api/',
    usineApi: 'usine-api/public/index.php/api/',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 14909);
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
		470,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		22725,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36149,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		19288,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		61031,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		58310,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		81983,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		17039,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		57945,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		8714,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		31786,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		24702,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		94094,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		50795,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		36976,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		51417,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		78412,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		94706,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		73459,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		23354,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		41025,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		98592,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		52526,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		92447,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		24820,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		83212,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		87557,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		28692,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		93544,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		40042,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		70718,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		95981,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		76488,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		47937,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		50942,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		20816,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		19062,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		13466,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		18404,
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		60953,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		44254,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		45195,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		86116,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		79781,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		48323,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		376,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		82072,
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

/***/ 32009:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 65296:
/*!*************************************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-graph/indicator-graph.component.scss?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRpY2F0b3ItZ3JhcGguY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 11346:
/*!***************************************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-number/indicator-number.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-text {\n  font-size: 500%;\n  color: var(--ion-color-primary-contrast);\n}\n\nion-card-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvci1udW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0Esd0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoiaW5kaWNhdG9yLW51bWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogNTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdClcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 89564:
/*!****************************************************************!*\
  !*** ./src/app/composants/menu/menu.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 14748:
/*!********************************************************************************************!*\
  !*** ./src/app/composants/shared-user-header/shared-user-header.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".margin {\n  margin-right: 10px;\n}\n\n.logo {\n  width: 100px;\n}\n\n@media print {\n  :host {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC11c2VyLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQUE7RUFDRjtBQUNGIiwiZmlsZSI6InNoYXJlZC11c2VyLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 99049:
/*!****************************************************************************!*\
  !*** ./src/app/composants/user-sheet/user-sheet.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXNoZWV0LmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n    <ion-router-outlet></ion-router-outlet>\n</ion-app>";

/***/ }),

/***/ 48533:
/*!*************************************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-graph/indicator-graph.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card color=primary class=\"ion-no-padding\">\n    <ion-card-header>\n        <ion-card-subtitle>\n            {{indicator.name}}\n        </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n        <canvas #canvas></canvas>\n    </ion-card-content>\n</ion-card>";

/***/ }),

/***/ 83907:
/*!***************************************************************************************************!*\
  !*** ./src/app/composants/indicators/indicator-number/indicator-number.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card color=primary>\n    <ion-card-header>\n        <ion-card-subtitle>{{indicator.name}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n        <ion-text>\n            {{indicator.value}}\n        </ion-text>\n\n    </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 67672:
/*!****************************************************************!*\
  !*** ./src/app/composants/menu/menu.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-menu autoHide open=true #menu side=\"start\" type=\"push\" [contentId]=\"page.contentId\">\n    <ion-header>\n        <ion-toolbar color=\"succes\">\n            <ion-title>\n                {{page.menuTitle}}\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <!-- <ion-item button *ngFor=\"let menuItem of page.menuItems\" [routerLink]=\"menuItem.path\"> -->\n            <ion-item [button]=\"true\" *ngFor=\"let menuItem of page.menuItems\" [routerLink]=\"menuItem.path\" routerDirection=\"forward\">\n                <ion-label>\n                    {{menuItem.title}}\n                </ion-label>\n                <ion-input *ngIf=\"menuItem.options?.input\" #inputIdMolding type=\"text\" placeholder=\"\" (change)=\"idMoldingInputChange()\"></ion-input>\n                <ion-note *ngIf=\"menuItem.options?.input\" slot=helper>Entrer un numéro d'ID ou scanner le code barre de la feuille de moulage</ion-note>\n            </ion-item>\n        </ion-list>\n    </ion-content>\n</ion-menu>";

/***/ }),

/***/ 94870:
/*!********************************************************************************************!*\
  !*** ./src/app/composants/shared-user-header/shared-user-header.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header [translucent]=\"true\">\r\n  <ion-toolbar color=primary>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=false color=\"light\"></ion-menu-button>\r\n      <ion-img class=\"ion-hide-sm-down logo\" src=\"assets/images/logoDaherFondBleu.png\" (click)=\"navigate('home')\">\r\n      </ion-img>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-uppercase ion-text-center\">{{pageTitle}}</ion-title>\r\n    <ion-chip id=\"button-profil\" color=light slot=end class=ion-margin-end outline\r\n      (click)=\"isPopoverOpen=!isPopoverOpen\">\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label color=light>{{user?.username}}</ion-label>\r\n    </ion-chip>\r\n    <ion-popover slot=end [isOpen]=\"isPopoverOpen\" trigger=\"button-profil\" alignment=\"end\" side=\"bottom\">\r\n      <ng-template>\r\n        <ion-content>\r\n          <ion-list>\r\n            <ion-item button id=\"trigger-button\"\r\n              (click)=\"isUserOpen = true; isPopoverOpen = !isPopoverOpen; log(isUserOpen)\">\r\n              <ion-label>Profil</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>Préférences</ion-label>\r\n              <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\r\n            </ion-item>\r\n            <ion-item button (click)=\"navigate('admin')\">\r\n              <ion-label>Administration</ion-label>\r\n              <ion-icon name=\"construct-outline\" slot=\"start\"></ion-icon>\r\n            </ion-item>\r\n            <ion-item color=\"danger\" class=\"ion-hide-sm-up\" (click)=\"logoutClick()\">\r\n              <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n              <ion-label>Déconnexion</ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label>\r\n                Version : {{version}}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-popover>\r\n    <ion-button class=\"ion-hide-sm-down margin\" slot=end color=\"danger\" (click)=\"logoutClick()\">\r\n      <ion-icon slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n      <ion-label class=\"ion-hide-md-down\">Déconnexion</ion-label>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- <ion-content>\r\n  <app-user-sheet [user]=\"user\" [userState]=\"isUserOpen\" (stateChangeEv)=\"isUserOpen = $event\"></app-user-sheet>\r\n</ion-content> -->\r\n";

/***/ }),

/***/ 27035:
/*!****************************************************************************!*\
  !*** ./src/app/composants/user-sheet/user-sheet.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-modal [isOpen]=\"userState\" trigger=\"trigger-button\"\r\n  (ionModalDidDismiss)=\"userState=false; stateChangeEv.emit(false)\">\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title> Fiche utilisateur : {{user.nom}} {{user.prenom}}</ion-title>\r\n        <ion-icon button slot=\"end\" name=\"close-outline\" size=\"large\" (click)=\"userState=false; log(userState)\">\r\n        </ion-icon>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-item>\r\n        <ion-label>Nom</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.nom\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Prénom</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.prenom\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Matricule</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.matricule\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>E-Mail</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.mail\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label>Téléphone</ion-label>\r\n        <ion-input type=\"text\" [value]=\"user.tel\"></ion-input>\r\n      </ion-item>\r\n    </ion-content>\r\n\r\n    <ion-footer>\r\n      <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n          <!-- <ion-button size=small (click)=\"confirmUser(user, true)\">\r\n                                              <ion-icon slot=\"icon-only\" name=\"checkmark-outline\"></ion-icon>\r\n                                            </ion-button>\r\n                                            <ion-button size=small color=danger (click)=\"confirmUser(user, false)\">\r\n                                              <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\r\n                                            </ion-button> -->\r\n          <ion-button size=small (click)=\"deleteUserClick()\">\r\n            <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"moldingApp","version":"1.4.1","author":"DAHER by Joris GRANGIER","homepage":"","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"~13.0.0","@angular/cdk":"^13.2.1","@angular/common":"~13.0.0","@angular/core":"~13.0.0","@angular/forms":"~13.0.0","@angular/material":"^13.2.1","@angular/platform-browser":"~13.0.0","@angular/platform-browser-dynamic":"~13.0.0","@angular/router":"~13.0.0","@angular/service-worker":"~13.0.0","@awesome-cordova-plugins/barcode-scanner":"^5.39.1","@capacitor/android":"^3.4.1","@capacitor/app":"1.1.0","@capacitor/camera":"^1.3.0","@capacitor/core":"3.4.0","@capacitor/filesystem":"^1.1.0","@capacitor/haptics":"1.1.4","@capacitor/keyboard":"1.2.1","@capacitor/status-bar":"1.0.7","@ionic-native/browser-tab":"^5.36.0","@ionic-native/camera":"^5.36.0","@ionic-native/core":"^5.36.0","@ionic-native/file":"^5.36.0","@ionic-native/file-opener":"^5.36.0","@ionic-native/pdf-generator":"^5.36.0","@ionic/angular":"^6.0.0","@ionic/pwa-elements":"^3.1.1","@tinymce/tinymce-angular":"^6.0.1","@types/dom-to-image":"^2.6.4","@types/jspdf":"^2.0.0","chart.js":"^3.7.1","chartjs-plugin-datalabels":"^2.0.0","cordova-pdf-generator":"^2.1.1","cordova-plugin-browsertab":"^0.2.0","cordova-plugin-file":"^6.0.2","cordova-plugin-file-opener2":"^3.0.5","dom-to-image":"^2.6.0","jsbarcode":"^3.11.5","jspdf":"^2.5.1","ngx-editor":"^12.2.1","ngx-webcam":"^0.4.1","pdfmake":"^0.2.4","phonegap-plugin-barcodescanner":"^8.1.0","rxjs":"~6.6.0","swiper":"^8.0.6","tinymce":"^6.0.2","tslib":"^2.2.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"^13.3.3","@angular-eslint/builder":"~13.0.1","@angular-eslint/eslint-plugin":"~13.0.1","@angular-eslint/eslint-plugin-template":"~13.0.1","@angular-eslint/template-parser":"~13.0.1","@angular/cli":"~13.0.1","@angular/compiler":"~13.0.0","@angular/compiler-cli":"~13.0.0","@angular/language-service":"~13.0.0","@capacitor/cli":"3.4.0","@ionic/angular-toolkit":"^5.0.0","@types/jasmine":"~3.6.0","@types/jasminewd2":"~2.0.3","@types/node":"^12.11.1","@typescript-eslint/eslint-plugin":"5.3.0","@typescript-eslint/parser":"5.3.0","eslint":"^7.6.0","eslint-plugin-import":"2.22.1","eslint-plugin-jsdoc":"30.7.6","eslint-plugin-prefer-arrow":"1.2.2","jasmine-core":"~3.8.0","jasmine-spec-reporter":"~5.0.0","karma":"^6.3.19","karma-chrome-launcher":"~3.1.0","karma-coverage":"~2.0.3","karma-coverage-istanbul-reporter":"~3.0.2","karma-jasmine":"~4.0.0","karma-jasmine-html-reporter":"^1.5.0","protractor":"~7.0.0","ts-node":"~8.3.0","typescript":"~4.4.4"},"description":"An Ionic project"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map