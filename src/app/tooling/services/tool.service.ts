import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RequestService } from 'src/app/core/services/request.service';
import { AlertService } from 'src/app/core/services/divers/alert.service';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  constructor(
    private http: HttpClient,
    private requestService: RequestService,
    private alertService: AlertService,
  ) { }

  getToolByInput(inputOTValue: string) {
    return new Promise((resolve, reject) => {
      switch (inputOTValue.length) {
        case 5 || 6:
          this.getToolByToolNumber(inputOTValue)
            .subscribe((responseTool: Tool) => {
              resolve(responseTool);
            },
              (message: string) => {
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
              .subscribe((responseTool: Tool) => {
                resolve(responseTool);
              },
                (message: string) => {
                  this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
                  reject();
                });
          }
          break;

        default:
          this.getToolByIdentification(inputOTValue)
            .then((responseTool: Tool) => {
              resolve(responseTool);
            },
              (message: string) => {
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

  getToolById(idTool: string) {
    return this.requestService.createGetRequest(`${environment.toolApi}tools/${idTool}`);
  }

  getToolByToolNumber(toolNumber: string): Observable<Tool | undefined> {
    return this.requestService
    .createGetRequest(`${environment.toolApi}tools?sapToolNumber=${toolNumber}`)
      .pipe(
        map((returnsData: any) => {
          if (returnsData.length === 1) {
            const returnMoldingTool: Tool = returnsData[0];
            return returnMoldingTool;
          } else if (returnsData.length > 1) {
            console.error('Il y a plus d\'un outillage correspondant en base de donnée');
            return undefined;
          } else {
            console.error('aucun outillage trouvé');
            return undefined;
          }
        }));
  }

  getToolByIdentification(identification: string) {
    return new Promise((resolve, reject) => {
      this.requestService.createGetRequest(`${environment.toolApi}tools?identification=${identification}`)
        .subscribe((returnsData: any) => {
          if (returnsData.length === 1) {
            const returnMoldingTool: Tool = returnsData[0];
            resolve(returnMoldingTool);
          } else if (returnsData.length > 1) {
            reject('Il y a plus d\'un outillage correspondant en base de donnée');
          } else {
            reject('aucun outillage trouvé');
          }
        },
          (error) => {
            console.log(error);
            reject('Pas de réponse du serveur');
          });
    });
  }

  getAllTools() {
    return new Promise((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .append('content-type', 'application/json');
      // .append('Access-Control-Allow-Origins', 'http://localhost:8100/')
      // .append('Access-Control-Allow-methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');
      this.http.get(`${environment.apiServer}molding_tools`, { headers: httpHeaders })
        .subscribe((returnsData: any) => {
          resolve(returnsData);
        },
          (error) => {
            console.log(error);
            reject();
          });
    });
  }
  getIri(tool: Tool): string {
    return `/api/tools/${tool.id}`;
  }

  createTool(toolToCreate: Tool) {
    const tool: any = toolToCreate;
    tool.sapToolNumber = parseInt(toolToCreate.sapToolNumber.substring(2), 10);
    return this.requestService.createPostRequest(`${environment.toolApi}tools`, tool);
  }
}
