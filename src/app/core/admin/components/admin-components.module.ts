import { NgModule } from '@angular/core';
import { KitService } from 'src/app/molding/services/kit.service';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { AdminPage } from '../pages/admin-home/admin.page';
import { AdminMoldingPage } from '../pages/admin-molding/admin-molding.page';
import { AdminUserPage } from '../pages/admin-user/admin-user.page';
import { AdminMoldingListComponent } from './admin-molding-list/admin-molding-list.component';
import { AdminUserTableComponent } from './admin-user-table/admin-user-table.component';
import { SharedAdminHeaderComponent } from './shared-admin-header/shared-admin-header.component';

@NgModule({
  imports: [
    AppSharedModule
  ],
  declarations: [
    AdminPage,
    AdminMoldingPage,
    AdminUserPage,
    SharedAdminHeaderComponent,
    AdminMoldingListComponent,
    AdminUserTableComponent
  ],
  exports: [
    AdminPage,
    AdminMoldingPage,
    AdminUserPage,
    SharedAdminHeaderComponent,
    AdminMoldingListComponent,
    AdminUserTableComponent
  ],
  providers: [
    KitService
  ]
})
export class AdminComponentsModule { }
