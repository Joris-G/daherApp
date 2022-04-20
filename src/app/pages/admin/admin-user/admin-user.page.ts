import { DatePipe } from '@angular/common';
import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, ElementRef, OnInit, ViewChild
} from '@angular/core';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import { Observable } from 'rxjs';
import { User } from 'src/app/_interface/user';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.page.html',
  styleUrls: ['./admin-user.page.scss'],
})
export class AdminUserPage implements OnInit {
  @ViewChild('newUsers') private newUsersCanvas: ElementRef;

  public users: User[];
  displayedUserInactiveColumns: string[] = ['username', 'nom', 'prenom', 'matricule', 'mail', 'roles', 'commands'];
  private lineChart: any;
  private weeklyLabels: string[] = [];
  private weeklyUsers: number[] = [];

  constructor(
    private userService: UsersService,
    private datePipe: DatePipe,
  ) {
    this.userService.getUsers()
      .then((users: User[]) => {
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

      });
  }

  ngOnInit() {
  }

  confirmUser(element: User, state: boolean) {
    console.log(element, state);
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
      this.users.forEach((user) => {
        // console.log(
        //   this.datePipe.transform(user.createdAt, 'dd/MM'),
        //   this.datePipe.transform(startDate, 'dd/MM'),
        //   this.datePipe.transform(intermediateEndDate, 'dd/MM')
        // );
        // console.log((user.createdAt >= startDate), (user.createdAt <= intermediateEndDate));
      });
      console.log(startDate, intermediateEndDate);
      console.log(this.users);
      const filterUsers = this.users.filter((user) => (new Date(user.createdAt) > startDate && new Date(user.createdAt) <= intermediateEndDate)
      );
      console.log(filterUsers);
      const totalUserWeek = filterUsers.length;
      totaluserPerWeekData.push(totalUserWeek);

      startDate = intermediateEndDate;
    }
    return totaluserPerWeekData;
  }
}
