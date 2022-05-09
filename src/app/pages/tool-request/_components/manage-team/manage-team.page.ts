import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { User } from 'src/app/_interfaces/user';
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
  public selection = new SelectionModel<User>(true, []);
  public displayedColumns = ['nom', 'prenom', 'groupeAffectation', 'lastCon', 'buttons'];
  public groups: GroupeAffectation[];
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
      .subscribe((responseUsers: User[]) => {
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
        .subscribe((responsePrograms: any) => {
          this.programs = responsePrograms;
          resolve();
        });
    });
  }

  getGroups() {
    this.userService.getGroups()
      .subscribe((responseGroups) => {
        this.groups = responseGroups;
      });
  }

  addGroupClick(inputGroup: string) {
    if (inputGroup) {
      const affectGroup: GroupeAffectation = {
        libelle: inputGroup
      };
      this.userService.createGroup(affectGroup)
        .subscribe((responseGroup) => {
          this.groups.push(responseGroup);
        });
    }

  }


  addGroupToUser(selectOpt: GroupeAffectation[], user: User) {
    user.groupeAffectations = selectOpt;
    user.isUpdated = true;
  }


  updateUser(user: User) {
    this.userService.addUserToGroup(user)
      .then((responseUser: User) => {
        user = responseUser;
        this.getToolUsers();
      });
  }

  removeUsersOfTeam(users: User[]) {
    users.forEach((user) => {
      this.userService.addUserToGroup(user)
        .then((responseUser: User) => {
          user = responseUser;
          this.getToolUsers();
        });
    });

  }
}
