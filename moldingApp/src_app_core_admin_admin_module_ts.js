"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_core_admin_admin_module_ts"],{

/***/ 26626:
/*!****************************************************!*\
  !*** ./src/app/core/admin/admin-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRootingModule": () => (/* binding */ AdminRootingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/users/role.guard */ 55786);
/* harmony import */ var _pages_admin_home_admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/admin-home/admin.page */ 2875);
/* harmony import */ var _pages_admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin-molding/admin-molding.page */ 12327);
/* harmony import */ var _pages_admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/admin-user/admin-user.page */ 60319);







//TODO guard tooling et molding différents pour ségréguer les chef d'équipes
const routes = [
    {
        path: '',
        component: _pages_admin_home_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage,
        children: [{
                path: 'admin-user',
                component: _pages_admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_3__.AdminUserPage,
                canActivate: [_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
            },
            {
                path: 'admin-molding',
                canActivate: [_services_users_role_guard__WEBPACK_IMPORTED_MODULE_0__.RoleGuard],
                data: {
                    expectedRole: ['ROLE_ADMIN']
                },
                component: _pages_admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_2__.AdminMoldingPage,
            },
        ]
    },
];
let AdminRootingModule = class AdminRootingModule {
};
AdminRootingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AdminRootingModule);



/***/ }),

/***/ 42520:
/*!********************************************!*\
  !*** ./src/app/core/admin/admin.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 26626);
/* harmony import */ var _components_admin_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/admin-components.module */ 50345);




let AdminModule = class AdminModule {
};
AdminModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _components_admin_components_module__WEBPACK_IMPORTED_MODULE_1__.AdminComponentsModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRootingModule,
        ]
    })
], AdminModule);



/***/ }),

/***/ 50345:
/*!******************************************************************!*\
  !*** ./src/app/core/admin/components/admin-components.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponentsModule": () => (/* binding */ AdminComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_molding_services_kit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/molding/services/kit.service */ 6015);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);
/* harmony import */ var _pages_admin_home_admin_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/admin-home/admin.page */ 2875);
/* harmony import */ var _pages_admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/admin-molding/admin-molding.page */ 12327);
/* harmony import */ var _pages_admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/admin-user/admin-user.page */ 60319);
/* harmony import */ var _admin_molding_list_admin_molding_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-molding-list/admin-molding-list.component */ 61606);
/* harmony import */ var _admin_user_table_admin_user_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-user-table/admin-user-table.component */ 53127);
/* harmony import */ var _shared_admin_header_shared_admin_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-admin-header/shared-admin-header.component */ 52249);










let AdminComponentsModule = class AdminComponentsModule {
};
AdminComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.AppSharedModule
        ],
        declarations: [
            _pages_admin_home_admin_page__WEBPACK_IMPORTED_MODULE_2__.AdminPage,
            _pages_admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_3__.AdminMoldingPage,
            _pages_admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_4__.AdminUserPage,
            _shared_admin_header_shared_admin_header_component__WEBPACK_IMPORTED_MODULE_7__.SharedAdminHeaderComponent,
            _admin_molding_list_admin_molding_list_component__WEBPACK_IMPORTED_MODULE_5__.AdminMoldingListComponent,
            _admin_user_table_admin_user_table_component__WEBPACK_IMPORTED_MODULE_6__.AdminUserTableComponent
        ],
        exports: [
            _pages_admin_home_admin_page__WEBPACK_IMPORTED_MODULE_2__.AdminPage,
            _pages_admin_molding_admin_molding_page__WEBPACK_IMPORTED_MODULE_3__.AdminMoldingPage,
            _pages_admin_user_admin_user_page__WEBPACK_IMPORTED_MODULE_4__.AdminUserPage,
            _shared_admin_header_shared_admin_header_component__WEBPACK_IMPORTED_MODULE_7__.SharedAdminHeaderComponent,
            _admin_molding_list_admin_molding_list_component__WEBPACK_IMPORTED_MODULE_5__.AdminMoldingListComponent,
            _admin_user_table_admin_user_table_component__WEBPACK_IMPORTED_MODULE_6__.AdminUserTableComponent
        ],
        providers: [
            src_app_molding_services_kit_service__WEBPACK_IMPORTED_MODULE_0__.KitService
        ]
    })
], AdminComponentsModule);



/***/ }),

/***/ 61606:
/*!******************************************************************************************!*\
  !*** ./src/app/core/admin/components/admin-molding-list/admin-molding-list.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMoldingListComponent": () => (/* binding */ AdminMoldingListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_molding_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-molding-list.component.html?ngResource */ 70100);
/* harmony import */ var _admin_molding_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-molding-list.component.scss?ngResource */ 73436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 97217);





let AdminMoldingListComponent = class AdminMoldingListComponent {
    constructor() {
        this.moldingListLoading = false;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
        this.displayedMoldingColumns = ['status', 'id', 'moldingDay', 'createdBy', 'outillage', 'commands'];
    }
    ngOnChanges(changes) {
        this.dataSource.data = this.moldings;
    }
    ngOnc() {
        this.dataSource.data = this.moldings;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
AdminMoldingListComponent.ctorParameters = () => [];
AdminMoldingListComponent.propDecorators = {
    moldings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
AdminMoldingListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin-molding-list',
        template: _admin_molding_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_molding_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminMoldingListComponent);



/***/ }),

/***/ 53127:
/*!**************************************************************************************!*\
  !*** ./src/app/core/admin/components/admin-user-table/admin-user-table.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserTableComponent": () => (/* binding */ AdminUserTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_user_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user-table.component.html?ngResource */ 49984);
/* harmony import */ var _admin_user_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user-table.component.scss?ngResource */ 20771);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/users/users.service */ 88896);







let AdminUserTableComponent = class AdminUserTableComponent {
    constructor(userService, loadingService, alertService) {
        this.userService = userService;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.isUserSelected = false;
        this.displayedUserColumns = ['id', 'username', 'nom', 'prenom', 'matricule', 'roles', 'commands'];
    }
    ngOnInit() {
        this.users$ = this.userService.getUsers();
    }
    statusChanged(event, user) {
        this.confirmUser(user, event.detail.value);
    }
    onSelectUser(test) {
        console.log(test);
        this.isUserSelected = true;
        this.selectedUser = test;
    }
    confirmUser(user, state) {
        this.loadingService.startLoading(`Mise à jour de l'utilisateur`);
        this.userService.confirmUser(user.id, state)
            .subscribe((responseUser) => {
            this.loadingService.stopLoading();
        }, (error) => {
            this.loadingService.stopLoading();
            this.alertService.simpleAlert(`Erreur`, `Le serveur à renvoyé une erreur`, `${error}`);
        });
    }
};
AdminUserTableComponent.ctorParameters = () => [
    { type: src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
AdminUserTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-admin-user-table',
        template: _admin_user_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_user_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminUserTableComponent);



/***/ }),

/***/ 52249:
/*!********************************************************************************************!*\
  !*** ./src/app/core/admin/components/shared-admin-header/shared-admin-header.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedAdminHeaderComponent": () => (/* binding */ SharedAdminHeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _shared_admin_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-admin-header.component.html?ngResource */ 2872);
/* harmony import */ var _shared_admin_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-admin-header.component.scss?ngResource */ 29523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/users/auth.service */ 73919);
/* harmony import */ var src_app_core_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notifications/notifications.service */ 637);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ 84935);








let SharedAdminHeaderComponent = class SharedAdminHeaderComponent {
    constructor(authService, router, notificationsService, socket) {
        this.authService = authService;
        this.router = router;
        this.notificationsService = notificationsService;
        this.socket = socket;
    }
    ngOnDestroy() {
        this.socket.disconnect();
    }
    ionViewDidLeave() {
        console.log('view did leave');
        this.socket.disconnect();
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
    notifyClick() {
        console.log('notify click');
        this.notificationsService.newNotif();
    }
};
SharedAdminHeaderComponent.ctorParameters = () => [
    { type: src_app_core_services_users_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_core_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_3__.NotificationsService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket }
];
SharedAdminHeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-shared-admin-header',
        template: _shared_admin_header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_shared_admin_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SharedAdminHeaderComponent);



/***/ }),

/***/ 2875:
/*!***********************************************************!*\
  !*** ./src/app/core/admin/pages/admin-home/admin.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 23338);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 36769);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





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

/***/ 12327:
/*!**********************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-molding/admin-molding.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminMoldingPage": () => (/* binding */ AdminMoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-molding.page.html?ngResource */ 2354);
/* harmony import */ var _admin_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-molding.page.scss?ngResource */ 92853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);





let AdminMoldingPage = class AdminMoldingPage {
    constructor(moldingService) {
        this.moldingService = moldingService;
        this.moldingsError = false;
    }
    ngOnInit() {
        this.moldings$ = this.moldingService.getMoldings();
        // this.getMoldings();
        //TODO indicators to be reloaded with interval
        // this.refreshData = setInterval(() => {
        //   this.getMoldings();
        // }, this.refreshTime);
    }
};
AdminMoldingPage.ctorParameters = () => [
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService }
];
AdminMoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-admin-molding',
        template: _admin_molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService],
        styles: [_admin_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminMoldingPage);



/***/ }),

/***/ 60319:
/*!****************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-user/admin-user.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminUserPage": () => (/* binding */ AdminUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-user.page.html?ngResource */ 36580);
/* harmony import */ var _admin_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-user.page.scss?ngResource */ 68140);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js/auto */ 93566);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var src_app_core_services_users_serices_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/users/serices.service */ 714);
/* harmony import */ var src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/users/users.service */ 88896);










let AdminUserPage = class AdminUserPage {
    constructor(userService, datePipe, loadingService, alertService, serviceService) {
        this.userService = userService;
        this.datePipe = datePipe;
        this.loadingService = loadingService;
        this.alertService = alertService;
        this.serviceService = serviceService;
        this.weeklyLabels = [];
        this.weeklyUsers = [];
    }
    ngOnInit() {
        this.users = [];
        this.loadingService.startLoading();
        this.serviceService.getServices()
            .subscribe((services) => {
            services.forEach((service) => {
                service.users.forEach((user) => this.users.push(user));
            });
            // this.userDataSource.data = this.users;
            this.weeklyLabels = this.createWeeklyLabel();
            this.weeklyUsers = this.createWeeklyUserData();
            // console.log(this.weeklyLabels, this.weeklyUsers);
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
};
AdminUserPage.ctorParameters = () => [
    { type: src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_4__.LoadingService },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: src_app_core_services_users_serices_service__WEBPACK_IMPORTED_MODULE_5__.SericesService }
];
AdminUserPage.propDecorators = {
    newUsersCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['newUsers',] }]
};
AdminUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-admin-user',
        template: _admin_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [
            src_app_core_services_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService, src_app_core_services_users_serices_service__WEBPACK_IMPORTED_MODULE_5__.SericesService
        ],
        styles: [_admin_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminUserPage);



/***/ }),

/***/ 637:
/*!**********************************************************************!*\
  !*** ./src/app/core/services/notifications/notifications.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsService": () => (/* binding */ NotificationsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ 84935);




let NotificationsService = class NotificationsService {
    constructor(socket, 
    // private _swPush: SwPush,
    http) {
        this.socket = socket;
        this.http = http;
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            .append('Access-Control-Allow-Origin', '*');
        Notification.requestPermission()
            .then((returnedPermission) => {
            console.log(returnedPermission);
            if (returnedPermission === 'granted') {
                this.socket.on('notification', data => {
                    // this.data = data;
                    // alert(data.message);
                    // this._swPush.
                    const notification = new Notification('Notification depuis le serveur', { body: data.message, icon: 'assets/icons/icon-72x72.png' });
                    // const serviceWorkerRegistration = new ServiceWorkerRegistration();
                    // serviceWorkerRegistration.showNotification(
                    //   'Notification depuis le serveur',
                    //   { body: data.message, icon: 'assets/icons/icon-72x72.png' });
                    // notification.close();
                });
            }
        });
    }
    newNotif() {
        this.http.post('http://localhost:3000/send-notification', { message: 'testmessage' }, { headers: this.httpHeaders })
            .subscribe((res) => {
            // alert(res);
        });
    }
};
NotificationsService.ctorParameters = () => [
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__.Socket },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
NotificationsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NotificationsService);



/***/ }),

/***/ 73436:
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/admin/components/admin-molding-list/admin-molding-list.component.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "mat-table,\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLW1vbGRpbmctbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFBO0FBQ0oiLCJmaWxlIjoiYWRtaW4tbW9sZGluZy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYmxlLFxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 20771:
/*!***************************************************************************************************!*\
  !*** ./src/app/core/admin/components/admin-user-table/admin-user-table.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi11c2VyLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 29523:
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/admin/components/shared-admin-header/shared-admin-header.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC1hZG1pbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic2hhcmVkLWFkbWluLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 36769:
/*!************************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-home/admin.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 92853:
/*!***********************************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-molding/admin-molding.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1tb2xkaW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 68140:
/*!*****************************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-user/admin-user.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "mat-cell {\n  padding: 100px !important;\n}\n\ntable {\n  width: 100%;\n}\n\n.commands {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\nion-card {\n  max-height: 100%;\n  flex-grow: 1;\n}\n\n.table-card-content {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.table-card-content table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUZFO0VBQ0UsV0FBQTtBQUlKIiwiZmlsZSI6ImFkbWluLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNlbGwge1xyXG4gIHBhZGRpbmc6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNvbW1hbmRzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcbi50YWJsZS1jYXJkLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 70100:
/*!*******************************************************************************************************!*\
  !*** ./src/app/core/admin/components/admin-molding-list/admin-molding-list.component.html?ngResource ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card>\n  <ion-card-header>\n    <ion-toolbar class=ion-no-margin>\n      <ion-card-title>Liste des moulages</ion-card-title>\n      <ion-spinner slot=end *ngIf=\"moldingListLoading\" name=\"circles\"></ion-spinner>\n      <!-- <ion-button size=small slot=end (click)=\"getMoldings()\">\n        <ion-icon size=small slot=\"icon-only\" name=\"refresh\"></ion-icon>\n      </ion-button> -->\n\n    </ion-toolbar>\n  </ion-card-header>\n  <ion-card-content>\n    <!-- <div class=\"error\" *ngIf=\"moldingsError && !moldingListLoading\">\n      <ion-label>Pas de moulage à afficher</ion-label>\n    </div> -->\n    <div class=\"moldings-table\" *ngIf=\"dataSource.data.length > 0\">\n      <ion-input type=\"text\" placeholder=\"Numéro d'OT\" (ionInput)=\"applyFilter($event)\"></ion-input>\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" fixedLayout=true>\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let element\">\n            <ion-icon name=\"ellipse\" [color]=\"(element.status) ? 'danger' : 'success'\"></ion-icon>\n          </td>\n        </ng-container>\n        <!-- Id Column -->\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef> ID </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n        </ng-container>\n        <!-- Moulé le Column -->\n        <ng-container matColumnDef=\"moldingDay\">\n          <th mat-header-cell *matHeaderCellDef> Date du moulage </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.moldingDay | date: \"dd/MM/yyyy\"}} </td>\n        </ng-container>\n        <!-- Créé par Column -->\n        <ng-container matColumnDef=\"createdBy\">\n          <th mat-header-cell *matHeaderCellDef> Créé par </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.userCreat.username}} </td>\n        </ng-container>\n        <!-- Outillage Column -->\n        <ng-container matColumnDef=\"outillage\">\n          <th mat-header-cell *matHeaderCellDef> Outillage </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.OT.sapToolNumber}} -\n            {{element.OT.designation}}</td>\n        </ng-container>\n\n        <!-- commands Column -->\n        <ng-container matColumnDef=\"commands\">\n          <th mat-header-cell *matHeaderCellDef> </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <ion-button size=small expand=\"block\" fill=\"solid\" shape=\"round\"\n              [routerLink]=\"'/molding/create-molding/'+element.id\">\n              Editer\n            </ion-button>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedMoldingColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedMoldingColumns;\"></tr>\n      </table>\n    </div>\n\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 49984:
/*!***************************************************************************************************!*\
  !*** ./src/app/core/admin/components/admin-user-table/admin-user-table.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <table mat-table [dataSource]=\"users | NotActive\"> -->\n<table mat-table [dataSource]=\"users$\">\n  <!-- Id Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> Id </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.id}} </td>\n  </ng-container>\n  <!-- Username Column -->\n  <ng-container matColumnDef=\"username\">\n    <th mat-header-cell *matHeaderCellDef> UserName </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.username}} </td>\n  </ng-container>\n  <!-- nom Column -->\n  <ng-container matColumnDef=\"nom\">\n    <th mat-header-cell *matHeaderCellDef> Nom </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.nom}} </td>\n  </ng-container>\n  <!-- prenom Column -->\n  <ng-container matColumnDef=\"prenom\">\n    <th mat-header-cell *matHeaderCellDef> Prénom </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.prenom}} </td>\n  </ng-container>\n  <!-- matricule Column -->\n  <ng-container matColumnDef=\"matricule\">\n    <th mat-header-cell *matHeaderCellDef> Matricule </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.matricule}} </td>\n  </ng-container>\n  <!-- matricule Column -->\n  <ng-container matColumnDef=\"mail\">\n    <th mat-header-cell *matHeaderCellDef> Mail </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.mail}} </td>\n  </ng-container>\n  <!-- roles Column -->\n  <ng-container matColumnDef=\"roles\">\n    <th mat-header-cell *matHeaderCellDef> Roles </th>\n    <td mat-cell *matCellDef=\"let user\"> {{user.roles}} </td>\n  </ng-container>\n  <!-- commands Column -->\n  <ng-container matColumnDef=\"commands\">\n    <th mat-header-cell *matHeaderCellDef> </th>\n    <td mat-cell *matCellDef=\"let user\" class=\"commands\">\n      <ion-segment (ionChange)=\"statusChanged($event, user)\" [value]=\"user.isActive\">\n        <ion-segment-button value=\"true\">\n          <ion-icon color=success name=\"checkmark-outline\"></ion-icon>\n        </ion-segment-button>\n        <ion-segment-button value=\"false\">\n          <ion-icon color=danger name=\"close-outline\"></ion-icon>\n        </ion-segment-button>\n      </ion-segment>\n    </td>\n  </ng-container>\n  <tr mat-header-row *matHeaderRowDef=\"displayedUserColumns; sticky: true\"></tr>\n  <tr mat-row *matRowDef=\"let user; columns: displayedUserColumns;\" (click)=\"onSelectUser(user)\">\n  </tr>\n</table>\n\n<app-user-sheet [user]=\"selectedUser\" [userState]=\"isUserSelected\" (stateChangeEv)=\"isUserSelected=$event\">\n</app-user-sheet>\n";

/***/ }),

/***/ 2872:
/*!*********************************************************************************************************!*\
  !*** ./src/app/core/admin/components/shared-admin-header/shared-admin-header.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar color=primary>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button color=\"light\"></ion-menu-button>\r\n      <ion-img class=\"ion-hide-sm-down logo\" src=\"assets/images/logoDaherFondBleu.png\" (click)=\"navigateHome()\">\r\n      </ion-img>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-text-uppercase ion-text-center\">Administration</ion-title>\r\n    <ion-chip id=\"button-profil\" color=light slot=end class=ion-margin-end outline>\r\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\r\n      <ion-label color=light>{{user?.username}}</ion-label>\r\n    </ion-chip>\r\n    <ion-button class=\"ion-hide-sm-down\" slot=end color=\"danger\" (click)=\"logoutClick()\">\r\n      <ion-icon slot=\"end\" name=\"log-out-outline\"></ion-icon>\r\n      <ion-label class=\"ion-hide-md-down\">Déconnexion</ion-label>\r\n    </ion-button>\r\n    <ion-button slot=end (click)=\"notifyClick()\">\r\n      Notify\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-header>\r\n";

/***/ }),

/***/ 23338:
/*!************************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-home/admin.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<app-shared-admin-header></app-shared-admin-header>\r\n\r\n<ion-content [fullscreen]=\"false\" color=medium>\r\n  <ion-menu side=\"start\" type=\"push\" contentId=\"admin-content\" open=\"true\" #menuAdmin>\r\n    <ion-header>\r\n      <ion-toolbar color=\"danger\">\r\n        <ion-title>Menu de l'admnistration</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item (click)=\"navigate('admin/admin-user')\">\r\n            <ion-label>Utilisateurs</ion-label>\r\n            <ion-badge slot=\"end\">11</ion-badge>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-item>Outillages</ion-item>\r\n        <ion-menu-toggle auto-hide=\"true\">\r\n          <ion-item (click)=\"navigate('admin/admin-molding')\">Moulages</ion-item>\r\n        </ion-menu-toggle>\r\n        <ion-item>Kits</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"admin-content\"></ion-router-outlet>\r\n</ion-content>\r\n";

/***/ }),

/***/ 2354:
/*!***********************************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-molding/admin-molding.page.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Administration des moulages</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=light>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <app-admin-molding-list [moldings]=\"moldings$| async\"></app-admin-molding-list>\r\n\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Tableau de bord</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nouveaux moulages</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                GRAPHIQUE ICI\r\n                <!-- <canvas #newUsers></canvas> -->\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nombre de connexions par jour</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                GRAPHIQUE ICI\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 36580:
/*!*****************************************************************************!*\
  !*** ./src/app/core/admin/pages/admin-user/admin-user.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Administration des utilisateurs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=light>\r\n  <ion-grid false>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <ion-card>\r\n          <ion-card-content class=\"table-card-content\">\r\n            <app-admin-user-table></app-admin-user-table>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card>\r\n          <ion-card-header>\r\n            <ion-card-title>Tableau de bord</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nouveaux inscrits</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <canvas #newUsers></canvas>\r\n              </ion-card-content>\r\n            </ion-card>\r\n\r\n            <ion-card>\r\n              <ion-card-header>\r\n                <ion-card-subtitle>Nombre de connexions par jour</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                GRAPHIQUE ICI\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_core_admin_admin_module_ts.js.map