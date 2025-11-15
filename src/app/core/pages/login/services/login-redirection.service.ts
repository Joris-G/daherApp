import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { User } from 'src/app/_interfaces/user';

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
    private navControler: NavController,

  ) { }
  // TODO à déplacer dans un service
  /**
   * Trouve la route privilégiée de l'utilisateur. Puis navigue vers la route
   *
   * @private
   * @memberof LoginPage
   */
  reRouteUser(user: User) {
    const prefRoute = this.reRouteOpts.find(
      (curRouteOpt) => user.roles.some(
        (role) => curRouteOpt.roles.find(roleOpt => roleOpt === role)));
    console.log(prefRoute);
    if (prefRoute !== undefined) {
      this.navControler.navigateRoot(prefRoute.route);
      return;
    }
    this.navControler.navigateRoot('home');
  }
}
