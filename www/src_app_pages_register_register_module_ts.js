"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 973:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 9298);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 9751:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 973);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 9298);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 9298:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 2004);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 3866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);





const LANGUAGES = ['FR', 'EN'];
let RegisterPage = class RegisterPage {
    constructor() {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            matricule: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(),
        });
    }
    ngOnInit() {
    }
    onRegisterSubmit() {
        console.log(this.registerForm.value);
    }
    switchToEnglish() {
        this.language = 'EN';
    }
    switchToFrench() {
        this.language = 'FR';
    }
};
RegisterPage.ctorParameters = () => [];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-register',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 2004:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/register.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar>\n        <ion-title>Création d'un utilisateur</ion-title>\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"home\"></ion-back-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=true>\n    <ion-grid fixed class=\"full-height ion-align-items-center ion-justify-content-center\">\n        <ion-row>\n            <ion-card class=ion-padding>\n                <ion-card-header>\n                    <ion-card-title color=primary>Fiche de renseignements</ion-card-title>\n                    <ion-text color=\"medium\">\n                        <h3>La création du compte est soumise à validation du chef d'équipe ou de l'administrateur</h3>\n                    </ion-text>\n                </ion-card-header>\n\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\">\n                    <ion-list>\n                        <ion-radio-group formControlName=\"role\" value=\"\">\n                            <ion-list-header>\n                                <ion-label color=secondary>Rôle demandé\n                                    <ion-text color=\"danger\">*</ion-text>\n                                </ion-label>\n                            </ion-list-header>\n                            <ion-item>\n                                <ion-label>Méthode</ion-label>\n                                <ion-radio value=\"method\"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Chef d'équipe</ion-label>\n                                <ion-radio value=\"teamLeader\"></ion-radio>\n                            </ion-item>\n                            <ion-item>\n                                <ion-label>Compagnon</ion-label>\n                                <ion-radio value=\"worker\"></ion-radio>\n                            </ion-item>\n                        </ion-radio-group>\n                    </ion-list>\n                    <ion-item-divider>\n                        <ion-label>Identité</ion-label>\n                    </ion-item-divider>\n                    <ion-list>\n                        <ion-item>\n                            <ion-label color=secondary position=\"floating\">Nom\n                                <ion-text color=\"danger\">*</ion-text>\n                            </ion-label>\n                            <ion-input required formControlName=\"lastName\" type=\"text\"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label color=secondary position=\"floating\">Prénom\n                                <ion-text color=\"danger\">*</ion-text>\n                            </ion-label>\n                            <ion-input required formControlName=\"firstName\" type=\"text\"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-label color=secondary position=\"floating\">Matricule\n                                <ion-text color=\"danger\">*</ion-text>\n                            </ion-label>\n                            <ion-input required formControlName=\"matricule\" type=\"text\"></ion-input>\n                        </ion-item>\n                    </ion-list>\n                    <ion-toolbar>\n                        <ion-button slot=end block color=\"primary\" type=\"submit\" [disabled]=\"registerForm.invalid\">\n                            {{(language ==='FR') ? \"S'enregistrer\" : \"Register\"}}\n                        </ion-button>\n                    </ion-toolbar>\n\n                </form>\n            </ion-card>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <!-- <ion-button (click)=\"onClick()\">\n  <ion-icon slot=\"start\" name=\"add\"></ion-icon>\n  {{OtherLanguage}}\n</ion-button> -->\n        <ion-button slot=end (click)=\"switchToEnglish()\" fill=\"clear\" shape=\"round\">\n            EN\n        </ion-button>\n        <ion-button slot=end (click)=\"switchToFrench()\" fill=\"clear\" shape=\"round\">\n            FR\n        </ion-button>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 3866:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".full-height {\n  height: 100%;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLWhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnRcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map