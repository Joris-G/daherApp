import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SpecSBORequest } from 'src/app/features/tooling/models/sbo.model';

@Component({
  standalone: true,
    selector: 'app-sbo',
    templateUrl: './sbo.component.html',
    styleUrls: ['./sbo.component.scss'],
  imports: [DatePipe]
})
export class SboComponent implements OnInit {
  @Input() spec: SpecSBORequest;
  @Input() tool: any;
  constructor() { }

  ngOnInit() { }

}
