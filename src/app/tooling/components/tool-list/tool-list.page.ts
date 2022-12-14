import { Component, OnInit } from '@angular/core';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.page.html',
  styleUrls: ['./tool-list.page.scss'],
})
export class ToolListPage implements OnInit {
  public requestList: ToolRequest[];

  constructor(
    private toolRequestService: ToolRequestService,
    private alertControleService: AlertService) { }

  ngOnInit() {
    this.updateToolList();
  }

  updateToolList() {
    this.toolRequestService.getToolRequests()
      .subscribe((responseList: ToolRequest[]) => {
        this.requestList = responseList;
      },
        (error) => {
          this.alertControleService.simpleAlert(
            'Erreur',
            'Mise à jour de la liste',
            'La liste des requêtes ne s\'est pas mise à jour correctement'
          );
        }
      );
  }


}
