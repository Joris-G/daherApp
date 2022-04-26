import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/_interface/user';

@Component({
  selector: 'app-user-sheet',
  templateUrl: './user-sheet.component.html',
  styleUrls: ['./user-sheet.component.scss'],
})
export class UserSheetComponent implements OnInit {
  @Input() user: User;
  @Input() userState = false;
  @Output() stateChangeEv: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  log(text) {
    console.log(text);
  }

  ngOnInit() { }

}
