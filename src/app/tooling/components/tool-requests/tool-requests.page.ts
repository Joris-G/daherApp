import { Component, inject } from '@angular/core';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { ToolRequestsService } from './tool-requests-data/tool-requests.service';
import { IonicModule } from '@ionic/angular';
import { ToolRequestFiltersComponent } from './tool-requests-components/tool-request-filters/tool-request-filters.component';
import { ToolRequestTableComponent } from './tool-requests-components/tool-request-table/tool-request-table.component';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    templateUrl: './tool-requests.page.html',
    styleUrls: ['./tool-requests.page.scss'],
    standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow, IonCol,
        ToolRequestFiltersComponent,
        ToolRequestTableComponent,
    AsyncPipe
    ],
})

/* TODO créer un observable pour écouter tout mouvement de demandes
* => l'ordinateur qui affiche les datas stats ou listes des demandes seront màj automatiquement
*/
export class ToolRequestsPage {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  private readonly toolRequestsService: ToolRequestsService = inject(ToolRequestsService);

  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  protected toolRequestList$: Observable<ToolRequest[]> = this.toolRequestsService.getToolRequests()
  public isAdmin = false;

  constructor(
    // private tableDataService: ToolRequestTableDataSourceService,
  ) {

  }


  reloadClick() {
    // this.tableDataService.refreshDatas();
  }
  nextClick() { this.toolRequestsService.getNextPage() }
}
