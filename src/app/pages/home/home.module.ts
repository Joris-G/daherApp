import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedUserHeaderModule } from '../../composants/shared-user-header/shared-user-header.module';
import { MenuModule } from 'src/app/composants/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedUserHeaderModule,
    MenuModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
