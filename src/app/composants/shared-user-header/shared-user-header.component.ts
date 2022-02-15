import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_interface/user';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-shared-user-header',
  templateUrl: './shared-user-header.component.html',
  styleUrls: ['./shared-user-header.component.scss'],
})
export class SharedUserHeaderComponent implements OnInit {

  @Input() page: string;
  public user: User;
  public isPopoverOpen = false;

  constructor(
    public authService: AuthService,
    private router: Router) {
    this.user = this.authService.authUser;
  }

  ngOnInit() { }
  logoutClick() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
}
