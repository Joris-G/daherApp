import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  createPutRequest(url: string, body: any): Promise<any> {
    const httpHeaders = new HttpHeaders()
      // .append('X-HTTP-Method-Override', 'PUT')
      // .append('Allow', 'GET, POST, PUT, OPTIONS')
      // .append('Access-Control-Request-Method', 'PUT');
      .append('Content-Type', 'application/json')
      // .append('Content-Type', 'application/merge-patch+json');
      .append('Accept', 'application/json');
    // .append('Access-Control-Allow-Origins', 'http://localhost:8100/');
    // .append('Access-Control-Allow-Credentials', 'true');

    return new Promise<any>((resolve, reject) => {
      this.http.put<HttpResponse<any>>(url, body, { headers: httpHeaders })
        .subscribe((returnDatas: any) => {
          console.log(returnDatas);
          resolve(returnDatas);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }

  createGetRequest(url: string, options) {
    // this.http.get();
  }
}
