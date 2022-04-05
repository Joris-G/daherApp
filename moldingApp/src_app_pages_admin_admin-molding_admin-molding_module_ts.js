"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_admin-molding_admin-molding_module_ts"],{

/***/ 45408:
/*!***************************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMoldingPageRoutingModule": () => (/* binding */ AdminMoldingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _admin_molding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-molding.page */ 3819);




const routes = [
    {
        path: '',
        component: _admin_molding_page__WEBPACK_IMPORTED_MODULE_0__.AdminMoldingPage
    },
    {
        path: 'create-molding/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app_pages_molding_create-molding_create-molding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../molding/create-molding/create-molding.module */ 20226)).then(m => m.CreateMoldingPageModule)
    }
];
let AdminMoldingPageRoutingModule = class AdminMoldingPageRoutingModule {
};
AdminMoldingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminMoldingPageRoutingModule);



/***/ }),

/***/ 19143:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMoldingPageModule": () => (/* binding */ AdminMoldingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _admin_molding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-molding-routing.module */ 45408);
/* harmony import */ var _admin_molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-molding.page */ 3819);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 73959);








let AdminMoldingPageModule = class AdminMoldingPageModule {
};
AdminMoldingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_molding_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminMoldingPageRoutingModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule,
        ],
        declarations: [_admin_molding_page__WEBPACK_IMPORTED_MODULE_1__.AdminMoldingPage]
    })
], AdminMoldingPageModule);



/***/ }),

/***/ 3819:
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMoldingPage": () => (/* binding */ AdminMoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_molding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./admin-molding.page.html */ 7694);
/* harmony import */ var _admin_molding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-molding.page.scss */ 76898);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/moldings/molding.service */ 7143);






let AdminMoldingPage = class AdminMoldingPage {
    constructor(moldingService) {
        this.moldingService = moldingService;
        this.displayedMoldingColumns = ['status', 'id', 'moldingDay', 'createdBy', 'outillage', 'commands'];
    }
    ngAfterViewChecked() {
        // indicators to be reloaded with interval
    }
    ngOnDestroy() {
    }
    ionViewDidEnter() {
        this.getMoldings();
    }
    ngOnInit() {
        // this.getMoldings();
        // indicators to be reloaded with interval
        // this.refreshData = setInterval(() => {
        //   this.getMoldings();
        // }, this.refreshTime);
    }
    getMoldings() {
        this.moldingListLoading = true;
        this.moldingService.getMoldings()
            .then((moldings) => {
            this.moldings = moldings;
            this.moldingListLoading = false;
            this.moldings.forEach((molding) => {
                molding.status = false;
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.moldings);
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
AdminMoldingPage.ctorParameters = () => [
    { type: src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService }
];
AdminMoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-admin-molding',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_admin_molding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_admin_molding_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminMoldingPage);



/***/ }),

/***/ 7694:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/admin/admin-molding/admin-molding.page.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Administration des moulages</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" color=light>\r\n    <ion-grid false>\r\n        <ion-row>\r\n            <ion-col size=\"8\">\r\n                <ion-card>\r\n                    <ion-card-header>\r\n                        <ion-toolbar class=ion-no-margin>\r\n                            <ion-card-title>Liste des moulages</ion-card-title>\r\n                            <ion-button size=small slot=end (click)=\"getMoldings()\">\r\n                                <ion-icon size=small slot=\"icon-only\" name=\"refresh\"></ion-icon>\r\n                            </ion-button>\r\n                            <ion-spinner slot=end *ngIf=\"moldingListLoading\" name=\"circles\"></ion-spinner>\r\n                        </ion-toolbar>\r\n                    </ion-card-header>\r\n                    <ion-card-content *ngIf=\"moldings\">\r\n                        <ion-input type=\"text\" placeholder=\"Numéro d'OT\" (ionInput)=\"applyFilter($event)\"></ion-input>\r\n\r\n                        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" fixedLayout=true>\r\n                            <!-- Id Column -->\r\n                            <ng-container matColumnDef=\"status\">\r\n                                <th mat-header-cell *matHeaderCellDef></th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    <ion-icon name=\"ellipse\" [color]=\"(element.status) ? 'danger' : 'success'\"></ion-icon>\r\n                                </td>\r\n                            </ng-container>\r\n                            <!-- Id Column -->\r\n                            <ng-container matColumnDef=\"id\">\r\n                                <th mat-header-cell *matHeaderCellDef> ID </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                            </ng-container>\r\n                            <!-- Moulé le Column -->\r\n                            <ng-container matColumnDef=\"moldingDay\">\r\n                                <th mat-header-cell *matHeaderCellDef> Date du moulage </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.moldingDay | date: \"dd/MM/yyyy\"}} </td>\r\n                            </ng-container>\r\n                            <!-- Créé par Column -->\r\n                            <ng-container matColumnDef=\"createdBy\">\r\n                                <th mat-header-cell *matHeaderCellDef> Créé par </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.createdBy.username}} </td>\r\n                            </ng-container>\r\n                            <!-- Outillage Column -->\r\n                            <ng-container matColumnDef=\"outillage\">\r\n                                <th mat-header-cell *matHeaderCellDef> Outillage </th>\r\n                                <td mat-cell *matCellDef=\"let element\"> {{element.outillage.sapToolNumber}} </td>\r\n                            </ng-container>\r\n\r\n                            <!-- commands Column -->\r\n                            <ng-container matColumnDef=\"commands\">\r\n                                <th mat-header-cell *matHeaderCellDef> </th>\r\n                                <td mat-cell *matCellDef=\"let element\">\r\n                                    <ion-button size=small expand=\"block\" fill=\"solid\" shape=\"round\" [routerLink]=\"'/molding/create-molding/'+element.id\">\r\n                                        Editer\r\n                                    </ion-button>\r\n                                </td>\r\n                            </ng-container>\r\n                            <tr mat-header-row *matHeaderRowDef=\"displayedMoldingColumns\"></tr>\r\n                            <tr mat-row *matRowDef=\"let row; columns: displayedMoldingColumns;\"></tr>\r\n                        </table>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n                <ion-card>\r\n                    <ion-card-header>\r\n                        <ion-card-title>Tableau de bord</ion-card-title>\r\n                    </ion-card-header>\r\n                    <ion-card-content>\r\n                        <ion-card>\r\n                            <ion-card-header>\r\n                                <ion-card-subtitle>Nouveaux moulages</ion-card-subtitle>\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                                GRAPHIQUE ICI\r\n                                <!-- <canvas #newUsers></canvas> -->\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n\r\n                        <ion-card>\r\n                            <ion-card-header>\r\n                                <ion-card-subtitle>Nombre de connexions par jour</ion-card-subtitle>\r\n                            </ion-card-header>\r\n                            <ion-card-content>\r\n                                GRAPHIQUE ICI\r\n                            </ion-card-content>\r\n                        </ion-card>\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-col>\r\n        </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ 76898:
/*!*******************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding.page.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --min-height: 0 !important;\n}\n\nmat-table,\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1vbGRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUFDSjs7QUFFQTs7RUFFSSxXQUFBO0FBQ0oiLCJmaWxlIjoiYWRtaW4tbW9sZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LXRhYmxlLFxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin-molding_admin-molding_module_ts.js.map