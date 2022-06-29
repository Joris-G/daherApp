import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from 'src/app/_services/users/auth.service';
import packageJson from 'package.json';
import { isDevMode } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-shared-user-header',
  templateUrl: './shared-user-header.component.html',
  styleUrls: ['./shared-user-header.component.scss'],
})
export class SharedUserHeaderComponent implements OnInit, OnChanges {
  @Input() pageTitle: string;
  @ViewChild('menu') menu: any;
  public user: User;
  public isPopoverOpen = false;
  public isUserOpen = false;
  public version: string = packageJson.version;
  public envMode: string;

  constructor(
    public authService: AuthService,
    private navCtrl: NavController,
  ) { }



  log(text) {
    console.log(text);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.page);
    this.user = this.authService.authUser;
  }

  ngOnInit() {
    this.envMode = environment.name;
  }

  logoutClick() {
    this.authService.logout()
      .subscribe(() => {
        this.navCtrl.navigateBack('/login');
      });
  }

  navigate(path: string) {
    this.navCtrl.navigateRoot(path);
  }
}
