import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IonSelect, NavController } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { AlertService } from 'src/app/core/services/divers/alert.service';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { RoleGuard } from 'src/app/core/services/users/role.guard';
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




/* TODO créer un observable pour écouter tout mouvement de demandes
* => l'ordinateur qui affiche les datas stats ou listes des demandes seront màj automatiquement
*/
export class ToolRequestsPage implements OnInit {
  //TODO commenter les propriétés

  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];

  public tableRequestsDataSource: MatTableDataSource<ToolRequest> = new MatTableDataSource();
  public isAdmin = false;
  //TODO améliorer les filtres
  public filterSelectObjects = [];
  private filterValues = {};
  private activeFilters = [];
  private filterDictionary = new Map<string, string>();
  constructor(
    private toolRequestService: ToolRequestService,
    private alertControleService: AlertService,
    private navCtrl: NavController,
    private loaderService: LoadingService,
    private authGuard: RoleGuard
  ) { }

  ionViewWillEnter() {
    this.loaderService.startLoading('Pateinter pendant le chargement des demandes');
    this.updateRequestList();
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }

  ngOnInit() {
    this.filterSelectObjects = [
      {
        name: 'Statut',
        columnProp: 'statut',
        options: []
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

  resetFiltersClick() {
    this.filterValues = {};
    this.filterSelectObjects.forEach((value, key) => {
      value.modelValue = undefined;
    });
    this.activeFilters.forEach((filter: IonSelect) => {
      filter.value = '';
    });
    this.tableRequestsDataSource.filter = '';
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

  // TODO Créer une directive pour la bordure
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
    // console.log(filter, event);
    this.activeFilters.push(event.target);
    this.filterValues[filter.columnProp] = event.target.value.trim();
    // console.log(this.filterValues[filter.columnProp]);
    // console.log(JSON.stringify(this.filterValues));
    this.tableRequestsDataSource.filter = JSON.stringify(this.filterValues);
  }

  // filterRequestTypeChanged(typeEvent: any) {
  //   const filterValue = (typeEvent.target as HTMLInputElement).value;
  //   this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(typeEvent);
  // }

  // filterRequestStatusChanged(typeEvent: any) {
  //   const filterValue = (typeEvent.target as HTMLInputElement).value;
  //   this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(typeEvent);
  // }

  removeRequestClick(request: ToolRequest) {
    this.toolRequestService.removeRequest(request)
      .then(() => {
        this.updateRequestList();
      });
  }

  private createFilter() {
    const filterFunction = (request: ToolRequest, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      console.log(searchTerms);
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
      console.log('début du filtre, pour chaque filtre actif');
      if (isFilterSet) {
        for (const col in searchTerms) {
          if (col) {
            console.log('filtre Pour chaque mot de la propriété : ', col, 'je cherche le terme :', searchTerms[col]);
            searchTerms[col].trim().toLowerCase().split(' ').every(word => {
              console.log(word);
              if (request[col].toString().toLowerCase().indexOf(word) !== -1 && isFilterSet) {
                console.log('terme trouvé je passe au mot suivant');
                found = true;
              } else {
                found = false;
                console.log('found false end boucle');
                return false;
              }
            });
            if (found === false) { return found; }
          }
        }
        return found;
      } else {
        return true;
      }
    };
    return filterFunction;
  }

  /**
 *Get Uniqu values from columns to build filter
 *
 * @param fullObj
 * @param key
 * @return
 * @memberof ToolRequestsPage
 */
  private getFilterObject(fullObj, key) {
    // console.log(fullObj, key);
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
 *
 *
 * @memberof ToolRequestsPage
 */
  private async updateRequestList() {
    this.toolRequestService.getToolRequests()
      .subscribe((responseToolList: ToolRequest[]) => {
        this.tableRequestsDataSource.data = responseToolList;
        this.filterSelectObjects.filter((o) => {
          o.options = this.getFilterObject(this.tableRequestsDataSource.data, o.columnProp);
        });
      },
        (error) => {
          this.loaderService.stopLoading();
          console.error(error);
          this.alertControleService.simpleAlert(
            'Erreur',
            'Mise à jour de la liste',
            'La liste des demandes outillage ne s\'est pas mise à jour correctement '
          );
          this.navCtrl.navigateRoot('home');
        },
        () => {
          this.loaderService.stopLoading();
          console.log('complete');
        });
  }
}
