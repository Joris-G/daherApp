"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_tool-request_tool-request_module_ts"],{

/***/ 97823:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-request-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestPageRoutingModule": () => (/* binding */ ToolRequestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/users/role.guard */ 54421);
/* harmony import */ var _tool_request_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-request.page */ 17979);





const routes = [
    {
        path: '',
        component: _tool_request_page__WEBPACK_IMPORTED_MODULE_1__.ToolRequestPage,
        children: [
            {
                path: 'new-tool',
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_expansion_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tool-request_new-tool_new-tool_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/tool-request/new-tool/new-tool.module */ 2206))
                    .then(m => m.NewToolPageModule)
            },
            {
                path: 'tool-request-list',
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_users_users_service_ts-node_modules_angular_cdk_fesm2020_collection-5cf0f6"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app__services_tools_tool_service_ts-src_app_pages_tool-request_tool-requests_tool-request-8d1f0c")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/tool-request/tool-requests/tool-requests.module */ 85635))
                    .then(m => m.ToolRequestsPageModule)
            },
            {
                path: 'tool-list',
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app__services_tools_tool_service_ts-src_app__services_users_users_service_ts-src_app_page-b7e581")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/tool-request/tool-list/tool-list.module */ 56514))
                    .then(m => m.ToolListPageModule)
            },
            {
                path: 'repair-tool',
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_tool-request_maintenance-reparation_maintenance-reparation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./maintenance-reparation/maintenance-reparation.module */ 57561)).then(m => m.MaintenanceReparationPageModule)
            },
            {
                path: '3D-tool',
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app__services_tools_tool_service_ts-src_app__services_users_users_service_ts-src_app_page-bf7aa0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./control3-d/control.module */ 52636)).then(m => m.Control3DPageModule)
            },
        ]
    },
];
let ToolRequestPageRoutingModule = class ToolRequestPageRoutingModule {
};
ToolRequestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ToolRequestPageRoutingModule);



/***/ }),

/***/ 42974:
/*!***********************************************************!*\
  !*** ./src/app/pages/tool-request/tool-request.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestPageModule": () => (/* binding */ ToolRequestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tool_request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-request-routing.module */ 97823);
/* harmony import */ var _tool_request_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-request.page */ 17979);
/* harmony import */ var src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-user-header/shared-user-header.module */ 79372);
/* harmony import */ var src_app_composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/composants/menu/menu.module */ 84915);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);










let ToolRequestPageModule = class ToolRequestPageModule {
};
ToolRequestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _tool_request_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToolRequestPageRoutingModule,
            src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
            src_app_composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__.MenuModule
        ],
        declarations: [_tool_request_page__WEBPACK_IMPORTED_MODULE_1__.ToolRequestPage]
    })
], ToolRequestPageModule);



/***/ }),

/***/ 17979:
/*!*********************************************************!*\
  !*** ./src/app/pages/tool-request/tool-request.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestPage": () => (/* binding */ ToolRequestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tool_request_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tool-request.page.html */ 38602);
/* harmony import */ var _tool_request_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-request.page.scss */ 18481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);






let ToolRequestPage = class ToolRequestPage {
    constructor(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.page = {
            pageTitle: 'Module Outillage',
            menuTitle: 'Menu outillage',
            contentId: 'tooling-content'
        };
    }
    ionViewWillEnter() {
        this.page = {
            pageTitle: 'Module Outillage',
            menuTitle: 'Menu outillage',
            contentId: 'tooling-content'
        };
        this.menu.open();
    }
    ngOnInit() {
    }
    navigate(url) {
        this.navCtrl.navigateRoot(url);
        // this.router.navigateByUrl(url);
    }
};
ToolRequestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
ToolRequestPage.propDecorators = {
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['menu',] }]
};
ToolRequestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tool-request',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tool_request_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tool_request_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToolRequestPage);



/***/ }),

/***/ 38602:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tool-request/tool-request.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-shared-user-header [pageTitle]=\"page.pageTitle\"></app-shared-user-header>\n<ion-content [fullscreen]=\"false\" color=medium>\n    <ion-menu open=true #menu side=\"start\" type=\"push\" contentId=\"tooling-content\">\n        <ion-header>\n            <ion-toolbar color=\"succes\">\n                <ion-title>\n                    {{page.menuTitle}}\n                </ion-title>\n            </ion-toolbar>\n        </ion-header>\n        <ion-content>\n            <ion-list>\n                <ion-item-divider>\n                    <ion-label>Faire une demande</ion-label>\n                </ion-item-divider>\n                <ion-menu-toggle auto-hide=\"true\">\n                    <ion-item [button]=\"true\" routerDirection=\"forward\" (click)=\"navigate('tooling/new-tool')\">\n                        <ion-label>\n                            Nouvel outillage\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n                <ion-menu-toggle auto-hide=\"true\">\n                    <ion-item [button]=\"true\" routerDirection=\"forward\" (click)=\"navigate('tooling/repair-tool')\">\n                        <ion-label>\n                            Maintenance et réparation\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n                <ion-menu-toggle auto-hide=\"true\">\n                    <ion-item [button]=\"true\" routerDirection=\"forward\" (click)=\"navigate('tooling/3D-tool')\">\n                        <ion-label>\n                            Contrôle 3D\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n                <ion-item-divider>\n                    <ion-label>Suivi</ion-label>\n                </ion-item-divider>\n                <ion-menu-toggle auto-hide=\"true\">\n                    <ion-item routerDirection=\"root\" (click)=\"navigate('tooling/tool-request-list')\">\n                        <ion-label>\n                            Liste des demandes outillages\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n                <ion-menu-toggle auto-hide=\"true\">\n                    <ion-item [button]=\"true\" (click)=\"navigate('tooling/tool-list')\" routerDirection=\"root\">\n                        <ion-label>\n                            Liste des outillages\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n            </ion-list>\n\n        </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"tooling-content\"></ion-router-outlet>\n</ion-content>\n");

/***/ }),

/***/ 18481:
/*!***********************************************************!*\
  !*** ./src/app/pages/tool-request/tool-request.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sLXJlcXVlc3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tool-request_tool-request_module_ts.js.map