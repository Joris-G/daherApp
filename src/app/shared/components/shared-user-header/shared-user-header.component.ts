import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NavController, PopoverController } from '@ionic/angular';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from 'src/app/core/services/users/auth.service';

import { environment } from 'src/environments/environment';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { UserPopoverComponent } from '../user-popover/user-popover.component';
import { TitleService } from 'src/app/core/services/title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shared-user-header',
  templateUrl: './shared-user-header.component.html',
  styleUrls: ['./shared-user-header.component.scss'],
})
export class SharedUserHeaderComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public hideMenuIcon: boolean;

  public user: User;
  public envMode: string;

  private title$: Observable<string>

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private titleService: TitleService

  ) {
    this.user = this.authService.authUser;
    this.title$ = this.titleService.title.asObservable();
  }

  ngOnInit() {
    this.envMode = environment.name;
    this.title$.subscribe((titleEm) => {
      this.title = titleEm;
    });
  }

  logoutClick() {
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
