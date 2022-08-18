import { NgModule } from '@angular/core';
import { AdminRootingModule } from './admin-routing.module';
import { AdminComponentsModule } from './components/admin-components.module';

@NgModule({
  imports: [
    AdminComponentsModule,
    AdminRootingModule,
  ]
})
export class AdminModule {

}
