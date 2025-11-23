import { Component, input, InputSignal, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style } from '@angular/animations';
import { Observable } from 'rxjs';
import { NavController, IonicModule } from '@ionic/angular';
import { RequestType, ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { ToolRequestsService } from '../../tool-requests-data/tool-requests.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { DatePipe } from '@angular/common';
import { HeaderRowDirective } from '../../../../../shared/directives/header-row.directive';
import { DataRowDirective } from '../../../../../shared/directives/data-row.directive';


@Component({
    selector: 'app-tool-request-table',
    templateUrl: './tool-request-table.component.html',
    styleUrls: ['./tool-request-table.component.scss'],
    animations: [
        trigger('openClose', [
            // animation triggers go here
            state('open', style({
                backgroundColor: 'DarkOrange',
                opacity: '0.7'
            })),
        ])
    ],
    standalone: true,
  imports: [IonicModule, HeaderRowDirective, DataRowDirective, DatePipe]
})
export class ToolRequestTableComponent implements OnInit {
  ////////////////////////////////////////////////////////////////
  // INJECTION DE DEPENDANCES
  ////////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////////
  //INPUTS
  ////////////////////////////////////////////////////////////////
  public toolRequestList: InputSignal<ToolRequest[]> = input<ToolRequest[]>([]);

  //TYPE
  RequestType = RequestType

  @ViewChild(MatSort) sort: MatSort;
  public newToolRequestsList$: Observable<ToolRequest[]>;
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public isAdmin = false;

  constructor(
    private navCtrl: NavController,
    private authGuard: RoleGuard,
    private toolRequestsService: ToolRequestsService
  ) {
    this.newToolRequestsList$ = this.toolRequestsService.filtersList.asObservable();
  }

  openRequestClick(requestToOpen: ToolRequest) {
    if (requestToOpen.type === RequestType.CONTROLE) { this.navCtrl.navigateForward('tooling/3d/' + requestToOpen.id); }
    if (requestToOpen.type === RequestType.MAINTENANCE) { this.navCtrl.navigateForward('tooling/repair/' + requestToOpen.id); }
  }

  ngOnInit() {
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }

  userClick() {
    // TODO fonction à implémenter
  }


  // TODO créer une directive plus propre plutot que ce code cela permettre d'enlever
  // les IF du template pour choisir entre maintenance et controle
  openControlClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/3D-tool/' + request.id);
  }

  openMaintenanceClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/repair-tool/' + request.id);
  }

  removeRequestClick(request: ToolRequest) {
    // this.toolRequestService.removeRequest(request)
    //   .then(() => {
    //     // this.updateRequestList();
    //   });
  }


  // TODO Créer une directive pour la bordure
  getBorder(request: ToolRequest | string): string {
    if (this.getType(request) === 'controle') {
      return 'solid 2px lawngreen';
    } else if (this.getType(request) === 'maintenance') {
      return 'solid 2px yellow';
    }
  }

  private getType(request: ToolRequest | string): string {
    if (typeof (request) === 'string') { return request; }
    if (request.type === RequestType.CONTROLE) {
      return 'controle';
    } else if (request.type === RequestType.MAINTENANCE) {
      return 'maintenance';
    }
  }
}
