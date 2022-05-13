import { DatePipe } from '@angular/common';
import {
  Component, ElementRef, OnInit, ViewChild
} from '@angular/core';
import Chart from 'chart.js/auto';
import { User } from 'src/app/_interfaces/user';
import { AlertService } from 'src/app/_services/divers/alert.service';
import { LoadingService } from 'src/app/_services/divers/loading.service';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.page.html',
  styleUrls: ['./admin-user.page.scss'],
})
export class AdminUserPage implements OnInit {
  @ViewChild('newUsers') private newUsersCanvas: ElementRef;

  public users: User[];
  public selectedUser: User;
  public isUserSelected = false;
  displayedUserInactiveColumns: string[] = ['id', 'nom', 'prenom', 'matricule', 'roles', 'commands'];
  private lineChart: any;
  private weeklyLabels: string[] = [];
  private weeklyUsers: number[] = [];

  constructor(
    private userService: UsersService,
    private datePipe: DatePipe,
    private loadingService: LoadingService,
    private alertService: AlertService,
  ) {

  }

  onSelectUser(test: any) {
    console.log(test);
    this.isUserSelected = true;
    this.selectedUser = test;
  }

  ngOnInit() {
    this.loadingService.startLoading();
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.users = users;
        this.weeklyLabels = this.createWeeklyLabel();
        this.weeklyUsers = this.createWeeklyUserData();
        console.log(this.weeklyLabels, this.weeklyUsers);
        // this.lineChart.destroy();
        this.lineChart = new Chart(this.newUsersCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: this.weeklyLabels,
            datasets: [
              {
                label: 'Evolution du nombre d\'inscription',
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.weeklyUsers,
                spanGaps: false,
              }
            ]
          }
        });
        this.lineChart.update();
        this.loadingService.stopLoading();
      });
  }



  createWeeklyLabel(): string[] {
    const endDate = new Date();
    const startDate = new Date(2022, 0, 1);
    const labels: string[] = [];
    while (startDate < endDate) {
      labels.push(this.datePipe.transform(startDate, 'dd/MM'));
      startDate.setDate(startDate.getDate() + 7);
    }
    return labels;
  }

  createWeeklyUserData(): number[] {
    const endDate = new Date();
    let startDate = new Date(2022, 0, 1);
    const totaluserPerWeekData: number[] = [];
    while (startDate < endDate) {
      const intermediateEndDate = new Date(startDate);
      intermediateEndDate.setDate(intermediateEndDate.getDate() + 7);
      const filterUsers = this.users
        .filter((user) => (
          new Date(user.createdAt) > startDate
          &&
          new Date(user.createdAt) <= intermediateEndDate)
        );
      const totalUserWeek = filterUsers.length;
      totaluserPerWeekData.push(totalUserWeek);

      startDate = intermediateEndDate;
    }
    return totaluserPerWeekData;
  }


  statusChanged(event: any, user: User) {
    this.confirmUser(user, event.detail.value);
  }

  private confirmUser(element: User, state: boolean) {
    console.log(element, state);
  }
}
