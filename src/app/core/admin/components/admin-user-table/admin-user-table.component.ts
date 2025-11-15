import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { UserSheetComponent } from 'src/app/shared/components/user-sheet/user-sheet.component';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { UsersService } from 'src/app/shared/services/users/users.service';


const usersRole = {
  'ROLE_USER': 'Utilisateur',
  'ROLE_METHODES': 'Préparateur',
  'ROLE_CE_OUTIL': 'Chef d\'équipe outillage',
  'ROLE_MOULEUR': 'Mouleur',
  'ROLE_ADMIN': 'Administrateur'

};

const getRole = (role: string): string => usersRole[role];
@Component({
  selector: 'app-admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.scss'],
})
export class AdminUserTableComponent implements OnInit {
  public users$: Observable<User[]>;
  constructor(
    private userService: UsersService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private modalCtrl: ModalController,
  ) {
  }

  ngOnInit() {
    this.users$ = this.userService.getUsers()
      .pipe(
        map(users => users
          .map(user => {
            user.roles = user.roles
              .map(role => {
                const newRole = getRole(role);
                if (newRole) { return newRole; }
                return role;
              });
            return user;
          }))
      );
  }

  async onSelectUser(selectedUser: User) {
    const modal = await this.modalCtrl.create({
      component: UserSheetComponent,
      componentProps: { user: selectedUser }
    });
    modal.present();
  }



  //TODO à mettre dans la fiche user

  statusChanged(event: any, user: User) {
    this.confirmUser(user, event.detail.value);
  }
  private confirmUser(user: User, state: boolean) {
    this.loadingService.startLoading(`Mise à jour de l'utilisateur`);
    this.userService.confirmUser(user.id, state)
      .subscribe(
        (responseUser) => {
          this.loadingService.stopLoading();
        },
        (error) => {
          this.loadingService.stopLoading();
          this.alertService.simpleAlert(
            `Erreur`,
            `Le serveur à renvoyé une erreur`,
            `${error}`
          );
        });
  }
}
