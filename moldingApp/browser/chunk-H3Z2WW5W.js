import {
  AlertService,
  AuthStore,
  HttpClient,
  HttpHeaders,
  Injectable,
  RequestService,
  Router,
  __decorate,
  environment,
  inject,
  map
} from "./chunk-BEQVXJQK.js";

// src/app/shared/services/users/role.guard.ts
var RoleGuard = class RoleGuard2 {
  authStore = inject(AuthStore);
  alerteService = inject(AlertService);
  router = inject(Router);
  canActivate(route) {
    const expectedRole = route.data.expectedRole;
    const isRole = this.isRole(expectedRole);
    if (!isRole) {
      this.alerteService.simpleAlert("Alerte de l'application", "Autorisation", "Vous n'avez pas acc\xE8s \xE0 cette page");
      this.router.navigate(["home"]);
    }
    return this.authStore.isAuthenticated() && isRole && this.authStore.user().isActive;
  }
  isRole(expectedRoles) {
    if (this.authStore.user()) {
      return expectedRoles.some((expectedRole) => this.authStore.user().roles.includes(expectedRole));
    }
    return false;
  }
};
RoleGuard = __decorate([
  Injectable({
    providedIn: "root"
  })
], RoleGuard);

// src/app/tooling/services/tool.service.ts
var ToolService = class ToolService2 {
  http;
  requestService;
  alertService;
  constructor(http, requestService, alertService) {
    this.http = http;
    this.requestService = requestService;
    this.alertService = alertService;
  }
  getToolByInput(inputOTValue) {
    return new Promise((resolve, reject) => {
      switch (inputOTValue.length) {
        case 5 | 6:
          this.getToolByToolNumber(inputOTValue).subscribe((responseTool) => {
            resolve(responseTool);
          }, (message) => {
            this.alertService.simpleAlert("Erreur", "Le serveur outillage \xE0 renvoy\xE9 une erreur :", message);
            reject();
          });
          break;
        case 7:
          break;
        case 8:
          if (inputOTValue.startsWith("OT")) {
            this.getToolByToolNumber(inputOTValue.substring(inputOTValue.length - 5)).subscribe((responseTool) => {
              resolve(responseTool);
            }, (message) => {
              this.alertService.simpleAlert("Erreur", "Le serveur outillage \xE0 renvoy\xE9 une erreur :", message);
              reject();
            });
          }
          break;
        default:
          this.getToolByIdentification(inputOTValue).then((responseTool) => {
            resolve(responseTool);
          }, (message) => {
            this.alertService.simpleAlert("Erreur", "Le serveur outillage \xE0 renvoy\xE9 une erreur :", message);
            reject();
          }).catch((error) => {
            console.error(error);
          });
          break;
      }
    });
  }
  getToolById(idTool) {
    return this.requestService.createGetRequest(`${environment.toolApi}tools/${idTool}`);
  }
  getToolByToolNumber(toolNumber) {
    return this.requestService.createGetRequest(`${environment.toolApi}tools?sapToolNumber=${toolNumber}`).pipe(map((returnsData) => {
      if (returnsData.length === 1) {
        const returnMoldingTool = returnsData[0];
        return returnMoldingTool;
      } else if (returnsData.length > 1) {
        console.error("Il y a plus d'un outillage correspondant en base de donn\xE9e");
        return void 0;
      } else {
        console.error("aucun outillage trouv\xE9");
        return void 0;
      }
    }));
  }
  getToolByIdentification(identification) {
    return new Promise((resolve, reject) => {
      this.requestService.createGetRequest(`${environment.toolApi}tools?identification=${identification}`).subscribe((returnsData) => {
        if (returnsData.length === 1) {
          const returnMoldingTool = returnsData[0];
          resolve(returnMoldingTool);
        } else if (returnsData.length > 1) {
          reject("Il y a plus d'un outillage correspondant en base de donn\xE9e");
        } else {
          reject("aucun outillage trouv\xE9");
        }
      }, (error) => {
        console.log(error);
        reject("Pas de r\xE9ponse du serveur");
      });
    });
  }
  getAllTools() {
    return new Promise((resolve, reject) => {
      const httpHeaders = new HttpHeaders().append("content-type", "application/json");
      this.http.get(`${environment.apiServer}molding_tools`, { headers: httpHeaders }).subscribe((returnsData) => {
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
    return this.http.post(`api/tools`, tool);
  }
  static ctorParameters = () => [
    { type: HttpClient },
    { type: RequestService },
    { type: AlertService }
  ];
};
ToolService = __decorate([
  Injectable({
    providedIn: "root"
  })
], ToolService);

export {
  RoleGuard,
  ToolService
};
//# sourceMappingURL=chunk-H3Z2WW5W.js.map
