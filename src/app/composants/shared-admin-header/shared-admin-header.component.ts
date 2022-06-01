import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from 'src/app/_services/users/auth.service';
import { NotificationsService } from 'src/app/_services/notifications/notifications.service';
import { Observable, Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';
@Component({
  selector: 'app-shared-admin-header',
  templateUrl: './shared-admin-header.component.html',
  styleUrls: ['./shared-admin-header.component.scss'],
})
export class SharedAdminHeaderComponent implements OnInit {
  public user: User;
  public documents: Observable<string>;
  public data: any;
  private docSub: Subscription;
  constructor(
    public authService: AuthService,
    private router: Router,
    private notificationsService: NotificationsService,
    private socket: Socket
  ) {

  }

  ngOnInit() {
    this.user = this.authService.authUser;
    this.socket.on('notification', data => {
      this.data = data;
    });
  }
  logoutClick() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
  notifyClick() {
    console.log('notify click');
    this.notificationsService.newNotif();
  }
}
