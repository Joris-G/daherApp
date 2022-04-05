"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app__services_tools_tool_service_ts-src_app_pages_tool-request_tool-requests_tool-request-8d1f0c"],{

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

/***/ 87501:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-requests/tool-requests-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestsPageRoutingModule": () => (/* binding */ ToolRequestsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _tool_requests_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-requests.page */ 66882);




const routes = [
    {
        path: '',
        component: _tool_requests_page__WEBPACK_IMPORTED_MODULE_0__.ToolRequestsPage
    }
];
let ToolRequestsPageRoutingModule = class ToolRequestsPageRoutingModule {
};
ToolRequestsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToolRequestsPageRoutingModule);



/***/ }),

/***/ 85635:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-requests/tool-requests.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestsPageModule": () => (/* binding */ ToolRequestsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 73959);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _tool_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tool-requests-routing.module */ 87501);
/* harmony import */ var _tool_requests_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-requests.page */ 66882);
/* harmony import */ var src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-user-header/shared-user-header.module */ 79372);









let ToolRequestsPageModule = class ToolRequestsPageModule {
};
ToolRequestsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _tool_requests_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToolRequestsPageRoutingModule,
            src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        ],
        declarations: [_tool_requests_page__WEBPACK_IMPORTED_MODULE_1__.ToolRequestsPage]
    })
], ToolRequestsPageModule);



/***/ }),

/***/ 66882:
/*!************************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-requests/tool-requests.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolRequestsPage": () => (/* binding */ ToolRequestsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tool_requests_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tool-requests.page.html */ 7007);
/* harmony import */ var _tool_requests_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-requests.page.scss */ 55091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_services_toolRequest_tool_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/toolRequest/tool-request.service */ 13580);





let ToolRequestsPage = class ToolRequestsPage {
    constructor(toolRequestService) {
        this.toolRequestService = toolRequestService;
    }
    ngOnInit() {
        this.toolRequests = [];
        this.updateRequestList();
    }
    updateRequestList() {
        this.toolRequestService.getToolRequests().then((responseRequestList) => {
            this.toolRequests = responseRequestList;
        });
    }
};
ToolRequestsPage.ctorParameters = () => [
    { type: src_app_services_toolRequest_tool_request_service__WEBPACK_IMPORTED_MODULE_2__.ToolRequestService }
];
ToolRequestsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tool-requests',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tool_requests_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tool_requests_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ToolRequestsPage);



/***/ }),

/***/ 7007:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/tool-request/tool-requests/tool-requests.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content [fullscreen]=\"true\">\n    <table mat-table #table [dataSource]=\"toolRequests\">\n        <ng-container matColumnDef=\"status\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\"></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"title\">\n            <th mat-header-cell *matHeaderCellDef>\n                Titre\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n                {{element.title}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"requestDate\">\n            <th mat-header-cell *matHeaderCellDef>\n                Date demande\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n                {{element.requestDate}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"requestor\">\n            <th mat-header-cell *matHeaderCellDef>\n                Demandeur\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n                {{element.requestor}}\n            </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"needDate\">\n            <th mat-header-cell *matHeaderCellDef>\n                Date Besoin\n            </th>\n            <td mat-cell *matCellDef=\"let element\">\n                {{element.needDate}}\n            </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedRequestColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedRequestColumns\"></tr>\n    </table>\n</ion-content>");

/***/ }),

/***/ 55091:
/*!**************************************************************************!*\
  !*** ./src/app/pages/tool-request/tool-requests/tool-requests.page.scss ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b29sLXJlcXVlc3RzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app__services_tools_tool_service_ts-src_app_pages_tool-request_tool-requests_tool-request-8d1f0c.js.map