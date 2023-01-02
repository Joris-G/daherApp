import { Component } from '@angular/core';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { RequestState } from '../../services/tool-request-manager.service';


@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class Control3DPage {
  requestState: RequestState;

  public page = {
    title: 'Nouvelle demande de contrôle 3D'
  };


  constructor(
    private toolRequestService: ToolRequestService
  ) { }

  ionViewWillEnter() {
    this.toolRequestService.initToolRequest();
  }
}
