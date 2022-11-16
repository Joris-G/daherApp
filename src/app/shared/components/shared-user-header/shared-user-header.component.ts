import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from 'src/app/core/services/users/auth.service';

import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { UserPopoverComponent } from '../user-popover/user-popover.component';

@Component({
  selector: 'app-shared-user-header',
  templateUrl: './shared-user-header.component.html',
  styleUrls: ['./shared-user-header.component.scss'],
})
export class SharedUserHeaderComponent implements OnInit, OnDestroy {
  @Input()
  public title: string;
  @Input()
  public hideMenuIcon: boolean;

  public user: User;

  public envMode: string;

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,

  ) {
    this.user = this.authService.authUser;
  }
  ngOnDestroy(): void {
    console.log('destroy header');
  }

  ngOnInit() {
    this.envMode = environment.name;
  }

  logoutClick() {
    this.loadingService.startLoading('Déconnexion');
    this.authService.logout()
      .subscribe(() => {
        this.loadingService.stopLoading();
        this.navCtrl.navigateRoot('/login');
      });
  }

  async triggerUserPopover(ev: MouseEvent) {
    ev.preventDefault();
    const popover = await this.popoverCtrl.create({
      component: UserPopoverComponent,
      reference: 'trigger',
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
      dismissOnSelect: true
    });
    popover.present();
  }
  navigate(path: string) {
    this.navCtrl.navigateRoot(path);
  }

}
