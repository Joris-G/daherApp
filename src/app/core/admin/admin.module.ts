import { NgModule } from '@angular/core';
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
  ]
})
export class AdminModule {

}
