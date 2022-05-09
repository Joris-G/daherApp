import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IonSelect, NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { ToolRequestService } from 'src/app/_services/tooling/toolRequest/tool-request.service';
import { RoleGuard } from 'src/app/_services/users/role.guard';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-tool-requests',
  templateUrl: './tool-requests.page.html',
  styleUrls: ['./tool-requests.page.scss'],
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
export class ToolRequestsPage implements OnInit {
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public requestList: ToolRequest[];
  public tableRequestsDataSource: MatTableDataSource<ToolRequest> = new MatTableDataSource();
  public isAdmin = false;
  public filterSelectObjects = [];
  private filterValues = {};
  private activeFilters = [];
  constructor(
    private toolRequestService: ToolRequestService,
    private alertControleService: AlertService,
    private navCtrl: NavController,
    private loaderService: LoadingService,
    private authGuard: RoleGuard
  ) { }

  ionViewWillEnter() {
    this.updateRequestList();
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }


  ngOnInit() {
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
    this.tableRequestsDataSource.filterPredicate = this.createFilter();
  }

  createFilter() {
    const filterFunction = (request: ToolRequest, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (col) {
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
    this.activeFilters.forEach((filter: IonSelect) => {
      filter.value = '';
    });
    this.tableRequestsDataSource.filter = '';
  }

  /**
   *Get Uniqu values from columns to build filter
   *
   * @param fullObj
   * @param key
   * @return
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
      .subscribe((responseToolList: ToolRequest[]) => {
        this.tableRequestsDataSource.data = responseToolList;
        this.filterSelectObjects.filter((o) => {
          console.log(o);
          o.options = this.getFilterObject(this.tableRequestsDataSource.data, o.columnProp);
        });
        this.loaderService.stopLoading();
      },
        (error) => {
          console.error(error);
          this.alertControleService.simpleAlert(
            'Erreur',
            'Mise à jour de la liste',
            'La liste des requêtes ne s\'est pas mise à jour correctement '
          );
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
   * @param filter
   * @param event
   * @memberof ToolRequestsPage
   */
  filterChange(filter: any, event: any) {
    console.log(filter, event);
    this.activeFilters.push(event.target);
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

  removeRequestClick(request: ToolRequest) {
    this.toolRequestService.removeRequest(request)
      .then(() => {
        this.updateRequestList();
      });
  }
}
