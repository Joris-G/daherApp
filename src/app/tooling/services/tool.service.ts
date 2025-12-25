import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  searchToolsByInput(inputOT: string): Observable<Tool[]> {
    const values = inputOT.split(' ');
    console.log(values);
    return this.getAllTools(values);
  // return this.getToolByToolNumber(inputOTValue)
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

  getAllTools(searchToolParams?: string[]): Observable<Tool[]> {
    let params = new HttpParams();
    if (searchToolParams && searchToolParams.length > 0) {
      searchToolParams.forEach(term => {
        params = params.append('search', term.trim());
    });
  }

    return this.http.get<Tool[]>(`api/tools`, { params });

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
