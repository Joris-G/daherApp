"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_admin_module_ts"],{

/***/ 26465:
/*!*********************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAdminHeaderComponent": () => (/* binding */ SharedAdminHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shared_admin_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./shared-admin-header.component.html */ 1485);
/* harmony import */ var _shared_admin_header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-admin-header.component.scss */ 14675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 36607);






let SharedAdminHeaderComponent = class SharedAdminHeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = this.authService.authUser;
    }
    ngOnInit() { }
    logoutClick() {
        this.authService.logout()
            .then(() => {
            this.router.navigate(['/login']);
        });
    }
    navigateHome() {
        this.router.navigate(['/home']);
    }
};
SharedAdminHeaderComponent.ctorParameters = () => [
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SharedAdminHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-shared-admin-header',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_shared_admin_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_shared_admin_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedAdminHeaderComponent);



/***/ }),

/***/ 13222:
/*!******************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAdminHeaderModule": () => (/* binding */ SharedAdminHeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _shared_admin_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-admin-header.component */ 26465);






let SharedAdminHeaderModule = class SharedAdminHeaderModule {
};
SharedAdminHeaderModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,],
        declarations: [_shared_admin_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedAdminHeaderComponent],
        exports: [_shared_admin_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedAdminHeaderComponent]
    })
], SharedAdminHeaderModule);



/***/ }),

/***/ 80891:
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/admin-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/users/auth.guard */ 3736);
/* harmony import */ var src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/users/role.guard */ 54421);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.page */ 75092);






const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_2__.AdminPage,
        canActivate: [src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
        data: {
            expectedRole: ['ROLE_CE_MOULAGE', 'ROLE_ADMIN']
        },
    },
    {
        path: 'admin-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("src_app_pages_admin_admin-user_admin-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-user/admin-user.module */ 3334)).then(m => m.AdminUserPageModule)
    },
    {
        path: 'admin-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("src_app_pages_admin_admin-user_admin-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-user/admin-user.module */ 3334)).then(m => m.AdminUserPageModule)
    },
    {
        path: 'admin-molding',
        canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
        data: {
            expectedRole: ['ROLE_CE_MOULAGE', 'ROLE_ADMIN']
        },
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("default-src_app__services_moldings_molding_service_ts"), __webpack_require__.e("src_app_pages_admin_admin-molding_admin-molding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./admin-molding/admin-molding.module */ 19143)).then(m => m.AdminMoldingPageModule)
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 1359:
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 80891);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 75092);
/* harmony import */ var src_app_composants_shared_admin_header_shared_admin_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-admin-header/shared-admin-header.module */ 13222);








let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule,
            src_app_composants_shared_admin_header_shared_admin_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedAdminHeaderModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage],
    })
], AdminPageModule);



/***/ }),

/***/ 75092:
/*!*******************************************!*\
  !*** ./src/app/pages/admin/admin.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin.page.html */ 50457);
/* harmony import */ var _admin_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss */ 21467);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let AdminPage = class AdminPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminPage.ctorParameters = () => [];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 1485:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/composants/shared-admin-header/shared-admin-header.component.html ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"false\">\r\n    <ion-toolbar color=primary>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n            <ion-img class=\"ion-hide-sm-down logo\" src=\"assets/images/logoDaherFondBleu.png\" (click)=\"navigateHome()\">\r\n            </ion-img>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase ion-text-center\">Administration</ion-title>\r\n        <ion-chip id=\"button-profil\" color=light slot=end class=ion-margin-end outline>\r\n            <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n            <ion-label color=light>{{user?.username}}</ion-label>\r\n        </ion-chip>\r\n        <ion-button class=\"ion-hide-sm-down\" slot=end color=\"danger\" (click)=\"logoutClick()\">\r\n            <ion-icon slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n            <ion-label class=\"ion-hide-md-down\">Déconnexion</ion-label>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n");

/***/ }),

/***/ 50457:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/admin/admin.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-shared-admin-header></app-shared-admin-header>\r\n\r\n<ion-content>\r\n    <ion-menu side=\"start\" type=\"push\" contentId=\"admin-content\">\r\n        <ion-header>\r\n            <ion-toolbar color=\"danger\">\r\n                <ion-title>Menu de l'admnistration</ion-title>\r\n            </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n            <ion-list>\r\n                <ion-item routerLink=\"admin-user\">\r\n                    <ion-label>Utilisateurs</ion-label>\r\n                    <ion-badge slot=\"end\">11</ion-badge>\r\n                </ion-item>\r\n                <ion-item>Outillages</ion-item>\r\n                <ion-item routerLink=\"admin-molding\">Moulages </ion-item>\r\n                <ion-item>Kits</ion-item>\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"admin-content\"></ion-router-outlet>\r\n</ion-content>");

/***/ }),

/***/ 14675:
/*!***********************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.component.scss ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1hZG1pbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic2hhcmVkLWFkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 21467:
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin_module_ts.js.map