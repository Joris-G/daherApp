import { NgModule } from '@angular/core';
import { ToolRequestService } from '../services/tool-request.service';
import { ToolService } from '../services/tool.service';

@NgModule({
  providers:[
    ToolService,
    ToolRequestService,
  ]
})
export class ToolingServicesModule{}
