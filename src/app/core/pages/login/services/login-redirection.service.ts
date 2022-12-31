import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectionService {
  private reRouteOpts = [
    {
      roles: ['ROLE_MOULEUR', '	ROLE_RESP_MOULAGE', 'ROLE_CE_MOULAGE'],
      route: 'molding'
    },
    {
      roles: ['ROLE_RESP_OUTIL', 'ROLE_CE_OUTIL', 'ROLE_OUTILLEUR'],
      route: 'tooling'
    },
    {
      roles: ['ROLE_ADMIN', 'ROLE_USER', 'ROLE_METHODES'],
      route: 'home'
    },
  ];
  constructor(
    private authService: AuthService,
    private navControler: NavController,

  ) { }
  // TODO à déplacer dans un service
  /**
   * Trouve la route privilégiée de l'utilisateur. Puis navigue vers la route
   *
   * @private
   * @memberof LoginPage
   */
  reRouteUser() {
    const prefRoute = this.reRouteOpts.find(
      (curRouteOpt) => this.authService.authUser.roles.some(
        (role) => curRouteOpt.roles.find(roleOpt => roleOpt === role)));
    console.log(prefRoute);
    if (prefRoute !== undefined) {
      this.navControler.navigateRoot(prefRoute.route);
      return;
    }
    this.navControler.navigateRoot('home');
  }
}
