import { Component, inject, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/_interfaces/user';

import { environment } from 'src/environments/environment';
import { UserPopoverComponent } from '../user-popover/user-popover.component';
import { Observable } from 'rxjs';
import { TitleService } from '../../services/title.service';
import { AuthStore } from '../../services/users/auth.store';
import { IonButton, IonButtons, IonChip, IonHeader, IonIcon, IonImg, IonLabel, IonMenuButton, IonTitle, IonToolbar, PopoverController } from '@ionic/angular/standalone';

@Component({
    selector: 'app-shared-user-header',
    templateUrl: './shared-user-header.component.html',
    styleUrls: ['./shared-user-header.component.scss'],
    standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonImg,
    IonTitle,
    IonLabel,
    IonChip,
    IonIcon
  ],
})
export class SharedUserHeaderComponent implements OnInit {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly popoverCtrl: PopoverController = inject(PopoverController);

  @Input()
  public title: string;
  @Input()
  public hideMenuIcon: boolean;

  private readonly authStore: AuthStore = inject(AuthStore);

  public user: User;
  public envMode: string;

  private title$: Observable<string>

  constructor(
    private navCtrl: NavController,

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
