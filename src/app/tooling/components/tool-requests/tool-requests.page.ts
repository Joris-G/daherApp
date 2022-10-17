import { Component } from '@angular/core';
import { AlertService } from 'src/app/core/services/divers/alert.service';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { RoleGuard } from 'src/app/core/services/users/role.guard';
import { ToolRequestTableDataSourceService } from './tool-request-table-data-source.service';

@Component({
  selector: 'app-tool-requests',
  templateUrl: './tool-requests.page.html',
  styleUrls: ['./tool-requests.page.scss'],
})

/* TODO créer un observable pour écouter tout mouvement de demandes
* => l'ordinateur qui affiche les datas stats ou listes des demandes seront màj automatiquement
*/
export class ToolRequestsPage {
  //TODO commenter les propriétés
  public isAdmin = false;

  constructor(
    private alertControleService: AlertService,
    private loaderService: LoadingService,
    private authGuard: RoleGuard,
    private tableDataService: ToolRequestTableDataSourceService
  ) { }

  ionViewWillEnter() {
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }
  reloadClick() {
    this.tableDataService.refreshDatas();
  }

  //       (error) => {
  //         this.loaderService.stopLoading();
  //         console.error(error);
  //         this.alertControleService.simpleAlert(
  //           'Erreur',
  //           'Mise à jour de la liste',
  //           'La liste des demandes outillage ne s\'est pas mise à jour correctement '
  //         );
  //         this.navCtrl.navigateRoot('home');
  //       },
  //       () => {
  //         this.loaderService.stopLoading();
  //         console.log('complete');
  //       });
  // }
}
