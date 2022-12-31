import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { Router } from '@angular/router';
import { ToolRequestsService } from '../tool-requests/tool-requests-data/tool-requests.service';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-tool-request-menu',
  templateUrl: './tool-request-menu.component.html',
  styleUrls: ['./tool-request-menu.component.css']
})
export class ToolRequestMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('menuTool') menu: IonMenu;
  public newRequests: number;
  public newUsers: number;
  public isManager = false;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private userService: UsersService,
    private toolRequestsService: ToolRequestsService,
    private authService: AuthService,
    public roleGuard: RoleGuard,
  ) { }

  ngAfterViewInit(): void {
    if (this.router.url.endsWith('tooling')) {
      this.menu.open();
    }
  }

  ngOnInit(): void {
    this.buildManagerPage();
    if (this.isManager) { this.loadIndicators(); };
  }
  navigate(url: string) {
    this.navCtrl.navigateRoot(url);
  }

  loadIndicators() {
    this.userService.getUsersByService('5')
      .subscribe((responseService: any) => {
        this.newUsers = responseService.users.length;
      });


    // this.toolRequestsService.allToolRequests.asObservable()
    //   .subscribe((toolRequests: ToolRequest[]) => {
    //     this.newRequests = toolRequests.filter(request => request.statut === 'NOUVELLE').length;
    //   });
  }
  buildManagerPage() {
    this.isManager = (this.roleGuard.isRole(['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL']) && this.authService.authUser.isActive);
  }

}
