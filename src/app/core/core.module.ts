import { NgModule } from '@angular/core';

import { HomePage } from './pages/home/home.page';
import { CoreRoutingModule } from './core-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AppSharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { UpdateAppService } from './services/applicationUpdates/update-app.service';
import { AuthService } from './services/users/auth.service';

@NgModule({
  declarations: [
    HomePage,
    LoginPage,
    RegisterPage,
  ],
  imports: [
    AppSharedModule,
    SwiperModule,
    CoreRoutingModule,
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
