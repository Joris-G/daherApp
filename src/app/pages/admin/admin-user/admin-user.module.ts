import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUserPageRoutingModule } from './admin-user-routing.module';

import { AdminUserPage } from './admin-user.page';
import { NotActivePipe } from 'src/app/_pipes/is-active.pipe';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUserPageRoutingModule,
    MatTableModule,
  ],
  declarations: [
    AdminUserPage,
    NotActivePipe],
  providers: [DatePipe]
})
export class AdminUserPageModule { }
