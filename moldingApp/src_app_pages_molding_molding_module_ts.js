"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_molding_molding_module_ts"],{

/***/ 85853:
/*!*********************************************************!*\
  !*** ./src/app/pages/molding/molding-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPageRoutingModule": () => (/* binding */ MoldingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/users/auth.guard */ 3736);
/* harmony import */ var _molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page */ 11903);





const routes = [
    {
        path: '',
        component: _molding_page__WEBPACK_IMPORTED_MODULE_1__.MoldingPage,
        canActivate: [src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            // {
            //   path: '',
            //   redirectTo: 'create-molding',
            //   pathMatch: 'full'
            // },
            {
                path: 'print-molding-sheet',
                canActivate: [src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("default-src_app__services_moldings_molding_service_ts"), __webpack_require__.e("src_app_pages_molding_print-molding-sheet_print-molding-sheet_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/molding/print-molding-sheet/print-molding-sheet.module */ 71405))
                    .then(m => m.PrintMoldingSheetPageModule)
            },
            {
                path: 'create-molding',
                canActivate: [src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app__services_moldings_molding_service_ts"), __webpack_require__.e("default-src_app_pages_molding_create-molding_create-molding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/molding/create-molding/create-molding.module */ 20226))
                    .then(m => m.CreateMoldingPageModule)
            },
            {
                path: 'create-molding/:id',
                canActivate: [src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("default-src_app__services_moldings_molding_service_ts"), __webpack_require__.e("default-src_app_pages_molding_create-molding_create-molding_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/molding/create-molding/create-molding.module */ 20226))
                    .then(m => m.CreateMoldingPageModule),
            },
        ]
    },
];
let MoldingPageRoutingModule = class MoldingPageRoutingModule {
};
MoldingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], MoldingPageRoutingModule);



/***/ }),

/***/ 31677:
/*!*************************************************!*\
  !*** ./src/app/pages/molding/molding.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPageModule": () => (/* binding */ MoldingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _molding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding-routing.module */ 85853);
/* harmony import */ var _molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page */ 11903);
/* harmony import */ var src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-user-header/shared-user-header.module */ 79372);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/composants/menu/menu.module */ 84915);










let MoldingPageModule = class MoldingPageModule {
};
MoldingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _molding_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoldingPageRoutingModule,
            src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
            src_app_composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__.MenuModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule
        ],
        declarations: [_molding_page__WEBPACK_IMPORTED_MODULE_1__.MoldingPage]
    })
], MoldingPageModule);



/***/ }),

/***/ 11903:
/*!***********************************************!*\
  !*** ./src/app/pages/molding/molding.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPage": () => (/* binding */ MoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_molding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./molding.page.html */ 74255);
/* harmony import */ var _molding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page.scss */ 51871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);






let MoldingPage = class MoldingPage {
    constructor(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
    }
    ngAfterViewChecked() {
        // console.log('after view checked molding page');
        this.page = {
            pageTitle: 'MODULE MOULAGE',
            menuTitle: 'Menu Moulage',
            contentId: 'molding-content'
        };
    }
    ngAfterViewInit() {
        console.log('after view INIT molding page');
    }
    ngOnInit() {
        console.log('INIT molding page');
        this.page = {
            pageTitle: 'MODULE MOULAGE',
            menuTitle: 'Menu Moulage',
            contentId: 'molding-content'
        };
    }
    idMoldingInputChange() {
        if (this.inputIdMolding.value !== '') {
            console.log(this.inputIdMolding.value);
            this.menu.close();
            this.router.navigate([`molding/create-molding`, this.inputIdMolding.value]);
        }
    }
    navigate(url) {
        this.navCtrl.navigateRoot(url);
    }
};
MoldingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
MoldingPage.propDecorators = {
    inputIdMolding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['inputIdMolding',] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['menu',] }]
};
MoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-molding',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_molding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_molding_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingPage);



/***/ }),

/***/ 74255:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/molding/molding.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-shared-user-header [pageTitle]=\"page.pageTitle\"></app-shared-user-header>\r\n<ion-content [fullscreen]=\"false\" color=medium>\r\n    <ion-menu open=true #menu side=\"start\" type=\"push\" [contentId]=\"page.contentId\">\r\n        <ion-header>\r\n            <ion-toolbar color=\"succes\">\r\n                <ion-title>\r\n                    {{page.menuTitle}}\r\n                </ion-title>\r\n            </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n            <ion-list>\r\n                <ion-menu-toggle auto-hide=\"true\">\r\n                    <ion-item [button]=\"true\" (click)=\"navigate('molding/create-molding')\">\r\n                        <ion-label>\r\n                            Nouveau moulage\r\n                        </ion-label>\r\n                    </ion-item>\r\n                </ion-menu-toggle>\r\n                <ion-item [button]=\"false\">\r\n                    <ion-label>\r\n                        Modifier moulage\r\n                    </ion-label>\r\n                    <ion-input #inputIdMolding type=\"text\" placeholder=\"\" (change)=\"idMoldingInputChange()\"></ion-input>\r\n                    <ion-note slot=helper>Entrer un numéro d'ID ou scanner le code barre de la feuille de moulage</ion-note>\r\n                </ion-item>\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu>\r\n    <!-- <ion-menu #menu side=\"start\" type=\"push\" contentId=\"molding-content\">\r\n        <ion-header>\r\n            <ion-toolbar color=\"succes\">\r\n                <ion-title>Menu moulage</ion-title>\r\n            </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content>\r\n            <ion-list>\r\n                <ion-item-group>\r\n                    <ion-item-divider>\r\n                        <ion-label>Nouveau moulage</ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item [routerLink]=\"['create-molding']\">\r\n                        <ion-label>Création outillage</ion-label>\r\n                    </ion-item>\r\n                    <ion-item>Modification</ion-item>\r\n                    <ion-item [routerLink]=\"['molding-list']\">Mes moulages</ion-item>\r\n                </ion-item-group>\r\n                <ion-item-group>\r\n                    <ion-item-divider>\r\n                        <ion-label>Consulter</ion-label>\r\n                    </ion-item-divider>\r\n                    <ion-item [routerLink]=\"['molding-list']\">\r\n                        <ion-label>Liste des moulages</ion-label>\r\n                    </ion-item>\r\n                    <ion-item routerLink=\"\">Entretien B15 - Frekote</ion-item>\r\n                </ion-item-group>\r\n            </ion-list>\r\n        </ion-content>\r\n    </ion-menu> -->\r\n    <!-- <ion-card class=\"menu-item-card\" [button]=\"(menuItem.type === 'button')\" *ngFor=\"let menuItem of page.menuItems\" [routerLink]=\"(menuItem.type ==='button') ? menuItem.path : null\">\r\n        <ion-card-header>\r\n            <ion-card-title>\r\n                <ion-icon *ngIf=\"menuItem.options?.qualityOnly\" name=\"shield-half-outline\"></ion-icon>\r\n                {{menuItem.title}}\r\n            </ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content *ngIf=\"menuItem.options?.input\">\r\n            <ion-item shape=round>\r\n                <ion-label>Id Moulage</ion-label>\r\n                <ion-input #inputIdMolding type=\"text\" placeholder=\"\" (change)=\"idMoldingInputChange()\"></ion-input>\r\n                <ion-note slot=helper>Entrer un numéro d'ID ou scanner le code barre de la feuille de moulage</ion-note>\r\n            </ion-item>\r\n        </ion-card-content>\r\n    </ion-card> -->\r\n    <ion-router-outlet id=\"molding-content\"></ion-router-outlet>\r\n</ion-content>");

/***/ }),

/***/ 51871:
/*!*************************************************!*\
  !*** ./src/app/pages/molding/molding.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".strong {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbGRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJtb2xkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_molding_molding_module_ts.js.map