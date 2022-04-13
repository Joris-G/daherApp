import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/_interface/user';
import { PdfService } from 'src/app/_services/divers/pdf.service';
import { UsersService } from 'src/app/_services/users/users.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-request-footer',
  templateUrl: './tool-request-footer.component.html',
  styleUrls: ['./tool-request-footer.component.scss'],
})
export class ToolRequestFooterComponent implements OnInit {

  /**
   *
   *
   * @type {boolean}
   * @memberof ToolRequestFooterComponent
   */
  @Input() canManage: boolean;


  /**
   *
   *
   * @type {boolean}
   * @memberof ToolRequestFooterComponent
   */
  @Input() canUpdate: boolean;


  /**
   *
   *
   * @type {FormGroup}
   * @memberof ToolRequestFooterComponent
   */
  @Input() form: FormGroup;


  /**
   *
   *
   * @type {EventEmitter}
   * @memberof ToolRequestFooterComponent
   */
  @Output() evStatusChange: EventEmitter<string> = new EventEmitter();

  @Output() evSubmit: EventEmitter<any> = new EventEmitter();
  @Output() evUpdate: EventEmitter<any> = new EventEmitter();

  /**
   *
   *
   * @type {User[]}
   * @memberof ToolRequestFooterComponent
   */
  public userList: User[];


  constructor(
    private userService: UsersService,
    private pdfService: PdfService,
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers()
      .then((responseUsers: User[]) => {
        this.userList = responseUsers;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  statusChange(status) {
    this.evStatusChange.emit(status.target.value);
  }

  pdfExportClick() {
    this.pdfService.openPDF(document.getElementById('toExport'));
  }

  submitClick() {
    this.evSubmit.emit(null);
  }

  updateClick() {
    this.evUpdate.emit(null);
  }
}
