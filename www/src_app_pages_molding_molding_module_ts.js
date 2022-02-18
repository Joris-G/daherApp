"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_molding_molding_module_ts"],{

/***/ 7073:
/*!************************************************!*\
  !*** ./src/app/_services/scan/scan.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanService": () => (/* binding */ ScanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _kits_kit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kits/kit.service */ 9922);



let ScanService = class ScanService {
    constructor(kitService) {
        this.kitService = kitService;
    }
    getScanInput(scanInputValue) {
        return new Promise((resolve, reject) => {
            this.kitService.getKitById(scanInputValue)
                .then((kit) => {
                resolve(kit);
            }, () => {
                reject();
            });
        });
    }
};
ScanService.ctorParameters = () => [
    { type: _kits_kit_service__WEBPACK_IMPORTED_MODULE_0__.KitService }
];
ScanService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ScanService);



/***/ }),

/***/ 5853:
/*!*********************************************************!*\
  !*** ./src/app/pages/molding/molding-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPageRoutingModule": () => (/* binding */ MoldingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _molding_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding.page */ 1903);




const routes = [
    {
        path: '',
        component: _molding_page__WEBPACK_IMPORTED_MODULE_0__.MoldingPage
    },
    {
        path: 'print-molding-sheet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_molding_print-molding-sheet_print-molding-sheet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./print-molding-sheet/print-molding-sheet.module */ 1405)).then(m => m.PrintMoldingSheetPageModule)
    }
];
let MoldingPageRoutingModule = class MoldingPageRoutingModule {
};
MoldingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MoldingPageRoutingModule);



/***/ }),

/***/ 1677:
/*!*************************************************!*\
  !*** ./src/app/pages/molding/molding.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPageModule": () => (/* binding */ MoldingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _molding_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding-routing.module */ 5853);
/* harmony import */ var _molding_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page */ 1903);
/* harmony import */ var src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/composants/shared-user-header/shared-user-header.module */ 9372);








let MoldingPageModule = class MoldingPageModule {
};
MoldingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _molding_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoldingPageRoutingModule,
            src_app_composants_shared_user_header_shared_user_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUserHeaderModule,
        ],
        declarations: [_molding_page__WEBPACK_IMPORTED_MODULE_1__.MoldingPage]
    })
], MoldingPageModule);



/***/ }),

/***/ 1903:
/*!***********************************************!*\
  !*** ./src/app/pages/molding/molding.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPage": () => (/* binding */ MoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_molding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./molding.page.html */ 4255);
/* harmony import */ var _molding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page.scss */ 1871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_kits_kit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/kits/kit.service */ 9922);
/* harmony import */ var src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/moldings/molding.service */ 7143);
/* harmony import */ var src_app_services_moldingTools_molding_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/moldingTools/molding-tool.service */ 6733);
/* harmony import */ var src_app_services_scan_scan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/scan/scan.service */ 7073);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 6607);
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/_services/users/users.service */ 2048);












let MoldingPage = class MoldingPage {
    constructor(scanService, moldingService, moldingToolService, alertController, kitService, router, navCtrl, loadingController, userService, activatedRoute, toastController, authService) {
        this.scanService = scanService;
        this.moldingService = moldingService;
        this.moldingToolService = moldingToolService;
        this.alertController = alertController;
        this.kitService = kitService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.toastController = toastController;
        this.authService = authService;
        this.molding =
            {
                id: null,
                kits: [],
                moldingDay: new Date(),
                outillage: null,
                moldingUser: null
            };
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.pageTitle = 'Modification moulage';
            this.loadMoldingData(id);
        }
        else {
            this.pageTitle = 'Nouveau moulage';
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
    }
    ngOnInit() {
    }
    associateToolClick() {
        this.associateToolAlertPrompt();
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
                            this.setLinkedTool(data.toolNumber);
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
    setLinkedTool(toolNumber) {
        console.log(toolNumber);
        this.moldingToolService.getToolByToolNumber(toolNumber)
            .then((tool) => {
            this.molding.outillage = tool;
            this.presentToast('Outillage associé !');
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
    scanInputAction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Patienter pendant le chargement du kit',
            });
            yield loading.present();
            this.scanService.getScanInput(this.scanInput.value.toString())
                .then((kit) => {
                if (!this.kitService.kitIsInKits(kit, this.molding.kits)) {
                    this.molding.kits.push(kit);
                    this.moldingService.updateDates(this.molding);
                    this.presentToast('Kit ajouté !');
                }
                else {
                    this.presentToast('Le kit a déjà été scanné');
                    console.log('kit en doublon');
                }
            })
                .catch(() => {
                this.wrongKitInputAlert();
                console.error('Le kit scanné ne semble pas être un kit');
            })
                .finally(() => {
                this.scanInput.value = '';
                loading.dismiss();
            });
            const { role, data } = yield loading.onDidDismiss();
            // console.log('Loading dismissed!');
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
                    this.molding.moldingUser = this.authService.authUser;
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
                duration: 2000,
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
                            this.scanInputAction();
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
};
MoldingPage.ctorParameters = () => [
    { type: src_app_services_scan_scan_service__WEBPACK_IMPORTED_MODULE_5__.ScanService },
    { type: src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_3__.MoldingService },
    { type: src_app_services_moldingTools_molding_tool_service__WEBPACK_IMPORTED_MODULE_4__.MoldingToolService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: src_app_services_kits_kit_service__WEBPACK_IMPORTED_MODULE_2__.KitService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService }
];
MoldingPage.propDecorators = {
    scanInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['scanInput',] }],
    scanButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['scanButton',] }]
};
MoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-molding',
        template: _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_molding_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_molding_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingPage);



/***/ }),

/***/ 4255:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/molding/molding.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-shared-user-header [page]=\"pageTitle\"></app-shared-user-header>\n<ion-content>\n    <ion-toolbar color=light class=\"ion-hide-md-down\">\n        <ion-buttons slot=\"start\" collapse=\"true\">\n            <ion-button #scanButton fill=solid size=default (click)=\"switchScanState()\">\n                <!-- <ion-icon slot=\"start\" name=\"scan-outline\"></ion-icon> -->\n                {{scanButtonText}}\n            </ion-button>\n            <ion-input lines=true #scanInput type=\"text\" placeholder=\"Id du kit\" (change)=\"scanInputAction()\" (focusout)=\"inputOnBlur()\" (focusin)=\"inputOnFocus()\"></ion-input>\n            <ion-button (click)=\"associateToolClick()\" fill=clear size=default>\n                <ion-icon slot=\"start\" name=\"link-outline\"></ion-icon>\n                OUTILLAGE\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n\n    <ion-list *ngIf=\"molding?.kits\">\n        <ion-item>\n            <ion-label class=\"ion-hide-md-down\">Référence Sap</ion-label>\n            <ion-label>Désignation</ion-label>\n            <ion-label>Péremption à -18°C</ion-label>\n            <ion-label>A draper avant le</ion-label>\n            <ion-label>A cuire avant le</ion-label>\n        </ion-item>\n        <ion-item *ngFor=\"let kit of molding.kits; let index = index\">\n            <ion-label class=\"ion-hide-md-down\">{{kit.referenceSAP}} <span *ngIf=\"kit === molding.matDrap\">(Drap)</span><span *ngIf=\"kit === molding.matPolym\">(Pol)</span></ion-label>\n            <ion-label>{{kit.designationSAP}}</ion-label>\n            <ion-label [color]=\"kitService.isPerim(kit.peremptionMoins18, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.peremptionMoins18 | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-label [color]=\"kitService.isPerim(kit.aDrapAv, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.aDrapAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-label [color]=\"kitService.isPerim(kit.aCuirAv, molding.moldingDay) ? 'danger' : 'dark'\">{{kit.aCuirAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-button class=\"ion-hide-md-down\" (click)=\"removeKit(index)\">\n                <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<ion-tab-bar slot=\"bottom\" class=\"ion-hide-md-up\">\n    <ion-tab-button tab=\"schedule\">\n        <ion-icon name=\"link\"></ion-icon>\n        <ion-label>Outillage</ion-label>\n        <ion-badge>6</ion-badge>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\" (click)=\"kitAlertPrompt()\">\n        <ion-icon name=\"scan\"></ion-icon>\n        <ion-label>Scan kit</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n        <ion-icon name=\"print\"></ion-icon>\n        <ion-label>Imprimer</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\" (click)=\"saveMoldingClick()\">\n        <ion-icon name=\"save\"></ion-icon>\n        <ion-label>Sauvegarder</ion-label>\n    </ion-tab-button>\n</ion-tab-bar>\n\n<ion-footer class=\"ion-hide-md-down\">\n    <ion-toolbar class=\"ion-space-between\">\n        <ion-item lines=\"none\">\n            <ion-label>Outillage : {{molding?.outillage?.sapToolNumber}}</ion-label>\n            <ion-label>A draper avant le : {{molding?.aDraperAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n            <ion-label>A cuire avant le : {{molding?.aCuireAv | date: \"dd/MM/yyyy à HH:mm\"}}</ion-label>\n        </ion-item>\n    </ion-toolbar>\n    <ion-toolbar color=light>\n        <ion-buttons slot=\"end\" collapse=\"true\">\n            <ion-button slot=end (click)=\"saveMoldingClick()\" fill=\"clear\">\n                <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n                SAUVEGARDER\n            </ion-button>\n            <ion-button slot=end (click)=\"printMoldingClick()\" fill=\"solid\" color=primary>\n                <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\n                IMPRIMER\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ 1871:
/*!*************************************************!*\
  !*** ./src/app/pages/molding/molding.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xkaW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_molding_molding_module_ts.js.map