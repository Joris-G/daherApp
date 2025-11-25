import {
  ToolService
} from "./chunk-H3Z2WW5W.js";
import {
  AlertService,
  BehaviorSubject,
  HttpClient,
  Injectable,
  LoadingService,
  NavController,
  Pipe,
  RequestService,
  Subject,
  __decorate,
  environment,
  finalize,
  forkJoin,
  formatDate,
  map,
  of
} from "./chunk-BEQVXJQK.js";
import {
  __async
} from "./chunk-B3DYXOBH.js";

// src/app/molding/services/kit.service.ts
var KitService = class KitService2 {
  requestService;
  alertService;
  constructor(requestService, alertService) {
    this.requestService = requestService;
    this.alertService = alertService;
  }
  getKitById(id) {
    return this.requestService.createGetRequest(`${environment.moldingApi}datas_kits?page=1&idMM=${id}`).pipe(
      // takeWhile((returnsData) => returnsData.length > 0 ),
      map((returnsData) => {
        if (returnsData.length === 0) {
          this.alertService.simpleAlert(`Erreur`, `Kit non trouv\xE9`, `Veuillez r\xE9-essayer`);
          throw new Error(`aucun kit ne correspond au num\xE9ro : ${id}`);
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
      })
    );
  }
  // if (returnsData.length > 0) {
  // (error) => {
  //   console.error(error);
  isPerim(dateToCheck, baseDate) {
    return new Date(dateToCheck) < new Date(baseDate);
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
    return kits.some((kit) => kit.idMM === kitToTest.idMM);
  }
  getIri(kit) {
    return `/api/datas_kits/${kit.id}`;
  }
  updateKit(kit) {
    return this.requestService.createPatchRequest(`${environment.apiServer}/${environment.moldingApi}/datas_kits/${kit.id}`, kit);
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
  handleError(error, errorValue = "error") {
    this.alertService.simpleAlert("Erreur Kit", "Kit non conforme", "Il semble y avoir un probl\xE8me avec le kit scann\xE9. V\xE9rifier le kit et essayer de nouveau.");
    return of();
  }
  static ctorParameters = () => [
    { type: RequestService },
    { type: AlertService }
  ];
};
KitService = __decorate([
  Injectable({ providedIn: "root" })
], KitService);

// src/app/_interfaces/molding/molding.ts
var Molding = class {
  id;
  kits = [];
  moldingDay = /* @__PURE__ */ new Date();
  createdBy;
  outillage;
  aCuireAv;
  aDraperAv;
  matPolym;
  matDrap;
  woList;
  updatedAt;
  isActive = false;
  userCreat;
  OT;
  materialSupplementary = [];
  getIri() {
    return `api/moldings/${this.id}`;
  }
};
var MoldingStatus = class {
  moldingStatus = new BehaviorSubject({
    moldingStatus: false,
    kitStatus: false,
    toolStatus: false
  });
  toolStatus;
  kitStatus;
  constructor(toolStatus = false, kitStatus = false) {
    console.log("new molding status");
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
    const status = this.kitStatus && this.toolStatus;
    this.moldingStatus.next({
      moldingStatus: status,
      kitStatus: this.kitStatus,
      toolStatus: this.toolStatus
    });
  }
};

// src/app/molding/services/core.service.ts
var CoreService = class CoreService2 {
  getCoreByBatchNumber(batchNumber) {
    let returnBatchNumber = batchNumber.substring(5).split("~");
    returnBatchNumber = {
      partNumber: returnBatchNumber[0],
      batch1: returnBatchNumber[1],
      //TODO retirer les deux premiers caractères
      batch2: returnBatchNumber[2]
      // TODO batch3: trois derniers caractères de batch2
    };
    const core = {
      idCore: 1,
      batchNumber: returnBatchNumber
    };
    return of(core);
  }
  getIri(obj) {
    return `/api/additional_materials/${obj.id}`;
  }
};
CoreService = __decorate([
  Injectable({
    providedIn: "root"
  })
], CoreService);

// src/app/molding/services/other-materials.service.ts
var OtherMaterialsService = class OtherMaterialsService2 {
  requestService;
  constructor(requestService) {
    this.requestService = requestService;
  }
  addOne(mat) {
    return this.requestService.createPostRequest(`${environment.moldingApi}additional_materials`, mat);
  }
  static ctorParameters = () => [
    { type: RequestService }
  ];
};
OtherMaterialsService = __decorate([
  Injectable({
    providedIn: "root"
  })
], OtherMaterialsService);

// src/app/molding/services/molding.service.ts
var MoldingService = class MoldingService2 {
  kitService;
  matService;
  toolService;
  requestService;
  coreService;
  alertService;
  navCtrl;
  loadingService;
  http;
  molding = new Molding();
  molding$ = new BehaviorSubject(this.molding);
  toolStatus = new Subject();
  moldingStatus$;
  moldingStatus = new MoldingStatus();
  constructor(kitService, matService, toolService, requestService, coreService, alertService, navCtrl, loadingService, http) {
    this.kitService = kitService;
    this.matService = matService;
    this.toolService = toolService;
    this.requestService = requestService;
    this.coreService = coreService;
    this.alertService = alertService;
    this.navCtrl = navCtrl;
    this.loadingService = loadingService;
    this.http = http;
    this.moldingStatus$ = this.moldingStatus.moldingStatus.asObservable();
  }
  /**
   *Initilalise un nouveau moulage
   *
   * @memberof MoldingService
   */
  initMolding() {
    const newMolding = new Molding();
    this.updateMoldings(newMolding);
  }
  setToolStatus(status) {
    let toolStatus;
    if (status) {
      toolStatus = status;
    } else {
      toolStatus = !!this.molding.OT;
    }
    this.moldingStatus.setToolStatus(toolStatus);
  }
  setKitStatus() {
    const kitStatus = this.molding.kits.length > 0;
    this.moldingStatus.setKitStatus(kitStatus);
  }
  removeKit(index) {
    this.molding.kits.splice(index, 1);
    this.updateDates();
    this.updateMoldings();
  }
  /**
   *: Observable<Molding>
   *
   * @param moldingObject
   * @return un observable
   * @memberof MoldingService
   */
  saveMolding(print) {
    this.loadingService.startLoading("Sauvegarde du moulage en cours");
    const saveMethod = this.molding.id ? this.patchMolding() : this.postMolding();
    saveMethod.subscribe({
      next: (val) => {
        this.loadingService.stopLoading();
        this.molding = val;
      },
      error: (err) => {
        this.loadingService.stopLoading();
      }
    });
  }
  /**
   *
   *
   * Charge un id de moulage.
   *
   * @param moldingId
   * @memberof MoldingService
   */
  loadMolding(moldingId) {
    this.loadingService.startLoading("Patienter pendant le chargement du moulage");
    this.getMoldingById(moldingId).subscribe((molding) => {
      this.updateMoldings(molding);
      this.loadingService.stopLoading();
    }, (error) => {
      console.error(error);
      this.loadingService.stopLoading();
      this.alertService.simpleAlert("Erreur moulage", `Erreur de r\xE9cup\xE9ration du moulage`, `Le moulage <strong>${moldingId}</strong> n'existe pas`);
    });
  }
  /**
   * Recalcul le kit le plus défavorable
   *
   * @todo supprimer les lignes commentées
   * @param molding
   * @memberof MoldingService
   */
  updateDates() {
    this.molding.aCuireAv = null;
    this.molding.aDraperAv = null;
    if (this.molding.kits.length <= 0) {
      return;
    }
    this.molding.matPolym = this.molding.kits.reduce((defPolym, kit) => {
      if (defPolym.aCuirAv > kit.aCuirAv) {
        return kit;
      } else {
        return defPolym;
      }
    });
    this.molding.matDrap = this.molding.kits.reduce((defDrap, kit) => defDrap.aDrapAv > kit.aDrapAv && !kit.layupDate ? kit : defDrap);
    const smallest18Kit = this.molding.kits.reduce((previousKit, kit) => {
      if (previousKit.peremptionMoins18 > kit.peremptionMoins18) {
        return kit;
      }
      return previousKit;
    });
    if (this.molding.matPolym.aCuirAv < smallest18Kit.peremptionMoins18) {
      this.molding.aCuireAv = this.molding.matPolym.aCuirAv;
    } else {
      this.molding.aCuireAv = smallest18Kit.peremptionMoins18;
    }
    if (this.molding.matDrap.aDrapAv < smallest18Kit.peremptionMoins18) {
      this.molding.aDraperAv = this.molding.matDrap.aDrapAv;
    } else {
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
    return this.requestService.createGetRequest(`${environment.moldingApi}moldings/${id}`).pipe(map((returnsData) => {
      returnsData.kits = this.moldingServerToMoldingObject(returnsData);
      return returnsData;
    }));
  }
  addKit(kit) {
    const kitIsInKits = this.kitService.kitIsInKits(kit, this.molding.kits);
    if (!kitIsInKits) {
      this.molding.kits.push(kit);
      this.updateDates();
      this.updateMoldings();
    } else {
      this.alertService.presentToast("Le kit a d\xE9j\xE0 \xE9t\xE9 scann\xE9");
      console.error("kit en doublon");
    }
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
    this.alertService.presentToast("Outillage associ\xE9 !");
    this.setToolStatus(true);
    this.updateMoldings();
  }
  updateMoldings(updatedMolding) {
    if (updatedMolding) {
      this.molding = updatedMolding;
    }
    this.updateDates();
    this.setKitStatus();
    this.setToolStatus();
    this.molding$.next(this.molding);
  }
  cancelMolding() {
    return __async(this, null, function* () {
      const confirm = yield this.alertService.presentAlertConfirm(`Vous allez annuler ce moulage`, `Etes vous sur ?`);
      if (confirm) {
        this.molding.isActive = false;
        this.updateMoldings();
      }
    });
  }
  saveOtherMaterials() {
    return forkJoin(this.molding.materialSupplementary.map((mat) => this.matService.addOne(mat)));
  }
  postMolding() {
    const moldingIri = this.toIri();
    return this.requestService.createPostRequest(`${environment.moldingApi}moldings`, moldingIri, true);
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
    const url = `${environment.moldingApi}moldings/${moldingIri.id}`;
    return this.requestService.createPatchRequest(url, moldingIri).pipe(finalize(() => this.loadingService.stopLoading()));
  }
  toIri() {
    const molding = this.molding;
    return {
      id: molding.id,
      kits: molding.kits.map((kit) => this.kitService.getIri(kit)),
      materialSupplementary: molding.materialSupplementary.map((mat) => this.coreService.getIri(mat)),
      moldingDay: molding.moldingDay,
      // createdBy: this.userService.getIri(molding.createdBy),
      outillage: molding.OT ? this.toolService.getIri(molding.OT) : null,
      aCuireAv: molding.aCuireAv,
      aDraperAv: molding.aDraperAv,
      matPolym: this.kitService.getIri(molding.matPolym),
      matDrap: this.kitService.getIri(molding.matDrap)
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
    this.navCtrl.navigateForward(["molding/print-molding-sheet", this.molding.id]);
  }
  static ctorParameters = () => [
    { type: KitService },
    { type: OtherMaterialsService },
    { type: ToolService },
    { type: RequestService },
    { type: CoreService },
    { type: AlertService },
    { type: NavController },
    { type: LoadingService },
    { type: HttpClient }
  ];
};
MoldingService = __decorate([
  Injectable({ providedIn: "root" })
], MoldingService);

// src/app/_pipes/dateHeure.pipe.ts
var DateHeurePipe = class DateHeurePipe2 {
  transform(date) {
    if (date) {
      return formatDate(date, "dd/MM/yyyy \xE0 HH:mm", "FR");
    }
  }
};
DateHeurePipe = __decorate([
  Pipe({
    name: "DateHeure",
    standalone: true
  })
], DateHeurePipe);

export {
  KitService,
  CoreService,
  MoldingService,
  DateHeurePipe
};
//# sourceMappingURL=chunk-OJQZNTLX.js.map
