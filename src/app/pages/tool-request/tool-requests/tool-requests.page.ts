import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { User } from 'src/app/_interface/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { ToolRequestService } from 'src/app/_services/toolRequest/tool-request.service';
@Component({
  selector: 'app-tool-requests',
  templateUrl: './tool-requests.page.html',
  styleUrls: ['./tool-requests.page.scss'],
})
export class ToolRequestsPage implements OnInit {
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public requestList: ToolRequest[];
  public tableRequestsDataSource: MatTableDataSource<ToolRequest> = new MatTableDataSource();
  public authUser: User;
  public filterSelectObjects = [];
  private filterValues = {};
  constructor(
    private toolRequestService: ToolRequestService,
    private alertControleService: AlertService,
    private navCtrl: NavController,
    private loaderService: LoadingService,
  ) {
    this.filterSelectObjects = [
      {
        name: 'Statut',
        columnProp: 'statut',
        options: [
        ]
      },
      {
        name: 'Type de demande',
        columnProp: 'type',
        options: []
      },
      // {
      //   name: 'Demandeur',
      //   columnProp: 'demandeur',
      //   options: []
      // },
      // {
      //   name: 'Outillage',
      //   columnProp: 'outillage',
      //   options: []
      // },
    ];
  }

  ionViewWillEnter() {
    this.updateRequestList();
  }


  ngOnInit() {
    this.tableRequestsDataSource.filterPredicate = this.createFilter();
  }

  createFilter() {
    const filterFunction = (request: ToolRequest, filter: string): boolean => {
      console.log(request, filter);
      const searchTerms = JSON.parse(filter);
      console.log(searchTerms);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (col) {
          console.log(col);
          if (searchTerms[col].toString() !== '') {
            isFilterSet = true;
          } else {
            delete searchTerms[col];
          }
        }
      }
      let found = false;
      if (isFilterSet) {
        for (const col in searchTerms) {
          if (col) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
              if (request[col].toString().toLowerCase().indexOf(word) !== -1 && isFilterSet) {
                found = true;
              }
            });
          }
        }
        return found;
      } else {
        return true;
      }
    };
    return filterFunction;
  }


  resetFilters() {
    this.filterValues = {};
    this.filterSelectObjects.forEach((value, key) => {
      value.modelValue = undefined;
    });
    this.tableRequestsDataSource.filter = '';
  }

  /**
   *Get Uniqu values from columns to build filter
   *
   * @param {*} fullObj
   * @param {*} key
   * @return {*}
   * @memberof ToolRequestsPage
   */
  getFilterObject(fullObj, key) {
    console.log(fullObj, key);
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }


  /**
   * Get remote serve data using HTTP call
   *
   * @memberof ToolRequestsPage
   */
  async updateRequestList() {
    this.loaderService.startLoading('Pateinter pendant le chargement des demandes');
    this.toolRequestService.getToolRequests()
      .then((responseToolList: ToolRequest[]) => {
        this.tableRequestsDataSource.data = responseToolList;
        this.filterSelectObjects.filter((o) => {
          console.log(o);
          o.options = this.getFilterObject(this.tableRequestsDataSource.data, o.columnProp);
        });
      })
      .catch((error) => {
        console.error(error);

        this.alertControleService.simpleAlert(
          'Erreur',
          'Mise à jour de la liste',
          'La liste des requêtes ne s\'est pas mise à jour correctement '
        );
      }
      )
      .finally(() => {
        this.loaderService.stopLoading();
      });
  }


  userClick() {

  }


  openControlClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/3D-tool/' + request.id);
  }



  openMaintenanceClick(request: ToolRequest) {
    this.navCtrl.navigateForward('tooling/repair-tool/' + request.id);
  }

  getBorder(request: ToolRequest | string): string {
    if (this.toolRequestService.getType(request) === 'controle') {
      return '4px lawngreen solid';
    } else if (this.toolRequestService.getType(request) === 'maintenance') {
      return '4px yellow solid';
    }
  }



  /**
   * Called on Filter change
   *
   * @param {*} filter
   * @param {*} event
   * @memberof ToolRequestsPage
   */
  filterChange(filter: any, event: any) {
    console.log(filter, event);
    this.filterValues[filter.columnProp] = event.target.value.trim();
    console.log(this.filterValues[filter.columnProp]);
    console.log(JSON.stringify(this.filterValues));
    this.tableRequestsDataSource.filter = JSON.stringify(this.filterValues);
  }

  filterRequestTypeChanged(typeEvent: any) {
    const filterValue = (typeEvent.target as HTMLInputElement).value;
    this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
    console.log(typeEvent);
  }

  filterRequestStatusChanged(typeEvent: any) {
    const filterValue = (typeEvent.target as HTMLInputElement).value;
    this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
    console.log(typeEvent);
  }
}
