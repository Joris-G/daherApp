import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToolRequestsService } from '../tool-requests/tool-requests-data/tool-requests.service';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';

@Component({
  selector: 'app-tool-request-menu',
  templateUrl: './tool-request-menu.component.html',
  styleUrls: ['./tool-request-menu.component.css']
})
export class ToolRequestMenuComponent implements OnInit {
  @ViewChild('menuTool') menu: IonMenu;
  public newRequests: number;
  public isManager = false;
  public newUsers$: Observable<User[]>;
  private userService = inject(UsersService);
  private authService = inject(AuthService);
  private roleGuard = inject(RoleGuard);

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
    this.isManager = (this.roleGuard.isRole(['ROLE_ADMIN', 'ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL']) && this.authService.authUser.isActive);
    if (this.isManager) { this.loadIndicators(); };
  }

}
