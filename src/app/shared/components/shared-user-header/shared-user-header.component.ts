import { Component, inject, Input, OnInit } from '@angular/core';
import { NavController, PopoverController, IonicModule } from '@ionic/angular';
import { User } from 'src/app/_interfaces/user';

import { environment } from 'src/environments/environment';
import { UserPopoverComponent } from '../user-popover/user-popover.component';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/divers/loading.service';
import { TitleService } from '../../services/title.service';
import { AuthService } from '../../services/users/auth.service';
import { NgIf } from '@angular/common';
import { AuthStore } from '../../services/users/auth.store';

@Component({
    selector: 'app-shared-user-header',
    templateUrl: './shared-user-header.component.html',
    styleUrls: ['./shared-user-header.component.scss'],
    standalone: true,
    imports: [IonicModule, NgIf],
})
export class SharedUserHeaderComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public hideMenuIcon: boolean;

  private readonly authStore: AuthStore = inject(AuthStore);

  public user: User;
  public envMode: string;

  private title$: Observable<string>

  constructor(
    private loadingService: LoadingService,
    private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private titleService: TitleService

  ) {
    this.user = this.authStore.user();
    this.title$ = this.titleService.title.asObservable();
  }

  ngOnInit() {
    this.envMode = environment.name;
    this.title$.subscribe((titleEm) => {
      this.title = titleEm;
    });
  }

  logoutClick() {
    this.authStore.logout();
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
