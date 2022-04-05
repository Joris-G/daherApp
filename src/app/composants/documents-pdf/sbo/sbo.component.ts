import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sbo',
  templateUrl: './sbo.component.html',
  styleUrls: ['./sbo.component.scss'],
})
export class SboComponent implements OnInit {
  @Input() spec: any;
  @Input() tool: any;
  constructor() { }

  ngOnInit() { }

}
