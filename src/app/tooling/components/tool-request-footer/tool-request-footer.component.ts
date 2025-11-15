import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/_interfaces/user';
import { EventEmitter } from '@angular/core';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { PdfService } from 'src/app/shared/services/divers/pdf.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { IonicModule } from '@ionic/angular';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-tool-request-footer',
    templateUrl: './tool-request-footer.component.html',
    styleUrls: ['./tool-request-footer.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgIf,
        NgFor,
    ],
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
   * @type {EventEmitter}
   * @memberof ToolRequestFooterComponent
   */
  @Output() evStatusChange: EventEmitter<string> = new EventEmitter();


  /**
   *
   *
   * @type {EventEmitter<string>}
   * @memberof ToolRequestFooterComponent
   */
  @Output() evAffectationChange: EventEmitter<GroupeAffectation> = new EventEmitter();

  /**
   *
   *
   * @type {EventEmitter<any>}
   * @memberof ToolRequestFooterComponent
   */
  @Output() evSubmit: EventEmitter<any> = new EventEmitter();


  /**
   *
   *
   * @type {EventEmitter<any>}
   * @memberof ToolRequestFooterComponent
   */
  @Output() evUpdate: EventEmitter<any> = new EventEmitter();

  /**
   *
   *
   * @type {User[]}
   * @memberof ToolRequestFooterComponent
   */
  public userList: User[];


  /**
   *
   *
   * @type {GroupeAffectation[]}
   * @memberof ToolRequestFooterComponent
   */
  public affectationGroups: GroupeAffectation[];

  constructor(
    private userService: UsersService,
    private pdfService: PdfService,
  ) { }

  ngOnInit() {
    this.loadUsers();
    this.loadAffectationGroups();
  }

  loadUsers() {
    this.userService.getUsers()
      .subscribe((responseUsers: User[]) => {
        this.userList = responseUsers;
      });
  }

  loadAffectationGroups() {
    this.userService.getGroups()
      .subscribe((responseGroups: GroupeAffectation[]) => {
        this.affectationGroups = responseGroups;
      });
  }

  affectationChange(affectationGroup: any) {
    this.evAffectationChange.emit(affectationGroup.target.value);
  }

  statusChange(status: any) {
    this.evStatusChange.emit(status.target.value);
  }

  pdfExportClick() {
    console.log(document.getElementById('toExport'));
    this.pdfService.openPDF(document.getElementById('toExport'), 'test impression');
  }

  submitClick() {
    this.evSubmit.emit(null);
  }

  updateClick() {
    this.evUpdate.emit(null);
  }
}
