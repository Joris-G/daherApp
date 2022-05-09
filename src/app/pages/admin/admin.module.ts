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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatTableModule,
    AdminPageRoutingModule,
    SharedAdminHeaderModule
  ],
  declarations: [AdminPage, NotActivePipe, AdminUserPage, AdminMoldingPage],
  providers: [
    DatePipe,
    KitService,
    MoldingService,
    UsersService
  ]
})
export class AdminPageModule { }
