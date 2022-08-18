import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/_interfaces/user';
import { AlertService } from 'src/app/core/services/divers/alert.service';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-user-sheet',
  templateUrl: './user-sheet.component.html',
  styleUrls: ['./user-sheet.component.scss'],
})
export class UserSheetComponent {
  @Input() user: User;
  @Input() userState = false;
  @Output() stateChangeEv: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private userService: UsersService,
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
}
