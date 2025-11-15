import { NgModule } from '@angular/core';
import { SericesService } from 'src/app/shared/services/users/serices.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { AdminRootingModule } from './admin-routing.module';
import { AdminComponentsModule } from './components/admin-components.module';

@NgModule({
  imports: [
    AdminComponentsModule,
    AdminRootingModule,
    AppSharedModule,
  ],
  exports: [
    AppSharedModule
  ],
  providers: [UsersService, SericesService]
})
export class AdminModule {

}
