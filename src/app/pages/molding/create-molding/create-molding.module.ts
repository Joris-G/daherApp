import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateMoldingPageRoutingModule } from './create-molding-routing.module';
import { CreateMoldingPage } from './create-molding.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateMoldingPageRoutingModule,
    SharedUserHeaderModule,
    MatExpansionModule,
  ],
  declarations: [CreateMoldingPage]
})
export class CreateMoldingPageModule { }
