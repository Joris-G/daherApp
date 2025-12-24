import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tool, ToolCreation } from 'src/app/features/tooling/models/tool.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/services/divers/alert.service';



@Injectable({
  providedIn: 'root'
})
export class ToolService {
  constructor(
    private http: HttpClient,
    // private requestService: RequestService,
    private alertService: AlertService,
  ) { }

  getToolByInput(inputOTValue: string) {
    console.log(inputOTValue);
    return this.getToolByToolNumber(inputOTValue)
    // TODO gérer les erreurs
    // (message: string) => {
    //   this.alertService.simpleAlert('Erreur', 'Le serveur outillage à renvoyé une erreur :', message);
    //   reject();
    // });
  }

  getToolById(idTool: string): Observable<Tool> {
    return this.http.get<Tool>(`api/tools?${idTool}`);
  }

  getToolByToolNumber(toolNumber: string): Observable<Tool> {
    console.log(toolNumber);
    return this.http.get<Tool>(`api/tools`, { params: { sapToolNumber: toolNumber } });
  }

  getToolByIdentification(identification: string): Observable<Tool> {
    return this.http.get<Tool>(`api/tools/?identification=${identification}`);
  }

  getAllTools() {
    return new Promise((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .append('content-type', 'application/json');
      this.http.get(`api/molding_tools`, { headers: httpHeaders })
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

  createTool(toolToCreate: ToolCreation) {
    // toolToCreate.sapToolNumber = parseInt(toolToCreate.sapToolNumber.substring(2), 10);
    // console.log(tool);
    return this.http.post<Tool>(`api/tools`, toolToCreate);
  }
}
