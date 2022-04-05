"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 89639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        children: [
            {
                path: 'admin',
                // canActivate: [RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/admin/admin.module */ 1359))
                    .then(m => m.AdminPageModule),
            },
        ]
    },
    // {
    //   path: 'molding',
    //   // canActivate: [AuthGuard],
    //   loadChildren: () => import('../../pages/molding/molding.module')
    //     .then(m => m.MoldingPageModule)
    // },
    // {
    //   path: 'admin',
    //   // canActivate: [RoleGuard],
    //   data: {
    //     expectedRole: 'ROLE_ADMIN'
    //   },
    //   loadChildren: () => import('../../pages/admin/admin.module').then(m => m.AdminPageModule)
    // },
    // {
    //   path: 'tool-request',
    //   // canActivate: [RoleGuard],
    //   loadChildren: () => import('../../pages/tool-request/tool-request.module')
    //     .then(m => m.ToolRequestPageModule),
    //   data: {
    //     expectedRole: 'ROLE_ADMIN'
    //   },
    // }
];
let HomePageRoutingModule = class HomePageRoutingModule {
    constructor() {
    }
};
HomePageRoutingModule.ctorParameters = () => [];
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 35129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 88774);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 89639);
/* harmony import */ var _composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composants/shared-user-header/shared-user-header.module */ 79372);
/* harmony import */ var src_app_composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/composants/menu/menu.module */ 84915);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
            _composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
            src_app_composants_menu_menu_module__WEBPACK_IMPORTED_MODULE_3__.MenuModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map