import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Control3DPageRoutingModule } from './control-routing.module';
import { Control3DPage } from './control.page';
import { ControledddModule } from 'src/app/composants/documents-pdf/controle3d/controleddd.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Control3DPageRoutingModule,
    ControledddModule,
  ],
  declarations: [Control3DPage]
})
export class Control3DPageModule { }
