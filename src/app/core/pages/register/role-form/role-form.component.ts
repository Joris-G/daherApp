import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, zip } from 'rxjs';
import { IDivision } from 'src/app/_interfaces/division';
import { Poste } from 'src/app/_interfaces/poste';
import { IService } from 'src/app/_interfaces/service';
import { IUsine } from 'src/app/_interfaces/usine';
import { RoleService } from 'src/app/shared/services/users/role.service';
import { SericesService } from 'src/app/shared/services/users/serices.service';
import { SiteService } from 'src/app/shared/services/users/site.service';
import { UniteService } from 'src/app/shared/services/users/unite.service';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        IonicModule,
        NgIf,
        NgFor,
        AsyncPipe,
    ],
})
export class RoleFormComponent implements OnInit {
  @Input('formGroup')
  registerForm: FormGroup;

  datas$: Observable<[IUsine[], IDivision[], IService[], Poste[]]>
  constructor(
    private serviceService: SericesService,
    private siteService: SiteService,
    private uniteService: UniteService,
    private roleService: RoleService,
  ) {
    this.getDatas();
  }

  ngOnInit() {
    // this.getDatas();
  }
  private getDatas() {
    const services$ = this.serviceService.getServices();
    const roles$ = this.roleService.getRoles();
    const unites$ = this.uniteService.getUnites();
    const sites$ = this.siteService.getSites();
    this.datas$ = zip(sites$, unites$, services$, roles$);

  }

}
