import { Component, Input, OnInit } from '@angular/core';
import { SpecMaintRep } from 'src/app/_interface/spec-maint-rep';
import { ToolRequest } from 'src/app/_interface/tool-request';

@Component({
  selector: 'app-spec-maintenance-reparation',
  templateUrl: './spec-maintenance-reparation.component.html',
  styleUrls: ['./spec-maintenance-reparation.component.scss'],
})
export class SpecMaintenanceReparationComponent implements OnInit {

  @Input() request: ToolRequest;

  constructor() { }

  ngOnInit() { }

}
