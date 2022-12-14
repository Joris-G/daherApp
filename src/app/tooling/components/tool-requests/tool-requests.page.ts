import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { ToolRequestTableDataSourceService } from './tool-request-table-data-source.service';
import { ToolRequestsService } from './tool-requests-data/tool-requests.service';

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
  // public toolRequests$: Observable<ToolRequest[]>;
  constructor(
    private authGuard: RoleGuard,
    // private tableDataService: ToolRequestTableDataSourceService,
    public toolRequestsService: ToolRequestsService
  ) {
    // this.toolRequests$ = this.toolRequestsService.filtersList
  }

  ionViewWillEnter() {
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }
  reloadClick() {
    // this.tableDataService.refreshDatas();
  }
}
