import { NgModule } from '@angular/core';

import { HomePage } from './pages/home/home.page';
import { CoreRoutingModule } from './core-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AppSharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { UpdateAppService } from '../shared/services/applicationUpdates/update-app.service';
import { AuthService } from '../shared/services/users/auth.service';
import { LoginFormComponent } from './pages/login/login-form/login-form.component';
import { LoginNoticeComponent } from './pages/login/login-notice/login-notice.component';
import { MenuHomeComponent } from './pages/home/menu-home/menu-home.component';
import { RegisterFormComponent } from './pages/register/register-form/register-form.component';
import { RoleFormComponent } from './pages/register/role-form/role-form.component';
import { IdentityFormComponent } from './pages/register/identity-form/identity-form.component';

@NgModule({
    imports: [
        AppSharedModule,
        SwiperModule,
        CoreRoutingModule,
        HomePage,
        LoginPage,
        RegisterPage,
        LoginFormComponent,
        LoginNoticeComponent,
        MenuHomeComponent,
        RegisterFormComponent,
        RoleFormComponent,
        IdentityFormComponent,
    ],
    providers: [
        UpdateAppService
    ]
})
export class CoreModule {

  constructor(
    private updateService: UpdateAppService,
    private authService: AuthService
  ) {
    // this.authService.getAuthUser().
  }
}
