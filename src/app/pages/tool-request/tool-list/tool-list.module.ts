import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolListPageRoutingModule } from './tool-list-routing.module';

import { ToolListPage } from './tool-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolListPageRoutingModule
  ],
  declarations: [ToolListPage]
})
export class ToolListPageModule {}
