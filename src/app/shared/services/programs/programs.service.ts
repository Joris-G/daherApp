import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
  private readonly http: HttpClient = inject(HttpClient);

  getPrograms(): Observable<ProgrammeAvion[]> {
    return this.http.get<ProgrammeAvion[]>(`${environment.usineApi}programme_avions`)
      .pipe(
        map((resp: any) => resp.data)
      );
  }

  getIri(programAvion: ProgrammeAvion | string): string {
    if (typeof (programAvion) == 'string') {
      return programAvion;
    } else {
      return `/api/programme_avions/${programAvion.id}`;
    }
  }
}
