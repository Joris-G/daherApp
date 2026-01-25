import { Component, inject, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_interfaces/user';

import { environment } from 'src/environments/environment';
import { UserPopoverComponent } from '../user-popover/user-popover.component';
import { Observable } from 'rxjs';
import { TitleService } from '../../services/title.service';
import { AuthStore } from '../../services/users/auth.store';
import { Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar'
import { ButtonModule } from 'primeng/button'
import { MenuService } from '../../services/menu.service';

@Component({
  standalone: true,
    selector: 'app-shared-user-header',
    templateUrl: './shared-user-header.component.html',
    styleUrls: ['./shared-user-header.component.scss'],
  imports: [ToolbarModule, ButtonModule
    ]
})
export class SharedUserHeaderComponent {

  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  // private readonly popoverCtrl: PopoverController = inject(PopoverController);
  private readonly router = inject(Router);
  private readonly menuService = inject(MenuService);
  private readonly authStore = inject(AuthStore);
  private titleService = inject(TitleService);
  /** Titre exposé via un signal ou observable pour le mode déclaratif */
  protected readonly title$ = this.titleService.title.asObservable();
  protected readonly user = this.authStore.user; 

  @Input()
  public hideMenuIcon: boolean;

  public envMode: string = environment.name;;

  /**
     * Déclenche l'ouverture/fermeture du menu via le store.
     */
  protected toggleMenu(ev: Event) {
    this.menuService.toggleMenu(ev);
  }

  protected logoutClick() {
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
