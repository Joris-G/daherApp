import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SharedUserHeaderComponent } from './components/shared-user-header/shared-user-header.component';
import { MaterialModule } from './material.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { UserSheetComponent } from './components/user-sheet/user-sheet.component';
import { UserPopoverComponent } from './components/user-popover/user-popover.component';
import { LoginNoticeComponent } from './notices/login-notice/login-notice.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatSortModule } from '@angular/material/sort';
import { LoadingService } from '../core/services/divers/loading.service';
import { AlertService } from '../core/services/divers/alert.service';
import { UsersService } from '../core/services/users/users.service';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

@NgModule({
  declarations: [
    SharedUserHeaderComponent,
    UserSheetComponent,
    UserPopoverComponent,
    LoginNoticeComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    IndicatorsModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    RouterModule,
    MaterialModule,
    MatSortModule,
    IndicatorsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUserHeaderComponent,
    UserSheetComponent,
    UserPopoverComponent,
    LoginNoticeComponent,
    EditorModule,
  ],
  providers: [
    LoadingService,
    AlertService,
    DatePipe,
    UsersService,
  ]
})
export class AppSharedModule { }
