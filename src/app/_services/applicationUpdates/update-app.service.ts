import { Injectable } from '@angular/core';
import { Update } from 'src/app/_interface/update';
import { AlertService } from '../divers/alert.service';
import { RequestService } from '../request.service';
import { AuthService } from '../users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppService {

  constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private requestService: RequestService

  ) {
  }



  /**
   *Si la promise retourn true c'est que toutes les updates sont vues
   *Si la promise return false l'utilisateur reverra les update à sa prochaine connexion
   *
   * @return {*}  {Promise<boolean>}
   * @memberof UpdateAppService
   */
  showUpdates(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.getUpdatesToShow()
        .then((updates: Update[]) => {
          updates.forEach((update: Update) => {
            this.alertService.simpleAlert('Info sur la mise à jours', update.title, update.description)
              .then(() => {
                resolve(true);
              });
          });
        });
    });
  }

  getUpdates(day1?: Date, day2?: Date): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve([{
        id: 1,
        dateUpdate: new Date(),
        description: 'Le scan de l\'outillage de moulage est effectif. Il suffit de le scanner au même endroit qu\'un kit',
        title: 'Scan outillage de moulage à la place de la saisie'
      }]);
    });
    // return this.requestService.createGetRequest('');
  }

  private getUpdatesToShow(): Promise<Update[]> {
    const day = new Date();
    const lastConnection = this.authService.authUser.lastCon;
    return this.getUpdates(lastConnection, day);
  }
}
