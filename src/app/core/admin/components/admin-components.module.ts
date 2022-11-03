import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KitService } from 'src/app/molding/services/kit.service';
import { AppSharedModule } from 'src/app/shared/shared.module';
import { PipeModule } from 'src/app/_pipes/pipe.module';
import { AdminPage } from '../pages/admin-home/admin.page';
import { AdminMoldingPage } from '../pages/admin-molding/admin-molding.page';
import { AdminUserPage } from '../pages/admin-user/admin-user.page';
import { AdminMoldingDashboardComponent } from './admin-molding-dashboard/admin-molding-dashboard.component';
import { AdminMoldingListComponent } from './admin-molding-list/admin-molding-list.component';
import { AdminUserTableComponent } from './admin-user-table/admin-user-table.component';
import { MoldingsFiltersComponent } from './moldings-filters/moldings-filters.component';
import { SharedAdminHeaderComponent } from './shared-admin-header/shared-admin-header.component';

@NgModule({
  imports: [
    AppSharedModule,
    PipeModule,
  ],
  declarations: [
    AdminPage,
    AdminMoldingPage,
    AdminUserPage,
    SharedAdminHeaderComponent,
    AdminMoldingListComponent,
    AdminUserTableComponent,
    MoldingsFiltersComponent,
    AdminMoldingDashboardComponent
  ],
  exports: [
    AdminPage,
    AdminMoldingPage,
    AdminUserPage,
    SharedAdminHeaderComponent,
    AdminMoldingListComponent,
    AdminUserTableComponent,
    MoldingsFiltersComponent,
    AdminMoldingDashboardComponent,
  ],
  providers: [
    KitService
  ]
})
export class AdminComponentsModule { }
