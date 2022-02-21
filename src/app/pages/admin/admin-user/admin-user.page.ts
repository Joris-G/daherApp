import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_interface/user';
import { UsersService } from 'src/app/_services/users/users.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.page.html',
  styleUrls: ['./admin-user.page.scss'],
})
export class AdminUserPage implements OnInit {
  public users: User[];
  constructor(private userService: UsersService) {

    // this.userService.getUsers()
    //   .then((users: User[]) => {
    //     this.users = users;
    //   });
  }

  ngOnInit() {
  }

}
