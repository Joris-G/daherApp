import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';
import { NgIf, AsyncPipe } from '@angular/common';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
import { IonHeader, IonMenu, IonTitle, IonToolbar, IonContent, IonList, IonItemDivider, IonLabel, IonMenuToggle, IonBadge, IonItem, IonItemGroup } from '@ionic/angular/standalone';

@Component({
    selector: 'app-tool-request-menu',
    templateUrl: './tool-request-menu.component.html',
    styleUrls: ['./tool-request-menu.component.css'],
    standalone: true,
  imports: [IonList, IonMenu, IonContent, RouterLink, NgIf, AsyncPipe, IonHeader, IonToolbar, IonTitle, IonItemDivider, IonLabel, IonMenuToggle, IonBadge, IonItem, IonItemGroup]
})
export class ToolRequestMenuComponent implements OnInit {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private userService = inject(UsersService);
  private authStore = inject(AuthStore);
  private roleGuard = inject(RoleGuard);


  @ViewChild('menuTool') menu: IonMenu;

  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  public newRequests: number;
  public isManager = false;
  public newUsers$: Observable<User[]>;

  ngOnInit(): void {
    this.buildManagerPage();
  }


  loadIndicators() {
    this.newUsers$ = this.userService.getUsersByService('5');
    // this.toolRequestsService.allToolRequests.asObservable()
    //   .subscribe((toolRequests: ToolRequest[]) => {
    //     this.newRequests = toolRequests.filter(request => request.statut === 'NOUVELLE').length;
    //   });
  }
  buildManagerPage() {
    this.isManager = (this.roleGuard.isRole(['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL']) && this.authStore.user().isActive);
    if (this.isManager) { this.loadIndicators(); };
  }

}
