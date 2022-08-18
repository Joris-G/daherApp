import { CommonModule } from '@angular/common';
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

@NgModule({
  declarations: [
    SharedUserHeaderComponent,
    UserSheetComponent,
    UserPopoverComponent,
    LoginNoticeComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    IndicatorsModule,
    EditorModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    RouterModule,
    MaterialModule,
    IndicatorsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUserHeaderComponent,
    UserSheetComponent,
    UserPopoverComponent,
    LoginNoticeComponent,
    EditorModule,
  ]
})
export class AppSharedModule { }
