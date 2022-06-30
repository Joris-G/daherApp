import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interfaces/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-admin-user-table',
  templateUrl: './admin-user-table.component.html',
  styleUrls: ['./admin-user-table.component.scss'],
})
export class AdminUserTableComponent implements OnInit {
  public users$: Observable<User[]>;
  public selectedUser: User;
  public isUserSelected = false;
  public displayedUserColumns: string[] = ['id', 'username', 'nom', 'prenom', 'matricule', 'roles', 'commands'];
  constructor(
    private userService: UsersService,
    private loadingService: LoadingService,
    private alertService: AlertService,) {
  }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

  statusChanged(event: any, user: User) {
    this.confirmUser(user, event.detail.value);
  }

  onSelectUser(test: any) {
    console.log(test);
    this.isUserSelected = true;
    this.selectedUser = test;
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
