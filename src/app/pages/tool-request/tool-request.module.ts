import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolRequestPageRoutingModule } from './tool-request-routing.module';

import { ToolRequestPage } from './tool-request.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolRequestPageRoutingModule,
    SharedUserHeaderModule
  ],
  declarations: [ToolRequestPage]
})
export class ToolRequestPageModule { }
