import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoldingTool } from 'src/app/_interface/molding-tool';
import { environment } from 'src/environments/environment';

const TOOL_TEST: MoldingTool = {
  idMoldingTool: 1,
  identification: '34567',
  sapToolNumber: 'OT096932'
};

@Injectable({
  providedIn: 'root'
})
export class MoldingToolService {

  constructor(private http: HttpClient) { }

  getToolByToolNumber(toolNumber: string) {
    return new Promise((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .set('content-type', 'application/json');
      this.http.get(`${environment.apiServer}molding_tools?sapToolNumber=${toolNumber}`, { headers: httpHeaders })
        .subscribe((returnsData: any) => {
          console.log(returnsData);
          if (returnsData.length === 1) {
            const returnMoldingTool: MoldingTool = returnsData[0];
            console.log(returnMoldingTool);
            resolve(returnMoldingTool);
            // resolve(TOOL_TEST);
          } else if (returnsData.length > 1) {
            console.log('Il y a plus d\'un outillage');
          } else {
            reject();
          }
        },
          (error) => {
            console.log(error);
            reject();
          });
    });
  }
}
