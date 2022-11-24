import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() datas: any[];
  public columns: string[];
  constructor() {
  }

  ngOnInit() {
    this.columns = Object.keys(this.datas[0]);
    this.columns.forEach((property) => {
      console.log(property);
      if (Object.keys(property).length > 0) {
        console.log(Object.keys(property[0]))
        this.columns.push(...Object.keys(property[0]));
      }
    });

  }

}
