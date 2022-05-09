import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/users/auth.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import { UsersService } from 'src/app/_services/users/users.service';
import { ToolRequestService } from 'src/app/_services/tooling/toolRequest/tool-request.service';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
@Component({
  selector: 'app-tool-request',
  templateUrl: './tool-request.page.html',
  styleUrls: ['./tool-request.page.scss'],
})
export class ToolRequestPage implements OnInit {

  @ViewChild('menuTool') menu: IonMenu;

  public page: any = {
    pageTitle: 'Module Outillage',
    menuTitle: 'Menu outillage',
    contentId: 'tooling-content'
  };

  public isManager = false;
  public newUsers: number;
  public newRequests: number;

  constructor(
    public router: Router,
    public navCtrl: NavController,
    private authService: AuthService,
    public roleGuard: RoleGuard,
    private userService: UsersService,
    private toolRequestService: ToolRequestService,
  ) { }

  ionViewWillEnter() {
    this.page = {
      pageTitle: 'Module Outillage',
      menuTitle: 'Menu outillage',
      contentId: 'tooling-content'
    };
    this.menu.open();
    if (this.isManager) { this.loadIndicators(); };
  }


  ngOnInit() {
    this.buildManagerPage();
  }

  buildManagerPage() {
    this.isManager = (this.roleGuard.isRole(['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL']) && this.authService.authUser.isActive);
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

  navigate(url: string) {
    this.navCtrl.navigateRoot(url);
  }
}
