import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { Observable, Subscription } from 'rxjs';
// import { Socket } from 'ngx-socket-io';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { NotificationsService } from 'src/app/shared/services/notifications/notifications.service';
import { IonicModule } from '@ionic/angular';
import { AuthStore } from 'src/app/shared/services/users/auth.store';

@Component({
    selector: 'app-shared-admin-header',
    templateUrl: './shared-admin-header.component.html',
    styleUrls: ['./shared-admin-header.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class SharedAdminHeaderComponent implements OnInit, OnDestroy {
  private readonly authStore: AuthStore = inject(AuthStore);
  public user: User;
  public documents: Observable<string>;
  public data: any;
  private docSub: Subscription;
  constructor(

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
    this.user = this.authStore.user();
  }
  logoutClick() {
    this.authStore.logout();
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
  notifyClick() {
    console.log('notify click');
    this.notificationsService.newNotif();
  }

}
