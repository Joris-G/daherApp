import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from 'src/app/_interfaces/roles';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
private readonly http = inject(HttpClient);

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`api/roles`);
  }
}
