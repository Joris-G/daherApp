import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IonSelect } from '@ionic/angular';
import { GroupeAffectation } from 'src/app/_interface/groupe-affectation';
import { User } from 'src/app/_interface/user';
import { ProgramsService } from 'src/app/_services/programs/programs.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.page.html',
  styleUrls: ['./manage-team.page.scss'],
})
export class ManageTeamPage implements OnInit {
  public page = {
    title: 'Gérer l\'équipe'
  };
  public toolsUserDataSource: MatTableDataSource<User> = new MatTableDataSource();
  public displayedColumns = ['nom', 'prenom', 'groupeAffectation', 'lastCon', 'buttons'];
  public groups: any;
  private programs: any[];
  constructor(
    private userService: UsersService,
    public programService: ProgramsService,
  ) { }

  ngOnInit() {
    this.getGroups();
    this.getToolUsers();


  }

  getToolUsers() {
    this.userService.getUsers()
      .then((responseUsers: User[]) => {
        responseUsers.map((user: User) => {
          if (user.programmeAvion) {
            // user.programmeAvion = this.programs;
            // .find(program => program.id === user.programmeAvion[0].charAt(user.programmeAvion[0].length - 1));
          }

        });
        this.toolsUserDataSource.data = responseUsers;
      });
  }

  getPrograms() {
    return new Promise<void>((resolve, reject) => {
      this.programService.getPrograms()
        .then((responsePrograms: any) => {
          this.programs = responsePrograms;
          resolve();
        });
    });
  }

  getGroups() {
    this.userService.getGroups()
      .then((responseGroups) => {
        this.groups = responseGroups;
      });
  }

  test() {
    console.log('test');
  }

  newGroupClick() {

  }
  addGroupClick(inputGroup: string) {
    if (inputGroup) {
      const affectGroup: GroupeAffectation = {
        libelle: inputGroup
      };
      this.userService.createGroup(affectGroup)
        .then(() => {
          this.getGroups();
        });
    }

  }


  addGroupToUser(selectOpt: GroupeAffectation[], user: User) {
    user.groupeAffectations = selectOpt;
  }


  updateUser(user: User) {
    this.userService.updateUser(user);
    this.userService.addUserToGroup(user, user.groupeAffectations);
  }
}
