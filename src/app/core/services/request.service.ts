import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, timeout } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/**
 * Service des requêtes.
 *
 * @export
 * @class RequestService
 */
@Injectable({
  providedIn: 'root'
})

export class RequestService {
  private httpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    // .append('Access-Control-Allow-Origin', 'http://localhost:8100')
    .append('Accept', 'application/json');
  private postHttpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json');
  private patchHttpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/merge-patch+json')
    .append('Accept', 'application/json');
  private deleteHttpHeaders = new HttpHeaders()
    .append('Accept', '*/*');

  /**
   * Creates an instance of RequestService.
   *
   * @param http client http Angular
   * @memberof RequestService
   */
  constructor(private http: HttpClient) { }

  createPostRequest(url: string, body: any, full = false): Observable<any> {
    return this.http.post<HttpResponse<any>>(
      environment.apiServer + url,
      body,
      {
        headers: this.httpHeaders
      })
      .pipe(
        map((val) => {
          if (val.status === 500) { throw (val); }
          console.table(val);
          return val;
        }),
        retry(3),
        // retryWhen(err=> {
        //   console.error(err);
        //   return of(null);
        // })
      );
  }

  createPutRequest(url: string, body: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${environment.apiServer}${url}`, body, {
      headers: this.httpHeaders
    })
      .pipe(
        timeout(1000),
        map((val) => {
          if (val.status === 500) { throw (val); }
          console.table(val);
          return val;
        }),
        retry(2),
        // retryWhen(err=> {
        //   console.error(err);
        //   return of(null);
        // })
      );
  }

  createPatchRequest(url: string, body: any) {
    return this.http.patch<any>(`${environment.apiServer}${url}`, body, {
      headers: this.patchHttpHeaders
    })
      .pipe(
        map((val) => {
          if (val.status === 500) { throw (val); }
          console.table(val);
          return val;
        }),
        retry(2),
        // retryWhen(err=> {
        //   console.error(err);
        //   return of(null);
        // })
      );
  }

  createGetRequest(url: string, params?: any): Observable<any> {
    return this.http.get<any>(`${environment.apiServer}${url}`, { headers: this.httpHeaders, params })
      .pipe(
        // timeout(15000),
        map((val) => {
          if (val.status === 500) { throw (val); }
          console.log(val);
          return val;
        }),
        retry(2),
        // catchError((err,test)=>{
        //   console.error(err);
        //   return of();
        // })
      );
  }

  createDeleteRequest(url: string): Observable<any> {
    return this.http.delete(`${environment.apiServer}${url}`, { headers: this.httpHeaders });
  }
}
