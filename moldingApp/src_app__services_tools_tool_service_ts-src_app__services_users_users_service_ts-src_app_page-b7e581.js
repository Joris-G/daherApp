"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app__services_tools_tool_service_ts-src_app__services_users_users_service_ts-src_app_page-b7e581"],{

/***/ 26188:
/*!*************************************************!*\
  !*** ./src/app/_services/tools/tool.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolService": () => (/* binding */ ToolService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 33521);





let ToolService = class ToolService {
    constructor(http, requestService) {
        this.http = http;
        this.requestService = requestService;
    }
    getToolByToolNumber(toolNumber) {
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
                .set('content-type', 'application/json');
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}molding_tools?sapToolNumber=${toolNumber}`, { headers: httpHeaders })
                .subscribe((returnsData) => {
                console.log(returnsData);
                if (returnsData.length === 1) {
                    const returnMoldingTool = returnsData[0];
                    console.log(returnMoldingTool);
                    resolve(returnMoldingTool);
                }
                else if (returnsData.length > 1) {
                    console.log('Il y a plus d\'un outillage');
                }
                else {
                    reject();
                }
            }, (error) => {
                console.log(error);
                reject();
            });
        });
    }
    getAllTools() {
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
                .append('content-type', 'application/json');
            // .append('Access-Control-Allow-Origins', 'http://localhost:8100/')
            // .append('Access-Control-Allow-methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}molding_tools`, { headers: httpHeaders })
                .subscribe((returnsData) => {
                resolve(returnsData);
            }, (error) => {
                console.log(error);
                reject();
            });
        });
    }
    getIri(moldingTool) {
        return `/api/tools/${moldingTool.id}`;
    }
    createTool(toolToCreate) {
        const tool = toolToCreate;
        tool.sapToolNumber = parseInt(toolToCreate.sapToolNumber.substring(2), 10);
        return this.requestService.createPostRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.toolApi + 'tools', tool);
    }
};
ToolService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
ToolService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ToolService);



/***/ }),

/***/ 82048:
/*!**************************************************!*\
  !*** ./src/app/_services/users/users.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request.service */ 33521);





const JORIS = {
    id: 1,
    username: 'j.grangier',
    mail: 'j.grangier@daher.com',
    matricule: 204292,
    nom: 'GRANGIER',
    prenom: 'JORIS',
    roles: ['COMPAGNON']
};
let UsersService = class UsersService {
    constructor(http, requestService) {
        this.http = http;
        this.requestService = requestService;
    }
    getUserById(idUser) {
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders()
                .set('content-type', 'application/json');
            this.requestService.createGetRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi + `users/${idUser}`)
                .then((returnsData) => {
                console.log(returnsData);
                if (returnsData.length !== 0) {
                    resolve(returnsData);
                }
                else {
                    reject();
                }
            }, (error) => {
                console.log(error);
                reject();
            });
        });
    }
    getUsers() {
        return new Promise((resolve, reject) => {
            this.requestService.createGetRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi + `users`)
                .then((returnsData) => {
                console.log(returnsData);
                if (returnsData.length !== 0) {
                    resolve(returnsData);
                }
                else {
                    reject();
                }
            }, (error) => {
                console.log(error);
                reject();
            });
        });
    }
    registerUser(userObj) {
        return this.requestService.createPostRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi + 'users', userObj);
    }
    getIri(user) {
        return `/api/users/${user.id}`;
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService }
];
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ 40929:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-list/tool-list-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolListPageRoutingModule": () => (/* binding */ ToolListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tool_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-list.page */ 98561);




const routes = [
    {
        path: '',
        component: _tool_list_page__WEBPACK_IMPORTED_MODULE_0__.ToolListPage
    }
];
let ToolListPageRoutingModule = class ToolListPageRoutingModule {
};
ToolListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToolListPageRoutingModule);



/***/ }),

/***/ 56514:
/*!******************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-list/tool-list.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolListPageModule": () => (/* binding */ ToolListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tool_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-list-routing.module */ 40929);
/* harmony import */ var _tool_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-list.page */ 98561);







let ToolListPageModule = class ToolListPageModule {
};
ToolListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tool_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToolListPageRoutingModule
        ],
        declarations: [_tool_list_page__WEBPACK_IMPORTED_MODULE_1__.ToolListPage]
    })
], ToolListPageModule);



/***/ }),

/***/ 98561:
/*!****************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-list/tool-list.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolListPage": () => (/* binding */ ToolListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tool_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tool-list.page.html */ 43305);
/* harmony import */ var _tool_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-list.page.scss */ 11998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_toolRequest_tool_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/toolRequest/tool-request.service */ 13580);





let ToolListPage = class ToolListPage {
    constructor(toolRequestService) {
        this.toolRequestService = toolRequestService;
    }
    ngOnInit() {
    }
};
ToolListPage.ctorParameters = () => [
    { type: src_app_services_toolRequest_tool_request_service__WEBPACK_IMPORTED_MODULE_2__.ToolRequestService }
];
ToolListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tool-list',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tool_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tool_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToolListPage);



/***/ }),

/***/ 43305:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tool-request/tool-list/tool-list.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>toolList</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ 11998:
/*!******************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-list/tool-list.page.scss ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sLWxpc3QucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app__services_tools_tool_service_ts-src_app__services_users_users_service_ts-src_app_page-b7e581.js.map