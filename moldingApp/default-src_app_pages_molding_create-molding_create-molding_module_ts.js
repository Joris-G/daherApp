"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_molding_create-molding_create-molding_module_ts"],{

/***/ 91610:
/*!************************************************!*\
  !*** ./src/app/_services/core/core.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let CoreService = class CoreService {
    constructor() { }
    getCoreByBatchNumber(batchNumber) {
        return new Promise((resolve, reject) => {
            let returnBatchNumber = batchNumber.substring(5).split('~');
            console.log(returnBatchNumber);
            returnBatchNumber = {
                partNumber: returnBatchNumber[0],
                batch1: returnBatchNumber[1],
                batch2: returnBatchNumber[2],
            };
            const core = {
                idCore: 1,
                batchNumber: returnBatchNumber
            };
            console.log(core);
            resolve(core);
        });
    }
};
CoreService.ctorParameters = () => [];
CoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CoreService);



/***/ }),

/***/ 15243:
/*!***************************************************!*\
  !*** ./src/app/_services/divers/alert.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    simpleAlert(header, subHeader, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'simple-alert',
                header,
                subHeader,
                message,
                buttons: [
                    {
                        text: 'Fermer',
                        role: 'cancel',
                        id: 'cancel-button',
                    }
                ]
            });
            yield alert.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 98190:
/*!*****************************************************!*\
  !*** ./src/app/_services/divers/loading.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 78099);



let LoadingService = class LoadingService {
    constructor(loadingController) {
        this.loadingController = loadingController;
    }
    startLoading() {
        this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Patienter pendant le chargement du kit',
        })
            .then((response) => {
            response.present();
        });
    }
    stopLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            setTimeout(() => {
                this.loadingController.dismiss();
            }, 100);
        });
    }
};
LoadingService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
LoadingService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ 67073:
/*!************************************************!*\
  !*** ./src/app/_services/scan/scan.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanService": () => (/* binding */ ScanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.service */ 91610);
/* harmony import */ var _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kits/kit.service */ 29922);
/* harmony import */ var _tools_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/tool.service */ 26188);





let ScanService = class ScanService {
    constructor(kitService, toolService, coreService) {
        this.kitService = kitService;
        this.toolService = toolService;
        this.coreService = coreService;
    }
    getScanInput(scanInputValue) {
        console.log(scanInputValue);
        return new Promise((resolve, reject) => {
            // test de la valeur dans le scan. Identifier puis lancer la bonne fonction
            const regexKit = new RegExp('^([0-9]){8}-[0-9]$');
            const regexSapToolNumber = new RegExp('^OT([0-9]){6}$');
            const regexNidaHexcel = new RegExp('^]C201');
            if (scanInputValue.match(regexKit)) {
                console.log('kit');
                this.kitService.getKitById(scanInputValue)
                    .then((kit) => {
                    resolve(kit);
                }, () => {
                    reject();
                });
            }
            else if (scanInputValue.match(regexSapToolNumber)) {
                console.log('tool');
                if (scanInputValue.startsWith('OT0')) {
                    scanInputValue = scanInputValue.substr(3);
                }
                this.toolService.getToolByToolNumber(scanInputValue)
                    .then((tool) => {
                    resolve(tool);
                }, () => {
                    reject();
                })
                    .catch(() => {
                    console.error('catch get molding Tool ');
                });
            }
            else if (scanInputValue.match(regexNidaHexcel)) {
                this.coreService.getCoreByBatchNumber(scanInputValue)
                    .then((core) => {
                    resolve(core);
                });
            }
            else {
                reject();
            }
        });
    }
};
ScanService.ctorParameters = () => [
    { type: _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__.KitService },
    { type: _tools_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService },
    { type: _core_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService }
];
ScanService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ScanService);



/***/ }),

/***/ 97080:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/molding/create-molding/create-molding-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMoldingPageRoutingModule": () => (/* binding */ CreateMoldingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/users/auth.guard */ 3736);
/* harmony import */ var _create_molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-molding.page */ 19876);





const routes = [
    {
        path: '',
        component: _create_molding_page__WEBPACK_IMPORTED_MODULE_1__.CreateMoldingPage,
        canActivate: [src_app_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
];
let CreateMoldingPageRoutingModule = class CreateMoldingPageRoutingModule {
};
CreateMoldingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], CreateMoldingPageRoutingModule);



/***/ }),

/***/ 20226:
/*!***********************************************************************!*\
  !*** ./src/app/pages/molding/create-molding/create-molding.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMoldingPageModule": () => (/* binding */ CreateMoldingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var _create_molding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-molding-routing.module */ 97080);
/* harmony import */ var _create_molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-molding.page */ 19876);
/* harmony import */ var src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-user-header/shared-user-header.module */ 79372);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 85082);









let CreateMoldingPageModule = class CreateMoldingPageModule {
};
CreateMoldingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _create_molding_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreateMoldingPageRoutingModule,
            src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatExpansionModule,
        ],
        declarations: [_create_molding_page__WEBPACK_IMPORTED_MODULE_1__.CreateMoldingPage]
    })
], CreateMoldingPageModule);



/***/ }),

/***/ 19876:
/*!*********************************************************************!*\
  !*** ./src/app/pages/molding/create-molding/create-molding.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMoldingPage": () => (/* binding */ CreateMoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_molding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./create-molding.page.html */ 67287);
/* harmony import */ var _create_molding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-molding.page.scss */ 10697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ 85082);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 78099);
/* harmony import */ var src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/divers/alert.service */ 15243);
/* harmony import */ var src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/divers/loading.service */ 98190);
/* harmony import */ var src_app_services_kits_kit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/kits/kit.service */ 29922);
/* harmony import */ var src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/moldings/molding.service */ 7143);
/* harmony import */ var src_app_services_scan_scan_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/scan/scan.service */ 67073);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 36607);













let CreateMoldingPage = class CreateMoldingPage {
    constructor(scanService, moldingService, alertController, kitService, router, navCtrl, loadingService, loadingController, activatedRoute, toastController, authService, alertService) {
        this.scanService = scanService;
        this.moldingService = moldingService;
        this.alertController = alertController;
        this.kitService = kitService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.authService = authService;
        this.alertService = alertService;
        this.expanded = false;
        this.molding =
            {
                id: null,
                cores: [],
                kits: [],
                moldingDay: new Date(),
                outillage: null,
                createdBy: null
            };
        console.log('test');
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            // this.pageTitle = 'Modification moulage';
            this.loadMoldingData(id);
        }
        else {
            // this.pageTitle = 'Nouveau moulage';
        }
    }
    loadMoldingData(moldingId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Patienter pendant le chargement du moulage',
            });
            this.moldingService.getMoldingById(moldingId)
                .then((molding) => {
                this.molding = molding;
                this.moldingService.updateDates(this.molding);
                this.molding.updatedAt = new Date();
                console.log(this.molding);
                loading.dismiss();
            });
        });
    }
    ngAfterViewInit() {
        this.scanButtonText = 'SCAN INACTIF';
        this.scanButton.color = 'danger';
        this.scanService.scanState = false;
        console.log('after view init', this.scanButton);
    }
    ngOnInit() {
        console.log('init');
    }
    associateToolClick() {
        this.associateToolAlertPrompt();
    }
    associateCoreClick() {
        this.alertService.simpleAlert('Message d\'information', 'Fonction inactive', 'La fonction permettra de lier un nida au moulage');
    }
    associateToolAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Associer l\'outillage de moulage',
                inputs: [
                    {
                        name: 'toolNumber',
                        type: 'text',
                        placeholder: 'Scannez l\'outillage',
                        tabindex: 1,
                        id: 'toolNumberInput',
                    }
                ],
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        cssClass: 'ion-color-secondary',
                        handler: (data) => {
                            console.log('Confirm Cancel', data);
                        }
                    }, {
                        text: 'Valider',
                        cssClass: ['ion-color-primary', 'button', 'button-solid'],
                        handler: (data) => {
                            // this.setLinkedTool(data.toolNumber);
                        }
                    }
                ]
            });
            yield alert.present().then(() => {
                const toolNumberInput = document.getElementById('toolNumberInput');
                if (toolNumberInput) {
                    toolNumberInput.focus();
                }
            });
        });
    }
    switchScanState() {
        this.scanService.scanState = !this.scanService.scanState;
        if (this.scanService.scanState) {
            this.scanInput.setFocus();
        }
    }
    inputOnBlur() {
        this.scanButton.color = 'danger';
        this.scanButtonText = 'SCAN INACTIF';
        this.scanService.scanState = false;
    }
    inputOnFocus() {
        this.scanButton.color = 'success';
        this.scanButtonText = 'SCAN ACTIF';
        this.scanService.scanState = true;
    }
    onInputChange(inputValue) {
        this.loadingService.startLoading();
        this.scanService.getScanInput(inputValue)
            .then((data) => {
            console.log(data);
            if (Object.getOwnPropertyNames(data).includes('idMM')) {
                if (!this.kitService.kitIsInKits(data, this.molding.kits)) {
                    this.molding.kits.unshift(data);
                    this.moldingService.updateDates(this.molding);
                    // this.presentToast('Kit ajouté !');
                }
                else {
                    this.presentToast('Le kit a déjà été scanné');
                    console.log('kit en doublon');
                }
            }
            else if (Object.getOwnPropertyNames(data).includes('sapToolNumber')) {
                this.molding.outillage = data;
                this.presentToast('Outillage associé !');
            }
            else if (Object.getOwnPropertyNames(data).includes('idCore')) {
                this.presentToast('Nida Ajouté !');
                this.molding.cores.unshift(data);
            }
        })
            .catch(() => {
            console.error('Catch get scan input');
        })
            .finally(() => {
            this.loadingService.stopLoading()
                .then(() => {
                setTimeout(() => {
                    this.switchScanState();
                    this.scanInput.value = '';
                }, 1000);
            });
        });
    }
    removeKit(index) {
        try {
            this.molding.kits.splice(index, 1);
            console.log(`Kit removed ${index}`);
            this.moldingService.updateDates(this.molding);
        }
        catch (error) {
            console.error(error);
        }
    }
    saveMoldingClick() {
        this.saveMolding()
            .then(() => {
            // On demande si on veut imprimer ou non
            console.log('Kit sauvegardé. Voulez-vous imprimer ?');
            this.presentAlertConfirm();
        }, () => {
            this.saveMoldingErrorAlert();
        });
    }
    saveMolding() {
        return new Promise((resolve, reject) => {
            this.checkMoldingDatas()
                .then((moldingDatasStatus) => {
                console.log('le moulage à le statut : ', moldingDatasStatus);
                if (moldingDatasStatus) {
                    // sauvegarder le moulage en base de donnée
                    this.molding.createdBy = this.authService.authUser;
                    if (this.molding.id === null) {
                        this.moldingService.saveMolding(this.moldingService.toIri(this.molding))
                            .then((responseMolding) => {
                            this.molding = this.moldingService.moldingServerToMoldingObject(responseMolding);
                            console.log('tout est OK le moulage est sauvegardé', this.molding);
                            resolve();
                        }, () => {
                            console.log('tout n\'est pas Ok la sauvegarde a échouée');
                            reject();
                        });
                    }
                    else {
                        this.moldingService.updateMolding(this.moldingService.toIri(this.molding))
                            .then((responseMolding) => {
                            this.molding = responseMolding;
                            console.log('tout est OK le moulage est mis à jour');
                            resolve();
                        }, () => {
                            this.alertService.simpleAlert('Message d\'erreur', 'Sauvegarde échouée !', 'La sauvegarde ne sest pas correctement effectuée. Veuillez recommencer');
                            console.error('tout n\'est pas Ok la mise à jour du moulage a échouée');
                            reject();
                        });
                    }
                }
                else {
                    console.error('sauvegarde abandonnée');
                    reject();
                }
            });
        });
    }
    checkMoldingDatas() {
        return new Promise((resolve, reject) => {
            if (this.molding.outillage === null) {
                console.log('le moulage n\'a pas d\'outillage associé. Voulez-vous continuer sans outillage ?');
                this.presentAlertToolMissing()
                    .then((response) => {
                    if (response) {
                        console.log('onResolve : Je veux continuer sans outillage', response);
                        // console.error('erreur', response);
                        resolve(true);
                    }
                    else {
                        console.log('onResolve : Je ne veux pas continuer sans outillage', response);
                        resolve(false);
                    }
                }, (response) => {
                    const message = 'Les données n\ont pas pu être contrôlées. OU Il n\'y a pas eu de réponse de l\'utilisateur';
                    console.log(message, response);
                    reject(message);
                });
            }
            else if (this.molding.kits.length === 0) {
                console.log('onResolve : Il n\'y a pas de kit');
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Enregistrement effectué',
                message: 'Voulez-vous imprimer la fiche ?',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        cssClass: ['ion-color-primary', 'ion-button'],
                        id: 'cancel-button',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Oui',
                        id: 'confirm-button',
                        cssClass: 'ion-color-danger',
                        handler: () => {
                            this.printMolding();
                        },
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentAlertToolMissing() {
        return new Promise((resolve, reject) => {
            this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Alerte',
                message: 'L\'outillage de moulage n\'est pas associé. voulez-vous continuer sans outillage ?',
                buttons: [
                    {
                        text: 'Non',
                        role: 'cancel',
                        cssClass: ['ion-color-primary', 'ion-button'],
                        id: 'cancel-button',
                        handler: () => {
                            console.log('Response false');
                            resolve(false);
                        }
                    }, {
                        text: 'Oui',
                        id: 'confirm-button',
                        cssClass: 'ion-color-danger',
                        handler: () => {
                            console.log('Response true');
                            resolve(true);
                        },
                    }
                ]
            })
                .then((alert) => {
                alert.present();
            });
        });
    }
    printMolding() {
        // this.moldingService.molding = this.molding;
        console.log(this.molding);
        this.router.navigate(['/printMolding', this.molding.id]);
    }
    printMoldingClick() {
        this.saveMolding()
            .then(() => {
            this.printMolding();
        });
    }
    wrongKitInputAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Erreur Kit',
                subHeader: 'Kit non conforme',
                message: 'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            // console.log('onDidDismiss resolved with role', role);
        });
    }
    saveMoldingErrorAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Erreur de sauvegarde',
                subHeader: 'Le moulage n\'a pas été sauvegardé',
                message: 'Veuillez ré-essayer',
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            // console.log('onDidDismiss resolved with role', role);
        });
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 1000,
                position: 'bottom',
                translucent: true,
                animated: true,
            });
            toast.present();
        });
    }
    kitAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Scannez un kit',
                inputs: [
                    {
                        name: 'kitnumber',
                        type: 'text',
                        placeholder: 'Scannez le kit',
                        tabindex: 1,
                        id: 'kitNumberInput',
                    }
                ],
                buttons: [
                    {
                        text: 'Annuler',
                        role: 'cancel',
                        cssClass: 'ion-color-secondary',
                        handler: (data) => {
                            console.log('Confirm Cancel', data);
                        }
                    }, {
                        text: 'Valider',
                        cssClass: ['ion-color-primary', 'button', 'button-solid'],
                        handler: (data) => {
                            // if (data.kitnumber !== '') { this.scanInputAction(data.kitnumber, 'test'); };
                        }
                    }
                ]
            });
            yield alert.present().then(() => {
            });
        });
    }
};
CreateMoldingPage.ctorParameters = () => [
    { type: src_app_services_scan_scan_service__WEBPACK_IMPORTED_MODULE_6__.ScanService },
    { type: src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_5__.MoldingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_kits_kit_service__WEBPACK_IMPORTED_MODULE_4__.KitService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: src_app_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService },
    { type: src_app_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
CreateMoldingPage.propDecorators = {
    scanInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['scanInput',] }],
    scanButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['scanButton',] }],
    accordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__.MatAccordion,] }],
    kitPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['kitPanel',] }]
};
CreateMoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-create-molding',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_create_molding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_create_molding_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateMoldingPage);



/***/ }),

/***/ 67287:
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/molding/create-molding/create-molding.page.html ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <app-shared-user-header [page]=\"pageTitle\"></app-shared-user-header> -->\n<ion-content color=medium [fullscreen]=\"true\">\n    <ion-toolbar color=light class=\"ion-hide-md-down\">\n        <ion-button slot=start size=small #scanButton fill=solid size=default (click)=\"switchScanState()\">\n            <!-- <ion-icon slot=\"start\" name=\"scan-outline\"></ion-icon> -->\n            {{scanButtonText}}\n        </ion-button>\n        <ion-input slot=start #scanInput type=\"text\" placeholder=\"Id du composant\" (change)=\"onInputChange(scanInput.value.toString())\" (focusout)=\"inputOnBlur()\" (focusin)=\"inputOnFocus()\"></ion-input>\n        <ion-button size=small slot=start (click)=\"associateToolClick()\" fill=clear size=default>\n            <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\n            OUTILLAGE\n        </ion-button>\n        <ion-button size=small slot=start disabled=\"false\" (click)=\"associateCoreClick()\" fill=clear size=default>\n            <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\n            NIDA\n        </ion-button>\n\n        <ion-button size=small slot=end (click)=\"(expanded = !expanded) ? accordion.openAll() : accordion.closeAll()\">{{(!expanded) ? 'Développer tout' : 'Replier tout'}}</ion-button>\n    </ion-toolbar>\n\n    <mat-accordion class=\"example-headers-align\" multi>\n        <mat-expansion-panel #kitPanel *ngIf=\"molding.kits?.length >0\" [expanded]=\"(molding.kits.length >0)\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <ion-title color=primary> List des Kits</ion-title>\n                </mat-panel-title>\n\n                <mat-panel-description>\n\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n\n            <ion-list *ngIf=\"molding?.kits\" class=\"ion-no-padding\">\n                <ion-list-header lines=\"inset\" color=light>\n                    <ion-label class=\"ion-hide-md-down\">Référence Sap</ion-label>\n                    <ion-label class=\"ion-hide-md-down\">ID-MM</ion-label>\n                    <ion-label>Désignation</ion-label>\n                    <ion-label>Péremption à -18°C</ion-label>\n                    <ion-label>A draper avant le</ion-label>\n                    <ion-label>A cuire avant le</ion-label>\n                </ion-list-header>\n                <ion-item *ngFor=\"let kit of molding.kits; let index = index\">\n                    <ion-label class=\"ion-hide-md-down\">{{kit.referenceSAP}}\n                        <ion-text class=\"strong\" *ngIf=\"kit === molding.matDrap\">(Drap)</ion-text>\n                        <ion-text class=\"strong\" *ngIf=\"kit === molding.matPolym\">(Pol)</ion-text>\n                    </ion-label>\n                    <ion-label class=\"ion-hide-md-down\">{{kit.idMM}}</ion-label>\n                    <ion-label>{{kit.designationSAP}}</ion-label>\n                    <ion-label [color]=\"kitService.isPerim(kit.peremptionMoins18, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.peremptionMoins18 | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n                    <ion-label [color]=\"kitService.isPerim(kit.aDrapAv, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.aDrapAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n                    <ion-label [color]=\"kitService.isPerim(kit.aCuirAv, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.aCuirAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n                    <ion-button class=\"ion-hide-md-down\" (click)=\"removeKit(index)\">\n                        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n                    </ion-button>\n                </ion-item>\n            </ion-list>\n        </mat-expansion-panel>\n\n        <mat-expansion-panel *ngIf=\"molding.cores?.length >0\">\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    Liste des nidas\n                </mat-panel-title>\n                <mat-panel-description>\n                    Liste des nidas\n                </mat-panel-description>\n            </mat-expansion-panel-header>\n            <ion-list>\n                <ion-item>\n                    <ion-label *ngFor=\"let core of molding.cores\">\n                        {{core.batchNumber.batch2}}\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </mat-expansion-panel>\n    </mat-accordion>\n\n    <!-- <ion-list *ngIf=\"molding?.kits\">\n        <ion-list-header lines=\"inset\" color=light>\n            <ion-label class=\"ion-hide-md-down\">Référence Sap</ion-label>\n            <ion-label>Désignation</ion-label>\n            <ion-label>Péremption à -18°C</ion-label>\n            <ion-label>A draper avant le</ion-label>\n            <ion-label>A cuire avant le</ion-label>\n        </ion-list-header>\n        <ion-item *ngFor=\"let kit of molding.kits; let index = index\">\n            <ion-label class=\"ion-hide-md-down\">{{kit.referenceSAP}}\n                <ion-text class=\"strong\" *ngIf=\"kit === molding.matDrap\">(Drap)</ion-text>\n                <ion-text class=\"strong\" *ngIf=\"kit === molding.matPolym\">(Pol)</ion-text>\n            </ion-label>\n            <ion-label>{{kit.designationSAP}}</ion-label>\n            <ion-label [color]=\"kitService.isPerim(kit.peremptionMoins18, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.peremptionMoins18 | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-label [color]=\"kitService.isPerim(kit.aDrapAv, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.aDrapAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-label [color]=\"kitService.isPerim(kit.aCuirAv, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.aCuirAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-button class=\"ion-hide-md-down\" (click)=\"removeKit(index)\">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n        <ion-list-header lines=\"inset\" color=light>\n            <ion-label>Liste des nidas</ion-label>\n            <ion-label>Numéro de lot</ion-label>\n        </ion-list-header>\n        <ion-item>\n            <ion-label>\n                ]C201W028551~1020M0225104~5220M0225104001\n            </ion-label>\n        </ion-item>\n    </ion-list> -->\n</ion-content>\n\n<!-- footer -->\n<ion-tab-bar slot=\"bottom\" class=\"ion-hide-md-up\">\n    <ion-tab-button tab=\"schedule\">\n        <ion-icon name=\"link\"></ion-icon>\n        <ion-label>Outillage</ion-label>\n        <ion-badge>6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\" (click)=\"kitAlertPrompt()\">\n        <ion-icon name=\"scan\"></ion-icon>\n        <ion-label>Scan kit</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n        <ion-icon name=\"print\"></ion-icon>\n        <ion-label>Imprimer</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\" (click)=\"saveMoldingClick()\">\n        <ion-icon name=\"save\"></ion-icon>\n        <ion-label>Sauvegarder</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>\n<ion-footer class=\"ion-hide-md-down\">\n    <ion-toolbar class=\"ion-space-between\">\n        <ion-item lines=\"none\">\n            <ion-label>Outillage : {{molding?.outillage?.sapToolNumber}}</ion-label>\n            <ion-label class=\"strong\">A draper avant le : {{molding?.aDraperAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-label class=\"strong\">A cuire avant le : {{molding?.aCuireAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n        </ion-item>\n    </ion-toolbar>\n    <ion-toolbar color=light>\n        <ion-buttons slot=\"end\" collapse=\"true\">\n            <ion-button slot=end (click)=\"saveMoldingClick()\" fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                SAUVEGARDER\n            </ion-button>\n            <ion-button slot=end (click)=\"printMoldingClick()\" fill=\"solid\" color=primary>\n                <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\n                IMPRIMER\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ 10697:
/*!***********************************************************************!*\
  !*** ./src/app/pages/molding/create-molding/create-molding.page.scss ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtbW9sZGluZy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_molding_create-molding_create-molding_module_ts.js.map