import { AfterViewInit, Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
import { BadgeModule } from 'primeng/badge';
import { DrawerModule } from 'primeng/drawer';


@Component({
  standalone: true,
    selector: 'app-tool-request-menu',
    templateUrl: './tool-request-menu.component.html',
    styleUrls: ['./tool-request-menu.component.css'],
  imports: [RouterLink, BadgeModule, DrawerModule]
})
export class ToolRequestMenuComponent implements OnInit {

  /** Signal pour contrôler l'ouverture de la sidebar */
  public sidebarVisible = signal<boolean>(true);

  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private userService = inject(UsersService);
  private authStore = inject(AuthStore);
  private roleGuard = inject(RoleGuard);


  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  public newRequestsCount: number;
  public isManager = false;
  public newUsers$: Observable<User[]>;


  // *************************************************
  //  LIFECYCLE HOOKS   ******************************
  // *************************************************
  ngOnInit(): void {
    this.buildManagerPage();
  }


  /**
   * Ferme le menu après une sélection (équivalent de ion-menu-toggle)
   */
  public closeMenu(): void {
    this.sidebarVisible.set(false);
  }

  public loadIndicators() {
    this.newUsers$ = this.userService.getUsersByService('5');
    // this.toolRequestsService.allToolRequests.asObservable()
    //   .subscribe((toolRequests: ToolRequest[]) => {
    //     this.newRequests = toolRequests.filter(request => request.statut === 'NOUVELLE').length;
    //   });
  }

  private buildManagerPage() {
    this.isManager = (this.roleGuard.isRole(['ADMIN', 'RESP_OUTIL', 'CE_OUTIL']));
    if (this.isManager) { this.loadIndicators(); };
  }

}
