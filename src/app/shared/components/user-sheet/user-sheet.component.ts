import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/_interfaces/user';
import { ModalController } from '@ionic/angular';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { AlertService } from '../../services/divers/alert.service';
import { LoadingService } from '../../services/divers/loading.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-user-sheet',
  templateUrl: './user-sheet.component.html',
  styleUrls: ['./user-sheet.component.scss'],
})
export class UserSheetComponent {
  @Input('user') user: User;
  @Output() stateChangeEv: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private userService: UsersService,
    private modalCtrl: ModalController,

  ) { }

  updateUserClick() {
    this.loadingService.startLoading('Mise à jour de l\'utilisateur');
    this.userService.updateUser(this.user)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.loadingService.stopLoading();
        },
        (err) => {
          console.error(err);
          this.loadingService.stopLoading();
          this.alertService.simpleAlert(
            `Erreur serveur`,
            `Problème lors de la mise à jour`,
            `L'utilisateur n'a pas été modifié. Veuillez recommencer.`
          );
        });
  }

  deleteUserClick() {
    this.loadingService.startLoading('Suppression de l\'utilisateur');
    this.userService.deleteUser(this.user.id)
      .subscribe(() => {
        this.loadingService.stopLoading();
      }, (err) => {
        this.alertService.simpleAlert(
          'Erreur',
          'Suppression d\'un utilisateur',
          'Une erreur est survenue pendant la suppression de l\'utilisateur. ' + err.message
        );
        this.loadingService.stopLoading();
      });
  }

  closeUserSheetClick() {
    this.modalCtrl.dismiss();
  }

  async updatePasswordClick() {
    const changePasswordModal = await this.modalCtrl.create({
      component: ChangePasswordComponent,
      cssClass: 'modal-adjusted'
    });
    changePasswordModal.present();
  }
}
