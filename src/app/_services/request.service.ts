import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  createPutRequest(url: string, body: any): Promise<any> {
    const httpHeaders = new HttpHeaders()
      .set('X-HTTP-Method-Override', '*')
      .set('Accept', '/')
      .set('Content-Type', 'application/json')
      // .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Origin', '*');
    return new Promise<any>((resolve, reject) => {
      this.http.put(url, body, { headers: httpHeaders })
        .subscribe((returnDatas: any) => {
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
