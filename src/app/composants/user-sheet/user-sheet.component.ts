import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/_interfaces/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-user-sheet',
  templateUrl: './user-sheet.component.html',
  styleUrls: ['./user-sheet.component.scss'],
})
export class UserSheetComponent implements OnInit {
  @Input() user: User;
  @Input() userState = false;
  @Output() stateChangeEv: EventEmitter<boolean> = new EventEmitter();
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private userService: UsersService,
  ) { }

  log(text) {
    console.log(text);
  }

  ngOnInit() { }

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
