"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app__services_moldings_molding_service_ts"],{

/***/ 9922:
/*!***********************************************!*\
  !*** ./src/app/_services/kits/kit.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KitService": () => (/* binding */ KitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




const KIT = [
    {
        referenceSAP: 7172242,
        designationSAP: 'test Kit',
        idMM: '53454323-1',
        lotSAP: '',
        timeOut: 12.456,
        tackLife: 123.456,
        aCuirAv: new Date(2022, 1, 12),
        aDrapAv: new Date(2022, 1, 12),
        decongel: new Date(),
        peremptionMoins18: new Date(2022, 0, 12)
    },
    {
        referenceSAP: 7172345,
        designationSAP: 'test Kit 2',
        idMM: '5348949-1',
        lotSAP: '',
        timeOut: 12.456,
        tackLife: 123.456,
        aCuirAv: new Date(2022, 1, 12),
        aDrapAv: new Date(2022, 1, 9),
        decongel: new Date(),
        peremptionMoins18: new Date(2022, 2, 12)
    },
    {
        referenceSAP: 7174567,
        designationSAP: 'test Kit 3',
        idMM: '5343449-1',
        lotSAP: '',
        timeOut: 12.456,
        tackLife: 123.456,
        aCuirAv: new Date(2022, 0, 31),
        aDrapAv: new Date(2022, 0, 28),
        decongel: new Date(),
        peremptionMoins18: new Date(2022, 2, 12)
    },
    {
        referenceSAP: 7174567,
        designationSAP: 'test Kit 4',
        idMM: '5379449-1',
        lotSAP: '',
        timeOut: 12.456,
        tackLife: 123.456,
        aCuirAv: new Date(2022, 0, 12),
        aDrapAv: new Date(2022, 0, 31),
        decongel: new Date(),
        peremptionMoins18: new Date(2022, 2, 12)
    },
    {
        referenceSAP: 7174567,
        designationSAP: 'test Kit 5',
        idMM: '5337249-1',
        lotSAP: '',
        timeOut: 12.456,
        tackLife: 123.456,
        aCuirAv: new Date(2022, 0, 31),
        aDrapAv: new Date(2022, 0, 21),
        decongel: new Date(),
        peremptionMoins18: new Date(2022, 1, 12)
    }
];
let KitService = class KitService {
    constructor(http) {
        this.http = http;
    }
    getKitById(id) {
        return new Promise((resolve, reject) => {
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
                const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                    .set('content-type', 'application/json');
                this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}datas_kits?page=1&idMM=${id}`, { headers: httpHeaders })
                    .subscribe((returnsData) => {
                    console.log(returnsData);
                    if (returnsData.length !== 0) {
                        const returnKit = {
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
                        console.log(returnKit);
                        // this.updateDates(MOLDING);
                        resolve(returnKit);
                    }
                    else {
                        reject();
                    }
                }, (error) => {
                    console.log(error);
                    reject();
                });
            }
            else {
                resolve(KIT);
            }
        });
    }
    isPerim(dateToCheck, baseDate) {
        console.log(dateToCheck, baseDate);
        return (dateToCheck < baseDate);
    }
    /**
     * test si kit déjà dans le moulage
     *
     * @param {Kit} kitToTest
     * @param {Kit[]} kits
     * @return {*}  {boolean}
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
};
KitService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
KitService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], KitService);



/***/ }),

/***/ 6733:
/*!****************************************************************!*\
  !*** ./src/app/_services/moldingTools/molding-tool.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingToolService": () => (/* binding */ MoldingToolService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);




const TOOL_TEST = {
    id: 1234,
    identification: '34567',
    sapToolNumber: 'OT096932'
};
let MoldingToolService = class MoldingToolService {
    constructor(http) {
        this.http = http;
    }
    getToolByToolNumber(toolNumber) {
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders()
                .set('content-type', 'application/json');
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}molding_tools?sapToolNumber=${toolNumber}`, { headers: httpHeaders })
                .subscribe((returnsData) => {
                console.log(returnsData);
                if (returnsData.length === 1) {
                    const returnMoldingTool = returnsData[0];
                    console.log(returnMoldingTool);
                    resolve(returnMoldingTool);
                    // resolve(TOOL_TEST);
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
    getIri(moldingTool) {
        return `/api/molding_tools/${moldingTool.id}`;
    }
};
MoldingToolService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
MoldingToolService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], MoldingToolService);



/***/ }),

/***/ 7143:
/*!*******************************************************!*\
  !*** ./src/app/_services/moldings/molding.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingService": () => (/* binding */ MoldingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kits/kit.service */ 9922);
/* harmony import */ var _moldingTools_molding_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moldingTools/molding-tool.service */ 6733);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 2048);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request.service */ 3521);








/** @type {*} */
// const MOLDING: Molding = {
//   idMolding: 1,
//   moldingDay: new Date(),
//   aCuireAv: new Date(),
//   aDraperAv: new Date(12, 10, 1991),
//   moldingUser: {
//     idUser: 1,
//     mail: 'j.grangier@daher.com',
//     matricule: 204292,
//     nom: 'GRANGIER',
//     prenom: 'Joris',
//     role: 'Admin'
//   },
//   moldingTool: {
//     idMoldingTool: 1,
//     identification: '19650Z01-73P5522000C003',
//     sapToolNumber: 'OT096902'
//   },
//   kits: [
//     {
//       id: 0,
//       idMM: '53456765-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     },
//     {
//       id: 0,
//       idMM: '53456765-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234, createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     },
//     {
//       id: 0,
//       idMM: '52345675-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     },
//     {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }
//   ]
// };
let MoldingService = class MoldingService {
    constructor(kitService, moldingToolService, userService, requestService, http) {
        this.kitService = kitService;
        this.moldingToolService = moldingToolService;
        this.userService = userService;
        this.requestService = requestService;
        this.http = http;
    }
    saveMolding(moldingObject) {
        console.log(moldingObject);
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders()
                .set('content-type', 'application/json');
            // .set('Access-Control-Allow-Credentials', 'true');
            this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}moldings`, moldingObject, { headers: httpHeaders })
                .subscribe((returnsData) => {
                console.log(returnsData);
                resolve(returnsData);
            }, (error) => {
                console.error(error);
                reject();
            });
        });
    }
    updateMolding(moldingObject) {
        console.log(moldingObject);
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}moldings`;
        return this.requestService.createPutRequest(url, moldingObject);
    }
    updateDates(molding) {
        molding.aCuireAv = null;
        molding.aDraperAv = null;
        molding.kits.forEach((kit) => {
            if (kit.aCuirAv < molding.aCuireAv || !molding.aCuireAv) {
                molding.aCuireAv = kit.aCuirAv;
                molding.matPolym = kit;
            }
            if (kit.aDrapAv < molding.aDraperAv || !molding.aDraperAv) {
                molding.aDraperAv = kit.aDrapAv;
                molding.matDrap = kit;
            }
        });
    }
    moldingServerToMoldingObject(moldingToTransform) {
        const newListKit = [];
        moldingToTransform.kits.forEach(kitApi => {
            let newKit = null;
            newKit = {
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
            newListKit.push(newKit);
        });
        moldingToTransform.kits = newListKit;
        return moldingToTransform;
    }
    getMoldingById(id) {
        return new Promise((resolve, reject) => {
            const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders()
                .append('content-type', 'application/json');
            // .append('Access-Control-Allow-Origins', 'http://localhost:8100/')
            // .append('Access-Control-Allow-methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');
            this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer}moldings/${id}`, { headers: httpHeaders })
                .subscribe((returnsData) => {
                const newListKit = [];
                returnsData.kits.forEach(kitApi => {
                    let newKit = null;
                    newKit = {
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
                    newListKit.push(newKit);
                });
                returnsData.kits = newListKit;
                console.log(returnsData);
                resolve(returnsData);
            }, (error) => {
                console.log(error);
                reject();
            });
        });
    }
    toIri(molding) {
        return {
            id: molding.id,
            kits: molding.kits.map((kit) => this.kitService.getIri(kit)),
            moldingDay: molding.moldingDay,
            moldingUser: this.userService.getIri(molding.moldingUser),
            outillage: this.moldingToolService.getIri(molding.outillage),
            aCuireAv: molding.aCuireAv,
            aDraperAv: molding.aDraperAv,
            matPolym: this.kitService.getIri(molding.matPolym),
            matDrap: this.kitService.getIri(molding.matDrap),
        };
    }
};
MoldingService.ctorParameters = () => [
    { type: _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__.KitService },
    { type: _moldingTools_molding_tool_service__WEBPACK_IMPORTED_MODULE_2__.MoldingToolService },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService },
    { type: _request_service__WEBPACK_IMPORTED_MODULE_4__.RequestService },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
MoldingService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], MoldingService);



/***/ }),

/***/ 3521:
/*!**********************************************!*\
  !*** ./src/app/_services/request.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



let RequestService = class RequestService {
    constructor(http) {
        this.http = http;
    }
    createPutRequest(url, body) {
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders()
            // .append('X-HTTP-Method-Override', 'PUT')
            // .append('Allow', 'GET, POST, PUT, OPTIONS')
            // .append('Access-Control-Request-Method', 'PUT');
            .append('Content-Type', 'application/json')
            // .append('Content-Type', 'application/merge-patch+json');
            .append('Accept', 'application/json');
        // .append('Access-Control-Allow-Origins', 'http://localhost:8100/');
        // .append('Access-Control-Allow-Credentials', 'true');
        return new Promise((resolve, reject) => {
            this.http.put(url, body, { headers: httpHeaders })
                .subscribe((returnDatas) => {
                resolve(returnDatas);
            }, (error) => {
                console.error(error);
                reject();
            });
        });
    }
    createGetRequest(url, options) {
        // this.http.get();
    }
};
RequestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
RequestService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], RequestService);



/***/ })

}]);
//# sourceMappingURL=default-src_app__services_moldings_molding_service_ts.js.map