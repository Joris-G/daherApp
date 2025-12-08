import { Component, input, OnInit } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, zip } from 'rxjs';
import { IDivision } from 'src/app/_interfaces/division';
import { IService } from 'src/app/_interfaces/service';
import { IUsine } from 'src/app/_interfaces/usine';
import { RoleService } from 'src/app/shared/services/users/role.service';
import { SericesService } from 'src/app/shared/services/users/serices.service';
import { SiteService } from 'src/app/shared/services/users/site.service';
import { UniteService } from 'src/app/shared/services/users/unite.service';
import { AsyncPipe } from '@angular/common';
import { Role } from 'src/app/_interfaces/roles';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { IonItem, IonLabel, IonProgressBar, IonSelect, IonSelectOption, IonText, IonList } from '@ionic/angular/standalone';


@Component({
    selector: 'app-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.scss'],
    standalone: true,
  imports: [IonList, 
        ReactiveFormsModule,
    CardComponent,
        AsyncPipe,
    IonItem,
    IonLabel,
    IonText,
    IonSelect, IonSelectOption, IonProgressBar
    ],
})
export class RoleFormComponent implements OnInit {
  public roleForm = input<AbstractControl>();

  datas$: Observable<[IUsine[], IDivision[], IService[], Role[]]>

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
