import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { AuthService } from 'src/app/core/services/users/auth.service';
import { RoleGuard } from 'src/app/core/services/users/role.guard';
import { UsersService } from 'src/app/core/services/users/users.service';
import { Router } from '@angular/router';

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
    private toolRequestService: ToolRequestService,
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
    this.toolRequestService.getToolRequests()
      .subscribe((toolRequests: ToolRequest[]) => {
        this.newRequests = toolRequests.filter(request => request.statut === 'NOUVELLE').length;
      });
  }
  buildManagerPage() {
    this.isManager = (this.roleGuard.isRole(['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL']) && this.authService.authUser.isActive);
  }

}
