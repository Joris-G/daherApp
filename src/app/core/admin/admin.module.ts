import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/_pipes/pipe.module';
import { SericesService } from '../services/users/serices.service';
import { UsersService } from '../services/users/users.service';
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
