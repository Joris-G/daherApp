import { AfterViewInit, Component, effect, inject, OnInit, signal, viewChild, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
import { BadgeModule } from 'primeng/badge';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { buildMenu } from './menu-builder';
import { MenuService } from 'src/app/shared/services/menu.service';
import { Menu } from 'primeng/menu'

@Component({
  standalone: true,
    selector: 'app-tool-request-menu',
    templateUrl: './tool-request-menu.component.html',
    styleUrls: ['./tool-request-menu.component.css'],
  imports: [BadgeModule, DrawerModule, MenuModule]
})
export class ToolRequestMenuComponent implements OnInit {

  /** Signal pour contrôler l'ouverture de la sidebar */
  // public sidebarVisible = signal<boolean>(true);

  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly userService = inject(UsersService);
  private readonly authStore = inject(AuthStore);
  private readonly roleGuard = inject(RoleGuard);
  private readonly menuService = inject(MenuService);

  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  public newRequestsCount: number;
  public isManager = false;
  public newUsers$: Observable<User[]>;
  protected menu = viewChild<Menu>('menu');
  protected menuIsOpen = this.menuService.isOpen
  items: MenuItem[] | undefined;


  /** * Utilisation d'un getter/setter pour lier le signal du service 
   * à la propriété bidirectionnelle [(visible)] de PrimeNG 
   */
  public get sidebarVisible(): boolean {
    return this.menuService.isOpen();
  }

  public set sidebarVisible(value: boolean) {
    this.menuService.setMenuState(value);
  }


  constructor() {
    effect(() => {
      this.menuIsOpen();
      this.menu().toggle(new Event('click'))
      console.log('test');
    })
  }
  // *************************************************
  //  LIFECYCLE HOOKS   ******************************
  // *************************************************
  ngOnInit(): void {
    this.buildManagerPage();
    this.items = buildMenu(this.isManager);
  }


  // /**
  //  * Ferme le menu après une sélection (équivalent de ion-menu-toggle)
  //  */
  // public closeMenu(): void {
  //   this.sidebarVisible.set(false);
  // }

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
