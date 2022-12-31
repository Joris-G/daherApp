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
import { EditorModule } from '@tinymce/tinymce-angular';
import { MatSortModule } from '@angular/material/sort';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { BorderColorDirective } from './directives/border-color.directive';
import { HeaderRowDirective } from './directives/header-row.directive';
import { DataRowDirective } from './directives/data-row.directive';
import { TableComponent } from './components/table/table.component';
import { AlertService } from './services/divers/alert.service';
import { LoadingService } from './services/divers/loading.service';
import { UsersService } from './services/users/users.service';
import { IddleService } from './services/iddle.service';
import { NotificationsService } from './services/notifications/notifications.service';

@NgModule({
  declarations: [
    SharedUserHeaderComponent,
    UserSheetComponent,
    UserPopoverComponent,
    ChangePasswordComponent,
    BorderColorDirective,
    HeaderRowDirective,
    DataRowDirective,
    TableComponent,
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
    EditorModule,
    BorderColorDirective,
    HeaderRowDirective,
    DataRowDirective,
    TableComponent,

  ],
  providers: [
    LoadingService,
    AlertService,
    DatePipe,
    UsersService,
    IddleService,
    NotificationsService
  ]
})
export class AppSharedModule { }
