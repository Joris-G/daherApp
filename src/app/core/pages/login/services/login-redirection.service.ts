import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { User } from 'src/app/_interfaces/user';
import { RoleList } from 'src/app/_interfaces/roles';

interface ReRouteRole{
  roles:RoleList,
  route: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginRedirectionService {
  //TODO sécuriser les roles possibles
  private reRouteOpts:ReRouteRole[] = [
    {
      roles: ['MOULEUR', '	RESP_MOULAGE', 'CE_MOULAGE'],
      route: 'molding'
    },
    {
      roles: ['RESP_OUTIL', 'CE_OUTIL', 'OUTILLEUR'],
      route: 'tooling'
    },
    {
      roles: ['ADMIN', 'USER', 'METHODES'],
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
