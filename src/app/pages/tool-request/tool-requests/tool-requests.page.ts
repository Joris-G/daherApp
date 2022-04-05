import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { User } from 'src/app/_interface/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { ToolRequestService } from 'src/app/_services/toolRequest/tool-request.service';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-tool-requests',
  templateUrl: './tool-requests.page.html',
  styleUrls: ['./tool-requests.page.scss'],
})
export class ToolRequestsPage implements OnInit {
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public requestList: ToolRequest[];
  public tableRequestsDataSource: MatTableDataSource<ToolRequest>;
  public authUser: User;
  constructor(
    private toolRequestService: ToolRequestService,
    private alertControleService: AlertService,
    private authService: AuthService,
    private navCtrl: NavController,
  ) {
  }

  ngOnInit() {
    this.updateRequestList();
    this.authUser = this.authService.authUser;
  }

  updateRequestList() {
    this.toolRequestService.getToolRequests()
      .then((responseList: ToolRequest[]) => {
        this.requestList = responseList;
        this.tableRequestsDataSource = new MatTableDataSource(responseList);
        this.tableRequestsDataSource.filterPredicate = (request, filter) => {
          let requestType: string;
          if (request.controle) {
            requestType = 'controle';
          } else if (request.maintenance) {
            requestType = 'maintenance';
          }
          return (filter === requestType);
        };
      })
      .catch((error) => {
        console.error(error);

        this.alertControleService.simpleAlert(
          'Erreur',
          'Mise à jour de la liste',
          'La liste des requêtes ne s\'est pas mise à jour correctement '
        );
      }
      );
  }
  openControlClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/3D-tool/' + request.id);
  }
  openMaintenanceClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/repair-tool/' + request.controle.id);
  }

  getBorder(request: ToolRequest | string): string {
    if (this.toolRequestService.getType(request) === 'controle') {
      return '4px lawngreen solid';
    } else if (this.toolRequestService.getType(request) === 'maintenance') {
      return '4px yellow solid';
    }
  }
  filterRequestTypeChanged(typeEvent: any) {
    const filterValue = (typeEvent.target as HTMLInputElement).value;
    this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
    console.log(typeEvent);
  };
}
