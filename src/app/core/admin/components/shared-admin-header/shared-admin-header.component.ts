import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { Observable, Subscription } from 'rxjs';
// import { Socket } from 'ngx-socket-io';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';

@Component({
  selector: 'app-shared-admin-header',
  templateUrl: './shared-admin-header.component.html',
  styleUrls: ['./shared-admin-header.component.scss'],
})
export class SharedAdminHeaderComponent implements OnInit, OnDestroy {
  public user: User;
  public documents: Observable<string>;
  public data: any;
  private docSub: Subscription;
  constructor(
    public authService: AuthService,
    private router: Router,
    private notificationsService: NotificationsService,
    // private socket: Socket
  ) {

  }
  ngOnDestroy(): void {
    // this.socket.disconnect();
  }
  ionViewDidLeave() {
    console.log('view did leave');
    // this.socket.disconnect();
  }

  ngOnInit() {
    this.user = this.authService.authUser;
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
