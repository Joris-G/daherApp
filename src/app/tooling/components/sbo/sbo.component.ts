import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { SpecSBORequest } from 'src/app/tooling/tool-request-types';

@Component({
    selector: 'app-sbo',
    templateUrl: './sbo.component.html',
    styleUrls: ['./sbo.component.scss'],
    standalone: true,
    imports: [IonicModule, DatePipe],
})
export class SboComponent implements OnInit {
  @Input() spec: SpecSBORequest;
  @Input() tool: any;
  constructor() { }

  ngOnInit() { }

}
