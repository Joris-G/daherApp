import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { SpecSBO } from 'src/app/_interfaces/tooling/tool-request-types';

@Component({
    selector: 'app-sbo',
    templateUrl: './sbo.component.html',
    styleUrls: ['./sbo.component.scss'],
    standalone: true,
    imports: [IonicModule, DatePipe],
})
export class SboComponent implements OnInit {
  @Input() spec: SpecSBO;
  @Input() tool: any;
  constructor() { }

  ngOnInit() { }

}
