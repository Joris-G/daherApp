import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MoldingPageRoutingModule } from './molding-routing.module';
import { MoldingPage } from './molding.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'src/app/composants/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoldingPageRoutingModule,
    SharedUserHeaderModule,
    MenuModule,
    RouterModule
  ],
  declarations: [MoldingPage]
})
export class MoldingPageModule { }
