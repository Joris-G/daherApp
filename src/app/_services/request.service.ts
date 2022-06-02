import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  public apiToken = '';
  private httpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json');
  private postHttpHeaders = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Accept', 'application/json')
    .append('Authorization', this.apiToken);
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

  createPostRequest(url: string, body: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(
      environment.apiServer + url,
      body,
      {
        headers: (this.apiToken !== '') ? new HttpHeaders()
          .append('Content-Type', 'application/json')
          .append('Accept', 'application/json')
          .append('x-auth-token', localStorage.getItem('token')) : this.httpHeaders
      });
  }

  createPutRequest(url: string, body: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${environment.apiServer}${url}`, body, {
      headers: (this.apiToken !== '') ? new HttpHeaders()
        .append('Content-Type', 'application/json')
        .append('Accept', 'application/json')
        .append('x-auth-token', localStorage.getItem('token')) : this.httpHeaders
    });
  }

  createPatchRequest(url: string, body: any) {
    return this.http.patch<any>(`${environment.apiServer}${url}`, body, {
      headers: (this.apiToken !== '') ? new HttpHeaders()
        .append('Accept', 'application/json')
        .append('Content-Type', 'application/merge-patch+json')
        .append('x-auth-token', localStorage.getItem('token')) : this.patchHttpHeaders
    });
  }

  createGetRequest(url: string): Observable<any> {
    return this.http.get(`${environment.apiServer}${url}`, { headers: this.httpHeaders });
  }

  createDeleteRequest(url: string): Observable<any> {
    return this.http.delete(`${environment.apiServer}${url}`, { headers: this.httpHeaders });
  }
}
