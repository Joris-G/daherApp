"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app__services_moldings_molding_service_ts"],{

/***/ 29922:
/*!***********************************************!*\
  !*** ./src/app/_services/kits/kit.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KitService": () => (/* binding */ KitService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);




// const KIT: any[] = [
//   {
//     referenceSAP: 7172242,
//     designationSAP: 'test Kit',
//     idMM: '53454323-1',
//     lotSAP: '',
//     timeOut: 12.456,
//     tackLife: 123.456,
//     aCuirAv: new Date(2022, 1, 12),
//     aDrapAv: new Date(2022, 1, 12),
//     decongel: new Date(),
//     peremptionMoins18: new Date(2022, 0, 12)
//   },
//   {
//     referenceSAP: 7172345,
//     designationSAP: 'test Kit 2',
//     idMM: '5348949-1',
//     lotSAP: '',
//     timeOut: 12.456,
//     tackLife: 123.456,
//     aCuirAv: new Date(2022, 1, 12),
//     aDrapAv: new Date(2022, 1, 9),
//     decongel: new Date(),
//     peremptionMoins18: new Date(2022, 2, 12)
//   },
//   {
//     referenceSAP: 7174567,
//     designationSAP: 'test Kit 3',
//     idMM: '5343449-1',
//     lotSAP: '',
//     timeOut: 12.456,
//     tackLife: 123.456,
//     aCuirAv: new Date(2022, 0, 31),
//     aDrapAv: new Date(2022, 0, 28),
//     decongel: new Date(),
//     peremptionMoins18: new Date(2022, 2, 12)
//   },
//   {
//     referenceSAP: 7174567,
//     designationSAP: 'test Kit 4',
//     idMM: '5379449-1',
//     lotSAP: '',
//     timeOut: 12.456,
//     tackLife: 123.456,
//     aCuirAv: new Date(2022, 0, 12),
//     aDrapAv: new Date(2022, 0, 31),
//     decongel: new Date(),
//     peremptionMoins18: new Date(2022, 2, 12)
//   },
//   {
//     referenceSAP: 7174567,
//     designationSAP: 'test Kit 5',
//     idMM: '5337249-1',
//     lotSAP: '',
//     timeOut: 12.456,
//     tackLife: 123.456,
//     aCuirAv: new Date(2022, 0, 31),
//     aDrapAv: new Date(2022, 0, 21),
//     decongel: new Date(),
//     peremptionMoins18: new Date(2022, 1, 12)
//   }];
let KitService = class KitService {
    constructor(http) {
        this.http = http;
    }
    getKitById(id) {
        return new Promise((resolve, reject) => {
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
        });
    }
    isPerim(dateToCheck, baseDate) {
        return (new Date(dateToCheck) < new Date(baseDate));
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

/***/ 7143:
/*!*******************************************************!*\
  !*** ./src/app/_services/moldings/molding.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoldingService": () => (/* binding */ MoldingService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kits/kit.service */ 29922);
/* harmony import */ var _tools_tool_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/tool.service */ 26188);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users.service */ 82048);
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request.service */ 33521);








let MoldingService = class MoldingService {
    constructor(kitService, toolService, userService, requestService, http) {
        this.kitService = kitService;
        this.toolService = toolService;
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
            this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiServer + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi, moldingObject, { headers: httpHeaders })
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
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi + moldingObject.id;
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
            this.requestService.createGetRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi + 'moldings/' + id)
                .then((returnsData) => {
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
    getMoldings() {
        return this.requestService.createGetRequest(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.moldingApi + 'moldings');
    }
    toIri(molding) {
        return {
            id: molding.id,
            kits: molding.kits.map((kit) => this.kitService.getIri(kit)),
            moldingDay: molding.moldingDay,
            createdBy: this.userService.getIri(molding.createdBy),
            outillage: this.toolService.getIri(molding.outillage),
            aCuireAv: molding.aCuireAv,
            aDraperAv: molding.aDraperAv,
            matPolym: this.kitService.getIri(molding.matPolym),
            matDrap: this.kitService.getIri(molding.matDrap),
        };
    }
};
MoldingService.ctorParameters = () => [
    { type: _kits_kit_service__WEBPACK_IMPORTED_MODULE_1__.KitService },
    { type: _tools_tool_service__WEBPACK_IMPORTED_MODULE_2__.ToolService },
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



/***/ })

}]);
//# sourceMappingURL=default-src_app__services_moldings_molding_service_ts.js.map