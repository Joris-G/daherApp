import { Component } from '@angular/core';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { ToolRequestsService } from './tool-requests-data/tool-requests.service';
import { IonicModule } from '@ionic/angular';
import { ToolRequestFiltersComponent } from './tool-requests-components/tool-request-filters/tool-request-filters.component';
import { ToolRequestTableComponent } from './tool-requests-components/tool-request-table/tool-request-table.component';

@Component({
    selector: 'app-tool-requests',
    templateUrl: './tool-requests.page.html',
    styleUrls: ['./tool-requests.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        ToolRequestFiltersComponent,
        ToolRequestTableComponent,
    ],
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

  }

  ionViewWillEnter() {
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }
  reloadClick() {
    // this.tableDataService.refreshDatas();
  }
  nextClick() { this.toolRequestsService.getNextPage() }
}
