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
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-webcam */ 330);
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
            ngx_webcam__WEBPACK_IMPORTED_MODULE_8__.WebcamModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_j_grangier_Desktop_TRAVAIL_Appli_MOULAGE_moldingApp_node_modules_ngtools_webpack_src_loaders_direct_resource_js_molding_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./molding.page.html */ 4255);
/* harmony import */ var _molding_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page.scss */ 1871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_services_kits_kit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/kits/kit.service */ 9922);
/* harmony import */ var src_app_services_moldings_molding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/moldings/molding.service */ 7143);
/* harmony import */ var src_app_services_moldingTools_molding_tool_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/moldingTools/molding-tool.service */ 6733);
/* harmony import */ var src_app_services_scan_scan_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/scan/scan.service */ 7073);
/* harmony import */ var src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/users/auth.service */ 6607);











let MoldingPage = class MoldingPage {
    constructor(scanService, moldingService, moldingToolService, alertController, kitService, router, navCtrl, loadingController, activatedRoute, toastController, authService) {
        this.scanService = scanService;
        this.moldingService = moldingService;
        this.moldingToolService = moldingToolService;
        this.alertController = alertController;
        this.kitService = kitService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    }
    ngOnInit() {
    }
    associateToolClick() {
        this.associateToolAlertPrompt();
    }
    associateToolAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: src_app_services_kits_kit_service__WEBPACK_IMPORTED_MODULE_2__.KitService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_users_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService }
];
MoldingPage.propDecorators = {
    scanInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['scanInput',] }],
    scanButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['scanButton',] }]
};
MoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
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

/***/ }),

/***/ 330:
/*!*********************************************************!*\
  !*** ./node_modules/ngx-webcam/fesm2020/ngx-webcam.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebcamComponent": () => (/* binding */ WebcamComponent),
/* harmony export */   "WebcamImage": () => (/* binding */ WebcamImage),
/* harmony export */   "WebcamInitError": () => (/* binding */ WebcamInitError),
/* harmony export */   "WebcamMirrorProperties": () => (/* binding */ WebcamMirrorProperties),
/* harmony export */   "WebcamModule": () => (/* binding */ WebcamModule),
/* harmony export */   "WebcamUtil": () => (/* binding */ WebcamUtil)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);




/**
 * Container class for a captured webcam image
 * @author basst314, davidshen84
 */

const _c0 = ["video"];
const _c1 = ["canvas"];

function WebcamComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r3.rotateVideoInput(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

class WebcamImage {
  constructor(imageAsDataUrl, mimeType, imageData) {
    this._mimeType = null;
    this._imageAsBase64 = null;
    this._imageAsDataUrl = null;
    this._imageData = null;
    this._mimeType = mimeType;
    this._imageAsDataUrl = imageAsDataUrl;
    this._imageData = imageData;
  }
  /**
   * Extracts the Base64 data out of the given dataUrl.
   * @param dataUrl the given dataUrl
   * @param mimeType the mimeType of the data
   */


  static getDataFromDataUrl(dataUrl, mimeType) {
    return dataUrl.replace(`data:${mimeType};base64,`, '');
  }
  /**
   * Get the base64 encoded image data
   * @returns base64 data of the image
   */


  get imageAsBase64() {
    return this._imageAsBase64 ? this._imageAsBase64 : this._imageAsBase64 = WebcamImage.getDataFromDataUrl(this._imageAsDataUrl, this._mimeType);
  }
  /**
   * Get the encoded image as dataUrl
   * @returns the dataUrl of the image
   */


  get imageAsDataUrl() {
    return this._imageAsDataUrl;
  }
  /**
   * Get the ImageData object associated with the canvas' 2d context.
   * @returns the ImageData of the canvas's 2d context.
   */


  get imageData() {
    return this._imageData;
  }

}

class WebcamUtil {
  /**
   * Lists available videoInput devices
   * @returns a list of media device info.
   */
  static getAvailableVideoInputs() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      return Promise.reject('enumerateDevices() not supported.');
    }

    return new Promise((resolve, reject) => {
      navigator.mediaDevices.enumerateDevices().then(devices => {
        resolve(devices.filter(device => device.kind === 'videoinput'));
      }).catch(err => {
        reject(err.message || err);
      });
    });
  }

}

class WebcamComponent {
  constructor() {
    /** Defines the max width of the webcam area in px */
    this.width = 640;
    /** Defines the max height of the webcam area in px */

    this.height = 480;
    /** Defines base constraints to apply when requesting video track from UserMedia */

    this.videoOptions = WebcamComponent.DEFAULT_VIDEO_OPTIONS;
    /** Flag to enable/disable camera switch. If enabled, a switch icon will be displayed if multiple cameras were found */

    this.allowCameraSwitch = true;
    /** Flag to control whether an ImageData object is stored into the WebcamImage object. */

    this.captureImageData = false;
    /** The image type to use when capturing snapshots */

    this.imageType = WebcamComponent.DEFAULT_IMAGE_TYPE;
    /** The image quality to use when capturing snapshots (number between 0 and 1) */

    this.imageQuality = WebcamComponent.DEFAULT_IMAGE_QUALITY;
    /** EventEmitter which fires when an image has been captured */

    this.imageCapture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits a mediaError if webcam cannot be initialized (e.g. missing user permissions) */

    this.initError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the webcam video was clicked */

    this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits the active deviceId after the active video device was switched */

    this.cameraSwitched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** available video devices */

    this.availableVideoInputs = [];
    /** Indicates whether the video device is ready to be switched */

    this.videoInitialized = false;
    /** Index of active video in availableVideoInputs */

    this.activeVideoInputIndex = -1;
    /** MediaStream object in use for streaming UserMedia data */

    this.mediaStream = null;
    /** width and height of the active video stream */

    this.activeVideoSettings = null;
  }
  /**
   * If the given Observable emits, an image will be captured and emitted through 'imageCapture' EventEmitter
   */


  set trigger(trigger) {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    } // Subscribe to events from this Observable to take snapshots


    this.triggerSubscription = trigger.subscribe(() => {
      this.takeSnapshot();
    });
  }
  /**
   * If the given Observable emits, the active webcam will be switched to the one indicated by the emitted value.
   * @param switchCamera Indicates which webcam to switch to
   *   true: cycle forwards through available webcams
   *   false: cycle backwards through available webcams
   *   string: activate the webcam with the given id
   */


  set switchCamera(switchCamera) {
    if (this.switchCameraSubscription) {
      this.switchCameraSubscription.unsubscribe();
    } // Subscribe to events from this Observable to switch video device


    this.switchCameraSubscription = switchCamera.subscribe(value => {
      if (typeof value === 'string') {
        // deviceId was specified
        this.switchToVideoInput(value);
      } else {
        // direction was specified
        this.rotateVideoInput(value !== false);
      }
    });
  }
  /**
   * Get MediaTrackConstraints to request streaming the given device
   * @param deviceId
   * @param baseMediaTrackConstraints base constraints to merge deviceId-constraint into
   * @returns
   */


  static getMediaConstraintsForDevice(deviceId, baseMediaTrackConstraints) {
    const result = baseMediaTrackConstraints ? baseMediaTrackConstraints : this.DEFAULT_VIDEO_OPTIONS;

    if (deviceId) {
      result.deviceId = {
        exact: deviceId
      };
    }

    return result;
  }
  /**
   * Tries to harvest the deviceId from the given mediaStreamTrack object.
   * Browsers populate this object differently; this method tries some different approaches
   * to read the id.
   * @param mediaStreamTrack
   * @returns deviceId if found in the mediaStreamTrack
   */


  static getDeviceIdFromMediaStreamTrack(mediaStreamTrack) {
    if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().deviceId) {
      return mediaStreamTrack.getSettings().deviceId;
    } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().deviceId) {
      const deviceIdObj = mediaStreamTrack.getConstraints().deviceId;
      return WebcamComponent.getValueFromConstrainDOMString(deviceIdObj);
    }
  }
  /**
   * Tries to harvest the facingMode from the given mediaStreamTrack object.
   * Browsers populate this object differently; this method tries some different approaches
   * to read the value.
   * @param mediaStreamTrack
   * @returns facingMode if found in the mediaStreamTrack
   */


  static getFacingModeFromMediaStreamTrack(mediaStreamTrack) {
    if (mediaStreamTrack) {
      if (mediaStreamTrack.getSettings && mediaStreamTrack.getSettings() && mediaStreamTrack.getSettings().facingMode) {
        return mediaStreamTrack.getSettings().facingMode;
      } else if (mediaStreamTrack.getConstraints && mediaStreamTrack.getConstraints() && mediaStreamTrack.getConstraints().facingMode) {
        const facingModeConstraint = mediaStreamTrack.getConstraints().facingMode;
        return WebcamComponent.getValueFromConstrainDOMString(facingModeConstraint);
      }
    }
  }
  /**
   * Determines whether the given mediaStreamTrack claims itself as user facing
   * @param mediaStreamTrack
   */


  static isUserFacing(mediaStreamTrack) {
    const facingMode = WebcamComponent.getFacingModeFromMediaStreamTrack(mediaStreamTrack);
    return facingMode ? 'user' === facingMode.toLowerCase() : false;
  }
  /**
   * Extracts the value from the given ConstrainDOMString
   * @param constrainDOMString
   */


  static getValueFromConstrainDOMString(constrainDOMString) {
    if (constrainDOMString) {
      if (constrainDOMString instanceof String) {
        return String(constrainDOMString);
      } else if (Array.isArray(constrainDOMString) && Array(constrainDOMString).length > 0) {
        return String(constrainDOMString[0]);
      } else if (typeof constrainDOMString === 'object') {
        if (constrainDOMString['exact']) {
          return String(constrainDOMString['exact']);
        } else if (constrainDOMString['ideal']) {
          return String(constrainDOMString['ideal']);
        }
      }
    }

    return null;
  }

  ngAfterViewInit() {
    this.detectAvailableDevices().then(() => {
      // start video
      this.switchToVideoInput(null);
    }).catch(err => {
      this.initError.next({
        message: err
      }); // fallback: still try to load webcam, even if device enumeration failed

      this.switchToVideoInput(null);
    });
  }

  ngOnDestroy() {
    this.stopMediaTracks();
    this.unsubscribeFromSubscriptions();
  }
  /**
   * Takes a snapshot of the current webcam's view and emits the image as an event
   */


  takeSnapshot() {
    // set canvas size to actual video size
    const _video = this.nativeVideoElement;
    const dimensions = {
      width: this.width,
      height: this.height
    };

    if (_video.videoWidth) {
      dimensions.width = _video.videoWidth;
      dimensions.height = _video.videoHeight;
    }

    const _canvas = this.canvas.nativeElement;
    _canvas.width = dimensions.width;
    _canvas.height = dimensions.height; // paint snapshot image to canvas

    const context2d = _canvas.getContext('2d');

    context2d.drawImage(_video, 0, 0); // read canvas content as image

    const mimeType = this.imageType ? this.imageType : WebcamComponent.DEFAULT_IMAGE_TYPE;
    const quality = this.imageQuality ? this.imageQuality : WebcamComponent.DEFAULT_IMAGE_QUALITY;

    const dataUrl = _canvas.toDataURL(mimeType, quality); // get the ImageData object from the canvas' context.


    let imageData = null;

    if (this.captureImageData) {
      imageData = context2d.getImageData(0, 0, _canvas.width, _canvas.height);
    }

    this.imageCapture.next(new WebcamImage(dataUrl, mimeType, imageData));
  }
  /**
   * Switches to the next/previous video device
   * @param forward
   */


  rotateVideoInput(forward) {
    if (this.availableVideoInputs && this.availableVideoInputs.length > 1) {
      const increment = forward ? 1 : this.availableVideoInputs.length - 1;
      const nextInputIndex = (this.activeVideoInputIndex + increment) % this.availableVideoInputs.length;
      this.switchToVideoInput(this.availableVideoInputs[nextInputIndex].deviceId);
    }
  }
  /**
   * Switches the camera-view to the specified video device
   */


  switchToVideoInput(deviceId) {
    this.videoInitialized = false;
    this.stopMediaTracks();
    this.initWebcam(deviceId, this.videoOptions);
  }
  /**
   * Event-handler for video resize event.
   * Triggers Angular change detection so that new video dimensions get applied
   */


  videoResize() {// here to trigger Angular change detection
  }

  get videoWidth() {
    const videoRatio = this.getVideoAspectRatio();
    return Math.min(this.width, this.height * videoRatio);
  }

  get videoHeight() {
    const videoRatio = this.getVideoAspectRatio();
    return Math.min(this.height, this.width / videoRatio);
  }

  get videoStyleClasses() {
    let classes = '';

    if (this.isMirrorImage()) {
      classes += 'mirrored ';
    }

    return classes.trim();
  }

  get nativeVideoElement() {
    return this.video.nativeElement;
  }
  /**
   * Returns the video aspect ratio of the active video stream
   */


  getVideoAspectRatio() {
    // calculate ratio from video element dimensions if present
    const videoElement = this.nativeVideoElement;

    if (videoElement.videoWidth && videoElement.videoWidth > 0 && videoElement.videoHeight && videoElement.videoHeight > 0) {
      return videoElement.videoWidth / videoElement.videoHeight;
    } // nothing present - calculate ratio based on width/height params


    return this.width / this.height;
  }
  /**
   * Init webcam live view
   */


  initWebcam(deviceId, userVideoTrackConstraints) {
    const _video = this.nativeVideoElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // merge deviceId -> userVideoTrackConstraints
      const videoTrackConstraints = WebcamComponent.getMediaConstraintsForDevice(deviceId, userVideoTrackConstraints);
      navigator.mediaDevices.getUserMedia({
        video: videoTrackConstraints
      }).then(stream => {
        this.mediaStream = stream;
        _video.srcObject = stream;

        _video.play();

        this.activeVideoSettings = stream.getVideoTracks()[0].getSettings();
        const activeDeviceId = WebcamComponent.getDeviceIdFromMediaStreamTrack(stream.getVideoTracks()[0]);
        this.cameraSwitched.next(activeDeviceId); // Initial detect may run before user gave permissions, returning no deviceIds. This prevents later camera switches. (#47)
        // Run detect once again within getUserMedia callback, to make sure this time we have permissions and get deviceIds.

        this.detectAvailableDevices().then(() => {
          this.activeVideoInputIndex = activeDeviceId ? this.availableVideoInputs.findIndex(mediaDeviceInfo => mediaDeviceInfo.deviceId === activeDeviceId) : -1;
          this.videoInitialized = true;
        }).catch(() => {
          this.activeVideoInputIndex = -1;
          this.videoInitialized = true;
        });
      }).catch(err => {
        this.initError.next({
          message: err.message,
          mediaStreamError: err
        });
      });
    } else {
      this.initError.next({
        message: 'Cannot read UserMedia from MediaDevices.'
      });
    }
  }

  getActiveVideoTrack() {
    return this.mediaStream ? this.mediaStream.getVideoTracks()[0] : null;
  }

  isMirrorImage() {
    if (!this.getActiveVideoTrack()) {
      return false;
    } // check for explicit mirror override parameter


    {
      let mirror = 'auto';

      if (this.mirrorImage) {
        if (typeof this.mirrorImage === 'string') {
          mirror = String(this.mirrorImage).toLowerCase();
        } else {
          // WebcamMirrorProperties
          if (this.mirrorImage.x) {
            mirror = this.mirrorImage.x.toLowerCase();
          }
        }
      }

      switch (mirror) {
        case 'always':
          return true;

        case 'never':
          return false;
      }
    } // default: enable mirroring if webcam is user facing

    return WebcamComponent.isUserFacing(this.getActiveVideoTrack());
  }
  /**
   * Stops all active media tracks.
   * This prevents the webcam from being indicated as active,
   * even if it is no longer used by this component.
   */


  stopMediaTracks() {
    if (this.mediaStream && this.mediaStream.getTracks) {
      // pause video to prevent mobile browser freezes
      this.nativeVideoElement.pause(); // getTracks() returns all media tracks (video+audio)

      this.mediaStream.getTracks().forEach(track => track.stop());
    }
  }
  /**
   * Unsubscribe from all open subscriptions
   */


  unsubscribeFromSubscriptions() {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    }

    if (this.switchCameraSubscription) {
      this.switchCameraSubscription.unsubscribe();
    }
  }
  /**
   * Reads available input devices
   */


  detectAvailableDevices() {
    return new Promise((resolve, reject) => {
      WebcamUtil.getAvailableVideoInputs().then(devices => {
        this.availableVideoInputs = devices;
        resolve(devices);
      }).catch(err => {
        this.availableVideoInputs = [];
        reject(err);
      });
    });
  }

}

WebcamComponent.DEFAULT_VIDEO_OPTIONS = {
  facingMode: 'environment'
};
WebcamComponent.DEFAULT_IMAGE_TYPE = 'image/jpeg';
WebcamComponent.DEFAULT_IMAGE_QUALITY = 0.92;

WebcamComponent.ɵfac = function WebcamComponent_Factory(t) {
  return new (t || WebcamComponent)();
};

WebcamComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WebcamComponent,
  selectors: [["webcam"]],
  viewQuery: function WebcamComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
    }
  },
  inputs: {
    width: "width",
    height: "height",
    videoOptions: "videoOptions",
    allowCameraSwitch: "allowCameraSwitch",
    mirrorImage: "mirrorImage",
    captureImageData: "captureImageData",
    imageType: "imageType",
    imageQuality: "imageQuality",
    trigger: "trigger",
    switchCamera: "switchCamera"
  },
  outputs: {
    imageCapture: "imageCapture",
    initError: "initError",
    imageClick: "imageClick",
    cameraSwitched: "cameraSwitched"
  },
  decls: 6,
  vars: 7,
  consts: [[1, "webcam-wrapper", 3, "click"], ["autoplay", "", "muted", "", "playsinline", "", 3, "width", "height", "resize"], ["video", ""], ["class", "camera-switch", 3, "click", 4, "ngIf"], [3, "width", "height"], ["canvas", ""], [1, "camera-switch", 3, "click"]],
  template: function WebcamComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebcamComponent_Template_div_click_0_listener() {
        return ctx.imageClick.next();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function WebcamComponent_Template_video_resize_1_listener() {
        return ctx.videoResize();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WebcamComponent_div_3_Template, 1, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.videoStyleClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.videoWidth)("height", ctx.videoHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowCameraSwitch && ctx.availableVideoInputs.length > 1 && ctx.videoInitialized);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".webcam-wrapper[_ngcontent-%COMP%]{display:inline-block;position:relative;line-height:0}.webcam-wrapper[_ngcontent-%COMP%]   video.mirrored[_ngcontent-%COMP%]{transform:scaleX(-1)}.webcam-wrapper[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:none}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper[_ngcontent-%COMP%]   .camera-switch[_ngcontent-%COMP%]:hover{background-color:#0000002e}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'webcam',
      template: "<div class=\"webcam-wrapper\" (click)=\"imageClick.next();\">\r\n  <video #video [width]=\"videoWidth\" [height]=\"videoHeight\" [class]=\"videoStyleClasses\" autoplay muted playsinline (resize)=\"videoResize()\"></video>\r\n  <div class=\"camera-switch\" *ngIf=\"allowCameraSwitch && availableVideoInputs.length > 1 && videoInitialized\" (click)=\"rotateVideoInput(true)\"></div>\r\n  <canvas #canvas [width]=\"width\" [height]=\"height\"></canvas>\r\n</div>\r\n",
      styles: [".webcam-wrapper{display:inline-block;position:relative;line-height:0}.webcam-wrapper video.mirrored{transform:scaleX(-1)}.webcam-wrapper canvas{display:none}.webcam-wrapper .camera-switch{background-color:#0000001a;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9UlEQVR42u2aT2hdRRTGf+cRQqghSqihdBFDkRISK2KDfzDWxHaRQHEhaINKqa1gKQhd6EZLN+IidCH+Q0oWIkVRC21BQxXRitVaSbKoJSGtYGoK2tQ/tU1jY5v0c5F54Xl7b/KSO/PyEt+3e5f75p7zzZwzZ74zUEIJJfyfYaEGllQGVAGZlENdBy6Z2cSiYFTSKkkfS/pH/nBF0kFJdUW9AiRVASeAukD8DgNrzOySrwEzng18KaDzALXuG8W3AiStAvqBisBRNg40mtlPxbYCOgvgPO4bncWW+JpVeDQXRQhIygDfA00F5r0XuNfMrgclQFI98DDQCNQA5ZFXqoCWBVp8XwHRHeEqcN7loy/NbHBesyqpQ1KfFj/6nC+ZvFaApFrgPaCZpYVvgCfNbDiRAElNwGFg+RIt/X8H2s2s9wYCJDUAR4HqJX7++RN40MwGpgmQVAH0AQ2BPz4AHHPl8nBOAqtyFWQjsA6oL4Ada81sPDv7uwImod8kvSJp9RyS8O2SXnb/DYVd2Y9VSroQ4ANXJO2WVJmixqh0kzMWwL4LkiqRtDnA4D1zmfE8j9g9AezcnAHaPcfXdbfdnPZ2Yps6+DwAvO/Z1naTdApY7Xng48BDZnY1MpMVQBuw3iXc5Tnb0wBwBPjUzP6eoezuArZ6svM0geJLkvZEYnl3nkntoqROSbckSW2Suj3ZOIangc7GPJuUtNGdFIfmMeavktoSSKiW9LMPw30Q8JqkekmjCbOZRhuclLQjgYSNxUBAj6RyZ9ATgUJpUtJTCSR8vpAEXHAyWK5BXYFIGHOlepSAloUk4NEYgyoknQhEwhFJ0e8h6VSaQeerCb5uZgdi9utxYBNwOUD93hIVXswM4INCi6K9wAszFC2DwLOBDjHbYp59karIUnRdzYy/3ClqVklaUhfwTICj7K25OqA7a4wWagVsm4Me/xzwg2cCqqONFzO7DPxSCAJi436GUBgHHguQD2oTlJ55oSzP9ybccsttSJw1szdjFOSnI/8dTCGZHwcORp4Nx7y3B1iZ8/sm4MW8/Euxg5wIsS/HaAp3zeP4/G7obRDXI4jiTIA22H7Xdc7X+S3A5lC7QBQ357aq3VAjCeSkwUfAJrfvz+R8A9ADLAtZB+TinpjC5JMA+//jwPZZnF8G7J+L8z4IWB/zbG+gIujVWfLBW/NStVMmqaG4POJRsIjix7h8IGnLQuoBbQki5sVAJHyYm7YkNaRRtXwQ8G1cHpX0iKRrgUjYno17Sf0LrQhJUkdCeHWkVITGJI0k1QeS3ikGSUzOyJUJJNznYneuOCnpTldcxa2kP3xJYqOeSDjqZG8ShJLnE8TTuMS6Iyu1BW7djZqkfo9N0QOuYJmYQddfB7RG+gLTNzqAY9FrL+5/nwEbvDdJJe3zzOrhNP3AWRqmk55t3ZcBuj3b2gb0Sbrbo/NNzk7fFzu7s/E5EiC+rrmeQU0Kx2skvRFoOx2ZzlmSdgbsw49JetvtBpk8nM64d/cGbNtJ0s7cGyJlwHeEv+t3nqnLSgPAUOSGyG3AHUxdzqoJbEcvcL+ZTeTeEapzJKxgaeOcc/7Mf06D7kFrguS0VDAMtGadv+E47DT9tcChJej8ISfpD+abgTe45uOkFi8mnQ+JBVQ+d4VXuOptjavcyot8pq86mfwk8LWZnaOEEkoooYQSSojDv8AhQNeGfe0jAAAAAElFTkSuQmCC);background-repeat:no-repeat;border-radius:5px;position:absolute;right:13px;top:10px;height:48px;width:48px;background-size:80%;cursor:pointer;background-position:center;transition:background-color .2s ease}.webcam-wrapper .camera-switch:hover{background-color:#0000002e}\n"]
    }]
  }], null, {
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    videoOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allowCameraSwitch: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    mirrorImage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    captureImageData: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    imageCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    initError: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    imageClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cameraSwitched: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    video: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['video', {
        static: true
      }]
    }],
    canvas: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['canvas', {
        static: true
      }]
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    switchCamera: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

const COMPONENTS = [WebcamComponent];

class WebcamModule {}

WebcamModule.ɵfac = function WebcamModule_Factory(t) {
  return new (t || WebcamModule)();
};

WebcamModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: WebcamModule,
  declarations: [WebcamComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
  exports: [WebcamComponent]
});
WebcamModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebcamModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [COMPONENTS],
      exports: [COMPONENTS]
    }]
  }], null, null);
})();

class WebcamInitError {
  constructor() {
    this.message = null;
    this.mediaStreamError = null;
  }

}

class WebcamMirrorProperties {}
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_molding_molding_module_ts.js.map