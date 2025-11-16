import { Component, inject, OnInit } from '@angular/core';
import { ModalController, NavController, IonicModule } from '@ionic/angular';
import packageJson from 'package.json';
import { LoadingService } from '../../services/divers/loading.service';
import { AuthService } from '../../services/users/auth.service';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';
import { AuthStore } from '../../services/users/auth.store';

@Component({
    selector: 'app-user-popover',
    templateUrl: './user-popover.component.html',
    styleUrls: ['./user-popover.component.css'],
    standalone: true,
    imports: [IonicModule]
})
export class UserPopoverComponent implements OnInit {
  private readonly authStore: AuthStore = inject(AuthStore);
  public version: string = packageJson.version;
  constructor(
    private navCtrl: NavController,
    private loadingService: LoadingService,
    private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.navCtrl.navigateRoot(path);
  }
  async editProfilClick() {
    const userModal = await this.modalCtrl.create({
      component: UserSheetComponent,
      componentProps: { user: this.authStore.user() },
      animated: true,
      backdropDismiss: false,
    });
    userModal.present();
  }

  logoutClick() {
    this.loadingService.startLoading('Déconnexion');
    this.authStore.logout();
  }
}
