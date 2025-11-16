import { Routes } from "@angular/router";
import { RoleGuard } from "src/app/shared/services/users/role.guard";
import { AdminUserPage } from "./pages/admin-user/admin-user.page";
import { AdminMoldingPage } from "./pages/admin-molding/admin-molding.page";
import { AdminPage } from "./pages/admin-home/admin.page";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    canActivate: [RoleGuard],
    data: { expectedRole: ['ROLE_ADMIN'] },
    children: [
          { path: 'home', component: AdminPage },
      { path: 'users', component: AdminUserPage },
      { path: 'molding', component: AdminMoldingPage },
    ]
  }
];