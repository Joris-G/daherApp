import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from 'src/app/_services/users/auth.service';
import packageJson from 'package.json';
import { environment } from 'src/environments/environment';
import { HeaderService } from './header.service';
import { PageParams } from './page-params';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shared-user-header',
  templateUrl: './shared-user-header.component.html',
  styleUrls: ['./shared-user-header.component.scss'],
})
export class SharedUserHeaderComponent implements OnInit, OnDestroy {
  public pageParams: PageParams = { title: '', visible: true };
  public user: User;
  public isUserOpen = false;
  public version: string = packageJson.version;
  public envMode: string;
  public pageParams$: Observable<PageParams>;

  constructor(
    public authService: AuthService,
    public headerService: HeaderService,
    private navCtrl: NavController,
  ) {
    this.pageParams$ = this.headerService.pageParams$;
    this.pageParams$.subscribe((params) => {
      console.log('params change', params);
      this.pageParams = params;
    });
    console.log('shared user is listening pageParams');
  }
  ionViewDidEnter() {
    console.log('did enter shared header');
  }
  ionViewDidLeave() {
    console.log('did leave shared header');
  }
  ngOnDestroy(): void {
    console.log('shared user header destroyed');
  }

  ngOnInit() {
    console.log('shared user header component init');
    this.envMode = environment.name;
  }

  logoutClick() {
    this.authService.logout()
      .subscribe(() => {
        this.navCtrl.navigateRoot('/login');
      });
  }

  navigate(path: string) {
    this.navCtrl.navigateRoot(path);
  }
}
