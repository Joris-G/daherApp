import { Component, inject, input, InputSignal, OnInit, signal } from '@angular/core';
// import { trigger, state, style } from '@angular/animations';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { DatePipe } from '@angular/common';
// import { HeaderRowDirective } from '../../../../../shared/directives/header-row.directive';
// import { DataRowDirective } from '../../../../../shared/directives/data-row.directive';
import { Tool, OutillNoRefSAP } from 'src/app/features/tooling/models/tool.model';
import { RequestType, ToolRequest } from 'src/app/features/tooling/models/tool-request.model';
import { Router } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  standalone: true,
    selector: 'app-tool-request-table',
    templateUrl: './tool-request-table.component.html',
    styleUrls: ['./tool-request-table.component.scss'],
    animations: [
      // trigger('openClose', [
      //     // animation triggers go here
      //     state('open', style({
      //         backgroundColor: 'DarkOrange',
      //         opacity: '0.7'
      //     })),
      // ])
    ],
  imports: [
    TableModule,
    TagModule,
    // HeaderRowDirective,
    // DataRowDirective,
    DatePipe,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    SelectModule
    ]
})
export class ToolRequestTableComponent implements OnInit {
  ////////////////////////////////////////////////////////////////
  // INJECTION DE DEPENDANCES
  ////////////////////////////////////////////////////////////////
  private readonly router = inject(Router);

  ////////////////////////////////////////////////////////////////
  //INPUTS
  ////////////////////////////////////////////////////////////////
  public toolRequestList: InputSignal<ToolRequest[]> = input<ToolRequest[]>([]);

  // public newToolRequestsList$: Observable<ToolRequest[]>;
  public displayedRequestColumns: string[] = ['statut', 'id', 'tool', 'createdAt', 'userCreat', 'needDate', 'buttons'];
  protected filterStatusOptions: string[] = ['Nouvelle', 'Finalisée'];
  // TABLE PROPERTIES
  searchValue = signal('');



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
    this.router.navigate([rootUrl + requestToOpen.id])
  }

  private getRootUrlByType(type: RequestType): string {
    if (type === 'SBO') { return '/tooling/new-tool/' }
    if (type === 'CONTROLE') { return '/tooling/3d/' }
    if (type === 'MAINTENANCE') { return '/tooling/repair/' }
  }
  //TODO changer la phylosophie. Créer une class ou un élément plus simple pour attribuer un role à la page ou action.
  ngOnInit() {
    this.isAdmin = this.authGuard.isRole(['ADMIN']);
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
    if (request.type === 'CONTROLE') {
      return 'controle';
    } else if (request.type === 'MAINTENANCE') {
      return 'maintenance';
    }
  }


  /**
   * Retourne la couleur du badge en fonction du statut.
   */
  public getSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    switch (status.toLowerCase()) {
      case 'terminé': return 'success';
      case 'en cours': return 'info';
      case 'bloqué': return 'danger';
      default: return 'secondary';
    }
  }

  /**
 * Retire les filtres du tableau
 */
  clear(table: Table<ToolRequest>) {
    table.clear();
    this.searchValue.set('');
  }
}
