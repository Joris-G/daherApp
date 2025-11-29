import { Component, inject, input, InputSignal, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { trigger, state, style } from '@angular/animations';
import { NavController } from '@ionic/angular';
import { RequestType, ToolRequest } from 'src/app/tooling/tool-request-types';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { DatePipe } from '@angular/common';
import { HeaderRowDirective } from '../../../../../shared/directives/header-row.directive';
import { DataRowDirective } from '../../../../../shared/directives/data-row.directive';
import { Tool, OutillNoRefSAP } from 'src/app/tooling/tool';
import { IonCol, IonGrid, IonLabel, IonRow } from '@ionic/angular/standalone';


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
  imports: [
    HeaderRowDirective,
    DataRowDirective,
    DatePipe,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel
  ]
})
export class ToolRequestTableComponent implements OnInit {
  ////////////////////////////////////////////////////////////////
  // INJECTION DE DEPENDANCES
  ////////////////////////////////////////////////////////////////
  private readonly _navCtrl: NavController = inject(NavController);

  ////////////////////////////////////////////////////////////////
  //INPUTS
  ////////////////////////////////////////////////////////////////
  public toolRequestList: InputSignal<ToolRequest[]> = input<ToolRequest[]>([]);

  //TYPE
  RequestType = RequestType

  @ViewChild(MatSort) sort: MatSort;
  // public newToolRequestsList$: Observable<ToolRequest[]>;
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  public isAdmin = false;

  constructor(

    private authGuard: RoleGuard,
  ) {
    // this.newToolRequestsList$ = this.toolRequestsService.filtersList.asObservable();
  }

  openRequestClick(requestToOpen: ToolRequest) {
    console.log(requestToOpen);
    const requestType: RequestType = requestToOpen.type;
    const rootUrl = this.getRootUrlByType(requestType);
    this._navCtrl.navigateForward(rootUrl + requestToOpen.id)
  }

  private getRootUrlByType(type: RequestType): string {
    if (type === RequestType.SBO) { return '/tooling/new-tool/' }
    if (type === RequestType.CONTROLE) { return '/tooling/3d/' }
    if (type === RequestType.MAINTENANCE) { return '/tooling/repair/' }
  }

  ngOnInit() {
    this.isAdmin = this.authGuard.isRole(['ROLE_ADMIN']);
  }

  userClick() {
    // TODO fonction à implémenter
  }


  removeRequestClick(request: ToolRequest) {
    // this.toolRequestService.removeRequest(request)
    //   .then(() => {
    //     // this.updateRequestList();
    //   });
  }

  hasSapToolNumber(tool: Tool | OutillNoRefSAP): tool is Tool {
    return "sapToolNumber" in tool;
  }

  // TODO Créer une directive pour la bordure
  protected getBorder(request: ToolRequest | string): string {
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
