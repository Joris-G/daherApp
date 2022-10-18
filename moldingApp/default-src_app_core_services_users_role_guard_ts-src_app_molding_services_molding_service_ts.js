"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_core_services_users_role_guard_ts-src_app_molding_services_molding_service_ts"],{

/***/ 97729:
/*!************************************************!*\
  !*** ./src/app/_interfaces/molding/molding.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Molding": () => (/* binding */ Molding),
/* harmony export */   "MoldingStatus": () => (/* binding */ MoldingStatus)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);

/**
 * En base de donnée :
 *
 * matPolym &  matDrap : idKit le plus dévaforable respectivement pour la polym et pour le drapage
 * moldingUser : id
 * kits : boucler sur une autre table pour enregistrer les kits sur avec l'id de moulage en liaison
 *
 * @export
 * @interface Molding
 */
class Molding {
    constructor() {
        this.kits = [];
        this.moldingDay = new Date();
        this.materialSupplementary = [];
    }
    getIri() {
        return `api/moldings/${this.id}`;
    }
}
class MoldingStatus {
    constructor(toolStatus = false, kitStatus = false) {
        this.moldingStatus = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
            moldingStatus: false,
            kitStatus: false,
            toolStatus: false
        });
        console.log('new molding status');
        this.kitStatus = kitStatus;
        this.toolStatus = toolStatus;
        this.upDateMoldingStatus();
    }
    setToolStatus(status) {
        this.toolStatus = status;
        this.upDateMoldingStatus();
    }
    setKitStatus(status) {
        this.kitStatus = status;
        this.upDateMoldingStatus();
    }
    getToolStatus() {
        return this.toolStatus;
    }
    getKitStatus() {
        return this.kitStatus;
    }
    upDateMoldingStatus() {
        const status = (this.kitStatus && this.toolStatus);
        this.moldingStatus.next({
            moldingStatus: status,
            kitStatus: this.kitStatus,
            toolStatus: this.toolStatus
        });
    }
}


/***/ }),

/***/ 55786:
/*!***************************************************!*\
  !*** ./src/app/core/services/users/role.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../divers/alert.service */ 512);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 73919);





let RoleGuard = class RoleGuard {
    constructor(authService, alerteService, router) {
        this.authService = authService;
        this.alerteService = alerteService;
        this.router = router;
    }
    canActivate(route) {
        const expectedRole = route.data.expectedRole;
        const isRole = this.isRole(expectedRole);
        if (!isRole) {
            // console.error('Impossible d\'accéder à la page');
            this.alerteService.simpleAlert('Alerte de l\'application', 'Autorisation', 'Vous n\'avez pas accès à cette page');
            this.router.navigate(['home']);
        }
        return (this.authService.isAuth && isRole && this.authService.authUser.isActive);
    }
    isRole(expectedRoles) {
        // console.log(expectedRoles);
        if (this.authService.authUser) {
            return expectedRoles.some((expectedRole => this.authService.authUser.roles.includes(expectedRole)));
        }
        return false;
    }
};
RoleGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService },
    { type: _divers_alert_service__WEBPACK_IMPORTED_MODULE_0__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RoleGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], RoleGuard);



/***/ }),

/***/ 32961:
/*!**************************************************!*\
  !*** ./src/app/molding/services/core.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 64139);



let CoreService = class CoreService {
    getCoreByBatchNumber(batchNumber) {
        let returnBatchNumber = batchNumber.substring(5).split('~');
        returnBatchNumber = {
            partNumber: returnBatchNumber[0],
            batch1: returnBatchNumber[1],
            //TODO retirer les deux premiers caractères
            batch2: returnBatchNumber[2],
            // TODO batch3: trois derniers caractères de batch2
        };
        const core = {
            idCore: 1,
            batchNumber: returnBatchNumber
        };
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(core);
    }
    getIri(obj) {
        return `/api/additional_materials/${obj.id}`;
    }
};
CoreService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CoreService);



/***/ }),

/***/ 6015:
/*!*************************************************!*\
  !*** ./src/app/molding/services/kit.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KitService": () => (/* binding */ KitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/request.service */ 39305);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);







let KitService = class KitService {
    constructor(requestService, alertService) {
        this.requestService = requestService;
        this.alertService = alertService;
    }
    getKitById(id) {
        // const kitSubject: Subject<Kit> = new Subject();
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi}datas_kits?page=1&idMM=${id}`)
            .pipe(
        // takeWhile((returnsData) => returnsData.length > 0 ),
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((returnsData) => {
            if (returnsData.length === 0) {
                this.alertService.simpleAlert(`Erreur`, `Kit non trouvé`, `Veuillez ré-essayer`);
                throw new Error(`aucun kit ne correspond au numéro : ${id}`);
            }
            const kit = {
                id: returnsData[0].id,
                aCuirAv: returnsData[0].ACuirAv,
                aDrapAv: returnsData[0].ADrapAv,
                createdAt: returnsData[0].createdAt,
                decongel: returnsData[0].Decongel,
                designationSAP: returnsData[0].DesignationSAP,
                idMM: returnsData[0].idMM,
                lotSAP: returnsData[0].LotSAP,
                peremptionMoins18: returnsData[0].PeremptionMoins18,
                referenceSAP: returnsData[0].ReferenceSAP,
                status: returnsData[0].status,
                tackLife: returnsData[0].TackLife,
                timeOut: returnsData[0].TimeOut,
                updateAt: returnsData[0].updateAt
            };
            return kit;
        }));
        // return kitSubject;
    }
    // if (returnsData.length > 0) {
    // (error) => {
    //   console.error(error);
    isPerim(dateToCheck, baseDate) {
        return (new Date(dateToCheck) < new Date(baseDate));
    }
    /**
     * test si kit déjà dans le moulage
     *
     * @param kitToTest du type KIT
     * @param kits la liste des kits
     * @return retourne un boolean
     * @memberof KitService
     */
    kitIsInKits(kitToTest, kits) {
        return kits.some(kit => kit.idMM === kitToTest.idMM);
    }
    getIri(kit) {
        return `/api/datas_kits/${kit.id}`;
    }
    // private async wrongKitInputAlert() {
    //   const alert = await this.alertController.create({
    //     cssClass: 'my-custom-class',
    //     header: 'Erreur Kit',
    //     subHeader: 'Kit non conforme',
    //     message: 'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.',
    //     buttons: ['OK']
    //   });
    //   await alert.present();
    //   const { role } = await alert.onDidDismiss();
    //   // console.log('onDidDismiss resolved with role', role);
    // }
    handleError(error, errorValue = 'error') {
        // console.error(error);
        this.alertService.simpleAlert('Erreur Kit', 'Kit non conforme', 'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.');
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }
};
KitService.ctorParameters = () => [
    { type: src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
KitService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)()
], KitService);



/***/ }),

/***/ 4038:
/*!*****************************************************!*\
  !*** ./src/app/molding/services/molding.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingService": () => (/* binding */ MoldingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_interfaces_molding_molding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_interfaces/molding/molding */ 97729);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _kit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kit.service */ 6015);
/* harmony import */ var src_app_tooling_services_tool_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/tooling/services/tool.service */ 92644);
/* harmony import */ var src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/request.service */ 39305);
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core.service */ 32961);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);
/* harmony import */ var src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/divers/loading.service */ 74501);
/* harmony import */ var _other_materials_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other-materials.service */ 26702);














/**
 * Service de gestion des moulages
 *
 * @export
 * @class MoldingService
 */
let MoldingService = class MoldingService {
    constructor(kitService, matService, toolService, requestService, coreService, alertService, navCtrl, loadingService) {
        this.kitService = kitService;
        this.matService = matService;
        this.toolService = toolService;
        this.requestService = requestService;
        this.coreService = coreService;
        this.alertService = alertService;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.molding$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.toolStatus = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
        this.moldingStatus = new src_app_interfaces_molding_molding__WEBPACK_IMPORTED_MODULE_0__.MoldingStatus();
        this.moldingStatus$ = this.moldingStatus.moldingStatus.asObservable();
    }
    setToolStatus(status) {
        this.moldingStatus.setToolStatus(status);
    }
    setKitStatus(status) {
        this.moldingStatus.setKitStatus(status);
    }
    removeKit(index) {
        this.molding.kits.splice(index, 1);
        // this.saveMolding()
        this.updateDates();
        this.updateMoldings();
        this.updateKitStatus();
    }
    /**
     *: Observable<Molding>
     *
     * @param moldingObject
     * @return un observable
     * @memberof MoldingService
     */
    saveMolding(print) {
        // const check$: Observable<void> = this.checkMoldingDatas();
        // const savingOtherMat$: Observable<any[]> = this.saveOtherMaterials();
        // // const saveMolding: Observable<void>;
        // //TODO check les additionnal materials
        // savingOtherMat$
        //   .subscribe(
        //     (resp: AdditionalMaterial[]) => {
        //       console.log(resp);
        //       this.molding.materialSupplementary = resp;
        this.moldingIri = this.toIri();
        // resp.subscribe(() => {
        const saveMethod = (this.molding.id) ? this.patchMolding() : this.postMolding();
        saveMethod
            .subscribe((val) => {
            if (print) {
                this.printMolding();
            }
        });
        // });
        // });
        // },
        // (err) => {
        //   //TODO mettre en place un service d'erreur qui se chargera de créer les alertes ou non en fonction d'un param
        //   this.alertService.simpleAlert('La vérification du moulage a échoué', err.title, err.message);
        // });
    }
    loadMolding(moldingId) {
        this.loadingService.startLoading('Patienter pendant le chargement du moulage');
        // TODO à rebrancher qqp this.molding.updatedAt = new Date();
        this.getMoldingById(moldingId)
            .subscribe((molding) => {
            this.molding = molding;
            this.updateMoldings();
            this.setKitStatus(true);
            this.setToolStatus(true);
            this.loadingService.stopLoading();
        }, (error) => {
            console.error(error);
            this.loadingService.stopLoading();
            this.alertService.simpleAlert('Erreur moulage', `Erreur de récupération du moulage`, `Le moulage ${moldingId} n'existe pas`);
        });
    }
    /**
       * Vérifie les données du moulage :
       * # vérifie la présence de l'outillage
       * # vérifie s'il y a au moins un kit
       *
       * @return
       * @memberof CreateMoldingPage
       */
    // checkMoldingDatas(): void {
    //   // if (this.molding.OT === undefined) {
    //     // const missingToolMsg = 'Voulez-vous continuer sans outillage ?';
    //     this.alertService.presentAlertConfirm('OUTILLAGE MANQUANT', missingToolMsg)
    //       .then(
    //         (response) => {
    //           if (response) {
    //             this.moldingStatus.next(true);
    //           } else {
    //             const title = 'OUTILLAGE MANQUANT';
    //             const message = 'Veuillez renseigner l\'outillage de moulage';
    //             this.moldingStatus.next(false);
    //           }
    //         },
    //         (err) => {
    //           const title = `Outillage de moulage manquant`;
    //           const message = 'Il n\'y a pas eu de réponse de l\'utilisateur';
    //           this.moldingStatus.error(new Error(message));
    //         });
    //   // } else
    //    if (this.molding.kits.length === 0) {
    //     const title = 'Il n\'y a pas de kit';
    //     const message = `Pour insérer un kit matière munissez vous d'une fiche de vie et scannez le code barre.
    //           Si besoin d'aide complémentaire appelez le 06.87.89.24.25`;
    //     this.moldingStatus.error(new Error(message));
    //   } else {
    //     this.moldingStatus.next(true);
    //   }
    // }
    /**
     * Recalcul le kit le plus défavorable
     *
     * @todo supprimer les lignes commentées
     * @param molding
     * @memberof MoldingService
     */
    updateDates() {
        // REINITIALISATION
        this.molding.aCuireAv = null;
        this.molding.aDraperAv = null;
        if (this.molding.kits.length <= 0) {
            return;
        }
        // IDENTIFIER MATIERES DEFAVORABLES
        this.molding.matPolym = this.molding.kits.reduce((defPolym, kit) => {
            if (defPolym.aCuirAv > kit.aCuirAv) {
                return kit;
            }
            else {
                return defPolym;
            }
        });
        this.molding.matDrap = this.molding.kits.reduce((defDrap, kit) => (defDrap.aDrapAv > kit.aDrapAv) ? kit : defDrap);
        // RESULTATS DATE LIMITES EN PRENANT EN COMPTE LA POSSIBILITE DE DEPASSEMENT DE LA DATE A -18°C
        // console.log(molding.kits);
        const smallest18Kit = this.molding.kits.reduce((previousKit, kit) => {
            // console.log(previousKit.peremptionMoins18);
            // console.log(kit.peremptionMoins18);
            // console.log((previousKit.peremptionMoins18 > kit.peremptionMoins18));
            if (previousKit.peremptionMoins18 > kit.peremptionMoins18) {
                return kit;
            }
            return previousKit;
        });
        // A POLYMERIER AVANT LE :
        if (this.molding.matPolym.aCuirAv < smallest18Kit.peremptionMoins18) {
            this.molding.aCuireAv = this.molding.matPolym.aCuirAv;
        }
        else {
            this.molding.aCuireAv = smallest18Kit.peremptionMoins18;
        }
        // A DRAPER AVANT LE :
        if (this.molding.matDrap.aDrapAv < smallest18Kit.peremptionMoins18) {
            this.molding.aDraperAv = this.molding.matDrap.aDrapAv;
        }
        else {
            this.molding.aDraperAv = smallest18Kit.peremptionMoins18;
        }
    }
    /**
     * Construit un objet molding depuis le serveur.
     *
     * @param id id du mouage. C'est l'id qui est encodé sur le code barre de la fiche de moulage
     * @return
     * @memberof MoldingService
     */
    getMoldingById(id) {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.moldingApi}moldings/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((returnsData) => {
            returnsData.kits = this.moldingServerToMoldingObject(returnsData);
            return returnsData;
        }));
    }
    /**
     * Fonction utilisé dans la page d'administration pour lister tout les moulages.
     *
     * @return retourne la liste complète des moulages
     * @memberof MoldingService
     */
    getMoldings() {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.moldingApi}moldings`);
    }
    addKit(kit) {
        const kitIsInKits = this.kitService.kitIsInKits(kit, this.molding.kits);
        if (!kitIsInKits) {
            this.molding.kits.push(kit);
            this.updateDates();
            this.updateMoldings();
        }
        else {
            this.alertService.presentToast('Le kit a déjà été scanné');
            console.error('kit en doublon');
        }
        this.updateKitStatus();
    }
    addNida(material) {
        this.molding.materialSupplementary.push(material);
        this.updateMoldings();
    }
    /**
     * On  traite une entrée d'un Tool
     *
     * @private
     * @param toolObj
     * @memberof CreateMoldingPage
     */
    addTool(responseTool) {
        this.molding.OT = responseTool;
        this.alertService.presentToast('Outillage associé !');
        this.setToolStatus(true);
        this.updateMoldings();
    }
    updateKitStatus() {
        if (this.molding.kits.length > 0) {
            this.setKitStatus(true);
        }
        else {
            this.setKitStatus(false);
        }
    }
    saveOtherMaterials() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)(this.molding.materialSupplementary.map(mat => this.matService.addOne(mat)));
    }
    postMolding() {
        const moldingIri = this.toIri();
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.moldingApi}moldings`, moldingIri, true);
        // .pipe(
        //   map((response: any) => {
        //       response.kits = this.moldingServerToMoldingObject(response);
        //       return response;
        //     })
        //     );
    }
    /**
     *
     *
     * @param moldingObject
     * @return observable
     * @memberof MoldingService
     */
    patchMolding() {
        const moldingIri = this.toIri();
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.moldingApi}moldings/${moldingIri.id}`;
        return this.requestService.createPatchRequest(url, moldingIri);
    }
    updateMoldings() {
        this.molding$.next(this.molding);
    }
    toIri() {
        const molding = this.molding;
        return {
            id: molding.id,
            kits: molding.kits.map((kit) => this.kitService.getIri(kit)),
            materialSupplementary: molding.materialSupplementary.map((mat) => this.coreService.getIri(mat)),
            moldingDay: molding.moldingDay,
            // createdBy: this.userService.getIri(molding.createdBy),
            outillage: (molding.OT) ? this.toolService.getIri(molding.OT) : null,
            aCuireAv: molding.aCuireAv,
            aDraperAv: molding.aDraperAv,
            matPolym: this.kitService.getIri(molding.matPolym),
            matDrap: this.kitService.getIri(molding.matDrap),
        };
    }
    //TODO à supprimer
    /**
     * Cette fonction sera à détruire une fois l'issue gitHub #23 sera résolue
     * https://github.com/Joris-G/daherApp/issues/23
     *
     * @param moldingToTransform
     * @return objet moulage converti depuis la donnée reçue du serveur
     * @memberof MoldingService
     */
    moldingServerToMoldingObject(moldingToTransform) {
        return moldingToTransform.kits.map((kitApi) => {
            const kit = {
                aCuirAv: kitApi.ACuirAv,
                aDrapAv: kitApi.ADrapAv,
                createdAt: kitApi.createdAt,
                decongel: kitApi.Decongel,
                designationSAP: kitApi.DesignationSAP,
                id: kitApi.id,
                idMM: kitApi.idMM,
                lotSAP: kitApi.LotSAP,
                peremptionMoins18: kitApi.PeremptionMoins18,
                referenceSAP: kitApi.ReferenceSAP,
                status: kitApi.status,
                tackLife: kitApi.TackLife,
                timeOut: kitApi.TimeOut
            };
            return kit;
        });
    }
    /**
  * Navigue vers l'impression des moulages
  *
  * @private
  * @memberof CreateMoldingPage
  */
    printMolding() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(this.navCtrl.navigateForward(['molding/print-molding-sheet', this.molding.id]));
    }
};
MoldingService.ctorParameters = () => [
    { type: _kit_service__WEBPACK_IMPORTED_MODULE_2__.KitService },
    { type: _other_materials_service__WEBPACK_IMPORTED_MODULE_8__.OtherMaterialsService },
    { type: src_app_tooling_services_tool_service__WEBPACK_IMPORTED_MODULE_3__.ToolService },
    { type: src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService },
    { type: _core_service__WEBPACK_IMPORTED_MODULE_5__.CoreService },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: src_app_core_services_divers_loading_service__WEBPACK_IMPORTED_MODULE_7__.LoadingService }
];
MoldingService = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)({
        providedIn: 'root'
    })
], MoldingService);



/***/ }),

/***/ 26702:
/*!*************************************************************!*\
  !*** ./src/app/molding/services/other-materials.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherMaterialsService": () => (/* binding */ OtherMaterialsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/request.service */ 39305);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);




let OtherMaterialsService = class OtherMaterialsService {
    constructor(requestService) {
        this.requestService = requestService;
    }
    addOne(mat) {
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.moldingApi}additional_materials`, mat);
        // .subscribe(
        //   () => {
        //     console.log('materiau ajouté');
        //   },
        //   (err) => {
        //     console.error('Erreur lors de l\'ajout du matériau', err);
        //   });
    }
};
OtherMaterialsService.ctorParameters = () => [
    { type: src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_0__.RequestService }
];
OtherMaterialsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], OtherMaterialsService);



/***/ }),

/***/ 92644:
/*!**************************************************!*\
  !*** ./src/app/tooling/services/tool.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolService": () => (/* binding */ ToolService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/request.service */ 39305);
/* harmony import */ var src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/divers/alert.service */ 512);







let ToolService = class ToolService {
    constructor(http, requestService, alertService) {
        this.http = http;
        this.requestService = requestService;
        this.alertService = alertService;
    }
    getToolByInput(inputOTValue) {
        return new Promise((resolve, reject) => {
            switch (inputOTValue.length) {
                case 5 || 0:
                    this.getToolByToolNumber(inputOTValue)
                        .subscribe((responseTool) => {
                        resolve(responseTool);
                    }, (message) => {
                        this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
                        reject();
                    });
                    break;
                case 7:
                    // this.toolService.getEquipement()
                    break;
                case 8:
                    if (inputOTValue.startsWith('OT')) {
                        this.getToolByToolNumber(inputOTValue.substring(inputOTValue.length - 5))
                            .subscribe((responseTool) => {
                            resolve(responseTool);
                        }, (message) => {
                            this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
                            reject();
                        });
                    }
                    break;
                default:
                    this.getToolByIdentification(inputOTValue)
                        .then((responseTool) => {
                        resolve(responseTool);
                    }, (message) => {
                        this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
                        reject();
                    })
                        .catch((error) => {
                        console.error(error);
                    });
                    break;
            }
        });
    }
    getToolById(idTool) {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.toolApi}tools/${idTool}`);
    }
    getToolByToolNumber(toolNumber) {
        return this.requestService
            .createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.toolApi}tools?sapToolNumber=${toolNumber}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((returnsData) => {
            if (returnsData.length === 1) {
                const returnMoldingTool = returnsData[0];
                return returnMoldingTool;
            }
            else if (returnsData.length > 1) {
                console.error('Il y a plus d\'un outillage correspondant en base de donnée');
                return undefined;
            }
            else {
                console.error('aucun outillage trouvé');
                return undefined;
            }
        }));
    }
    getToolByIdentification(identification) {
        return new Promise((resolve, reject) => {
            this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.toolApi}tools?identification=${identification}`)
                .subscribe((returnsData) => {
                if (returnsData.length === 1) {
                    const returnMoldingTool = returnsData[0];
                    resolve(returnMoldingTool);
                }
                else if (returnsData.length > 1) {
                    reject('Il y a plus d\'un outillage correspondant en base de donnée');
                }
                else {
                    reject('aucun outillage trouvé');
                }
            }, (error) => {
                console.log(error);
                reject('Pas de réponse du serveur');
            });
        });
    }
    getAllTools() {
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders()
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
    getIri(tool) {
        return `/api/tools/${tool.id}`;
    }
    createTool(toolToCreate) {
        const tool = toolToCreate;
        tool.sapToolNumber = parseInt(toolToCreate.sapToolNumber.substring(2), 10);
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.toolApi}tools`, tool);
    }
};
ToolService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: src_app_core_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService },
    { type: src_app_core_services_divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
ToolService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], ToolService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_users_role_guard_ts-src_app_molding_services_molding_service_ts.js.map