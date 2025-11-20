import { Routes } from "@angular/router";
import { canActivateAuth } from "./shared/services/users/auth.guard";
import { LoginPage } from "./core/pages/login/login.page";
import { RegisterPage } from "./core/pages/register/register.page";
import { HomePage } from "./core/pages/home/home.page";


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    canActivate: [canActivateAuth],
    children: [
      { path: 'home', component: HomePage },
      {
        path: 'admin',
        loadChildren: () => import('./core/admin/admin.routes')
          .then(m => m.ADMIN_ROUTES)
      },
      {
        path: 'molding',
        loadChildren: () => import('./molding/molding.routes')
          .then(m => m.MOLDING_ROUTES)
      },
      {
        path: 'tooling',
        loadChildren: () => import('./tooling/tooling.routes')
          .then(m => m.TOOLING_ROUTES)
      },
    ]
  },
  {
    path: 'login',
    component: LoginPage
  },
  { path: 'register', component: RegisterPage },

  { path: '**', redirectTo: '' }
];