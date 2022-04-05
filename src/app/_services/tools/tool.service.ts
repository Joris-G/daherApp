import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tool } from 'src/app/_interface/tool';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ToolService {


  constructor(
    private http: HttpClient,
    private requestService: RequestService
  ) { }
  getToolById(idTool: string) {
    return this.requestService.createGetRequest(`${environment.toolApi}tools/${idTool}`);
  }

  getToolByToolNumber(toolNumber: string) {
    return new Promise((resolve, reject) => {
      this.requestService.createGetRequest(`${environment.toolApi}tools?sapToolNumber=${toolNumber}`)
        .then((returnsData: any) => {
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
  getIri(moldingTool: Tool): string {
    return `/api/tools/${moldingTool.id}`;
  }

  createTool(toolToCreate: Tool) {
    const tool: any = toolToCreate;
    tool.sapToolNumber = parseInt(toolToCreate.sapToolNumber.substring(2), 10);
    return this.requestService.createPostRequest(environment.toolApi + 'tools', tool);
  }
}
