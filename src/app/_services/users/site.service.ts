import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usine } from 'src/app/_interfaces/usine';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  constructor(
    private requestService: RequestService
  ) { }

  getSites(): Observable<Usine[]> {
    return this.requestService.createGetRequest(`${environment.usineApi}usines`);
  }
}
