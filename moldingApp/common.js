"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 77106:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};




/***/ }),

/***/ 31395:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 42039:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3f6412b6.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowDown),
/* harmony export */   "b": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "c": () => (/* binding */ caretBackSharp),
/* harmony export */   "d": () => (/* binding */ chevronBack),
/* harmony export */   "e": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "f": () => (/* binding */ chevronForward),
/* harmony export */   "g": () => (/* binding */ chevronDown),
/* harmony export */   "h": () => (/* binding */ caretUpSharp),
/* harmony export */   "i": () => (/* binding */ caretDownSharp)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";




/***/ }),

/***/ 5375:
/*!*******************************************************!*\
  !*** ./src/app/_services/molding/kits/kit.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KitService": () => (/* binding */ KitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/request.service */ 48219);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 23815);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 71265);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 89258);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 51325);
/* harmony import */ var _divers_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../divers/alert.service */ 2853);







let KitService = class KitService {
    constructor(requestService, alertService) {
        this.requestService = requestService;
        this.alertService = alertService;
    }
    getKitById(id) {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi}datas_kits?page=1&idMM=${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((response) => this.log(response), (error) => {
            console.error(error);
            this.alertService.simpleAlert('Erreur Kit', 'Kit non conforme', 'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.');
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((returnsData) => {
            console.log(returnsData);
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
            console.log(kit);
            return kit;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => this.handleError(error, [])));
    }
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
        if (kits.length <= 0) {
            return false;
        }
        return kits.every(kit => kit.idMM === kitToTest.idMM);
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
    log(response) {
        console.table(response);
    }
    handleError(error, errorValue) {
        console.error(error);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(errorValue);
    }
};
KitService.ctorParameters = () => [
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_1__.RequestService },
    { type: _divers_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
KitService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)()
], KitService);



/***/ }),

/***/ 79528:
/*!***************************************************************!*\
  !*** ./src/app/_services/molding/moldings/molding.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingService": () => (/* binding */ MoldingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kits/kit.service */ 5375);
/* harmony import */ var src_app_services_tooling_tools_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/tooling/tools/tool.service */ 14224);
/* harmony import */ var src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/users/users.service */ 1824);
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/request.service */ 48219);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 89258);








/**
 * Service de gestion des kits
 *
 * @export
 * @class MoldingService
 */
let MoldingService = class MoldingService {
    /**
     * Creates an instance of MoldingService.
     *
     * @param kitService
     * @param toolService
     * @param userService
     * @param requestService
     * @memberof MoldingService
     */
    constructor(kitService, toolService, userService, requestService) {
        this.kitService = kitService;
        this.toolService = toolService;
        this.userService = userService;
        this.requestService = requestService;
    }
    /**
     *
     *
     * @param moldingObject
     * @return un observable
     * @memberof MoldingService
     */
    saveMolding(moldingObject) {
        return this.requestService.createPostRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi}moldings`, moldingObject)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((response) => {
            response.kits = this.moldingServerToMoldingObject(response);
            return response;
        }));
    }
    /**
     *
     *
     * @param moldingObject
     * @return observable
     * @memberof MoldingService
     */
    updateMolding(moldingObject) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi}moldings/${moldingObject.id}`;
        return this.requestService.createPatchRequest(url, moldingObject);
    }
    /**
     * Recalcul le kit le plus défavorable
     *
     * @param molding
     * @memberof MoldingService
     */
    updateDates(molding) {
        molding.aCuireAv = null;
        molding.aDraperAv = null;
        molding.matPolym = molding.kits.reduce((defPolym, kit) => (defPolym.aCuirAv > kit.aCuirAv) ? kit : defPolym);
        molding.aCuireAv = molding.matPolym.aCuirAv;
        molding.matDrap = molding.kits.reduce((defDrap, kit) => (defDrap.aDrapAv > kit.aDrapAv) ? kit : defDrap);
        molding.aDraperAv = molding.matDrap.aDrapAv;
        // molding.kits.forEach((kit: Kit) => {
        //   if (kit.aCuirAv < molding.aCuireAv || !molding.aCuireAv) {
        //     molding.aCuireAv = kit.aCuirAv;
        //     molding.matPolym = kit;
        //   }
        //   if (kit.aDrapAv < molding.aDraperAv || !molding.aDraperAv) {
        //     molding.aDraperAv = kit.aDrapAv;
        //     molding.matDrap = kit;
        //   }
        // });
    }
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
     * Construit un objet molding depuis le serveur.
     *
     * @param id id du mouage. C'est l'id qui est encodé sur le code barre de la fiche de moulage
     * @return
     * @memberof MoldingService
     */
    getMoldingById(id) {
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi}moldings/${id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((returnsData) => {
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
        return this.requestService.createGetRequest(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi}moldings`);
    }
    toIri(molding) {
        return {
            id: molding.id,
            kits: molding.kits.map((kit) => this.kitService.getIri(kit)),
            moldingDay: molding.moldingDay,
            createdBy: this.userService.getIri(molding.createdBy),
            outillage: (molding.OT) ? this.toolService.getIri(molding.OT) : null,
            aCuireAv: molding.aCuireAv,
            aDraperAv: molding.aDraperAv,
            matPolym: this.kitService.getIri(molding.matPolym),
            matDrap: this.kitService.getIri(molding.matDrap),
        };
    }
};
MoldingService.ctorParameters = () => [
    { type: _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__.KitService },
    { type: src_app_services_tooling_tools_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService },
    { type: src_app_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService }
];
MoldingService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], MoldingService);



/***/ })

}]);
//# sourceMappingURL=common.js.map