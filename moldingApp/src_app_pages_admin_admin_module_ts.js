"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_admin_admin_module_ts"],{

/***/ 16522:
/*!******************************************!*\
  !*** ./src/app/_pipes/is-active.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotActivePipe": () => (/* binding */ NotActivePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let NotActivePipe = class NotActivePipe {
    transform(users) {
        if (users) {
            return users.filter(user => user.isActive === false);
        }
    }
};
NotActivePipe = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe)({
        name: 'NotActive'
    })
], NotActivePipe);



/***/ }),

/***/ 26633:
/*!*********************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAdminHeaderComponent": () => (/* binding */ SharedAdminHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _shared_admin_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-admin-header.component.html?ngResource */ 37673);
/* harmony import */ var _shared_admin_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-admin-header.component.scss?ngResource */ 18690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 27704);






let SharedAdminHeaderComponent = class SharedAdminHeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.user = this.authService.authUser;
    }
    logoutClick() {
        this.authService.logout()
            .subscribe(() => {
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
        template: _shared_admin_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shared_admin_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedAdminHeaderComponent);



/***/ }),

/***/ 14550:
/*!******************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAdminHeaderModule": () => (/* binding */ SharedAdminHeaderModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _shared_admin_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-admin-header.component */ 26633);






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

/***/ 96195:
/*!*****************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMoldingPage": () => (/* binding */ AdminMoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _admin_molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-molding.page.html?ngResource */ 20918);
/* harmony import */ var _admin_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-molding.page.scss?ngResource */ 70514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 63888);
/* harmony import */ var src_app_services_molding_moldings_molding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/molding/moldings/molding.service */ 79528);






let AdminMoldingPage = class AdminMoldingPage {
    constructor(moldingService) {
        this.moldingService = moldingService;
        // public properties
        this.moldingListLoading = false;
        this.moldingsError = false;
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
            .subscribe((moldings) => {
            this.moldings = moldings;
            this.moldingListLoading = false;
            this.moldingsError = false;
            this.moldings.forEach((molding) => {
                molding.status = false;
            });
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(this.moldings);
        }, (error) => {
            console.error(error);
            this.moldingListLoading = false;
            this.moldingsError = true;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
AdminMoldingPage.ctorParameters = () => [
    { type: src_app_services_molding_moldings_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService }
];
AdminMoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-admin-molding',
        template: _admin_molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminMoldingPage);



/***/ }),

/***/ 26500:
/*!*****************************************************!*\
  !*** ./src/app/pages/admin/admin-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/users/role.guard */ 82833);
/* harmony import */ var _admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-molding/admin-molding.page */ 96195);
/* harmony import */ var _admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-user/admin-user.page */ 75169);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.page */ 2222);







const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_3__.AdminPage,
        children: [{
                path: 'admin-user',
                component: _admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_2__.AdminUserPage,
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
            },
            {
                path: 'admin-molding',
                canActivate: [src_app_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                component: _admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_1__.AdminMoldingPage,
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 75169:
/*!***********************************************************!*\
  !*** ./src/app/pages/admin/admin-user/admin-user.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserPage": () => (/* binding */ AdminUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _admin_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user.page.html?ngResource */ 30754);
/* harmony import */ var _admin_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user.page.scss?ngResource */ 50826);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ 73110);
/* harmony import */ var src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/divers/alert.service */ 2853);
/* harmony import */ var src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/divers/loading.service */ 99172);
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/users/users.service */ 1824);









let AdminUserPage = class AdminUserPage {
    constructor(userService, datePipe, loadingService, alertService) {
        this.userService = userService;
        this.datePipe = datePipe;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.isUserSelected = false;
        this.displayedUserInactiveColumns = ['id', 'nom', 'prenom', 'matricule', 'roles', 'commands'];
        this.weeklyLabels = [];
        this.weeklyUsers = [];
    }
    onSelectUser(test) {
        console.log(test);
        this.isUserSelected = true;
        this.selectedUser = test;
    }
    ngOnInit() {
        this.loadingService.startLoading();
        this.userService.getUsers()
            .subscribe((users) => {
            this.users = users;
            this.weeklyLabels = this.createWeeklyLabel();
            this.weeklyUsers = this.createWeeklyUserData();
            console.log(this.weeklyLabels, this.weeklyUsers);
            // this.lineChart.destroy();
            this.lineChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_2__["default"](this.newUsersCanvas.nativeElement, {
                type: 'line',
                data: {
                    labels: this.weeklyLabels,
                    datasets: [
                        {
                            label: 'Evolution du nombre d\'inscription',
                            fill: false,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            pointRadius: 1,
                            pointHitRadius: 10,
                            data: this.weeklyUsers,
                            spanGaps: false,
                        }
                    ]
                }
            });
            this.lineChart.update();
            this.loadingService.stopLoading();
        });
    }
    createWeeklyLabel() {
        const endDate = new Date();
        const startDate = new Date(2022, 0, 1);
        const labels = [];
        while (startDate < endDate) {
            labels.push(this.datePipe.transform(startDate, 'dd/MM'));
            startDate.setDate(startDate.getDate() + 7);
        }
        return labels;
    }
    createWeeklyUserData() {
        const endDate = new Date();
        let startDate = new Date(2022, 0, 1);
        const totaluserPerWeekData = [];
        while (startDate < endDate) {
            const intermediateEndDate = new Date(startDate);
            intermediateEndDate.setDate(intermediateEndDate.getDate() + 7);
            const filterUsers = this.users
                .filter((user) => (new Date(user.createdAt) > startDate
                &&
                    new Date(user.createdAt) <= intermediateEndDate));
            const totalUserWeek = filterUsers.length;
            totaluserPerWeekData.push(totalUserWeek);
            startDate = intermediateEndDate;
        }
        return totaluserPerWeekData;
    }
    statusChanged(event, user) {
        this.confirmUser(user, event.detail.value);
    }
    confirmUser(element, state) {
        console.log(element, state);
    }
};
AdminUserPage.ctorParameters = () => [
    { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_5__.UsersService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe },
    { type: src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService }
];
AdminUserPage.propDecorators = {
    newUsersCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['newUsers',] }]
};
AdminUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-admin-user',
        template: _admin_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminUserPage);



/***/ }),

/***/ 61496:
/*!*********************************************!*\
  !*** ./src/app/pages/admin/admin.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 63888);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 26500);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 2222);
/* harmony import */ var src_app_composants_shared_admin_header_shared_admin_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-admin-header/shared-admin-header.module */ 14550);
/* harmony import */ var src_app_pipes_is_active_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_pipes/is-active.pipe */ 16522);
/* harmony import */ var _admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-molding/admin-molding.page */ 96195);
/* harmony import */ var _admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-user/admin-user.page */ 75169);
/* harmony import */ var src_app_services_molding_kits_kit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/molding/kits/kit.service */ 5375);
/* harmony import */ var src_app_services_molding_moldings_molding_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/molding/moldings/molding.service */ 79528);
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/users/users.service */ 1824);
/* harmony import */ var src_app_composants_component_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/composants/component/component.module */ 6868);
















let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonicModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule,
            src_app_composants_shared_admin_header_shared_admin_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedAdminHeaderModule,
            src_app_composants_component_component_module__WEBPACK_IMPORTED_MODULE_9__.ComponentModule,
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage, src_app_pipes_is_active_pipe__WEBPACK_IMPORTED_MODULE_3__.NotActivePipe, _admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_5__.AdminUserPage, _admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_4__.AdminMoldingPage],
        providers: [
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe,
            src_app_services_molding_kits_kit_service__WEBPACK_IMPORTED_MODULE_6__.KitService,
            src_app_services_molding_moldings_molding_service__WEBPACK_IMPORTED_MODULE_7__.MoldingService,
            src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_8__.UsersService,
        ]
    })
], AdminPageModule);



/***/ }),

/***/ 2222:
/*!*******************************************!*\
  !*** ./src/app/pages/admin/admin.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 15959);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 82143);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 95472);





let AdminPage = class AdminPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ionViewWillEnter() {
        this.menuAdmin.open();
    }
    navigate(url) {
        this.navCtrl.navigateForward(url);
    }
};
AdminPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
AdminPage.propDecorators = {
    menuAdmin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['menuAdmin',] }]
};
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin',
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 18690:
/*!**********************************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1hZG1pbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic2hhcmVkLWFkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 70514:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "mat-table,\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1vbGRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLFdBQUE7QUFDSiIsImZpbGUiOiJhZG1pbi1tb2xkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10YWJsZSxcclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 50826:
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/admin-user/admin-user.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "mat-cell {\n  padding: 100px !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.commands {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0YiLCJmaWxlIjoiYWRtaW4tdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2VsbCB7XHJcbiAgcGFkZGluZzogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29tbWFuZHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 82143:
/*!********************************************************!*\
  !*** ./src/app/pages/admin/admin.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 37673:
/*!**********************************************************************************************!*\
  !*** ./src/app/composants/shared-admin-header/shared-admin-header.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n    <ion-toolbar color=primary>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button color=\"light\"></ion-menu-button>\r\n            <ion-img class=\"ion-hide-sm-down logo\" src=\"assets/images/logoDaherFondBleu.png\" (click)=\"navigateHome()\">\r\n            </ion-img>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase ion-text-center\">Administration</ion-title>\r\n        <ion-chip id=\"button-profil\" color=light slot=end class=ion-margin-end outline>\r\n            <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n            <ion-label color=light>{{user?.username}}</ion-label>\r\n        </ion-chip>\r\n        <ion-button class=\"ion-hide-sm-down\" slot=end color=\"danger\" (click)=\"logoutClick()\">\r\n            <ion-icon slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n            <ion-label class=\"ion-hide-md-down\">Déconnexion</ion-label>\r\n        </ion-button>\r\n    </ion-toolbar>\r\n</ion-header>\r\n";

/***/ }),

/***/ 20918:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-molding/admin-molding.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Administration des moulages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=light>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-toolbar class=ion-no-margin>\r\n              <ion-card-title>Liste des moulages</ion-card-title>\r\n              <ion-spinner slot=end *ngIf=\"moldingListLoading\" name=\"circles\"></ion-spinner>\r\n              <ion-button size=small slot=end (click)=\"getMoldings()\">\r\n                <ion-icon size=small slot=\"icon-only\" name=\"refresh\"></ion-icon>\r\n              </ion-button>\r\n\r\n            </ion-toolbar>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"error\" *ngIf=\"moldingsError && !moldingListLoading\">\r\n              <ion-label>Pas de moulage à afficher</ion-label>\r\n            </div>\r\n            <div class=\"moldings-table\" *ngIf=\"moldings\">\r\n              <ion-input type=\"text\" placeholder=\"Numéro d'OT\" (ionInput)=\"applyFilter($event)\"></ion-input>\r\n              <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" fixedLayout=true>\r\n                <!-- Id Column -->\r\n                <ng-container matColumnDef=\"status\">\r\n                  <th mat-header-cell *matHeaderCellDef></th>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <ion-icon name=\"ellipse\" [color]=\"(element.status) ? 'danger' : 'success'\"></ion-icon>\r\n                  </td>\r\n                </ng-container>\r\n                <!-- Id Column -->\r\n                <ng-container matColumnDef=\"id\">\r\n                  <th mat-header-cell *matHeaderCellDef> ID </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\r\n                </ng-container>\r\n                <!-- Moulé le Column -->\r\n                <ng-container matColumnDef=\"moldingDay\">\r\n                  <th mat-header-cell *matHeaderCellDef> Date du moulage </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.moldingDay | date: \"dd/MM/yyyy\"}} </td>\r\n                </ng-container>\r\n                <!-- Créé par Column -->\r\n                <ng-container matColumnDef=\"createdBy\">\r\n                  <th mat-header-cell *matHeaderCellDef> Créé par </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.userCreat.username}} </td>\r\n                </ng-container>\r\n                <!-- Outillage Column -->\r\n                <ng-container matColumnDef=\"outillage\">\r\n                  <th mat-header-cell *matHeaderCellDef> Outillage </th>\r\n                  <td mat-cell *matCellDef=\"let element\"> {{element.OT.sapToolNumber}} -\r\n                    {{element.OT.designation}}</td>\r\n                </ng-container>\r\n\r\n                <!-- commands Column -->\r\n                <ng-container matColumnDef=\"commands\">\r\n                  <th mat-header-cell *matHeaderCellDef> </th>\r\n                  <td mat-cell *matCellDef=\"let element\">\r\n                    <ion-button size=small expand=\"block\" fill=\"solid\" shape=\"round\"\r\n                      [routerLink]=\"'/molding/create-molding/'+element.id\">\r\n                      Editer\r\n                    </ion-button>\r\n                  </td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedMoldingColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedMoldingColumns;\"></tr>\r\n              </table>\r\n            </div>\r\n\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Tableau de bord</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nouveaux moulages</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                GRAPHIQUE ICI\r\n                <!-- <canvas #newUsers></canvas> -->\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nombre de connexions par jour</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                GRAPHIQUE ICI\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 30754:
/*!************************************************************************!*\
  !*** ./src/app/pages/admin/admin-user/admin-user.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Administration des utilisateurs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=light>\r\n  <ion-grid false>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-card>\r\n          <ion-card-content>\r\n            <!-- <table mat-table [dataSource]=\"users | NotActive\"> -->\r\n            <table mat-table [dataSource]=\"users\">\r\n              <!-- Id Column -->\r\n              <ng-container matColumnDef=\"id\">\r\n                <th mat-header-cell *matHeaderCellDef> UserName </th>\r\n                <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\r\n              </ng-container>\r\n              <!-- Username Column -->\r\n              <ng-container matColumnDef=\"username\">\r\n                <th mat-header-cell *matHeaderCellDef> UserName </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\r\n              </ng-container>\r\n              <!-- nom Column -->\r\n              <ng-container matColumnDef=\"nom\">\r\n                <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.nom}} </td>\r\n              </ng-container>\r\n              <!-- prenom Column -->\r\n              <ng-container matColumnDef=\"prenom\">\r\n                <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.prenom}} </td>\r\n              </ng-container>\r\n              <!-- matricule Column -->\r\n              <ng-container matColumnDef=\"matricule\">\r\n                <th mat-header-cell *matHeaderCellDef> Matricule </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.matricule}} </td>\r\n              </ng-container>\r\n              <!-- matricule Column -->\r\n              <ng-container matColumnDef=\"mail\">\r\n                <th mat-header-cell *matHeaderCellDef> Mail </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.mail}} </td>\r\n              </ng-container>\r\n              <!-- roles Column -->\r\n              <ng-container matColumnDef=\"roles\">\r\n                <th mat-header-cell *matHeaderCellDef> Roles </th>\r\n                <td mat-cell *matCellDef=\"let element\"> {{element.roles}} </td>\r\n              </ng-container>\r\n              <!-- commands Column -->\r\n              <ng-container matColumnDef=\"commands\">\r\n                <th mat-header-cell *matHeaderCellDef> </th>\r\n                <td mat-cell *matCellDef=\"let user\" class=\"commands\">\r\n                  <ion-segment (ionChange)=\"statusChanged($event, user)\">\r\n                    <ion-segment-button value=\"true\">\r\n                      <ion-icon color=success name=\"checkmark-outline\"></ion-icon>\r\n                    </ion-segment-button>\r\n                    <ion-segment-button value=\"false\">\r\n                      <ion-icon color=danger name=\"close-outline\"></ion-icon>\r\n                    </ion-segment-button>\r\n                  </ion-segment>\r\n                </td>\r\n              </ng-container>\r\n              <tr mat-header-row *matHeaderRowDef=\"displayedUserInactiveColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedUserInactiveColumns;\" (click)=\"onSelectUser(row)\"></tr>\r\n            </table>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Tableau de bord</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nouveaux inscrits</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <canvas #newUsers></canvas>\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nombre de connexions par jour</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                GRAPHIQUE ICI\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-user-sheet [user]=\"selectedUser\" [userState]=\"isUserSelected\" (stateChangeEv)=\"isUserSelected=$event\">\r\n  </app-user-sheet>\r\n</ion-content>\r\n";

/***/ }),

/***/ 15959:
/*!********************************************************!*\
  !*** ./src/app/pages/admin/admin.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<app-shared-admin-header></app-shared-admin-header>\r\n\r\n<ion-content [fullscreen]=\"false\" color=medium>\r\n  <ion-menu side=\"start\" type=\"push\" contentId=\"admin-content\" open=\"true\" #menuAdmin>\r\n    <ion-header>\r\n      <ion-toolbar color=\"danger\">\r\n        <ion-title>Menu de l'admnistration</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item (click)=\"navigate('admin/admin-user')\">\r\n            <ion-label>Utilisateurs</ion-label>\r\n            <ion-badge slot=\"end\">11</ion-badge>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-item>Outillages</ion-item>\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item (click)=\"navigate('admin/admin-molding')\">Moulages</ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-item>Kits</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"admin-content\"></ion-router-outlet>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_admin_admin_module_ts.js.map