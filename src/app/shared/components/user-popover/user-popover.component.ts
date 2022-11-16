import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { AuthService } from 'src/app/core/services/users/auth.service';

import packageJson from 'package.json';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.css']
})
export class UserPopoverComponent implements OnInit {
  public version: string = packageJson.version;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
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
      componentProps: { user: this.authService.authUser },
      animated: true,
      backdropDismiss: false,
    });
    userModal.present();
  }

  logoutClick() {
    this.loadingService.startLoading('Déconnexion');
    this.authService.logout()
      .subscribe(() => {
        this.loadingService.stopLoading();
        this.navCtrl.navigateRoot('/login');
      });
  }
}
