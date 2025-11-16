import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Update } from 'src/app/_interfaces/update';
import { AlertService } from '../divers/alert.service';
import { AuthStore } from '../users/auth.store';

@Injectable({
  providedIn: 'root'
})
export class UpdateAppService {
  private readonly authStore: AuthStore = inject(AuthStore);
  private readonly alertService: AlertService = inject(AlertService);

  private tableUpdates = [
    {
      id: 1,
      dateUpdate: new Date(2022, 11, 10),
      description:
        'Pour associer un outillage à un moulage il suffit de scanner le numéro d\'OT dans l\'OF.' +
        'Vous devez le scanner comme un kit',
      title: 'Module Moulage'
    },
    {
      id: 2,
      dateUpdate: new Date(2022, 4, 9),
      description: 'Le module outillage est ouvert pour test',
      title: 'Module Outillage'
    },
  ];


  /**
   *Si la promise retourne true c'est que toutes les updates sont vues
   *Si la promise retourne false l'utilisateur reverra les update à sa prochaine connexion
   *
   * @return
   * @memberof UpdateAppService
   */
  showUpdates() {
    this.getUpdatesToShow()
      .subscribe((updates: Update[]) => {
        if (updates) {
          updates.forEach((update: Update) => {
            this.alertService.simpleAlert('Info sur la mise à jours', update.title, update.description);
          });
        }
      });


  }



  private getUpdates(day1?: Date): Update[] | null {
    const updates = this.tableUpdates.filter(update => update.dateUpdate >= new Date(day1));
    if (updates.length > 0) {
      return updates;
    } else {
      return null;
    }
  }



  /**
   * Quand la base des mises à jours sera faites enlever le of
   *
   * @private
   * @return
   * @memberof UpdateAppService
   */
  private getUpdatesToShow(): Observable<Update[]> {
    const lastConnection = this.authStore.user().lastCon;
    return of(this.getUpdates(lastConnection));
  }
}
