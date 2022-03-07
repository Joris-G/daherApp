import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from 'src/app/_interface/user';
import { AuthService } from 'src/app/_services/users/auth.service';

@Component({
  selector: 'app-shared-user-header',
  templateUrl: './shared-user-header.component.html',
  styleUrls: ['./shared-user-header.component.scss'],
})
export class SharedUserHeaderComponent implements OnInit, OnChanges {
  @Input() page: any;
  public user: User;
  public isPopoverOpen = false;

  constructor(
    public authService: AuthService,
    private router: Router) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.page);
    this.user = this.authService.authUser;
  }

  ngOnInit() {
    console.log(this.page);
  }
  logoutClick() {
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      });
  }
  navigateHome() {
    this.router.navigate(['/home']);
  }
  navigate(path: string) {

    // this.router.navigate([path]);
    // this.router.navigateByUrl(path);
  }
}
