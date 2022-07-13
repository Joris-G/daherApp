import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { AdminPageRoutingModule } from './admin-routing.module';
import { AdminPage } from './admin.page';
import { SharedAdminHeaderModule } from 'src/app/composants/shared-admin-header/shared-admin-header.module';
import { NotActivePipe } from 'src/app/_pipes/is-active.pipe';
import { AdminMoldingPage } from './admin-molding/admin-molding.page';
import { AdminUserPage } from './admin-user/admin-user.page';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';
import { UsersService } from 'src/app/_services/users/users.service';
import { ComponentModule } from 'src/app/composants/component/component.module';
import { SericesService } from 'src/app/_services/users/serices.service';
import { DirectiveModule } from 'src/app/_directives/directive.module';
import { AdminUserTableComponent } from './admin-user/admin-user-table/admin-user-table.component';
import { AdminMoldingListComponent } from './admin-molding/_components/admin-molding-list/admin-molding-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    AdminPageRoutingModule,
    SharedAdminHeaderModule,
    ComponentModule,
    DirectiveModule,
  ],
  declarations: [
    AdminPage,
    NotActivePipe,
    AdminUserPage,
    AdminMoldingPage,
    AdminUserTableComponent,
    AdminMoldingListComponent,
  ],
  providers: [
    DatePipe,
    KitService,
    MoldingService,
    UsersService,
    SericesService,
  ]
})
export class AdminPageModule { }
