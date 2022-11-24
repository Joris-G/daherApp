import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

import { Observable } from 'rxjs';

import { NavController } from '@ionic/angular';


import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { RoleGuard } from 'src/app/core/services/users/role.guard';
import { ToolRequestTableDataSourceService } from '../tool-request-table-data-source.service';

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
  ]
})
export class ToolRequestTableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public toolRequestsDataSource$: Observable<MatTableDataSource<ToolRequest>> = this.toolDataService.toolRequestsDataSource$;
  public isAdmin = false;

  constructor(
    private toolDataService: ToolRequestTableDataSourceService,
    private navCtrl: NavController,
    private authGuard: RoleGuard,
  ) { }

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
    // if (this.toolRequestService.getType(request) === 'controle') {
    //   return '4px lawngreen solid';
    // } else if (this.toolRequestService.getType(request) === 'maintenance') {
    return '4px yellow solid';
    // }
  }


}
