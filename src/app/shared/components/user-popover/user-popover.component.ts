import { Component, inject, OnInit } from '@angular/core';
import packageJson from 'package.json';
import { LoadingService } from '../../services/divers/loading.service';
import { UserSheetComponent } from '../user-sheet/user-sheet.component';
import { AuthStore } from '../../services/users/auth.store';
import { Router } from '@angular/router';

@Component({
  standalone: true,
    selector: 'app-user-popover',
    templateUrl: './user-popover.component.html',
    styleUrls: ['./user-popover.component.css'],
  imports: []
})
export class UserPopoverComponent implements OnInit {
  private readonly authStore: AuthStore = inject(AuthStore);
  public version: string = packageJson.version;
  constructor(
    private router: Router,
    private loadingService: LoadingService,
    // private modalCtrl: ModalController,
  ) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
  async editProfilClick() {
    // const userModal = await this.modalCtrl.create({
    //   component: UserSheetComponent,
    //   componentProps: { user: this.authStore.user() },
    //   animated: true,
    //   backdropDismiss: false,
    // });
    // userModal.present();
  }

  logoutClick() {
    this.loadingService.startLoading('Déconnexion');
    this.authStore.logout();
  }
}
