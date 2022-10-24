"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_molding_molding_module_ts"],{

/***/ 87294:
/*!**************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/create-molding-toolbar/create-molding-toolbar.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMoldingToolbarComponent": () => (/* binding */ CreateMoldingToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_molding_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-molding-toolbar.component.html?ngResource */ 15899);
/* harmony import */ var _create_molding_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-molding-toolbar.component.scss?ngResource */ 34085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);





let CreateMoldingToolbarComponent = class CreateMoldingToolbarComponent {
    constructor(moldingService) {
        this.moldingService = moldingService;
        this.moldingStatus$ = this.moldingService.moldingStatus$;
        this.moldingStatus$.subscribe({
            next: (moldingStatus) => {
                this.isMoldingComplete = moldingStatus.moldingStatus;
            }
        });
    }
    saveMoldingClick(print) {
        this.moldingService.saveMolding(print);
        // this.moldingService.moldingStatus.next(true);
    }
};
CreateMoldingToolbarComponent.ctorParameters = () => [
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService }
];
CreateMoldingToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-create-molding-toolbar',
        template: _create_molding_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_molding_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateMoldingToolbarComponent);



/***/ }),

/***/ 93554:
/*!**********************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-info-toolbar/molding-info-toolbar.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingInfoToolbarComponent": () => (/* binding */ MoldingInfoToolbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _molding_info_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding-info-toolbar.component.html?ngResource */ 46118);
/* harmony import */ var _molding_info_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding-info-toolbar.component.scss?ngResource */ 2084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);





let MoldingInfoToolbarComponent = class MoldingInfoToolbarComponent {
    constructor(moldingService) {
        this.moldingService = moldingService;
        this.toolStatusColor = 'warning';
        this.moldingService.moldingStatus$.subscribe({
            next: (status) => {
                if (status.toolStatus) {
                    this.toolStatusColor = 'success';
                    return;
                }
                this.toolStatusColor = 'warning';
            }
        });
    }
    noToolClick() {
        this.moldingService.setToolStatus(true);
    }
};
MoldingInfoToolbarComponent.ctorParameters = () => [
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService }
];
MoldingInfoToolbarComponent.propDecorators = {
    molding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
MoldingInfoToolbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-molding-info-toolbar',
        template: _molding_info_toolbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_molding_info_toolbar_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingInfoToolbarComponent);



/***/ }),

/***/ 61010:
/*!****************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-kit-table/molding-kit-table.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingKitTableComponent": () => (/* binding */ MoldingKitTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _molding_kit_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding-kit-table.component.html?ngResource */ 25905);
/* harmony import */ var _molding_kit_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding-kit-table.component.scss?ngResource */ 4410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);






let MoldingKitTableComponent = class MoldingKitTableComponent {
    constructor(moldingService) {
        this.moldingService = moldingService;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
        this.displayedColumns = [
            'referenceSAP',
            'idMM',
            'designationSAP',
            'peremptionMoins18',
            'aDrapAv',
            'aCuirAv',
            'commands'
        ];
    }
    /**
     * Supprime un kit de la liste de kit. Cette fonction n'a pas d'incidence tant que le moualge n'est pas sauvegardé
     *
     * @param index Index du kit dans la liste des kits
     * @memberof CreateMoldingPage
     */
    removeKitClick(index) {
        //TODO réparer le click
        this.moldingService.removeKit(index);
        // this.molding.kits.splice(index, 1);
        // this.moldingService.updateDates(this.molding);
    }
};
MoldingKitTableComponent.ctorParameters = () => [
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_2__.MoldingService }
];
MoldingKitTableComponent.propDecorators = {
    kits: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
MoldingKitTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-molding-kit-table',
        template: _molding_kit_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_molding_kit_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingKitTableComponent);



/***/ }),

/***/ 24784:
/*!****************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-materials-table/molding-materials-table.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingMaterialsTableComponent": () => (/* binding */ MoldingMaterialsTableComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _molding_materials_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding-materials-table.component.html?ngResource */ 64602);
/* harmony import */ var _molding_materials_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding-materials-table.component.scss?ngResource */ 49941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let MoldingMaterialsTableComponent = class MoldingMaterialsTableComponent {
    constructor() { }
    ngOnInit() { }
};
MoldingMaterialsTableComponent.ctorParameters = () => [];
MoldingMaterialsTableComponent.propDecorators = {
    molding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
MoldingMaterialsTableComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-molding-materials-table',
        template: _molding_materials_table_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_molding_materials_table_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingMaterialsTableComponent);



/***/ }),

/***/ 7497:
/*!**************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/nida/nida.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NidaComponent": () => (/* binding */ NidaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _nida_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nida.component.html?ngResource */ 60102);
/* harmony import */ var _nida_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nida.component.scss?ngResource */ 55542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/request.service */ 39305);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);








let NidaComponent = class NidaComponent {
    constructor(formBuilder, requestService, moldingService) {
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.moldingService = moldingService;
        this.nidaEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    ngOnInit() {
        this.nidaForm = this.formBuilder.group({
            numLot: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.batchNumberInput),
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            ref: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
            typeMaterial: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            outillageMoulage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl()
        });
        this.references$ = this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.moldingApi}additional_materials`, {
            outillageMoulage: `api/tools/${this.moldingService.molding.OT.id}`,
            page: '1',
            itemsPerPage: '50'
        });
    }
    validate() {
        this.moldingService.addNida(this.nidaForm.value);
        this.nidaEmitter.emit(this.nidaForm.value);
    }
    changeInput() {
        console.log('input change');
    }
};
NidaComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_2__.RequestService },
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_4__.MoldingService }
];
NidaComponent.propDecorators = {
    nidaEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    batchNumberInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
NidaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-nida',
        template: _nida_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_nida_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NidaComponent);



/***/ }),

/***/ 48367:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonExpiredMaterialInputComponent": () => (/* binding */ NonExpiredMaterialInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _non_expired_material_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./non-expired-material-input.component.html?ngResource */ 50842);
/* harmony import */ var _non_expired_material_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./non-expired-material-input.component.scss?ngResource */ 34752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let NonExpiredMaterialInputComponent = class NonExpiredMaterialInputComponent {
    constructor() {
        this.typeInputEv = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnDestroy() {
        this.materialObject.unsubscribe();
    }
    ngOnInit() {
        // if (Core.isCore(this.batchNumber)) {
        //   this.materialSegment.value = 'nida';
        // }
        console.log('init');
    }
    typeClick(type) {
        this.selectedType = type;
        // switch (type.target.value) {
        //   case 'densif':
        //     this.nidaIsSelected = false;
        //     this.otherIsSelected = true;
        //     break;
        //   case 'nida':
        //     this.nidaIsSelected = true;
        //     this.otherIsSelected = false;
        //     break;
        //   case 'clinquant':
        //     this.nidaIsSelected = false;
        //     this.otherIsSelected = true;
        //     break;
        // }
    }
    validate() {
        // switch
        // this.material.batchNumber = this.materialObject.value;
        this.materialObject.next(this.material);
        // console.log(this.material);
        // this.typeInputEv.emit(this.material);
    }
};
NonExpiredMaterialInputComponent.ctorParameters = () => [];
NonExpiredMaterialInputComponent.propDecorators = {
    materialObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    batchNumber: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    typeInputEv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }],
    materialSegment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['materialSegment',] }]
};
NonExpiredMaterialInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-non-expired-material-input',
        template: _non_expired_material_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_non_expired_material_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NonExpiredMaterialInputComponent);



/***/ }),

/***/ 43670:
/*!******************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/scan-molding-input/scan-molding-input.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanMoldingInputComponent": () => (/* binding */ ScanMoldingInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _scan_molding_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scan-molding-input.component.html?ngResource */ 43296);
/* harmony import */ var _scan_molding_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scan-molding-input.component.scss?ngResource */ 92460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_molding_services_scan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/molding/services/scan.service */ 13654);





let ScanMoldingInputComponent = class ScanMoldingInputComponent {
    /**
     * Creates an instance of ScanMoldingInputComponent.
     *
     * @param scanService
     * @param loadingService
     * @memberof ScanMoldingInputComponent
     */
    constructor(scanService) {
        this.scanService = scanService;
        /**
         * Emet un évènement au moulage
         *
         * @type {(EventEmitter<Kit | Core | Tool>)}
         * @memberof ScanMoldingInputComponent
         */
        this.evOnInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        scanService.focusState$.subscribe((state) => {
            if (state) {
                this.scanInput.setFocus();
            }
        });
    }
    // ngAfterViewChecked() {
    //   this.scanInput.setFocus();
    // }
    ngOnInit() {
        // this.scanService.scanInput$.subscribe(
        //   (input) => {
        //     // this.loadingService.stopLoading();
        //     // console.log(input);
        //     // this.evOnInput.emit(input);
        //     this.scanInput.value = '';
        //     setTimeout(() => {
        //       this.scanInput.setFocus();
        //     }, 300);
        //   },
        //   (error) => {
        //     // this.loadingService.stopLoading();
        //     console.error(error);
        //     this.scanInput.value = '';
        //     this.alertService.simpleAlert(
        //       'Erreur lors du scan',
        //       'L\'élement scanné ne correspond à rien de connu',
        //       'Ré-essayer ou contacter j.grangier 06.87.89.24.25'
        //     );
        //   }
        // );
    }
    /**
     * Initialisation de la page create molding
     *
     * @memberof ScanMoldingInputComponent
     */
    ngAfterViewInit() {
        // this.scanButtonText = 'SCAN INACTIF';
        // this.scanButton.color = 'danger';
        // this.scanService.scanState = false;
    }
    /**
     *Action du bouton.
     *Change l'état de la fonction "scan".
     *Si l'état est actif le focus est envoyé dans l'input
     *
     * @memberof ScanMoldingInputComponent
     */
    switchScanState() {
        this.scanService.toggleFocusOnInput();
    }
    /**
     * Actions lors de la perte de focus sur l'input
     *
     * @memberof ScanMoldingInputComponent
     */
    inputOnBlur() {
        this.scanButton.color = 'danger';
        this.scanButtonText = 'SCAN INACTIF';
        // this.scanService.scanState = false;
    }
    /**
     * Actions lors de la reception du focus sur l'input
     *
     * @memberof ScanMoldingInputComponent
     */
    inputOnFocus() {
        this.scanButton.color = 'success';
        this.scanButtonText = 'SCAN ACTIF';
    }
    /**
     * fonction lancée après l'entrée douchette.
     * Détecte l'objet d'entrée et l'emmet.
     *
     * @param inputValue entrée texte de l'input
     * @memberof ScanMoldingInputComponent
     */
    onInputChange(inputValue) {
        this.startLoading();
        this.scanService.getScanInput(inputValue)
            .subscribe(() => {
            this.stopLoading();
        }, (err) => {
            console.error(err);
            this.stopLoading();
        });
    }
    startLoading() {
        this.loading = true;
    }
    stopLoading() {
        this.scanInput.value = '';
        this.loading = false;
        // this.scanService.tofocusOnInput();
    }
};
ScanMoldingInputComponent.ctorParameters = () => [
    { type: src_app_molding_services_scan_service__WEBPACK_IMPORTED_MODULE_2__.ScanService }
];
ScanMoldingInputComponent.propDecorators = {
    scanInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['scanInput',] }],
    scanButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['scanButton',] }],
    evOnInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
ScanMoldingInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-scan-molding-input',
        template: _scan_molding_input_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_scan_molding_input_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ScanMoldingInputComponent);



/***/ }),

/***/ 80472:
/*!***************************************************************************!*\
  !*** ./src/app/molding/components/molding-menu/molding-menu.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingMenuComponent": () => (/* binding */ MoldingMenuComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _molding_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding-menu.component.html?ngResource */ 6002);
/* harmony import */ var _molding_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding-menu.component.scss?ngResource */ 40201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_molding_services_scan_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/molding/services/scan.service */ 13654);







let MoldingMenuComponent = class MoldingMenuComponent {
    constructor(router, navCtrl, scanService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.scanService = scanService;
    }
    ngAfterViewInit() {
        this.menu.open();
        this.menu.ionDidClose.subscribe(() => {
            this.scanService.focusState$.next(true);
        });
    }
    navigate(url) {
        this.navCtrl.navigateForward(url);
    }
    idMoldingInputChange() {
        if (this.inputIdMolding.value !== '') {
            this.menu.close();
            this.router.navigate([`molding/create-molding`, this.inputIdMolding.value])
                .then((isNavigated) => {
                if (isNavigated) {
                    this.inputIdMolding.value = '';
                }
            });
        }
    }
};
MoldingMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: src_app_molding_services_scan_service__WEBPACK_IMPORTED_MODULE_2__.ScanService }
];
MoldingMenuComponent.propDecorators = {
    inputIdMolding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['inputIdMolding',] }],
    menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['menu',] }]
};
MoldingMenuComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-molding-menu',
        template: _molding_menu_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_molding_menu_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingMenuComponent);



/***/ }),

/***/ 22962:
/*!********************************************************!*\
  !*** ./src/app/molding/directives/peremp.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerempDirective": () => (/* binding */ PerempDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_kit_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/kit.service */ 6015);
/* harmony import */ var _services_molding_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/molding.service */ 4038);




let PerempDirective = class PerempDirective {
    constructor(el, kitService, moldingService) {
        this.el = el;
        this.kitService = kitService;
        this.moldingService = moldingService;
    }
    ngOnInit() {
        const isPerim = this.kitService.isPerim(this.appPeremp.dateToCompare, this.moldingService.molding.moldingDay);
        const color = (isPerim) ? 'var(--ion-color-danger)' : 'dark';
        this.el.nativeElement.style.color = color;
    }
};
PerempDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef },
    { type: _services_kit_service__WEBPACK_IMPORTED_MODULE_0__.KitService },
    { type: _services_molding_service__WEBPACK_IMPORTED_MODULE_1__.MoldingService }
];
PerempDirective.propDecorators = {
    appPeremp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
PerempDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({
        selector: '[appPeremp]',
    })
], PerempDirective);



/***/ }),

/***/ 51124:
/*!**************************************************************!*\
  !*** ./src/app/molding/modules/molding-components.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingComponentsModule": () => (/* binding */ MoldingComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_create_molding_create_molding_toolbar_create_molding_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/create-molding/create-molding-toolbar/create-molding-toolbar.component */ 87294);
/* harmony import */ var _components_molding_menu_molding_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/molding-menu/molding-menu.component */ 80472);
/* harmony import */ var _molding_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./molding-directives.module */ 78810);
/* harmony import */ var _components_create_molding_scan_molding_input_scan_molding_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/create-molding/scan-molding-input/scan-molding-input.component */ 43670);
/* harmony import */ var _components_create_molding_non_expired_material_input_non_expired_material_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/create-molding/non-expired-material-input/non-expired-material-input.component */ 48367);
/* harmony import */ var _components_create_molding_nida_nida_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/create-molding/nida/nida.component */ 7497);
/* harmony import */ var _components_create_molding_molding_kit_table_molding_kit_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/create-molding/molding-kit-table/molding-kit-table.component */ 61010);
/* harmony import */ var _components_create_molding_molding_materials_table_molding_materials_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/create-molding/molding-materials-table/molding-materials-table.component */ 24784);
/* harmony import */ var _components_create_molding_molding_info_toolbar_molding_info_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/create-molding/molding-info-toolbar/molding-info-toolbar.component */ 93554);
/* harmony import */ var _pages_molding_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/molding.page */ 43643);
/* harmony import */ var _pages_create_molding_create_molding_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/create-molding/create-molding.page */ 83137);
/* harmony import */ var _pages_print_molding_sheet_print_molding_sheet_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/print-molding-sheet/print-molding-sheet.page */ 64327);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ 44466);















let MoldingComponentsModule = class MoldingComponentsModule {
};
MoldingComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__.AppSharedModule,
            _molding_directives_module__WEBPACK_IMPORTED_MODULE_2__.MoldingDirectivesModule,
        ],
        declarations: [
            _components_create_molding_scan_molding_input_scan_molding_input_component__WEBPACK_IMPORTED_MODULE_3__.ScanMoldingInputComponent,
            _components_molding_menu_molding_menu_component__WEBPACK_IMPORTED_MODULE_1__.MoldingMenuComponent,
            _components_create_molding_non_expired_material_input_non_expired_material_input_component__WEBPACK_IMPORTED_MODULE_4__.NonExpiredMaterialInputComponent,
            _components_create_molding_nida_nida_component__WEBPACK_IMPORTED_MODULE_5__.NidaComponent,
            _components_create_molding_molding_kit_table_molding_kit_table_component__WEBPACK_IMPORTED_MODULE_6__.MoldingKitTableComponent,
            _components_create_molding_molding_materials_table_molding_materials_table_component__WEBPACK_IMPORTED_MODULE_7__.MoldingMaterialsTableComponent,
            _components_create_molding_molding_info_toolbar_molding_info_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.MoldingInfoToolbarComponent,
            _components_create_molding_create_molding_toolbar_create_molding_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.CreateMoldingToolbarComponent,
            _pages_molding_page__WEBPACK_IMPORTED_MODULE_9__.MoldingPage,
            _pages_create_molding_create_molding_page__WEBPACK_IMPORTED_MODULE_10__.CreateMoldingPage,
            _pages_print_molding_sheet_print_molding_sheet_page__WEBPACK_IMPORTED_MODULE_11__.PrintMoldingSheetPage,
        ],
        exports: [
            _components_molding_menu_molding_menu_component__WEBPACK_IMPORTED_MODULE_1__.MoldingMenuComponent,
            _components_create_molding_scan_molding_input_scan_molding_input_component__WEBPACK_IMPORTED_MODULE_3__.ScanMoldingInputComponent,
            _components_create_molding_non_expired_material_input_non_expired_material_input_component__WEBPACK_IMPORTED_MODULE_4__.NonExpiredMaterialInputComponent,
            _components_create_molding_nida_nida_component__WEBPACK_IMPORTED_MODULE_5__.NidaComponent,
            _components_create_molding_molding_kit_table_molding_kit_table_component__WEBPACK_IMPORTED_MODULE_6__.MoldingKitTableComponent,
            _components_create_molding_molding_materials_table_molding_materials_table_component__WEBPACK_IMPORTED_MODULE_7__.MoldingMaterialsTableComponent,
            _components_create_molding_molding_info_toolbar_molding_info_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.MoldingInfoToolbarComponent,
            _components_create_molding_create_molding_toolbar_create_molding_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.CreateMoldingToolbarComponent,
            _pages_molding_page__WEBPACK_IMPORTED_MODULE_9__.MoldingPage,
            _pages_create_molding_create_molding_page__WEBPACK_IMPORTED_MODULE_10__.CreateMoldingPage,
            _pages_print_molding_sheet_print_molding_sheet_page__WEBPACK_IMPORTED_MODULE_11__.PrintMoldingSheetPage
        ],
    })
], MoldingComponentsModule);



/***/ }),

/***/ 78810:
/*!**************************************************************!*\
  !*** ./src/app/molding/modules/molding-directives.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingDirectivesModule": () => (/* binding */ MoldingDirectivesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _directives_peremp_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/peremp.directive */ 22962);



let MoldingDirectivesModule = class MoldingDirectivesModule {
};
MoldingDirectivesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [
            _directives_peremp_directive__WEBPACK_IMPORTED_MODULE_0__.PerempDirective
        ],
        exports: [
            _directives_peremp_directive__WEBPACK_IMPORTED_MODULE_0__.PerempDirective,
        ]
    })
], MoldingDirectivesModule);



/***/ }),

/***/ 95073:
/*!************************************************************!*\
  !*** ./src/app/molding/modules/molding-services.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingServicesModule": () => (/* binding */ MoldingServicesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_molding_services_scan_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/molding/services/scan.service */ 13654);
/* harmony import */ var src_app_tooling_services_tool_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tooling/services/tool.service */ 92644);
/* harmony import */ var _services_kit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/kit.service */ 6015);
/* harmony import */ var _services_modal_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/modal-material.service */ 49640);
/* harmony import */ var _services_molding_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/molding.service */ 4038);
/* harmony import */ var _services_other_materials_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/other-materials.service */ 26702);








let MoldingServicesModule = class MoldingServicesModule {
};
MoldingServicesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        providers: [
            src_app_molding_services_scan_service__WEBPACK_IMPORTED_MODULE_0__.ScanService,
            _services_kit_service__WEBPACK_IMPORTED_MODULE_2__.KitService,
            _services_molding_service__WEBPACK_IMPORTED_MODULE_4__.MoldingService,
            src_app_tooling_services_tool_service__WEBPACK_IMPORTED_MODULE_1__.ToolService,
            _services_modal_material_service__WEBPACK_IMPORTED_MODULE_3__.ModalMaterialService,
            _services_other_materials_service__WEBPACK_IMPORTED_MODULE_5__.OtherMaterialsService,
        ]
    })
], MoldingServicesModule);



/***/ }),

/***/ 91295:
/*!*******************************************!*\
  !*** ./src/app/molding/molding.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppMoldingModule": () => (/* binding */ AppMoldingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/users/auth.guard */ 38555);
/* harmony import */ var _modules_molding_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/molding-components.module */ 51124);
/* harmony import */ var _modules_molding_directives_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/molding-directives.module */ 78810);
/* harmony import */ var _modules_molding_services_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/molding-services.module */ 95073);
/* harmony import */ var _pages_create_molding_create_molding_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/create-molding/create-molding.page */ 83137);
/* harmony import */ var _pages_molding_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/molding.page */ 43643);
/* harmony import */ var _pages_print_molding_sheet_print_molding_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/print-molding-sheet/print-molding-sheet.page */ 64327);










const routes = [
    {
        path: '',
        canActivate: [src_app_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        component: _pages_molding_page__WEBPACK_IMPORTED_MODULE_5__.MoldingPage,
        children: [
            {
                path: 'print-molding-sheet/:id',
                canActivate: [src_app_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                component: _pages_print_molding_sheet_print_molding_sheet_page__WEBPACK_IMPORTED_MODULE_6__.PrintMoldingSheetPage
            },
            {
                path: 'print-molding-sheet',
                canActivate: [src_app_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                component: _pages_print_molding_sheet_print_molding_sheet_page__WEBPACK_IMPORTED_MODULE_6__.PrintMoldingSheetPage
            },
            {
                path: 'create-molding',
                canActivate: [src_app_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                component: _pages_create_molding_create_molding_page__WEBPACK_IMPORTED_MODULE_4__.CreateMoldingPage,
            },
            {
                path: 'create-molding/:id',
                canActivate: [src_app_core_services_users_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
                component: _pages_create_molding_create_molding_page__WEBPACK_IMPORTED_MODULE_4__.CreateMoldingPage,
            },
            // {
            //   path: '**',
            //   redirectTo: 'home'
            // }
        ]
    }
];
let AppMoldingModule = class AppMoldingModule {
};
AppMoldingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes),
            _modules_molding_directives_module__WEBPACK_IMPORTED_MODULE_2__.MoldingDirectivesModule,
            _modules_molding_components_module__WEBPACK_IMPORTED_MODULE_1__.MoldingComponentsModule,
            _modules_molding_services_module__WEBPACK_IMPORTED_MODULE_3__.MoldingServicesModule,
        ]
    })
], AppMoldingModule);



/***/ }),

/***/ 83137:
/*!*********************************************************************!*\
  !*** ./src/app/molding/pages/create-molding/create-molding.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMoldingPage": () => (/* binding */ CreateMoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _create_molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-molding.page.html?ngResource */ 80019);
/* harmony import */ var _create_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-molding.page.scss?ngResource */ 46801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_interfaces_molding_molding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_interfaces/molding/molding */ 97729);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);
/* harmony import */ var src_app_core_services_users_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/users/role.guard */ 55786);










let CreateMoldingPage = class CreateMoldingPage {
    constructor(moldingService, activatedRoute, roleGuard) {
        this.moldingService = moldingService;
        this.activatedRoute = activatedRoute;
        this.roleGuard = roleGuard;
        this.expanded = false;
        this.isAdmin = false;
        this.molding$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.molding$ = this.moldingService.molding$;
    }
    ionViewWillEnter() {
        console.log('enter create molding');
        // const pageParam: PageParams = { title: 'MOULAGE', visible: true };
        this.moldingService.molding = new src_app_interfaces_molding_molding__WEBPACK_IMPORTED_MODULE_2__.Molding();
        this.moldingService.molding$.next();
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            // pageParam.title = `MODIFICATION MOULAGE n°${id}`;
            this.loadMoldingData(id);
        }
    }
    ngOnInit() {
        this.isAdmin = this.roleGuard.isRole(['ROLE_ADMIN']);
    }
    /**
     * Charge le moulage dans la page
     *
     * @private
     * @param moldingId
     * @memberof CreateMoldingPage
     */
    loadMoldingData(moldingId) {
        this.moldingService.loadMolding(moldingId);
    }
};
CreateMoldingPage.ctorParameters = () => [
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_3__.MoldingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_core_services_users_role_guard__WEBPACK_IMPORTED_MODULE_4__.RoleGuard }
];
CreateMoldingPage.propDecorators = {
    accordion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion,] }],
    kitPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['kitPanel',] }]
};
CreateMoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-create-molding',
        template: _create_molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateMoldingPage);



/***/ }),

/***/ 43643:
/*!***********************************************!*\
  !*** ./src/app/molding/pages/molding.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingPage": () => (/* binding */ MoldingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./molding.page.html?ngResource */ 5925);
/* harmony import */ var _molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./molding.page.scss?ngResource */ 13085);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MoldingPage = class MoldingPage {
};
MoldingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-molding',
        template: _molding_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_molding_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MoldingPage);



/***/ }),

/***/ 64327:
/*!*******************************************************************************!*\
  !*** ./src/app/molding/pages/print-molding-sheet/print-molding-sheet.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintMoldingSheetPage": () => (/* binding */ PrintMoldingSheetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _print_molding_sheet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-molding-sheet.page.html?ngResource */ 84664);
/* harmony import */ var _print_molding_sheet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-molding-sheet.page.scss?ngResource */ 1847);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsbarcode */ 12081);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var src_app_molding_services_kit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/molding/services/kit.service */ 6015);
/* harmony import */ var src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/molding/services/molding.service */ 4038);









let PrintMoldingSheetPage = class PrintMoldingSheetPage {
    constructor(activatedRoute, moldingService, loadingService, router, kitService) {
        this.activatedRoute = activatedRoute;
        this.moldingService = moldingService;
        this.loadingService = loadingService;
        this.router = router;
        this.kitService = kitService;
        this.displayedColumns = ['idMM', 'referenceSAP', 'designationSAP', 'peremptionMoins18', 'aDrapAv', 'aCuirAv'];
    }
    ngOnInit() {
        this.loadMoldingSheet();
    }
    loadMoldingSheet() {
        this.loadingService.startLoading('Patienter pendant le chargement du moulage');
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.moldingService.getMoldingById(id)
            .subscribe((molding) => {
            this.molding = molding;
            this.dataSource = this.molding.kits;
            jsbarcode__WEBPACK_IMPORTED_MODULE_2__('#barcode', this.molding.id.toString(), {
                height: 20,
                displayValue: false,
            });
            this.loadingService.stopLoading();
        });
    }
    navigateHome() {
        this.router.navigate(['/home']);
    }
};
PrintMoldingSheetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_molding_services_molding_service__WEBPACK_IMPORTED_MODULE_5__.MoldingService },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_3__.LoadingService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_molding_services_kit_service__WEBPACK_IMPORTED_MODULE_4__.KitService }
];
PrintMoldingSheetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-print-molding-sheet',
        template: _print_molding_sheet_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_print_molding_sheet_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrintMoldingSheetPage);



/***/ }),

/***/ 49640:
/*!************************************************************!*\
  !*** ./src/app/molding/services/modal-material.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalMaterialService": () => (/* binding */ ModalMaterialService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_molding_components_create_molding_non_expired_material_input_non_expired_material_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component */ 48367);





let ModalMaterialService = class ModalMaterialService {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    createModal(scanInputValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            this.materialObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
            const modalMaterial = yield this.modalCtrl.create({
                component: src_app_molding_components_create_molding_non_expired_material_input_non_expired_material_input_component__WEBPACK_IMPORTED_MODULE_0__.NonExpiredMaterialInputComponent,
                componentProps: { materialObject: this.materialObject, batchNumber: scanInputValue },
            });
            yield modalMaterial.present();
            this.materialObject.subscribe(() => {
                this.modalCtrl.dismiss();
                this.materialObject.unsubscribe();
            });
        });
    }
};
ModalMaterialService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
ModalMaterialService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ModalMaterialService);



/***/ }),

/***/ 13654:
/*!**************************************************!*\
  !*** ./src/app/molding/services/scan.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScanService": () => (/* binding */ ScanService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 24383);
/* harmony import */ var src_app_molding_services_core_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/molding/services/core.service */ 32961);
/* harmony import */ var src_app_molding_services_kit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/molding/services/kit.service */ 6015);
/* harmony import */ var src_app_tooling_services_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/tooling/services/tool.service */ 92644);
/* harmony import */ var _molding_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./molding.service */ 4038);
/* harmony import */ var _modal_material_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-material.service */ 49640);








const REGEXKIT = new RegExp('^([0-9]){8}-[0-9]$');
const REGEXPROG = new RegExp('^PR[A-Z]([0-9]){5}$');
const REGEXSAPTOOLNUMBER = new RegExp('^OT([0-9]){6}$');
const REGEXNIDAHEXCEL = new RegExp('^]C201');
let ScanService = class ScanService {
    constructor(kitService, toolService, coreService, moldingService, materialModalService) {
        this.kitService = kitService;
        this.toolService = toolService;
        this.coreService = coreService;
        this.moldingService = moldingService;
        this.materialModalService = materialModalService;
        this.focusState$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.scanInput$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.scanOperations$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.scanState = false;
    }
    /**
     * Flux du traitement du scan
     * Reste à faire : Développer la partie Core, densification, ...
     *
     * @param scanInputValue
     * @return retourne un objet Kit ou Tool
     * @memberof ScanService
     */
    getScanInput(scanInputValue) {
        const typeInput = this.getTypeInput(scanInputValue);
        // let obs: Observable<Kit | Tool | AdditionalMaterial | undefined>;
        console.log(typeInput);
        switch (typeInput) {
            case 'kit':
                return this.sendKit(scanInputValue);
            case 'tool':
                return this.sendTool(scanInputValue);
            case 'prog':
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
            case '':
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.materialModalService.createModal(scanInputValue));
            // this.materialModalService.materialObject;
            // obs = this.sendCore(scanInputValue);
        }
        // obs.subscribe(
        //   (response) => this.scanInput$.next(response),
        //   (err) => this.scanInput$.error(err)
        //   );
    }
    getTypeInput(inputValue) {
        if (inputValue.match(REGEXKIT)) {
            return 'kit';
        }
        else if (inputValue.match(REGEXSAPTOOLNUMBER)) {
            return 'tool';
        }
        else if (inputValue.match(REGEXNIDAHEXCEL)) {
            return 'core';
        }
        else if (inputValue.match(REGEXPROG)) {
            return 'prog';
        }
        return '';
    }
    toggleFocusOnInput() {
        this.scanState = !this.scanState;
        this.focusState$.next(this.scanState);
    }
    sendKit(kitInput) {
        const kit$ = this.kitService.getKitById(kitInput);
        kit$.subscribe((kit) => {
            console.log(kit);
            this.moldingService.addKit(kit);
            this.scanOperations$.next();
            // return of(null);
        }, (err) => {
            //TODO renvoyer l'erreur à l'utilisateur
            console.error(err);
            this.scanOperations$.next();
        });
        return this.scanOperations$;
        // return kit$;
    }
    sendTool(toolInput) {
        if (toolInput.startsWith('OT0')) {
            toolInput = toolInput.substr(3);
        }
        this.toolService.getToolByToolNumber(toolInput)
            .subscribe((responseTool) => {
            this.moldingService.addTool(responseTool);
            this.scanOperations$.next();
        }, (err) => {
            //TODO renvoyer l'erreur à l'utilisateur
            console.error(err);
            this.scanOperations$.next();
        });
        return this.scanOperations$;
    }
    sendCore(coreInput) {
        return this.coreService.getCoreByBatchNumber(coreInput);
    }
};
ScanService.ctorParameters = () => [
    { type: src_app_molding_services_kit_service__WEBPACK_IMPORTED_MODULE_1__.KitService },
    { type: src_app_tooling_services_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService },
    { type: src_app_molding_services_core_service__WEBPACK_IMPORTED_MODULE_0__.CoreService },
    { type: _molding_service__WEBPACK_IMPORTED_MODULE_3__.MoldingService },
    { type: _modal_material_service__WEBPACK_IMPORTED_MODULE_4__.ModalMaterialService }
];
ScanService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)()
], ScanService);



/***/ }),

/***/ 12081:
/*!*************************************************!*\
  !*** ./node_modules/jsbarcode/bin/JsBarcode.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _barcodes = __webpack_require__(/*! ./barcodes/ */ 55019);

var _barcodes2 = _interopRequireDefault(_barcodes);

var _merge = __webpack_require__(/*! ./help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

var _linearizeEncodings = __webpack_require__(/*! ./help/linearizeEncodings.js */ 20082);

var _linearizeEncodings2 = _interopRequireDefault(_linearizeEncodings);

var _fixOptions = __webpack_require__(/*! ./help/fixOptions.js */ 74782);

var _fixOptions2 = _interopRequireDefault(_fixOptions);

var _getRenderProperties = __webpack_require__(/*! ./help/getRenderProperties.js */ 66740);

var _getRenderProperties2 = _interopRequireDefault(_getRenderProperties);

var _optionsFromStrings = __webpack_require__(/*! ./help/optionsFromStrings.js */ 90799);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _ErrorHandler = __webpack_require__(/*! ./exceptions/ErrorHandler.js */ 38988);

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

var _exceptions = __webpack_require__(/*! ./exceptions/exceptions.js */ 93662);

var _defaults = __webpack_require__(/*! ./options/defaults.js */ 50410);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // The protype of the object returned from the JsBarcode() call
// Help functions


var API = function API() {}; // The first call of the library API
// Will return an object with all barcodes calls and the data that is used
// by the renderers
// Default values
// Exceptions
// Import all the barcodes


var JsBarcode = function JsBarcode(element, text, options) {
  var api = new API();

  if (typeof element === "undefined") {
    throw Error("No element to render on was provided.");
  } // Variables that will be pased through the API calls


  api._renderProperties = (0, _getRenderProperties2.default)(element);
  api._encodings = [];
  api._options = _defaults2.default;
  api._errorHandler = new _ErrorHandler2.default(api); // If text is set, use the simple syntax (render the barcode directly)

  if (typeof text !== "undefined") {
    options = options || {};

    if (!options.format) {
      options.format = autoSelectBarcode();
    }

    api.options(options)[options.format](text, options).render();
  }

  return api;
}; // To make tests work TODO: remove


JsBarcode.getModule = function (name) {
  return _barcodes2.default[name];
}; // Register all barcodes


for (var name in _barcodes2.default) {
  if (_barcodes2.default.hasOwnProperty(name)) {
    // Security check if the propery is a prototype property
    registerBarcode(_barcodes2.default, name);
  }
}

function registerBarcode(barcodes, name) {
  API.prototype[name] = API.prototype[name.toUpperCase()] = API.prototype[name.toLowerCase()] = function (text, options) {
    var api = this;
    return api._errorHandler.wrapBarcodeCall(function () {
      // Ensure text is options.text
      options.text = typeof options.text === 'undefined' ? undefined : '' + options.text;
      var newOptions = (0, _merge2.default)(api._options, options);
      newOptions = (0, _optionsFromStrings2.default)(newOptions);
      var Encoder = barcodes[name];
      var encoded = encode(text, Encoder, newOptions);

      api._encodings.push(encoded);

      return api;
    });
  };
} // encode() handles the Encoder call and builds the binary string to be rendered


function encode(text, Encoder, options) {
  // Ensure that text is a string
  text = "" + text;
  var encoder = new Encoder(text, options); // If the input is not valid for the encoder, throw error.
  // If the valid callback option is set, call it instead of throwing error

  if (!encoder.valid()) {
    throw new _exceptions.InvalidInputException(encoder.constructor.name, text);
  } // Make a request for the binary data (and other infromation) that should be rendered


  var encoded = encoder.encode(); // Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
  // Convert to [1-1, 1-2, 2, 3-1, 3-2]

  encoded = (0, _linearizeEncodings2.default)(encoded); // Merge

  for (var i = 0; i < encoded.length; i++) {
    encoded[i].options = (0, _merge2.default)(options, encoded[i].options);
  }

  return encoded;
}

function autoSelectBarcode() {
  // If CODE128 exists. Use it
  if (_barcodes2.default["CODE128"]) {
    return "CODE128";
  } // Else, take the first (probably only) barcode


  return Object.keys(_barcodes2.default)[0];
} // Sets global encoder options
// Added to the api by the JsBarcode function


API.prototype.options = function (options) {
  this._options = (0, _merge2.default)(this._options, options);
  return this;
}; // Will create a blank space (usually in between barcodes)


API.prototype.blank = function (size) {
  var zeroes = new Array(size + 1).join("0");

  this._encodings.push({
    data: zeroes
  });

  return this;
}; // Initialize JsBarcode on all HTML elements defined.


API.prototype.init = function () {
  // Should do nothing if no elements where found
  if (!this._renderProperties) {
    return;
  } // Make sure renderProperies is an array


  if (!Array.isArray(this._renderProperties)) {
    this._renderProperties = [this._renderProperties];
  }

  var renderProperty;

  for (var i in this._renderProperties) {
    renderProperty = this._renderProperties[i];
    var options = (0, _merge2.default)(this._options, renderProperty.options);

    if (options.format == "auto") {
      options.format = autoSelectBarcode();
    }

    this._errorHandler.wrapBarcodeCall(function () {
      var text = options.value;

      var Encoder = _barcodes2.default[options.format.toUpperCase()];

      var encoded = encode(text, Encoder, options);
      render(renderProperty, encoded, options);
    });
  }
}; // The render API call. Calls the real render function.


API.prototype.render = function () {
  if (!this._renderProperties) {
    throw new _exceptions.NoElementException();
  }

  if (Array.isArray(this._renderProperties)) {
    for (var i = 0; i < this._renderProperties.length; i++) {
      render(this._renderProperties[i], this._encodings, this._options);
    }
  } else {
    render(this._renderProperties, this._encodings, this._options);
  }

  return this;
};

API.prototype._defaults = _defaults2.default; // Prepares the encodings and calls the renderer

function render(renderProperties, encodings, options) {
  encodings = (0, _linearizeEncodings2.default)(encodings);

  for (var i = 0; i < encodings.length; i++) {
    encodings[i].options = (0, _merge2.default)(options, encodings[i].options);
    (0, _fixOptions2.default)(encodings[i].options);
  }

  (0, _fixOptions2.default)(options);
  var Renderer = renderProperties.renderer;
  var renderer = new Renderer(renderProperties.element, encodings, options);
  renderer.render();

  if (renderProperties.afterRender) {
    renderProperties.afterRender();
  }
} // Export to browser


if (typeof window !== "undefined") {
  window.JsBarcode = JsBarcode;
} // Export to jQuery

/*global jQuery */


if (typeof jQuery !== 'undefined') {
  jQuery.fn.JsBarcode = function (content, options) {
    var elementArray = [];
    jQuery(this).each(function () {
      elementArray.push(this);
    });
    return JsBarcode(elementArray, content, options);
  };
} // Export to commonJS


module.exports = JsBarcode;

/***/ }),

/***/ 4995:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/Barcode.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Barcode = function Barcode(data, options) {
  _classCallCheck(this, Barcode);

  this.data = data;
  this.text = options.text || data;
  this.options = options;
};

exports["default"] = Barcode;

/***/ }),

/***/ 91724:
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // This is the master class,
// it does require the start code to be included in the string


var CODE128 = function (_Barcode) {
  _inherits(CODE128, _Barcode);

  function CODE128(data, options) {
    _classCallCheck(this, CODE128); // Get array of ascii codes from data


    var _this = _possibleConstructorReturn(this, (CODE128.__proto__ || Object.getPrototypeOf(CODE128)).call(this, data.substring(1), options));

    _this.bytes = data.split('').map(function (char) {
      return char.charCodeAt(0);
    });
    return _this;
  }

  _createClass(CODE128, [{
    key: 'valid',
    value: function valid() {
      // ASCII value ranges 0-127, 200-211
      return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
    } // The public encoding function

  }, {
    key: 'encode',
    value: function encode() {
      var bytes = this.bytes; // Remove the start code from the bytes and set its index

      var startIndex = bytes.shift() - 105; // Get start set by index

      var startSet = _constants.SET_BY_CODE[startIndex];

      if (startSet === undefined) {
        throw new RangeError('The encoding does not start with a start character.');
      }

      if (this.shouldEncodeAsEan128() === true) {
        bytes.unshift(_constants.FNC1);
      } // Start encode with the right type


      var encodingResult = CODE128.next(bytes, 1, startSet);
      return {
        text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, '') : this.text,
        data: // Add the start bits
        CODE128.getBar(startIndex) + // Add the encoded bits
        encodingResult.result + // Add the checksum
        CODE128.getBar((encodingResult.checksum + startIndex) % _constants.MODULO) + // Add the end bits
        CODE128.getBar(_constants.STOP)
      };
    } // GS1-128/EAN-128

  }, {
    key: 'shouldEncodeAsEan128',
    value: function shouldEncodeAsEan128() {
      var isEAN128 = this.options.ean128 || false;

      if (typeof isEAN128 === 'string') {
        isEAN128 = isEAN128.toLowerCase() === 'true';
      }

      return isEAN128;
    } // Get a bar symbol by index

  }], [{
    key: 'getBar',
    value: function getBar(index) {
      return _constants.BARS[index] ? _constants.BARS[index].toString() : '';
    } // Correct an index by a set and shift it from the bytes array

  }, {
    key: 'correctIndex',
    value: function correctIndex(bytes, set) {
      if (set === _constants.SET_A) {
        var charCode = bytes.shift();
        return charCode < 32 ? charCode + 64 : charCode - 32;
      } else if (set === _constants.SET_B) {
        return bytes.shift() - 32;
      } else {
        return (bytes.shift() - 48) * 10 + bytes.shift() - 48;
      }
    }
  }, {
    key: 'next',
    value: function next(bytes, pos, set) {
      if (!bytes.length) {
        return {
          result: '',
          checksum: 0
        };
      }

      var nextCode = void 0,
          index = void 0; // Special characters

      if (bytes[0] >= 200) {
        index = bytes.shift() - 105;
        var nextSet = _constants.SWAP[index]; // Swap to other set

        if (nextSet !== undefined) {
          nextCode = CODE128.next(bytes, pos + 1, nextSet);
        } // Continue on current set but encode a special character
        else {
          // Shift
          if ((set === _constants.SET_A || set === _constants.SET_B) && index === _constants.SHIFT) {
            // Convert the next character so that is encoded correctly
            bytes[0] = set === _constants.SET_A ? bytes[0] > 95 ? bytes[0] - 96 : bytes[0] : bytes[0] < 32 ? bytes[0] + 96 : bytes[0];
          }

          nextCode = CODE128.next(bytes, pos + 1, set);
        }
      } // Continue encoding
      else {
        index = CODE128.correctIndex(bytes, set);
        nextCode = CODE128.next(bytes, pos + 1, set);
      } // Get the correct binary encoding and calculate the weight


      var enc = CODE128.getBar(index);
      var weight = index * pos;
      return {
        result: enc + nextCode.result,
        checksum: weight + nextCode.checksum
      };
    }
  }]);

  return CODE128;
}(_Barcode3.default);

exports["default"] = CODE128;

/***/ }),

/***/ 46680:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128A.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128A = function (_CODE) {
  _inherits(CODE128A, _CODE);

  function CODE128A(string, options) {
    _classCallCheck(this, CODE128A);

    return _possibleConstructorReturn(this, (CODE128A.__proto__ || Object.getPrototypeOf(CODE128A)).call(this, _constants.A_START_CHAR + string, options));
  }

  _createClass(CODE128A, [{
    key: 'valid',
    value: function valid() {
      return new RegExp('^' + _constants.A_CHARS + '+$').test(this.data);
    }
  }]);

  return CODE128A;
}(_CODE3.default);

exports["default"] = CODE128A;

/***/ }),

/***/ 77675:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128B.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128B = function (_CODE) {
  _inherits(CODE128B, _CODE);

  function CODE128B(string, options) {
    _classCallCheck(this, CODE128B);

    return _possibleConstructorReturn(this, (CODE128B.__proto__ || Object.getPrototypeOf(CODE128B)).call(this, _constants.B_START_CHAR + string, options));
  }

  _createClass(CODE128B, [{
    key: 'valid',
    value: function valid() {
      return new RegExp('^' + _constants.B_CHARS + '+$').test(this.data);
    }
  }]);

  return CODE128B;
}(_CODE3.default);

exports["default"] = CODE128B;

/***/ }),

/***/ 32402:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128C.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _CODE2 = __webpack_require__(/*! ./CODE128.js */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _constants = __webpack_require__(/*! ./constants */ 91558);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128C = function (_CODE) {
  _inherits(CODE128C, _CODE);

  function CODE128C(string, options) {
    _classCallCheck(this, CODE128C);

    return _possibleConstructorReturn(this, (CODE128C.__proto__ || Object.getPrototypeOf(CODE128C)).call(this, _constants.C_START_CHAR + string, options));
  }

  _createClass(CODE128C, [{
    key: 'valid',
    value: function valid() {
      return new RegExp('^' + _constants.C_CHARS + '+$').test(this.data);
    }
  }]);

  return CODE128C;
}(_CODE3.default);

exports["default"] = CODE128C;

/***/ }),

/***/ 72989:
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/CODE128_AUTO.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _CODE2 = __webpack_require__(/*! ./CODE128 */ 91724);

var _CODE3 = _interopRequireDefault(_CODE2);

var _auto = __webpack_require__(/*! ./auto */ 25996);

var _auto2 = _interopRequireDefault(_auto);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CODE128AUTO = function (_CODE) {
  _inherits(CODE128AUTO, _CODE);

  function CODE128AUTO(data, options) {
    _classCallCheck(this, CODE128AUTO); // ASCII value ranges 0-127, 200-211


    if (/^[\x00-\x7F\xC8-\xD3]+$/.test(data)) {
      var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, (0, _auto2.default)(data), options));
    } else {
      var _this = _possibleConstructorReturn(this, (CODE128AUTO.__proto__ || Object.getPrototypeOf(CODE128AUTO)).call(this, data, options));
    }

    return _possibleConstructorReturn(_this);
  }

  return CODE128AUTO;
}(_CODE3.default);

exports["default"] = CODE128AUTO;

/***/ }),

/***/ 25996:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/auto.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _constants = __webpack_require__(/*! ./constants */ 91558); // Match Set functions


var matchSetALength = function matchSetALength(string) {
  return string.match(new RegExp('^' + _constants.A_CHARS + '*'))[0].length;
};

var matchSetBLength = function matchSetBLength(string) {
  return string.match(new RegExp('^' + _constants.B_CHARS + '*'))[0].length;
};

var matchSetC = function matchSetC(string) {
  return string.match(new RegExp('^' + _constants.C_CHARS + '*'))[0];
}; // CODE128A or CODE128B


function autoSelectFromAB(string, isA) {
  var ranges = isA ? _constants.A_CHARS : _constants.B_CHARS;
  var untilC = string.match(new RegExp('^(' + ranges + '+?)(([0-9]{2}){2,})([^0-9]|$)'));

  if (untilC) {
    return untilC[1] + String.fromCharCode(204) + autoSelectFromC(string.substring(untilC[1].length));
  }

  var chars = string.match(new RegExp('^' + ranges + '+'))[0];

  if (chars.length === string.length) {
    return string;
  }

  return chars + String.fromCharCode(isA ? 205 : 206) + autoSelectFromAB(string.substring(chars.length), !isA);
} // CODE128C


function autoSelectFromC(string) {
  var cMatch = matchSetC(string);
  var length = cMatch.length;

  if (length === string.length) {
    return string;
  }

  string = string.substring(length); // Select A/B depending on the longest match

  var isA = matchSetALength(string) >= matchSetBLength(string);
  return cMatch + String.fromCharCode(isA ? 206 : 205) + autoSelectFromAB(string, isA);
} // Detect Code Set (A, B or C) and format the string


exports["default"] = function (string) {
  var newString = void 0;
  var cLength = matchSetC(string).length; // Select 128C if the string start with enough digits

  if (cLength >= 2) {
    newString = _constants.C_START_CHAR + autoSelectFromC(string);
  } else {
    // Select A/B depending on the longest match
    var isA = matchSetALength(string) > matchSetBLength(string);
    newString = (isA ? _constants.A_START_CHAR : _constants.B_START_CHAR) + autoSelectFromAB(string, isA);
  }

  return newString.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, // Any sequence between 205 and 206 characters
  function (match, char) {
    return String.fromCharCode(203) + char;
  });
};

/***/ }),

/***/ 91558:
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _SET_BY_CODE;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
} // constants for internal usage


var SET_A = exports.SET_A = 0;
var SET_B = exports.SET_B = 1;
var SET_C = exports.SET_C = 2; // Special characters

var SHIFT = exports.SHIFT = 98;
var START_A = exports.START_A = 103;
var START_B = exports.START_B = 104;
var START_C = exports.START_C = 105;
var MODULO = exports.MODULO = 103;
var STOP = exports.STOP = 106;
var FNC1 = exports.FNC1 = 207; // Get set by start code

var SET_BY_CODE = exports.SET_BY_CODE = (_SET_BY_CODE = {}, _defineProperty(_SET_BY_CODE, START_A, SET_A), _defineProperty(_SET_BY_CODE, START_B, SET_B), _defineProperty(_SET_BY_CODE, START_C, SET_C), _SET_BY_CODE); // Get next set by code

var SWAP = exports.SWAP = {
  101: SET_A,
  100: SET_B,
  99: SET_C
};
var A_START_CHAR = exports.A_START_CHAR = String.fromCharCode(208); // START_A + 105

var B_START_CHAR = exports.B_START_CHAR = String.fromCharCode(209); // START_B + 105

var C_START_CHAR = exports.C_START_CHAR = String.fromCharCode(210); // START_C + 105
// 128A (Code Set A)
// ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4

var A_CHARS = exports.A_CHARS = "[\x00-\x5F\xC8-\xCF]"; // 128B (Code Set B)
// ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4

var B_CHARS = exports.B_CHARS = "[\x20-\x7F\xC8-\xCF]"; // 128C (Code Set C)
// 00–99 (encodes two digits with a single code point) and FNC1

var C_CHARS = exports.C_CHARS = "(\xCF*[0-9]{2}\xCF*)"; // CODE128 includes 107 symbols:
// 103 data symbols, 3 start symbols (A, B and C), and 1 stop symbol (the last one)
// Each symbol consist of three black bars (1) and three white spaces (0).

var BARS = exports.BARS = [11011001100, 11001101100, 11001100110, 10010011000, 10010001100, 10001001100, 10011001000, 10011000100, 10001100100, 11001001000, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011000, 11011000110, 11000110110, 10100011000, 10001011000, 10001000110, 10110001000, 10001101000, 10001100010, 11010001000, 11000101000, 11000100010, 10110111000, 10110001110, 10001101110, 10111011000, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101000, 11011100010, 11011101110, 11101011000, 11101000110, 11100010110, 11101101000, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 10100110000, 10100001100, 10010110000, 10010000110, 10000101100, 10000100110, 10110010000, 10110000100, 10011010000, 10011000010, 10000110100, 10000110010, 11000010010, 11001010000, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111000, 10100011110, 10001011110, 10111101000, 10111100010, 11110101000, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 11010010000, 11010011100, 1100011101011];

/***/ }),

/***/ 81350:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE128/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE128C = exports.CODE128B = exports.CODE128A = exports.CODE128 = undefined;

var _CODE128_AUTO = __webpack_require__(/*! ./CODE128_AUTO.js */ 72989);

var _CODE128_AUTO2 = _interopRequireDefault(_CODE128_AUTO);

var _CODE128A = __webpack_require__(/*! ./CODE128A.js */ 46680);

var _CODE128A2 = _interopRequireDefault(_CODE128A);

var _CODE128B = __webpack_require__(/*! ./CODE128B.js */ 77675);

var _CODE128B2 = _interopRequireDefault(_CODE128B);

var _CODE128C = __webpack_require__(/*! ./CODE128C.js */ 32402);

var _CODE128C2 = _interopRequireDefault(_CODE128C);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.CODE128 = _CODE128_AUTO2.default;
exports.CODE128A = _CODE128A2.default;
exports.CODE128B = _CODE128B2.default;
exports.CODE128C = _CODE128C2.default;

/***/ }),

/***/ 53532:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/CODE39/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CODE39 = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/Code_39#Encoding


var CODE39 = function (_Barcode) {
  _inherits(CODE39, _Barcode);

  function CODE39(data, options) {
    _classCallCheck(this, CODE39);

    data = data.toUpperCase(); // Calculate mod43 checksum if enabled

    if (options.mod43) {
      data += getCharacter(mod43checksum(data));
    }

    return _possibleConstructorReturn(this, (CODE39.__proto__ || Object.getPrototypeOf(CODE39)).call(this, data, options));
  }

  _createClass(CODE39, [{
    key: "encode",
    value: function encode() {
      // First character is always a *
      var result = getEncoding("*"); // Take every character and add the binary representation to the result

      for (var i = 0; i < this.data.length; i++) {
        result += getEncoding(this.data[i]) + "0";
      } // Last character is always a *


      result += getEncoding("*");
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
    }
  }]);

  return CODE39;
}(_Barcode3.default); // All characters. The position in the array is the (checksum) value


var characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"]; // The decimal representation of the characters, is converted to the
// corresponding binary with the getEncoding function

var encodings = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770]; // Get the binary representation of a character by converting the encodings
// from decimal to binary

function getEncoding(character) {
  return getBinary(characterValue(character));
}

function getBinary(characterValue) {
  return encodings[characterValue].toString(2);
}

function getCharacter(characterValue) {
  return characters[characterValue];
}

function characterValue(character) {
  return characters.indexOf(character);
}

function mod43checksum(data) {
  var checksum = 0;

  for (var i = 0; i < data.length; i++) {
    checksum += characterValue(data[i]);
  }

  checksum = checksum % 43;
  return checksum;
}

exports.CODE39 = CODE39;

/***/ }),

/***/ 67886:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Base class for EAN8 & EAN13


var EAN = function (_Barcode) {
  _inherits(EAN, _Barcode);

  function EAN(data, options) {
    _classCallCheck(this, EAN); // Make sure the font is not bigger than the space between the guard bars


    var _this = _possibleConstructorReturn(this, (EAN.__proto__ || Object.getPrototypeOf(EAN)).call(this, data, options));

    _this.fontSize = !options.flat && options.fontSize > options.width * 10 ? options.width * 10 : options.fontSize; // Make the guard bars go down half the way of the text

    _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
    return _this;
  }

  _createClass(EAN, [{
    key: 'encode',
    value: function encode() {
      return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
    }
  }, {
    key: 'leftText',
    value: function leftText(from, to) {
      return this.text.substr(from, to);
    }
  }, {
    key: 'leftEncode',
    value: function leftEncode(data, structure) {
      return (0, _encoder2.default)(data, structure);
    }
  }, {
    key: 'rightText',
    value: function rightText(from, to) {
      return this.text.substr(from, to);
    }
  }, {
    key: 'rightEncode',
    value: function rightEncode(data, structure) {
      return (0, _encoder2.default)(data, structure);
    }
  }, {
    key: 'encodeGuarded',
    value: function encodeGuarded() {
      var textOptions = {
        fontSize: this.fontSize
      };
      var guardOptions = {
        height: this.guardHeight
      };
      return [{
        data: _constants.SIDE_BIN,
        options: guardOptions
      }, {
        data: this.leftEncode(),
        text: this.leftText(),
        options: textOptions
      }, {
        data: _constants.MIDDLE_BIN,
        options: guardOptions
      }, {
        data: this.rightEncode(),
        text: this.rightText(),
        options: textOptions
      }, {
        data: _constants.SIDE_BIN,
        options: guardOptions
      }];
    }
  }, {
    key: 'encodeFlat',
    value: function encodeFlat() {
      var data = [_constants.SIDE_BIN, this.leftEncode(), _constants.MIDDLE_BIN, this.rightEncode(), _constants.SIDE_BIN];
      return {
        data: data.join(''),
        text: this.text
      };
    }
  }]);

  return EAN;
}(_Barcode3.default);

exports["default"] = EAN;

/***/ }),

/***/ 45074:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN13.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _EAN2 = __webpack_require__(/*! ./EAN */ 67886);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Binary_encoding_of_data_digits_into_EAN-13_barcode
// Calculate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


var checksum = function checksum(number) {
  var res = number.substr(0, 12).split('').map(function (n) {
    return +n;
  }).reduce(function (sum, a, idx) {
    return idx % 2 ? sum + a * 3 : sum + a;
  }, 0);
  return (10 - res % 10) % 10;
};

var EAN13 = function (_EAN) {
  _inherits(EAN13, _EAN);

  function EAN13(data, options) {
    _classCallCheck(this, EAN13); // Add checksum if it does not exist


    if (data.search(/^[0-9]{12}$/) !== -1) {
      data += checksum(data);
    } // Adds a last character to the end of the barcode


    var _this = _possibleConstructorReturn(this, (EAN13.__proto__ || Object.getPrototypeOf(EAN13)).call(this, data, options));

    _this.lastChar = options.lastChar;
    return _this;
  }

  _createClass(EAN13, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === checksum(this.data);
    }
  }, {
    key: 'leftText',
    value: function leftText() {
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftText', this).call(this, 1, 6);
    }
  }, {
    key: 'leftEncode',
    value: function leftEncode() {
      var data = this.data.substr(1, 6);
      var structure = _constants.EAN13_STRUCTURE[this.data[0]];
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'leftEncode', this).call(this, data, structure);
    }
  }, {
    key: 'rightText',
    value: function rightText() {
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightText', this).call(this, 7, 6);
    }
  }, {
    key: 'rightEncode',
    value: function rightEncode() {
      var data = this.data.substr(7, 6);
      return _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'rightEncode', this).call(this, data, 'RRRRRR');
    } // The "standard" way of printing EAN13 barcodes with guard bars

  }, {
    key: 'encodeGuarded',
    value: function encodeGuarded() {
      var data = _get(EAN13.prototype.__proto__ || Object.getPrototypeOf(EAN13.prototype), 'encodeGuarded', this).call(this); // Extend data with left digit & last character


      if (this.options.displayValue) {
        data.unshift({
          data: '000000000000',
          text: this.text.substr(0, 1),
          options: {
            textAlign: 'left',
            fontSize: this.fontSize
          }
        });

        if (this.options.lastChar) {
          data.push({
            data: '00'
          });
          data.push({
            data: '00000',
            text: this.options.lastChar,
            options: {
              fontSize: this.fontSize
            }
          });
        }
      }

      return data;
    }
  }]);

  return EAN13;
}(_EAN3.default);

exports["default"] = EAN13;

/***/ }),

/***/ 43197:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN2.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_2#Encoding


var EAN2 = function (_Barcode) {
  _inherits(EAN2, _Barcode);

  function EAN2(data, options) {
    _classCallCheck(this, EAN2);

    return _possibleConstructorReturn(this, (EAN2.__proto__ || Object.getPrototypeOf(EAN2)).call(this, data, options));
  }

  _createClass(EAN2, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{2}$/) !== -1;
    }
  }, {
    key: 'encode',
    value: function encode() {
      // Choose the structure based on the number mod 4
      var structure = _constants.EAN2_STRUCTURE[parseInt(this.data) % 4];

      return {
        // Start bits + Encode the two digits with 01 in between
        data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
        text: this.text
      };
    }
  }]);

  return EAN2;
}(_Barcode3.default);

exports["default"] = EAN2;

/***/ }),

/***/ 13102:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN5.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 15091);

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/EAN_5#Encoding


var checksum = function checksum(data) {
  var result = data.split('').map(function (n) {
    return +n;
  }).reduce(function (sum, a, idx) {
    return idx % 2 ? sum + a * 9 : sum + a * 3;
  }, 0);
  return result % 10;
};

var EAN5 = function (_Barcode) {
  _inherits(EAN5, _Barcode);

  function EAN5(data, options) {
    _classCallCheck(this, EAN5);

    return _possibleConstructorReturn(this, (EAN5.__proto__ || Object.getPrototypeOf(EAN5)).call(this, data, options));
  }

  _createClass(EAN5, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{5}$/) !== -1;
    }
  }, {
    key: 'encode',
    value: function encode() {
      var structure = _constants.EAN5_STRUCTURE[checksum(this.data)];

      return {
        data: '1011' + (0, _encoder2.default)(this.data, structure, '01'),
        text: this.text
      };
    }
  }]);

  return EAN5;
}(_Barcode3.default);

exports["default"] = EAN5;

/***/ }),

/***/ 47280:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/EAN8.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var _EAN2 = __webpack_require__(/*! ./EAN */ 67886);

var _EAN3 = _interopRequireDefault(_EAN2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// http://www.barcodeisland.com/ean8.phtml
// Calculate the checksum digit


var checksum = function checksum(number) {
  var res = number.substr(0, 7).split('').map(function (n) {
    return +n;
  }).reduce(function (sum, a, idx) {
    return idx % 2 ? sum + a : sum + a * 3;
  }, 0);
  return (10 - res % 10) % 10;
};

var EAN8 = function (_EAN) {
  _inherits(EAN8, _EAN);

  function EAN8(data, options) {
    _classCallCheck(this, EAN8); // Add checksum if it does not exist


    if (data.search(/^[0-9]{7}$/) !== -1) {
      data += checksum(data);
    }

    return _possibleConstructorReturn(this, (EAN8.__proto__ || Object.getPrototypeOf(EAN8)).call(this, data, options));
  }

  _createClass(EAN8, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === checksum(this.data);
    }
  }, {
    key: 'leftText',
    value: function leftText() {
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftText', this).call(this, 0, 4);
    }
  }, {
    key: 'leftEncode',
    value: function leftEncode() {
      var data = this.data.substr(0, 4);
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'leftEncode', this).call(this, data, 'LLLL');
    }
  }, {
    key: 'rightText',
    value: function rightText() {
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightText', this).call(this, 4, 4);
    }
  }, {
    key: 'rightEncode',
    value: function rightEncode() {
      var data = this.data.substr(4, 4);
      return _get(EAN8.prototype.__proto__ || Object.getPrototypeOf(EAN8.prototype), 'rightEncode', this).call(this, data, 'RRRR');
    }
  }]);

  return EAN8;
}(_EAN3.default);

exports["default"] = EAN8;

/***/ }),

/***/ 31485:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPC.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

exports.checksum = checksum;

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding


var UPC = function (_Barcode) {
  _inherits(UPC, _Barcode);

  function UPC(data, options) {
    _classCallCheck(this, UPC); // Add checksum if it does not exist


    if (data.search(/^[0-9]{11}$/) !== -1) {
      data += checksum(data);
    }

    var _this = _possibleConstructorReturn(this, (UPC.__proto__ || Object.getPrototypeOf(UPC)).call(this, data, options));

    _this.displayValue = options.displayValue; // Make sure the font is not bigger than the space between the guard bars

    if (options.fontSize > options.width * 10) {
      _this.fontSize = options.width * 10;
    } else {
      _this.fontSize = options.fontSize;
    } // Make the guard bars go down half the way of the text


    _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
    return _this;
  }

  _createClass(UPC, [{
    key: "valid",
    value: function valid() {
      return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == checksum(this.data);
    }
  }, {
    key: "encode",
    value: function encode() {
      if (this.options.flat) {
        return this.flatEncoding();
      } else {
        return this.guardedEncoding();
      }
    }
  }, {
    key: "flatEncoding",
    value: function flatEncoding() {
      var result = "";
      result += "101";
      result += (0, _encoder2.default)(this.data.substr(0, 6), "LLLLLL");
      result += "01010";
      result += (0, _encoder2.default)(this.data.substr(6, 6), "RRRRRR");
      result += "101";
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: "guardedEncoding",
    value: function guardedEncoding() {
      var result = []; // Add the first digit

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text.substr(0, 1),
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        });
      } // Add the guard bars


      result.push({
        data: "101" + (0, _encoder2.default)(this.data[0], "L"),
        options: {
          height: this.guardHeight
        }
      }); // Add the left side

      result.push({
        data: (0, _encoder2.default)(this.data.substr(1, 5), "LLLLL"),
        text: this.text.substr(1, 5),
        options: {
          fontSize: this.fontSize
        }
      }); // Add the middle bits

      result.push({
        data: "01010",
        options: {
          height: this.guardHeight
        }
      }); // Add the right side

      result.push({
        data: (0, _encoder2.default)(this.data.substr(6, 5), "RRRRR"),
        text: this.text.substr(6, 5),
        options: {
          fontSize: this.fontSize
        }
      }); // Add the end bits

      result.push({
        data: (0, _encoder2.default)(this.data[11], "R") + "101",
        options: {
          height: this.guardHeight
        }
      }); // Add the last digit

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text.substr(11, 1),
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        });
      }

      return result;
    }
  }]);

  return UPC;
}(_Barcode3.default); // Calulate the checksum digit
// https://en.wikipedia.org/wiki/International_Article_Number_(EAN)#Calculation_of_checksum_digit


function checksum(number) {
  var result = 0;
  var i;

  for (i = 1; i < 11; i += 2) {
    result += parseInt(number[i]);
  }

  for (i = 0; i < 11; i += 2) {
    result += parseInt(number[i]) * 3;
  }

  return (10 - result % 10) % 10;
}

exports["default"] = UPC;

/***/ }),

/***/ 95095:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/UPCE.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _encoder = __webpack_require__(/*! ./encoder */ 38709);

var _encoder2 = _interopRequireDefault(_encoder);

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

var _UPC = __webpack_require__(/*! ./UPC.js */ 31485);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#Encoding
//
// UPC-E documentation:
// https://en.wikipedia.org/wiki/Universal_Product_Code#UPC-E


var EXPANSIONS = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"];
var PARITIES = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]];

var UPCE = function (_Barcode) {
  _inherits(UPCE, _Barcode);

  function UPCE(data, options) {
    _classCallCheck(this, UPCE);

    var _this = _possibleConstructorReturn(this, (UPCE.__proto__ || Object.getPrototypeOf(UPCE)).call(this, data, options)); // Code may be 6 or 8 digits;
    // A 7 digit code is ambiguous as to whether the extra digit
    // is a UPC-A check or number system digit.


    _this.isValid = false;

    if (data.search(/^[0-9]{6}$/) !== -1) {
      _this.middleDigits = data;
      _this.upcA = expandToUPCA(data, "0");
      _this.text = options.text || '' + _this.upcA[0] + data + _this.upcA[_this.upcA.length - 1];
      _this.isValid = true;
    } else if (data.search(/^[01][0-9]{7}$/) !== -1) {
      _this.middleDigits = data.substring(1, data.length - 1);
      _this.upcA = expandToUPCA(_this.middleDigits, data[0]);

      if (_this.upcA[_this.upcA.length - 1] === data[data.length - 1]) {
        _this.isValid = true;
      } else {
        // checksum mismatch
        return _possibleConstructorReturn(_this);
      }
    } else {
      return _possibleConstructorReturn(_this);
    }

    _this.displayValue = options.displayValue; // Make sure the font is not bigger than the space between the guard bars

    if (options.fontSize > options.width * 10) {
      _this.fontSize = options.width * 10;
    } else {
      _this.fontSize = options.fontSize;
    } // Make the guard bars go down half the way of the text


    _this.guardHeight = options.height + _this.fontSize / 2 + options.textMargin;
    return _this;
  }

  _createClass(UPCE, [{
    key: 'valid',
    value: function valid() {
      return this.isValid;
    }
  }, {
    key: 'encode',
    value: function encode() {
      if (this.options.flat) {
        return this.flatEncoding();
      } else {
        return this.guardedEncoding();
      }
    }
  }, {
    key: 'flatEncoding',
    value: function flatEncoding() {
      var result = "";
      result += "101";
      result += this.encodeMiddleDigits();
      result += "010101";
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: 'guardedEncoding',
    value: function guardedEncoding() {
      var result = []; // Add the UPC-A number system digit beneath the quiet zone

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text[0],
          options: {
            textAlign: "left",
            fontSize: this.fontSize
          }
        });
      } // Add the guard bars


      result.push({
        data: "101",
        options: {
          height: this.guardHeight
        }
      }); // Add the 6 UPC-E digits

      result.push({
        data: this.encodeMiddleDigits(),
        text: this.text.substring(1, 7),
        options: {
          fontSize: this.fontSize
        }
      }); // Add the end bits

      result.push({
        data: "010101",
        options: {
          height: this.guardHeight
        }
      }); // Add the UPC-A check digit beneath the quiet zone

      if (this.displayValue) {
        result.push({
          data: "00000000",
          text: this.text[7],
          options: {
            textAlign: "right",
            fontSize: this.fontSize
          }
        });
      }

      return result;
    }
  }, {
    key: 'encodeMiddleDigits',
    value: function encodeMiddleDigits() {
      var numberSystem = this.upcA[0];
      var checkDigit = this.upcA[this.upcA.length - 1];
      var parity = PARITIES[parseInt(checkDigit)][parseInt(numberSystem)];
      return (0, _encoder2.default)(this.middleDigits, parity);
    }
  }]);

  return UPCE;
}(_Barcode3.default);

function expandToUPCA(middleDigits, numberSystem) {
  var lastUpcE = parseInt(middleDigits[middleDigits.length - 1]);
  var expansion = EXPANSIONS[lastUpcE];
  var result = "";
  var digitIndex = 0;

  for (var i = 0; i < expansion.length; i++) {
    var c = expansion[i];

    if (c === 'X') {
      result += middleDigits[digitIndex++];
    } else {
      result += c;
    }
  }

  result = '' + numberSystem + result;
  return '' + result + (0, _UPC.checksum)(result);
}

exports["default"] = UPCE;

/***/ }),

/***/ 15091:
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/constants.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
})); // Standard start end and middle bits

var SIDE_BIN = exports.SIDE_BIN = '101';
var MIDDLE_BIN = exports.MIDDLE_BIN = '01010';
var BINARIES = exports.BINARIES = {
  'L': [// The L (left) type of encoding
  '0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
  'G': [// The G type of encoding
  '0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111'],
  'R': [// The R (right) type of encoding
  '1110010', '1100110', '1101100', '1000010', '1011100', '1001110', '1010000', '1000100', '1001000', '1110100'],
  'O': [// The O (odd) encoding for UPC-E
  '0001101', '0011001', '0010011', '0111101', '0100011', '0110001', '0101111', '0111011', '0110111', '0001011'],
  'E': [// The E (even) encoding for UPC-E
  '0100111', '0110011', '0011011', '0100001', '0011101', '0111001', '0000101', '0010001', '0001001', '0010111']
}; // Define the EAN-2 structure

var EAN2_STRUCTURE = exports.EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG']; // Define the EAN-5 structure

var EAN5_STRUCTURE = exports.EAN5_STRUCTURE = ['GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL', 'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG']; // Define the EAN-13 structure

var EAN13_STRUCTURE = exports.EAN13_STRUCTURE = ['LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG', 'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL'];

/***/ }),

/***/ 38709:
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/encoder.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _constants = __webpack_require__(/*! ./constants */ 15091); // Encode data string


var encode = function encode(data, structure, separator) {
  var encoded = data.split('').map(function (val, idx) {
    return _constants.BINARIES[structure[idx]];
  }).map(function (val, idx) {
    return val ? val[data[idx]] : '';
  });

  if (separator) {
    var last = data.length - 1;
    encoded = encoded.map(function (val, idx) {
      return idx < last ? val + separator : val;
    });
  }

  return encoded.join('');
};

exports["default"] = encode;

/***/ }),

/***/ 36024:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/EAN_UPC/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.UPCE = exports.UPC = exports.EAN2 = exports.EAN5 = exports.EAN8 = exports.EAN13 = undefined;

var _EAN = __webpack_require__(/*! ./EAN13.js */ 45074);

var _EAN2 = _interopRequireDefault(_EAN);

var _EAN3 = __webpack_require__(/*! ./EAN8.js */ 47280);

var _EAN4 = _interopRequireDefault(_EAN3);

var _EAN5 = __webpack_require__(/*! ./EAN5.js */ 13102);

var _EAN6 = _interopRequireDefault(_EAN5);

var _EAN7 = __webpack_require__(/*! ./EAN2.js */ 43197);

var _EAN8 = _interopRequireDefault(_EAN7);

var _UPC = __webpack_require__(/*! ./UPC.js */ 31485);

var _UPC2 = _interopRequireDefault(_UPC);

var _UPCE = __webpack_require__(/*! ./UPCE.js */ 95095);

var _UPCE2 = _interopRequireDefault(_UPCE);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.EAN13 = _EAN2.default;
exports.EAN8 = _EAN4.default;
exports.EAN5 = _EAN6.default;
exports.EAN2 = _EAN8.default;
exports.UPC = _UPC2.default;
exports.UPCE = _UPCE2.default;

/***/ }),

/***/ 84940:
/*!*********************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/GenericBarcode/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GenericBarcode = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GenericBarcode = function (_Barcode) {
  _inherits(GenericBarcode, _Barcode);

  function GenericBarcode(data, options) {
    _classCallCheck(this, GenericBarcode);

    return _possibleConstructorReturn(this, (GenericBarcode.__proto__ || Object.getPrototypeOf(GenericBarcode)).call(this, data, options)); // Sets this.data and this.text
  } // Return the corresponding binary numbers for the data provided


  _createClass(GenericBarcode, [{
    key: "encode",
    value: function encode() {
      return {
        data: "10101010101010101010101010101010101010101",
        text: this.text
      };
    } // Resturn true/false if the string provided is valid for this encoder

  }, {
    key: "valid",
    value: function valid() {
      return true;
    }
  }]);

  return GenericBarcode;
}(_Barcode3.default);

exports.GenericBarcode = GenericBarcode;

/***/ }),

/***/ 31449:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _constants = __webpack_require__(/*! ./constants */ 64639);

var _Barcode2 = __webpack_require__(/*! ../Barcode */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ITF = function (_Barcode) {
  _inherits(ITF, _Barcode);

  function ITF() {
    _classCallCheck(this, ITF);

    return _possibleConstructorReturn(this, (ITF.__proto__ || Object.getPrototypeOf(ITF)).apply(this, arguments));
  }

  _createClass(ITF, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^([0-9]{2})+$/) !== -1;
    }
  }, {
    key: 'encode',
    value: function encode() {
      var _this2 = this; // Calculate all the digit pairs


      var encoded = this.data.match(/.{2}/g).map(function (pair) {
        return _this2.encodePair(pair);
      }).join('');
      return {
        data: _constants.START_BIN + encoded + _constants.END_BIN,
        text: this.text
      };
    } // Calculate the data of a number pair

  }, {
    key: 'encodePair',
    value: function encodePair(pair) {
      var second = _constants.BINARIES[pair[1]];
      return _constants.BINARIES[pair[0]].split('').map(function (first, idx) {
        return (first === '1' ? '111' : '1') + (second[idx] === '1' ? '000' : '0');
      }).join('');
    }
  }]);

  return ITF;
}(_Barcode3.default);

exports["default"] = ITF;

/***/ }),

/***/ 98221:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/ITF14.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _ITF2 = __webpack_require__(/*! ./ITF */ 31449);

var _ITF3 = _interopRequireDefault(_ITF2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Calculate the checksum digit


var checksum = function checksum(data) {
  var res = data.substr(0, 13).split('').map(function (num) {
    return parseInt(num, 10);
  }).reduce(function (sum, n, idx) {
    return sum + n * (3 - idx % 2 * 2);
  }, 0);
  return Math.ceil(res / 10) * 10 - res;
};

var ITF14 = function (_ITF) {
  _inherits(ITF14, _ITF);

  function ITF14(data, options) {
    _classCallCheck(this, ITF14); // Add checksum if it does not exist


    if (data.search(/^[0-9]{13}$/) !== -1) {
      data += checksum(data);
    }

    return _possibleConstructorReturn(this, (ITF14.__proto__ || Object.getPrototypeOf(ITF14)).call(this, data, options));
  }

  _createClass(ITF14, [{
    key: 'valid',
    value: function valid() {
      return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === checksum(this.data);
    }
  }]);

  return ITF14;
}(_ITF3.default);

exports["default"] = ITF14;

/***/ }),

/***/ 64639:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/constants.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var START_BIN = exports.START_BIN = '1010';
var END_BIN = exports.END_BIN = '11101';
var BINARIES = exports.BINARIES = ['00110', '10001', '01001', '11000', '00101', '10100', '01100', '00011', '10010', '01010'];

/***/ }),

/***/ 81162:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/ITF/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ITF14 = exports.ITF = undefined;

var _ITF = __webpack_require__(/*! ./ITF */ 31449);

var _ITF2 = _interopRequireDefault(_ITF);

var _ITF3 = __webpack_require__(/*! ./ITF14 */ 98221);

var _ITF4 = _interopRequireDefault(_ITF3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.ITF = _ITF2.default;
exports.ITF14 = _ITF4.default;

/***/ }),

/***/ 46177:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation
// https://en.wikipedia.org/wiki/MSI_Barcode#Character_set_and_binary_lookup


var MSI = function (_Barcode) {
  _inherits(MSI, _Barcode);

  function MSI(data, options) {
    _classCallCheck(this, MSI);

    return _possibleConstructorReturn(this, (MSI.__proto__ || Object.getPrototypeOf(MSI)).call(this, data, options));
  }

  _createClass(MSI, [{
    key: "encode",
    value: function encode() {
      // Start bits
      var ret = "110";

      for (var i = 0; i < this.data.length; i++) {
        // Convert the character to binary (always 4 binary digits)
        var digit = parseInt(this.data[i]);
        var bin = digit.toString(2);
        bin = addZeroes(bin, 4 - bin.length); // Add 100 for every zero and 110 for every 1

        for (var b = 0; b < bin.length; b++) {
          ret += bin[b] == "0" ? "100" : "110";
        }
      } // End bits


      ret += "1001";
      return {
        data: ret,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.data.search(/^[0-9]+$/) !== -1;
    }
  }]);

  return MSI;
}(_Barcode3.default);

function addZeroes(number, n) {
  for (var i = 0; i < n; i++) {
    number = "0" + number;
  }

  return number;
}

exports["default"] = MSI;

/***/ }),

/***/ 32894:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI10.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI10 = function (_MSI) {
  _inherits(MSI10, _MSI);

  function MSI10(data, options) {
    _classCallCheck(this, MSI10);

    return _possibleConstructorReturn(this, (MSI10.__proto__ || Object.getPrototypeOf(MSI10)).call(this, data + (0, _checksums.mod10)(data), options));
  }

  return MSI10;
}(_MSI3.default);

exports["default"] = MSI10;

/***/ }),

/***/ 46736:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1010.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI1010 = function (_MSI) {
  _inherits(MSI1010, _MSI);

  function MSI1010(data, options) {
    _classCallCheck(this, MSI1010);

    data += (0, _checksums.mod10)(data);
    data += (0, _checksums.mod10)(data);
    return _possibleConstructorReturn(this, (MSI1010.__proto__ || Object.getPrototypeOf(MSI1010)).call(this, data, options));
  }

  return MSI1010;
}(_MSI3.default);

exports["default"] = MSI1010;

/***/ }),

/***/ 97111:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI11.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI11 = function (_MSI) {
  _inherits(MSI11, _MSI);

  function MSI11(data, options) {
    _classCallCheck(this, MSI11);

    return _possibleConstructorReturn(this, (MSI11.__proto__ || Object.getPrototypeOf(MSI11)).call(this, data + (0, _checksums.mod11)(data), options));
  }

  return MSI11;
}(_MSI3.default);

exports["default"] = MSI11;

/***/ }),

/***/ 11044:
/*!************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/MSI1110.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _MSI2 = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI3 = _interopRequireDefault(_MSI2);

var _checksums = __webpack_require__(/*! ./checksums.js */ 55741);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var MSI1110 = function (_MSI) {
  _inherits(MSI1110, _MSI);

  function MSI1110(data, options) {
    _classCallCheck(this, MSI1110);

    data += (0, _checksums.mod11)(data);
    data += (0, _checksums.mod10)(data);
    return _possibleConstructorReturn(this, (MSI1110.__proto__ || Object.getPrototypeOf(MSI1110)).call(this, data, options));
  }

  return MSI1110;
}(_MSI3.default);

exports["default"] = MSI1110;

/***/ }),

/***/ 55741:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/checksums.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mod10 = mod10;
exports.mod11 = mod11;

function mod10(number) {
  var sum = 0;

  for (var i = 0; i < number.length; i++) {
    var n = parseInt(number[i]);

    if ((i + number.length) % 2 === 0) {
      sum += n;
    } else {
      sum += n * 2 % 10 + Math.floor(n * 2 / 10);
    }
  }

  return (10 - sum % 10) % 10;
}

function mod11(number) {
  var sum = 0;
  var weights = [2, 3, 4, 5, 6, 7];

  for (var i = 0; i < number.length; i++) {
    var n = parseInt(number[number.length - 1 - i]);
    sum += weights[i % weights.length] * n;
  }

  return (11 - sum % 11) % 11;
}

/***/ }),

/***/ 59856:
/*!**********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/MSI/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MSI1110 = exports.MSI1010 = exports.MSI11 = exports.MSI10 = exports.MSI = undefined;

var _MSI = __webpack_require__(/*! ./MSI.js */ 46177);

var _MSI2 = _interopRequireDefault(_MSI);

var _MSI3 = __webpack_require__(/*! ./MSI10.js */ 32894);

var _MSI4 = _interopRequireDefault(_MSI3);

var _MSI5 = __webpack_require__(/*! ./MSI11.js */ 97111);

var _MSI6 = _interopRequireDefault(_MSI5);

var _MSI7 = __webpack_require__(/*! ./MSI1010.js */ 46736);

var _MSI8 = _interopRequireDefault(_MSI7);

var _MSI9 = __webpack_require__(/*! ./MSI1110.js */ 11044);

var _MSI10 = _interopRequireDefault(_MSI9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports.MSI = _MSI2.default;
exports.MSI10 = _MSI4.default;
exports.MSI11 = _MSI6.default;
exports.MSI1010 = _MSI8.default;
exports.MSI1110 = _MSI10.default;

/***/ }),

/***/ 4059:
/*!**************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/codabar/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.codabar = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding specification:
// http://www.barcodeisland.com/codabar.phtml


var codabar = function (_Barcode) {
  _inherits(codabar, _Barcode);

  function codabar(data, options) {
    _classCallCheck(this, codabar);

    if (data.search(/^[0-9\-\$\:\.\+\/]+$/) === 0) {
      data = "A" + data + "A";
    }

    var _this = _possibleConstructorReturn(this, (codabar.__proto__ || Object.getPrototypeOf(codabar)).call(this, data.toUpperCase(), options));

    _this.text = _this.options.text || _this.text.replace(/[A-D]/g, '');
    return _this;
  }

  _createClass(codabar, [{
    key: "valid",
    value: function valid() {
      return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
    }
  }, {
    key: "encode",
    value: function encode() {
      var result = [];
      var encodings = this.getEncodings();

      for (var i = 0; i < this.data.length; i++) {
        result.push(encodings[this.data.charAt(i)]); // for all characters except the last, append a narrow-space ("0")

        if (i !== this.data.length - 1) {
          result.push("0");
        }
      }

      return {
        text: this.text,
        data: result.join('')
      };
    }
  }, {
    key: "getEncodings",
    value: function getEncodings() {
      return {
        "0": "101010011",
        "1": "101011001",
        "2": "101001011",
        "3": "110010101",
        "4": "101101001",
        "5": "110101001",
        "6": "100101011",
        "7": "100101101",
        "8": "100110101",
        "9": "110100101",
        "-": "101001101",
        "$": "101100101",
        ":": "1101011011",
        "/": "1101101011",
        ".": "1101101101",
        "+": "1011011011",
        "A": "1011001001",
        "B": "1001001011",
        "C": "1010010011",
        "D": "1010011001"
      };
    }
  }]);

  return codabar;
}(_Barcode3.default);

exports.codabar = codabar;

/***/ }),

/***/ 55019:
/*!******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _CODE = __webpack_require__(/*! ./CODE39/ */ 53532);

var _CODE2 = __webpack_require__(/*! ./CODE128/ */ 81350);

var _EAN_UPC = __webpack_require__(/*! ./EAN_UPC/ */ 36024);

var _ITF = __webpack_require__(/*! ./ITF/ */ 81162);

var _MSI = __webpack_require__(/*! ./MSI/ */ 59856);

var _pharmacode = __webpack_require__(/*! ./pharmacode/ */ 51410);

var _codabar = __webpack_require__(/*! ./codabar */ 4059);

var _GenericBarcode = __webpack_require__(/*! ./GenericBarcode/ */ 84940);

exports["default"] = {
  CODE39: _CODE.CODE39,
  CODE128: _CODE2.CODE128,
  CODE128A: _CODE2.CODE128A,
  CODE128B: _CODE2.CODE128B,
  CODE128C: _CODE2.CODE128C,
  EAN13: _EAN_UPC.EAN13,
  EAN8: _EAN_UPC.EAN8,
  EAN5: _EAN_UPC.EAN5,
  EAN2: _EAN_UPC.EAN2,
  UPC: _EAN_UPC.UPC,
  UPCE: _EAN_UPC.UPCE,
  ITF14: _ITF.ITF14,
  ITF: _ITF.ITF,
  MSI: _MSI.MSI,
  MSI10: _MSI.MSI10,
  MSI11: _MSI.MSI11,
  MSI1010: _MSI.MSI1010,
  MSI1110: _MSI.MSI1110,
  pharmacode: _pharmacode.pharmacode,
  codabar: _codabar.codabar,
  GenericBarcode: _GenericBarcode.GenericBarcode
};

/***/ }),

/***/ 51410:
/*!*****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/barcodes/pharmacode/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pharmacode = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _Barcode2 = __webpack_require__(/*! ../Barcode.js */ 4995);

var _Barcode3 = _interopRequireDefault(_Barcode2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} // Encoding documentation
// http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf


var pharmacode = function (_Barcode) {
  _inherits(pharmacode, _Barcode);

  function pharmacode(data, options) {
    _classCallCheck(this, pharmacode);

    var _this = _possibleConstructorReturn(this, (pharmacode.__proto__ || Object.getPrototypeOf(pharmacode)).call(this, data, options));

    _this.number = parseInt(data, 10);
    return _this;
  }

  _createClass(pharmacode, [{
    key: "encode",
    value: function encode() {
      var z = this.number;
      var result = ""; // http://i.imgur.com/RMm4UDJ.png
      // (source: http://www.gomaro.ch/ftproot/Laetus_PHARMA-CODE.pdf, page: 34)

      while (!isNaN(z) && z != 0) {
        if (z % 2 === 0) {
          // Even
          result = "11100" + result;
          z = (z - 2) / 2;
        } else {
          // Odd
          result = "100" + result;
          z = (z - 1) / 2;
        }
      } // Remove the two last zeroes


      result = result.slice(0, -2);
      return {
        data: result,
        text: this.text
      };
    }
  }, {
    key: "valid",
    value: function valid() {
      return this.number >= 3 && this.number <= 131070;
    }
  }]);

  return pharmacode;
}(_Barcode3.default);

exports.pharmacode = pharmacode;

/***/ }),

/***/ 38988:
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/ErrorHandler.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/*eslint no-console: 0 */


var ErrorHandler = function () {
  function ErrorHandler(api) {
    _classCallCheck(this, ErrorHandler);

    this.api = api;
  }

  _createClass(ErrorHandler, [{
    key: "handleCatch",
    value: function handleCatch(e) {
      // If babel supported extending of Error in a correct way instanceof would be used here
      if (e.name === "InvalidInputException") {
        if (this.api._options.valid !== this.api._defaults.valid) {
          this.api._options.valid(false);
        } else {
          throw e.message;
        }
      } else {
        throw e;
      }

      this.api.render = function () {};
    }
  }, {
    key: "wrapBarcodeCall",
    value: function wrapBarcodeCall(func) {
      try {
        var result = func.apply(undefined, arguments);

        this.api._options.valid(true);

        return result;
      } catch (e) {
        this.handleCatch(e);
        return this.api;
      }
    }
  }]);

  return ErrorHandler;
}();

exports["default"] = ErrorHandler;

/***/ }),

/***/ 93662:
/*!*************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/exceptions/exceptions.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var InvalidInputException = function (_Error) {
  _inherits(InvalidInputException, _Error);

  function InvalidInputException(symbology, input) {
    _classCallCheck(this, InvalidInputException);

    var _this = _possibleConstructorReturn(this, (InvalidInputException.__proto__ || Object.getPrototypeOf(InvalidInputException)).call(this));

    _this.name = "InvalidInputException";
    _this.symbology = symbology;
    _this.input = input;
    _this.message = '"' + _this.input + '" is not a valid input for ' + _this.symbology;
    return _this;
  }

  return InvalidInputException;
}(Error);

var InvalidElementException = function (_Error2) {
  _inherits(InvalidElementException, _Error2);

  function InvalidElementException() {
    _classCallCheck(this, InvalidElementException);

    var _this2 = _possibleConstructorReturn(this, (InvalidElementException.__proto__ || Object.getPrototypeOf(InvalidElementException)).call(this));

    _this2.name = "InvalidElementException";
    _this2.message = "Not supported type to render on";
    return _this2;
  }

  return InvalidElementException;
}(Error);

var NoElementException = function (_Error3) {
  _inherits(NoElementException, _Error3);

  function NoElementException() {
    _classCallCheck(this, NoElementException);

    var _this3 = _possibleConstructorReturn(this, (NoElementException.__proto__ || Object.getPrototypeOf(NoElementException)).call(this));

    _this3.name = "NoElementException";
    _this3.message = "No element to render on.";
    return _this3;
  }

  return NoElementException;
}(Error);

exports.InvalidInputException = InvalidInputException;
exports.InvalidElementException = InvalidElementException;
exports.NoElementException = NoElementException;

/***/ }),

/***/ 74782:
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/fixOptions.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = fixOptions;

function fixOptions(options) {
  // Fix the margins
  options.marginTop = options.marginTop || options.margin;
  options.marginBottom = options.marginBottom || options.margin;
  options.marginRight = options.marginRight || options.margin;
  options.marginLeft = options.marginLeft || options.margin;
  return options;
}

/***/ }),

/***/ 67710:
/*!******************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getOptionsFromElement.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _optionsFromStrings = __webpack_require__(/*! ./optionsFromStrings.js */ 90799);

var _optionsFromStrings2 = _interopRequireDefault(_optionsFromStrings);

var _defaults = __webpack_require__(/*! ../options/defaults.js */ 50410);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getOptionsFromElement(element) {
  var options = {};

  for (var property in _defaults2.default) {
    if (_defaults2.default.hasOwnProperty(property)) {
      // jsbarcode-*
      if (element.hasAttribute("jsbarcode-" + property.toLowerCase())) {
        options[property] = element.getAttribute("jsbarcode-" + property.toLowerCase());
      } // data-*


      if (element.hasAttribute("data-" + property.toLowerCase())) {
        options[property] = element.getAttribute("data-" + property.toLowerCase());
      }
    }
  }

  options["value"] = element.getAttribute("jsbarcode-value") || element.getAttribute("data-value"); // Since all atributes are string they need to be converted to integers

  options = (0, _optionsFromStrings2.default)(options);
  return options;
}

exports["default"] = getOptionsFromElement;

/***/ }),

/***/ 66740:
/*!****************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/getRenderProperties.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
/* global HTMLImageElement */

/* global HTMLCanvasElement */

/* global SVGElement */


var _getOptionsFromElement = __webpack_require__(/*! ./getOptionsFromElement.js */ 67710);

var _getOptionsFromElement2 = _interopRequireDefault(_getOptionsFromElement);

var _renderers = __webpack_require__(/*! ../renderers */ 15119);

var _renderers2 = _interopRequireDefault(_renderers);

var _exceptions = __webpack_require__(/*! ../exceptions/exceptions.js */ 93662);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Takes an element and returns an object with information about how
// it should be rendered
// This could also return an array with these objects
// {
//   element: The element that the renderer should draw on
//   renderer: The name of the renderer
//   afterRender (optional): If something has to done after the renderer
//     completed, calls afterRender (function)
//   options (optional): Options that can be defined in the element
// }


function getRenderProperties(element) {
  // If the element is a string, query select call again
  if (typeof element === "string") {
    return querySelectedRenderProperties(element);
  } // If element is array. Recursivly call with every object in the array
  else if (Array.isArray(element)) {
    var returnArray = [];

    for (var i = 0; i < element.length; i++) {
      returnArray.push(getRenderProperties(element[i]));
    }

    return returnArray;
  } // If element, render on canvas and set the uri as src
  else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLImageElement) {
    return newCanvasRenderProperties(element);
  } // If SVG
  else if (element && element.nodeName && element.nodeName.toLowerCase() === 'svg' || typeof SVGElement !== 'undefined' && element instanceof SVGElement) {
    return {
      element: element,
      options: (0, _getOptionsFromElement2.default)(element),
      renderer: _renderers2.default.SVGRenderer
    };
  } // If canvas (in browser)
  else if (typeof HTMLCanvasElement !== 'undefined' && element instanceof HTMLCanvasElement) {
    return {
      element: element,
      options: (0, _getOptionsFromElement2.default)(element),
      renderer: _renderers2.default.CanvasRenderer
    };
  } // If canvas (in node)
  else if (element && element.getContext) {
    return {
      element: element,
      renderer: _renderers2.default.CanvasRenderer
    };
  } else if (element && (typeof element === "undefined" ? "undefined" : _typeof(element)) === 'object' && !element.nodeName) {
    return {
      element: element,
      renderer: _renderers2.default.ObjectRenderer
    };
  } else {
    throw new _exceptions.InvalidElementException();
  }
}

function querySelectedRenderProperties(string) {
  var selector = document.querySelectorAll(string);

  if (selector.length === 0) {
    return undefined;
  } else {
    var returnArray = [];

    for (var i = 0; i < selector.length; i++) {
      returnArray.push(getRenderProperties(selector[i]));
    }

    return returnArray;
  }
}

function newCanvasRenderProperties(imgElement) {
  var canvas = document.createElement('canvas');
  return {
    element: canvas,
    options: (0, _getOptionsFromElement2.default)(imgElement),
    renderer: _renderers2.default.CanvasRenderer,
    afterRender: function afterRender() {
      imgElement.setAttribute("src", canvas.toDataURL());
    }
  };
}

exports["default"] = getRenderProperties;

/***/ }),

/***/ 20082:
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/linearizeEncodings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = linearizeEncodings; // Encodings can be nestled like [[1-1, 1-2], 2, [3-1, 3-2]
// Convert to [1-1, 1-2, 2, 3-1, 3-2]

function linearizeEncodings(encodings) {
  var linearEncodings = [];

  function nextLevel(encoded) {
    if (Array.isArray(encoded)) {
      for (var i = 0; i < encoded.length; i++) {
        nextLevel(encoded[i]);
      }
    } else {
      encoded.text = encoded.text || "";
      encoded.data = encoded.data || "";
      linearEncodings.push(encoded);
    }
  }

  nextLevel(encodings);
  return linearEncodings;
}

/***/ }),

/***/ 58818:
/*!**************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/merge.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = function (old, replaceObj) {
  return _extends({}, old, replaceObj);
};

/***/ }),

/***/ 90799:
/*!***************************************************************!*\
  !*** ./node_modules/jsbarcode/bin/help/optionsFromStrings.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = optionsFromStrings; // Convert string to integers/booleans where it should be

function optionsFromStrings(options) {
  var intOptions = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];

  for (var intOption in intOptions) {
    if (intOptions.hasOwnProperty(intOption)) {
      intOption = intOptions[intOption];

      if (typeof options[intOption] === "string") {
        options[intOption] = parseInt(options[intOption], 10);
      }
    }
  }

  if (typeof options["displayValue"] === "string") {
    options["displayValue"] = options["displayValue"] != "false";
  }

  return options;
}

/***/ }),

/***/ 50410:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/options/defaults.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var defaults = {
  width: 2,
  height: 100,
  format: "auto",
  displayValue: true,
  fontOptions: "",
  font: "monospace",
  text: undefined,
  textAlign: "center",
  textPosition: "bottom",
  textMargin: 2,
  fontSize: 20,
  background: "#ffffff",
  lineColor: "#000000",
  margin: 10,
  marginTop: undefined,
  marginBottom: undefined,
  marginLeft: undefined,
  marginRight: undefined,
  valid: function valid() {}
};
exports["default"] = defaults;

/***/ }),

/***/ 1268:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/canvas.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _merge = __webpack_require__(/*! ../help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ 19164);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var CanvasRenderer = function () {
  function CanvasRenderer(canvas, encodings, options) {
    _classCallCheck(this, CanvasRenderer);

    this.canvas = canvas;
    this.encodings = encodings;
    this.options = options;
  }

  _createClass(CanvasRenderer, [{
    key: "render",
    value: function render() {
      // Abort if the browser does not support HTML5 canvas
      if (!this.canvas.getContext) {
        throw new Error('The browser does not support canvas.');
      }

      this.prepareCanvas();

      for (var i = 0; i < this.encodings.length; i++) {
        var encodingOptions = (0, _merge2.default)(this.options, this.encodings[i].options);
        this.drawCanvasBarcode(encodingOptions, this.encodings[i]);
        this.drawCanvasText(encodingOptions, this.encodings[i]);
        this.moveCanvasDrawing(this.encodings[i]);
      }

      this.restoreCanvas();
    }
  }, {
    key: "prepareCanvas",
    value: function prepareCanvas() {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      ctx.save();
      (0, _shared.calculateEncodingAttributes)(this.encodings, this.options, ctx);
      var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
      var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
      this.canvas.width = totalWidth + this.options.marginLeft + this.options.marginRight;
      this.canvas.height = maxHeight; // Paint the canvas

      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      if (this.options.background) {
        ctx.fillStyle = this.options.background;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }

      ctx.translate(this.options.marginLeft, 0);
    }
  }, {
    key: "drawCanvasBarcode",
    value: function drawCanvasBarcode(options, encoding) {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      var binary = encoding.data; // Creates the barcode out of the encoded binary

      var yFrom;

      if (options.textPosition == "top") {
        yFrom = options.marginTop + options.fontSize + options.textMargin;
      } else {
        yFrom = options.marginTop;
      }

      ctx.fillStyle = options.lineColor;

      for (var b = 0; b < binary.length; b++) {
        var x = b * options.width + encoding.barcodePadding;

        if (binary[b] === "1") {
          ctx.fillRect(x, yFrom, options.width, options.height);
        } else if (binary[b]) {
          ctx.fillRect(x, yFrom, options.width, options.height * binary[b]);
        }
      }
    }
  }, {
    key: "drawCanvasText",
    value: function drawCanvasText(options, encoding) {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      var font = options.fontOptions + " " + options.fontSize + "px " + options.font; // Draw the text if displayValue is set

      if (options.displayValue) {
        var x, y;

        if (options.textPosition == "top") {
          y = options.marginTop + options.fontSize - options.textMargin;
        } else {
          y = options.height + options.textMargin + options.marginTop + options.fontSize;
        }

        ctx.font = font; // Draw the text in the correct X depending on the textAlign option

        if (options.textAlign == "left" || encoding.barcodePadding > 0) {
          x = 0;
          ctx.textAlign = 'left';
        } else if (options.textAlign == "right") {
          x = encoding.width - 1;
          ctx.textAlign = 'right';
        } // In all other cases, center the text
        else {
          x = encoding.width / 2;
          ctx.textAlign = 'center';
        }

        ctx.fillText(encoding.text, x, y);
      }
    }
  }, {
    key: "moveCanvasDrawing",
    value: function moveCanvasDrawing(encoding) {
      var ctx = this.canvas.getContext("2d");
      ctx.translate(encoding.width, 0);
    }
  }, {
    key: "restoreCanvas",
    value: function restoreCanvas() {
      // Get the canvas context
      var ctx = this.canvas.getContext("2d");
      ctx.restore();
    }
  }]);

  return CanvasRenderer;
}();

exports["default"] = CanvasRenderer;

/***/ }),

/***/ 15119:
/*!*******************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _canvas = __webpack_require__(/*! ./canvas.js */ 1268);

var _canvas2 = _interopRequireDefault(_canvas);

var _svg = __webpack_require__(/*! ./svg.js */ 31239);

var _svg2 = _interopRequireDefault(_svg);

var _object = __webpack_require__(/*! ./object.js */ 33069);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

exports["default"] = {
  CanvasRenderer: _canvas2.default,
  SVGRenderer: _svg2.default,
  ObjectRenderer: _object2.default
};

/***/ }),

/***/ 33069:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/object.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ObjectRenderer = function () {
  function ObjectRenderer(object, encodings, options) {
    _classCallCheck(this, ObjectRenderer);

    this.object = object;
    this.encodings = encodings;
    this.options = options;
  }

  _createClass(ObjectRenderer, [{
    key: "render",
    value: function render() {
      this.object.encodings = this.encodings;
    }
  }]);

  return ObjectRenderer;
}();

exports["default"] = ObjectRenderer;

/***/ }),

/***/ 19164:
/*!********************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/shared.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getTotalWidthOfEncodings = exports.calculateEncodingAttributes = exports.getBarcodePadding = exports.getEncodingHeight = exports.getMaximumHeightOfEncodings = undefined;

var _merge = __webpack_require__(/*! ../help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function getEncodingHeight(encoding, options) {
  return options.height + (options.displayValue && encoding.text.length > 0 ? options.fontSize + options.textMargin : 0) + options.marginTop + options.marginBottom;
}

function getBarcodePadding(textWidth, barcodeWidth, options) {
  if (options.displayValue && barcodeWidth < textWidth) {
    if (options.textAlign == "center") {
      return Math.floor((textWidth - barcodeWidth) / 2);
    } else if (options.textAlign == "left") {
      return 0;
    } else if (options.textAlign == "right") {
      return Math.floor(textWidth - barcodeWidth);
    }
  }

  return 0;
}

function calculateEncodingAttributes(encodings, barcodeOptions, context) {
  for (var i = 0; i < encodings.length; i++) {
    var encoding = encodings[i];
    var options = (0, _merge2.default)(barcodeOptions, encoding.options); // Calculate the width of the encoding

    var textWidth;

    if (options.displayValue) {
      textWidth = messureText(encoding.text, options, context);
    } else {
      textWidth = 0;
    }

    var barcodeWidth = encoding.data.length * options.width;
    encoding.width = Math.ceil(Math.max(textWidth, barcodeWidth));
    encoding.height = getEncodingHeight(encoding, options);
    encoding.barcodePadding = getBarcodePadding(textWidth, barcodeWidth, options);
  }
}

function getTotalWidthOfEncodings(encodings) {
  var totalWidth = 0;

  for (var i = 0; i < encodings.length; i++) {
    totalWidth += encodings[i].width;
  }

  return totalWidth;
}

function getMaximumHeightOfEncodings(encodings) {
  var maxHeight = 0;

  for (var i = 0; i < encodings.length; i++) {
    if (encodings[i].height > maxHeight) {
      maxHeight = encodings[i].height;
    }
  }

  return maxHeight;
}

function messureText(string, options, context) {
  var ctx;

  if (context) {
    ctx = context;
  } else if (typeof document !== "undefined") {
    ctx = document.createElement("canvas").getContext("2d");
  } else {
    // If the text cannot be messured we will return 0.
    // This will make some barcode with big text render incorrectly
    return 0;
  }

  ctx.font = options.fontOptions + " " + options.fontSize + "px " + options.font; // Calculate the width of the encoding

  var measureTextResult = ctx.measureText(string);

  if (!measureTextResult) {
    // Some implementations don't implement measureText and return undefined.
    // If the text cannot be measured we will return 0.
    // This will make some barcode with big text render incorrectly
    return 0;
  }

  var size = measureTextResult.width;
  return size;
}

exports.getMaximumHeightOfEncodings = getMaximumHeightOfEncodings;
exports.getEncodingHeight = getEncodingHeight;
exports.getBarcodePadding = getBarcodePadding;
exports.calculateEncodingAttributes = calculateEncodingAttributes;
exports.getTotalWidthOfEncodings = getTotalWidthOfEncodings;

/***/ }),

/***/ 31239:
/*!*****************************************************!*\
  !*** ./node_modules/jsbarcode/bin/renderers/svg.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _merge = __webpack_require__(/*! ../help/merge.js */ 58818);

var _merge2 = _interopRequireDefault(_merge);

var _shared = __webpack_require__(/*! ./shared.js */ 19164);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var svgns = "http://www.w3.org/2000/svg";

var SVGRenderer = function () {
  function SVGRenderer(svg, encodings, options) {
    _classCallCheck(this, SVGRenderer);

    this.svg = svg;
    this.encodings = encodings;
    this.options = options;
    this.document = options.xmlDocument || document;
  }

  _createClass(SVGRenderer, [{
    key: "render",
    value: function render() {
      var currentX = this.options.marginLeft;
      this.prepareSVG();

      for (var i = 0; i < this.encodings.length; i++) {
        var encoding = this.encodings[i];
        var encodingOptions = (0, _merge2.default)(this.options, encoding.options);
        var group = this.createGroup(currentX, encodingOptions.marginTop, this.svg);
        this.setGroupOptions(group, encodingOptions);
        this.drawSvgBarcode(group, encodingOptions, encoding);
        this.drawSVGText(group, encodingOptions, encoding);
        currentX += encoding.width;
      }
    }
  }, {
    key: "prepareSVG",
    value: function prepareSVG() {
      // Clear the SVG
      while (this.svg.firstChild) {
        this.svg.removeChild(this.svg.firstChild);
      }

      (0, _shared.calculateEncodingAttributes)(this.encodings, this.options);
      var totalWidth = (0, _shared.getTotalWidthOfEncodings)(this.encodings);
      var maxHeight = (0, _shared.getMaximumHeightOfEncodings)(this.encodings);
      var width = totalWidth + this.options.marginLeft + this.options.marginRight;
      this.setSvgAttributes(width, maxHeight);

      if (this.options.background) {
        this.drawRect(0, 0, width, maxHeight, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
      }
    }
  }, {
    key: "drawSvgBarcode",
    value: function drawSvgBarcode(parent, options, encoding) {
      var binary = encoding.data; // Creates the barcode out of the encoded binary

      var yFrom;

      if (options.textPosition == "top") {
        yFrom = options.fontSize + options.textMargin;
      } else {
        yFrom = 0;
      }

      var barWidth = 0;
      var x = 0;

      for (var b = 0; b < binary.length; b++) {
        x = b * options.width + encoding.barcodePadding;

        if (binary[b] === "1") {
          barWidth++;
        } else if (barWidth > 0) {
          this.drawRect(x - options.width * barWidth, yFrom, options.width * barWidth, options.height, parent);
          barWidth = 0;
        }
      } // Last draw is needed since the barcode ends with 1


      if (barWidth > 0) {
        this.drawRect(x - options.width * (barWidth - 1), yFrom, options.width * barWidth, options.height, parent);
      }
    }
  }, {
    key: "drawSVGText",
    value: function drawSVGText(parent, options, encoding) {
      var textElem = this.document.createElementNS(svgns, 'text'); // Draw the text if displayValue is set

      if (options.displayValue) {
        var x, y;
        textElem.setAttribute("style", "font:" + options.fontOptions + " " + options.fontSize + "px " + options.font);

        if (options.textPosition == "top") {
          y = options.fontSize - options.textMargin;
        } else {
          y = options.height + options.textMargin + options.fontSize;
        } // Draw the text in the correct X depending on the textAlign option


        if (options.textAlign == "left" || encoding.barcodePadding > 0) {
          x = 0;
          textElem.setAttribute("text-anchor", "start");
        } else if (options.textAlign == "right") {
          x = encoding.width - 1;
          textElem.setAttribute("text-anchor", "end");
        } // In all other cases, center the text
        else {
          x = encoding.width / 2;
          textElem.setAttribute("text-anchor", "middle");
        }

        textElem.setAttribute("x", x);
        textElem.setAttribute("y", y);
        textElem.appendChild(this.document.createTextNode(encoding.text));
        parent.appendChild(textElem);
      }
    }
  }, {
    key: "setSvgAttributes",
    value: function setSvgAttributes(width, height) {
      var svg = this.svg;
      svg.setAttribute("width", width + "px");
      svg.setAttribute("height", height + "px");
      svg.setAttribute("x", "0px");
      svg.setAttribute("y", "0px");
      svg.setAttribute("viewBox", "0 0 " + width + " " + height);
      svg.setAttribute("xmlns", svgns);
      svg.setAttribute("version", "1.1");
      svg.setAttribute("style", "transform: translate(0,0)");
    }
  }, {
    key: "createGroup",
    value: function createGroup(x, y, parent) {
      var group = this.document.createElementNS(svgns, 'g');
      group.setAttribute("transform", "translate(" + x + ", " + y + ")");
      parent.appendChild(group);
      return group;
    }
  }, {
    key: "setGroupOptions",
    value: function setGroupOptions(group, options) {
      group.setAttribute("style", "fill:" + options.lineColor + ";");
    }
  }, {
    key: "drawRect",
    value: function drawRect(x, y, width, height, parent) {
      var rect = this.document.createElementNS(svgns, 'rect');
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", width);
      rect.setAttribute("height", height);
      parent.appendChild(rect);
      return rect;
    }
  }]);

  return SVGRenderer;
}();

exports["default"] = SVGRenderer;

/***/ }),

/***/ 34085:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/create-molding-toolbar/create-molding-toolbar.component.scss?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar > * {\n  padding-inline: 10px;\n}\nion-toolbar .col {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1tb2xkaW5nLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFBSiIsImZpbGUiOiJjcmVhdGUtbW9sZGluZy10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gID4gKiB7XHJcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDtcclxuICB9XHJcbiAgLmNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2084:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-info-toolbar/molding-info-toolbar.component.scss?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar > * {\n  padding-inline: 10px;\n}\nion-toolbar .col {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbGRpbmctaW5mby10b29sYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7QUFBSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQUoiLCJmaWxlIjoibW9sZGluZy1pbmZvLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgPiAqIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xyXG4gIH1cclxuICAuY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4410:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-kit-table/molding-kit-table.component.scss?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = ".table {\n  color: black;\n  text-align: center;\n}\n\n.table-header-row {\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: rgb(244, 245, 248);\n  align-items: center;\n}\n\n.table-data-row {\n  font-size: 16px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbGRpbmcta2l0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFBRiIsImZpbGUiOiJtb2xkaW5nLWtpdC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIE1BVEVSSUFMIFRBQkxFIFNUWUxJTkdcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLnRhYmxlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWJsZS1oZWFkZXItcm93IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDUsIDI0OCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGFibGUtZGF0YS1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIHBhZGRpbmc6IDNweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 49941:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-materials-table/molding-materials-table.component.scss?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".table {\n  color: black;\n  text-align: center;\n}\n\n.table-header-row {\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: rgb(244, 245, 248);\n  align-items: center;\n}\n\n.table-data-row {\n  font-size: 16px;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbGRpbmctbWF0ZXJpYWxzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFBRiIsImZpbGUiOiJtb2xkaW5nLW1hdGVyaWFscy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIE1BVEVSSUFMIFRBQkxFIFNUWUxJTkdcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLnRhYmxlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50YWJsZS1oZWFkZXItcm93IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDUsIDI0OCk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udGFibGUtZGF0YS1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIHBhZGRpbmc6IDNweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 55542:
/*!***************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/nida/nida.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuaWRhLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 34752:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub24tZXhwaXJlZC1tYXRlcmlhbC1pbnB1dC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 92460:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/scan-molding-input/scan-molding-input.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  width: 33%;\n  display: flex;\n  width: 200%;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW4tbW9sZGluZy1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoic2Nhbi1tb2xkaW5nLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 40201:
/*!****************************************************************************************!*\
  !*** ./src/app/molding/components/molding-menu/molding-menu.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2xkaW5nLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 46801:
/*!**********************************************************************************!*\
  !*** ./src/app/molding/pages/create-molding/create-molding.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".padding {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1tb2xkaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJjcmVhdGUtbW9sZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZyB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 13085:
/*!************************************************************!*\
  !*** ./src/app/molding/pages/molding.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = ".strong {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbGRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJtb2xkaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJvbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1847:
/*!********************************************************************************************!*\
  !*** ./src/app/molding/pages/print-molding-sheet/print-molding-sheet.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = ".flex-vertical {\n  display: flex !important;\n  flex-direction: column;\n}\n\n.important {\n  size: 2em !important;\n  font-weight: bolder;\n}\n\nion-content {\n  font-size: 12px !important;\n}\n\nion-content ion-title {\n  padding-bottom: 1em !important;\n}\n\nion-content .kit-item {\n  margin: 0px 0;\n  font-size: 12px !important;\n}\n\nion-content .kit-item ion-label {\n  margin: 0 0;\n}\n\nion-content .kit-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .kit-list ion-title {\n  align-self: flex-start;\n}\n\nion-content .title-default {\n  padding-inline: 0 !important;\n}\n\n.logo {\n  width: 100px;\n}\n\n.mat-table {\n  text-align: center;\n}\n\n.mat-row,\n.mat-header-row {\n  height: auto;\n}\n\n.mat-cell,\n.mat-header-cell {\n  padding: 8px;\n  font-size: 10px !important;\n}\n\n.content-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n@media print {\n  .print-hide {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LW1vbGRpbmctc2hlZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFBRTtFQUNFLDhCQUFBO0FBRUo7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7QUFFSjs7QUFESTtFQUNFLFdBQUE7QUFHTjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNFLHNCQUFBO0FBR047O0FBQUU7RUFDRSw0QkFBQTtBQUVKOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTs7RUFFRSxZQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsWUFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJwcmludC1tb2xkaW5nLXNoZWV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LXZlcnRpY2FsIHtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmltcG9ydGFudCB7XHJcbiAgc2l6ZTogMmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5raXQtaXRlbSB7XHJcbiAgICBtYXJnaW46IDBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBtYXJnaW46IDAgMDtcclxuICAgIH1cclxuICB9XHJcbiAgLmtpdC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW9uLXRpdGxlIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlLWRlZmF1bHQge1xyXG4gICAgcGFkZGluZy1pbmxpbmU6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFibGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1yb3csXHJcbi5tYXQtaGVhZGVyLXJvdyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNlbGwsXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbnRlbnQtdG9wIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5wcmludC1oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 15899:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/create-molding-toolbar/create-molding-toolbar.component.html?ngResource ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar color=light>\n  <ion-buttons slot=\"end\" collapse=\"true\">\n    <ion-button color=primary slot=end (click)=\"saveMoldingClick()\" fill=\"outline\" [disabled]=\"!isMoldingComplete\">\n      <ion-icon slot=\"start\" name=\"save-outline\"></ion-icon>\n      SAUVEGARDER\n    </ion-button>\n    <ion-button color=primary slot=end (click)=\"saveMoldingClick(true)\" fill=\"solid\" [disabled]=\"!isMoldingComplete\">\n      <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\n      IMPRIMER\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n";

/***/ }),

/***/ 46118:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-info-toolbar/molding-info-toolbar.component.html?ngResource ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar>\n  <ion-text slot=\"start\">Outillage :</ion-text>\n  <ion-text *ngIf=\"molding?.OT\"> OT0{{molding?.OT.sapToolNumber}} {{molding?.OT.designation}}</ion-text>\n  <ion-button colorStatus=\"\" [color]=\"toolStatusColor\" *ngIf=\"!molding?.OT\" (click)=\"noToolClick()\">Pas d'outillage\n    associé\n  </ion-button>\n\n  <div class=\"col\" slot=end>\n    <ion-text class=\"strong\">Début moulage : {{molding?.moldingDay | date: \"dd/MM/yyyy\"}}</ion-text>\n    <ion-text class=\"strong\" *ngIf=\"molding?.userCreat\">Réalisé par : {{molding?.userCreat.nom}}\n      {{molding?.userCreat.prenom}}</ion-text>\n  </div>\n  <ion-text *ngIf=molding?.aDraperAv slot=end class=\"strong\">A draper avant le : {{molding?.aDraperAv | date:\n    \"dd/MM/yyyy\n    à HH:mm\"}}\n  </ion-text>\n  <ion-text *ngIf=molding?.aCuireAv slot=end class=\"strong\">A cuire avant le : {{molding?.aCuireAv | date: \"dd/MM/yyyy à\n    HH:mm\"}}</ion-text>\n</ion-toolbar>\n";

/***/ }),

/***/ 25905:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-kit-table/molding-kit-table.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid fixed style=\"width:100%;\" class=\"table\">\n  <ion-row color=light class=\"table-header-row ion-padding\">\n    <ion-col size=\"1\" size-lg=\"1\" size-md=\"2\">ID-MM</ion-col>\n    <ion-col size=\"3\" size-lg=\"3\" size-md=\"6\">Désignation</ion-col>\n    <ion-col size=\"1\" size-lg=\"1\" size-md=\"2\">Référence</ion-col>\n    <ion-col size=\"2\" size-lg=\"2\" size-md=\"4\">Péremption à -18°C</ion-col>\n    <ion-col size=\"2\" size-lg=\"2\" size-md=\"4\">à draper avant le</ion-col>\n    <ion-col size=\"2\" size-lg=\"2\" size-md=\"4\">à cuire avant le</ion-col>\n    <ion-col size=\"1\" size-lg=\"1\" size-md=\"2\">Btns</ion-col>\n  </ion-row>\n  <ion-row *ngFor=\"let kit of kits; let index = index;\" class=\"table-data-row\">\n    <ion-col size=\"1\" size-lg=\"1\" size-md=\"2\">{{kit.idMM}}</ion-col>\n    <ion-col size=\"3\" size-lg=\"3\" size-md=\"6\">{{kit.designationSAP}}</ion-col>\n    <ion-col size=\"1\" size-lg=\"1\" size-md=\"2\">{{kit.referenceSAP}}</ion-col>\n    <ion-col size=\"2\" size-lg=\"2\" size-md=\"4\">\n      <span [appPeremp]=\"{dateToCompare: kit.peremptionMoins18}\">\n        {{kit.peremptionMoins18| date: \"dd/MM/yyyy à HH:mm\"}}\n      </span>\n    </ion-col>\n    <ion-col size=\"2\" size-lg=\"2\" size-md=\"4\">\n      <span [appPeremp]=\"{dateToCompare: kit.aDrapAv}\">\n        {{kit.aDrapAv | date: \"dd/MM/yyyy à HH:mm\"}}\n      </span>\n    </ion-col>\n    <ion-col size=\"2\" size-lg=\"2\" size-md=\"4\">\n      <span [appPeremp]=\"{dateToCompare: kit.aCuirAv}\">\n        {{kit.aCuirAv | date: \"dd/MM/yyyy à HH:mm\"}}\n      </span>\n    </ion-col>\n\n    <ion-col size=\"1\" size-lg=\"1\" size-md=\"2\">\n      <ion-button class=\"ion-hide-md-down\" (click)=\"removeKitClick(index)\">\n        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<!-- <mat-table #table [dataSource]=\"kitList\">\n  <ng-container matColumnDef=\"referenceSAP\">\n    <mat-header-cell *matHeaderCellDef>Référence Sap</mat-header-cell>\n    <mat-cell *matCellDef=\"let kit\">\n      {{kit.referenceSAP}}\n      <ion-text class=\"strong\" *ngIf=\"kit === molding.matDrap\">(Drap)</ion-text>\n      <ion-text class=\"strong\" *ngIf=\"kit === molding.matPolym\">(Pol)</ion-text>\n    </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"idMM\" class=\"ion-hide--md-down\">\n    <mat-header-cell *matHeaderCellDef>ID-MM</mat-header-cell>\n    <mat-cell *matCellDef=\"let kit\"> {{kit.idMM}} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"designationSAP\" class=\"ion-hide--md-down\">\n    <mat-header-cell *matHeaderCellDef>Désignation</mat-header-cell>\n    <mat-cell *matCellDef=\"let kit\"> {{kit.designationSAP}} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"peremptionMoins18\">\n    <mat-header-cell *matHeaderCellDef>Péremption à -18°C</mat-header-cell>\n    <mat-cell *matCellDef=\"let kit\"\n      [style.color]=\"kitService.isPerim(kit.peremptionMoins18, molding.moldingDay) ? 'danger' : 'dark'\">\n      {{kit.peremptionMoins18 | date: \"dd/MM/yyyy à HH:mm\"}} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"aDrapAv\">\n    <mat-header-cell *matHeaderCellDef>à draper avant le</mat-header-cell>\n    <mat-cell *matCellDef=\"let kit\"\n      [style.color]=\"kitService.isPerim(kit.aDrapAv, molding.moldingDay) ? 'danger' : 'dark'\">\n      {{kit.aDrapAv | date: \"dd/MM/yyyy à HH:mm\"}} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"aCuirAv\">\n    <mat-header-cell *matHeaderCellDef>à cuire avant le</mat-header-cell>\n    <mat-cell *matCellDef=\"let kit\"\n      [style.color]=\"kitService.isPerim(kit.aCuirAv, molding.moldingDay) ? 'danger' : 'dark'\">\n      {{kit.aCuirAv |\n      date: \"dd/MM/yyyy à HH:mm\"}} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"commands\">\n    <mat-header-cell *matHeaderCellDef></mat-header-cell>\n    <mat-cell *matCellDef=\"let kit; let index\">\n      <ion-button class=\"ion-hide--md-down\" (click)=\"removeKitClick(index)\">\n        <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n      </ion-button>\n    </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let kit; columns: displayedColumns;\"></mat-row>\n</mat-table> -->\n";

/***/ }),

/***/ 64602:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/molding-materials-table/molding-materials-table.component.html?ngResource ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-grid fixed style=\"width:100%;\" class=\"table\">\n  <ion-row class=\"table-header-row ion-padding\">\n    <ion-col size=\"6\">\n      <ion-label>\n        N° de lot\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>\n        Référence\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"table-data-row\" *ngFor=\"let mat of molding.materialSupplementary\">\n    <ion-col size=\"6\">\n      <ion-label>\n        {{mat.numLot}}\n      </ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label>\n        {{mat.ref}}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 60102:
/*!***************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/nida/nida.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"title\">\n  <h2>Référence</h2>\n  <p>Sélectionner la référence qui correspond</p>\n</div>\n<form [formGroup]=\"nidaForm\" (ngSubmit)=\"validate()\">\n\n  <ion-radio-group #radioGroup formControlName=\"ref\" required=\"true\" allowEmptySelection=\"true\">\n    <ion-item>\n      <ion-label>Autre :</ion-label>\n      <!-- <ion-radio slot=\"start\"></ion-radio> -->\n      <ion-radio slot=\"start\" [value]=\"manualInput.value\"></ion-radio>\n      <ion-input #manualInput type=\"text\" placeholder=\"entrée la référence du nida\">\n      </ion-input>\n    </ion-item>\n    <!-- TODO transformer le modèle pour éviter l'erreur -->\n    <ion-list *ngIf=\"(references$ | async) as references\">\n      <ion-item *ngFor=\"let reference of references['NIDA']\">\n        <ion-label>{{reference.ref}}</ion-label>\n        <ion-radio slot=\"start\" [value]=\"reference.ref\"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n  </ion-radio-group>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button type=\"submit\" color=success fill=solid [disabled]=\"nidaForm.invalid\">\n        Valider\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</form>\n";

/***/ }),

/***/ 50842:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Matériau non reconnu automatiquement</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" fullscreen=\"true\">\n  <div class=\"orinal-input\">\n    <h1>Entrée : <span color=\"primary\">{{batchNumber}}</span></h1>\n  </div>\n  <ion-item-divider>\n  </ion-item-divider>\n\n  <div class=\"type\">\n    <div class=\"label\">\n      <h1>Type de l'entrée</h1>\n      <p>Sélectionner le type de matériau</p>\n    </div>\n    <!-- // TODO ionic router -->\n    <ion-segment #materialSegment [(ngModel)]=\"selectedType\" scrollable=\"true\" swipeGesture=\"true\">\n      <ion-segment-button value=\"nida\">\n        <ion-label>Nida</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"densif\">\n        <ion-label>Densification</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"clinquant\">\n        <ion-label>Clinquant</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"insert\">\n        <ion-label>Insert</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <ng-container *ngIf=\"selectedType==='nida'\">\n    <app-nida [batchNumberInput]=\"batchNumber\" (nidaEmitter)=\"materialObject.next($event)\"></app-nida>\n  </ng-container>\n\n  <ng-container *ngIf=\"selectedType!=='nida'\">\n    Ce module est en cours de création\n\n  </ng-container>\n\n</ion-content>\n";

/***/ }),

/***/ 43296:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/molding/components/create-molding/scan-molding-input/scan-molding-input.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <div id=\"scan-input\"> -->\n<ion-button slot=start size=small #scanButton fill=solid size=default (click)=\"switchScanState()\">\n  {{scanButtonText}}\n</ion-button>\n<ion-spinner name=\"dots\" *ngIf=\"loading\"></ion-spinner>\n<ion-input slot=start #scanInput type=\"text\" placeholder=\"scanner une fiche de vie KIT ou un n°Outillage\"\n  (change)=\"onInputChange(scanInput.value.toString())\" (focusout)=\"inputOnBlur()\" (focusin)=\"inputOnFocus()\">\n</ion-input>\n<!-- </div> -->\n\n<!-- <ion-modal [isOpen]=\"isOpenNonExpiredMaterial\" (ionModalDidDismiss)=\"isOpenNonExpiredMaterial=false\" class=\"fullscreen\">\n  <ng-template>\n    <app-non-expired-material-input [originalInput]=\"scanInput.value.toString()\"></app-non-expired-material-input>\n  </ng-template>\n</ion-modal> -->\n";

/***/ }),

/***/ 6002:
/*!****************************************************************************************!*\
  !*** ./src/app/molding/components/molding-menu/molding-menu.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-menu #menu side=\"start\" type=\"push\" contentId=\"molding-content\">\n  <ion-header>\n    <ion-toolbar color=\"succes\">\n      <ion-title>\n        Menu Moulage\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-menu-toggle auto-hide=\"true\">\n        <ion-item [button]=\"true\" (click)=\"navigate('molding/create-molding')\">\n          <ion-label>\n            Nouveau moulage\n          </ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-item [button]=\"false\">\n        <ion-label>\n          Modifier moulage\n        </ion-label>\n        <ion-input #inputIdMolding type=\"text\" placeholder=\"\" (change)=\"idMoldingInputChange()\"></ion-input>\n        <ion-note slot=helper>Entrer un numéro d'ID ou scanner le code barre de la feuille de moulage</ion-note>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n";

/***/ }),

/***/ 80019:
/*!**********************************************************************************!*\
  !*** ./src/app/molding/pages/create-molding/create-molding.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-toolbar color=light class=\"ion-hide-md-down padding\">\n  <app-scan-molding-input slot=start></app-scan-molding-input>\n  <!-- <app-scan-molding-input slot=start (evOnInput)=\"onInput($event)\"></app-scan-molding-input> -->\n  <ion-button size=small slot=end (click)=\"(expanded = !expanded) ? accordion.openAll() : accordion.closeAll()\">\n    {{(!expanded) ? 'Développer tout' : 'Replier tout'}}</ion-button>\n</ion-toolbar>\n<ion-content *ngIf=\"molding$ | async as molding\">\n  <mat-accordion multi>\n    <!--  -->\n    <!-- LISTE DES KITS -->\n    <!--  -->\n    <mat-expansion-panel #kitPanel *ngIf=\"molding.kits.length >0\" [expanded]=\"(molding.kits.length >0)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <ion-title color=primary> Liste des Kits</ion-title>\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <app-molding-kit-table [kits]=molding.kits></app-molding-kit-table>\n    </mat-expansion-panel>\n\n    <!--  -->\n    <!-- LISTE DES MATERIAUX AUTRES -->\n    <!--  -->\n    <mat-expansion-panel *ngIf=\"molding.materialSupplementary?.length >0\"\n      [expanded]=\"(molding.materialSupplementary.length >0)\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <ion-title color=primary>Liste des nidas</ion-title>\n        </mat-panel-title>\n        <mat-panel-description>\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <app-molding-materials-table [molding]=\"molding\"></app-molding-materials-table>\n    </mat-expansion-panel>\n  </mat-accordion>\n</ion-content>\n\n\n<ion-footer class=\"ion-hide-md-down\">\n  <app-molding-info-toolbar [molding]=\"molding$ | async\"></app-molding-info-toolbar>\n  <app-create-molding-toolbar></app-create-molding-toolbar>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- footer -->\n<!-- <ion-tab-bar slot=\"bottom\" class=\"ion-hide-md-up\">\n  <ion-tab-button tab=\"schedule\">\n    <ion-icon name=\"link\"></ion-icon>\n    <ion-label>Outillage</ion-label>\n    <ion-badge>6</ion-badge>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"speakers\" (click)=\"kitAlertPrompt()\">\n    <ion-icon name=\"scan\"></ion-icon>\n    <ion-label>Scan kit</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"map\">\n    <ion-icon name=\"print\"></ion-icon>\n    <ion-label>Imprimer</ion-label>\n  </ion-tab-button>\n\n  <ion-tab-button tab=\"about\" (click)=\"saveMoldingClick()\">\n    <ion-icon name=\"save\"></ion-icon>\n    <ion-label>Sauvegarder</ion-label>\n  </ion-tab-button>\n</ion-tab-bar> -->\n";

/***/ }),

/***/ 5925:
/*!************************************************************!*\
  !*** ./src/app/molding/pages/molding.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<app-shared-user-header title=\"MOULAGE\"></app-shared-user-header>\r\n<ion-content color=medium>\r\n  <app-molding-menu></app-molding-menu>\r\n  <ion-router-outlet id=\"molding-content\"></ion-router-outlet>\r\n</ion-content>\r\n";

/***/ }),

/***/ 84664:
/*!********************************************************************************************!*\
  !*** ./src/app/molding/pages/print-molding-sheet/print-molding-sheet.page.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-menu-button color=\"light\"></ion-menu-button>\r\n    <ion-img class=\"logo\" src=\"assets/images/logoDaher.png\" (click)=\"navigateHome()\">\r\n    </ion-img>\r\n    <ion-title class=\"ion-align-center\">Feuille de traçabilité moulage</ion-title>\r\n    <svg slot=end id=\"barcode\"></svg>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"molding\" [fullscreen]=\"true\">\r\n\r\n  <div class=\"content-top ion-margin\">\r\n    <div>\r\n      <ion-title color=primary>Informations</ion-title>\r\n      <div class=\"flex-vertical\">\r\n        <ion-text>ID Moulage : {{molding.id}}</ion-text>\r\n        <ion-text>Outillage :\r\n          <span *ngIf=\"molding.outillage\">{{molding.OT.sapToolNumber}} - {{molding.OT.designation}}</span>\r\n          <span *ngIf=\"!molding.outillage\">Pas d'outillage lié !</span>\r\n        </ion-text>\r\n        <ion-text>Date traçabilité : {{molding.moldingDay | date:'dd/MM/yyyy'}}</ion-text>\r\n        <ion-text>Fait par : {{molding.userCreat.username}} ({{molding.userCreat.matricule}})</ion-text>\r\n        <ion-text *ngIf=\"molding.updatedAt\">\r\n          Date de mise à jour : {{molding.updatedAt | date: 'dd/MM/yyyy'}}\r\n        </ion-text>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <ion-title color=danger>Récapitulatif</ion-title>\r\n      <div class=\"important\">A draper avant le : {{molding.aDraperAv | date:'dd/MM/yyyy à HH:mm'}}</div>\r\n      <div class=\"important\">A polymériser avant le : {{molding.aCuireAv | date:'dd/MM/yyyy à HH:mm'}}</div>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <div class=\"kit-list ion-margin\">\r\n    <ion-title color=primary>Liste des kits ({{molding.kits.length}})</ion-title>\r\n\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n      <!-- ID MM Column -->\r\n      <ng-container matColumnDef=\"idMM\">\r\n        <th mat-header-cell *matHeaderCellDef> ID MM </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.idMM}} </td>\r\n      </ng-container>\r\n      <!-- REFERENCE SAP Column -->\r\n      <ng-container matColumnDef=\"referenceSAP\">\r\n        <th mat-header-cell *matHeaderCellDef> Référence SAP </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.referenceSAP}} </td>\r\n      </ng-container>\r\n      <!-- DESIGNATION Column -->\r\n      <ng-container matColumnDef=\"designationSAP\">\r\n        <th mat-header-cell *matHeaderCellDef> Désignation </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.designationSAP}} </td>\r\n      </ng-container>\r\n      <!-- PEREMPTION -18°C Column -->\r\n      <ng-container matColumnDef=\"peremptionMoins18\">\r\n        <th mat-header-cell *matHeaderCellDef> Date de péremption à -18°C </th>\r\n        <td mat-cell *matCellDef=\"let element\"\r\n          [style.color]=\"kitService.isPerim(element.peremptionMoins18, molding.moldingDay) ? 'var(--ion-color-danger)' : 'inherit'\">\r\n          {{element.peremptionMoins18 | date:'dd/MM/yyyy à HH:mm'}} </td>\r\n      </ng-container>\r\n      <!-- A DRAPER AVANT Column -->\r\n      <ng-container matColumnDef=\"aDrapAv\">\r\n        <th mat-header-cell *matHeaderCellDef> A draper avant </th>\r\n        <td mat-cell *matCellDef=\"let element\"\r\n          [style.color]=\"kitService.isPerim(element.aDrapAv, molding.moldingDay) ? 'var(--ion-color-danger)' : 'inherit'\">\r\n          {{element.aDrapAv | date:'dd/MM/yyyy à HH:mm'}} </td>\r\n      </ng-container>\r\n      <!-- A POLYMERISER AVANT Column -->\r\n      <ng-container matColumnDef=\"aCuirAv\">\r\n        <th mat-header-cell *matHeaderCellDef> A polym avant </th>\r\n        <td mat-cell *matCellDef=\"let element\"\r\n          [style.color]=\"kitService.isPerim(element.aCuirAv, molding.moldingDay) ? 'var(--ion-color-danger)' : 'inherit'\">\r\n          {{element.aCuirAv | date:'dd/MM/yyyy à HH:mm'}} </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let kit; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <div class=\"coreList ion-margin\" *ngIf=\"molding.materialSupplementary.length > 0\">\r\n    <div class=\"title\">Autres matériaux ({{molding.materialSupplementary.length}})</div>\r\n    <div class=\"list\">\r\n      <ion-item *ngFor=\"let mat of molding.materialSupplementary\">\r\n        <ion-label>{{mat.numLot | json}}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_molding_molding_module_ts.js.map