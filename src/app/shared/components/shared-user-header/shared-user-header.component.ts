import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_interfaces/user';

import { environment } from 'src/environments/environment';
import { UserPopoverComponent } from '../user-popover/user-popover.component';
import { Observable } from 'rxjs';
import { TitleService } from '../../services/title.service';
import { AuthStore } from '../../services/users/auth.store';
import { Router } from '@angular/router';

@Component({
  standalone: true,
    selector: 'app-shared-user-header',
    templateUrl: './shared-user-header.component.html',
    styleUrls: ['./shared-user-header.component.scss'],
  imports: [
    ]
})
export class SharedUserHeaderComponent implements OnInit {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  // private readonly popoverCtrl: PopoverController = inject(PopoverController);
  private readonly router = inject(Router);

  @Input()
  public title: string;
  @Input()
  public hideMenuIcon: boolean;

  private readonly authStore: AuthStore = inject(AuthStore);

  public user: User;
  public envMode: string;

  private title$: Observable<string>

  constructor(


    private titleService: TitleService

  ) {
    this.user = this.authStore.user();
    this.title$ = this.titleService.title.asObservable();
  }

  ngOnInit() {
    this.envMode = environment.name;
    this.title$.subscribe((titleEm) => {
      this.title = titleEm;
    });
  }

  logoutClick() {
    this.authStore.logout();
  }

  async triggerUserPopover(ev: MouseEvent) {
    // TODO refaire le popover
    ev.preventDefault();
    // const popover = await this.popoverCtrl.create({
    //   component: UserPopoverComponent,
    //   reference: 'trigger',
    //   showBackdrop: true,
    //   backdropDismiss: true,
    //   animated: true,
    //   dismissOnSelect: true
    // });
    // popover.present();
  }
  navigate(path: string) {
    this.router.navigate([path]);
  }

}
