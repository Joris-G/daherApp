import { Component, OnInit } from '@angular/core';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { ToolRequestService } from 'src/app/_services/toolRequest/tool-request.service';

@Component({
  selector: 'app-tool-requests',
  templateUrl: './tool-requests.page.html',
  styleUrls: ['./tool-requests.page.scss'],
})
export class ToolRequestsPage implements OnInit {
  public pageTitle: string;
  public displayedRequestColumns: ['status', 'title', 'requestDate', 'requestor', 'needDate'];
  public toolRequests: ToolRequest[];

  constructor(
    private toolRequestService: ToolRequestService,
  ) {
    this.pageTitle = 'Listes des demandes';
    toolRequestService.getToolRequests()
      .then((toolRequests: ToolRequest[]) => {
        this.toolRequests = toolRequests;
      });
  }

  ngOnInit() {
  }

}
