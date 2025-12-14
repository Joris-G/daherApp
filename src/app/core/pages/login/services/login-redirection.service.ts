import { inject, Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly navControler: NavController = inject(NavController);


  //TODO Tester les redirection avec les roles
  private reRouteOpts:ReRouteRole[] = [
    {
      roles: ['MOULEUR', 'RESP_MOULAGE', 'CE_MOULAGE'],
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

  // TODO prefered route
  /**
   * Trouve la route privilégiée de l'utilisateur. Puis navigue vers la route
   * 
   * @public
   * @memberof LoginPage
   */
  public reRouteUser(user: User) {
    const prefRoute = this.reRouteOpts.find(
      (curRouteOpt) => user.roles.some(
        (role) => curRouteOpt.roles.find(roleOpt => roleOpt === role)));
    console.log(prefRoute);
    if (prefRoute) {
      this.navControler.navigateRoot(prefRoute.route);
      return;
    }
    this.navControler.navigateRoot('home');
  }
}
