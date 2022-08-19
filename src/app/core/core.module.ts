import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './pages/home/home.page';
import { AdminModule } from './admin/admin.module';
import { CoreRoutingModule } from './core-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AppSharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';

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
  ]
})
export class CoreModule { }
