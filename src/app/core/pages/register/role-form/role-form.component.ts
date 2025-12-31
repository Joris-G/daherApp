import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, zip } from 'rxjs';
import { Division } from 'src/app/_interfaces/division';
import { Service } from 'src/app/_interfaces/service';
import { Usine } from 'src/app/_interfaces/usine';
import { RoleService } from 'src/app/shared/services/users/role.service';
import { SericesService } from 'src/app/shared/services/users/serices.service';
import { SiteService } from 'src/app/shared/services/users/site.service';
import { UniteService } from 'src/app/shared/services/users/unite.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Role } from 'src/app/_interfaces/roles';
import { CardComponent } from 'src/app/shared/components/card/card.component';


@Component({
  standalone: true,
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.scss'],
  imports: [
    ReactiveFormsModule,
        CardComponent,
        AsyncPipe,
    JsonPipe,
    ]
})
export class RoleFormComponent {
  public roleForm = input.required<FormGroup>();

  datas$: Observable<[Usine[], Division[], Service[], Role[]]>

  constructor(
    private serviceService: SericesService,
    private siteService: SiteService,
    private uniteService: UniteService,
    private roleService: RoleService,
  ) {
    this.getDatas();
  }

  private getDatas() {
    const services$ = this.serviceService.getServices();
    const roles$ = this.roleService.getRoles();
    const unites$ = this.uniteService.getUnites();
    const sites$ = this.siteService.getSites();
    this.datas$ = zip(sites$, unites$, services$, roles$);

  }

}
