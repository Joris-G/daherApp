import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-shared-admin-header',
  templateUrl: './shared-admin-header.component.html',
  styleUrls: ['./shared-admin-header.component.scss'],
})
export class SharedAdminHeaderComponent implements OnInit {
  public user: User;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.user = this.authService.authUser;
  }
  logoutClick() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
}
