import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { AuthService } from 'src/app/core/services/users/auth.service';

import packageJson from 'package.json';

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.css']
})
export class UserPopoverComponent implements OnInit {
  public isUserOpen = false;
  public version: string = packageJson.version;
  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.navCtrl.navigateRoot(path);
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
