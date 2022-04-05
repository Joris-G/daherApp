"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tool-request_maintenance-reparation_maintenance-reparation_module_ts"],{

/***/ 80613:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/tool-request/maintenance-reparation/maintenance-reparation-routing.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceReparationPageRoutingModule": () => (/* binding */ MaintenanceReparationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _maintenance_reparation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance-reparation.page */ 88980);




const routes = [
    {
        path: '',
        component: _maintenance_reparation_page__WEBPACK_IMPORTED_MODULE_0__.MaintenanceReparationPage
    }
];
let MaintenanceReparationPageRoutingModule = class MaintenanceReparationPageRoutingModule {
};
MaintenanceReparationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MaintenanceReparationPageRoutingModule);



/***/ }),

/***/ 57561:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tool-request/maintenance-reparation/maintenance-reparation.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceReparationPageModule": () => (/* binding */ MaintenanceReparationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _maintenance_reparation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance-reparation-routing.module */ 80613);
/* harmony import */ var _maintenance_reparation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance-reparation.page */ 88980);







let MaintenanceReparationPageModule = class MaintenanceReparationPageModule {
};
MaintenanceReparationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _maintenance_reparation_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintenanceReparationPageRoutingModule
        ],
        declarations: [_maintenance_reparation_page__WEBPACK_IMPORTED_MODULE_1__.MaintenanceReparationPage]
    })
], MaintenanceReparationPageModule);



/***/ }),

/***/ 88980:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tool-request/maintenance-reparation/maintenance-reparation.page.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceReparationPage": () => (/* binding */ MaintenanceReparationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_maintenance_reparation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./maintenance-reparation.page.html */ 95620);
/* harmony import */ var _maintenance_reparation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance-reparation.page.scss */ 15275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);




let MaintenanceReparationPage = class MaintenanceReparationPage {
    constructor() { }
    ngOnInit() {
    }
};
MaintenanceReparationPage.ctorParameters = () => [];
MaintenanceReparationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-maintenance-reparation',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_maintenance_reparation_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_maintenance_reparation_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MaintenanceReparationPage);



/***/ }),

/***/ 95620:
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tool-request/maintenance-reparation/maintenance-reparation.page.html ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>maintenanceReparation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 15275:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tool-request/maintenance-reparation/maintenance-reparation.page.scss ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWludGVuYW5jZS1yZXBhcmF0aW9uLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tool-request_maintenance-reparation_maintenance-reparation_module_ts.js.map