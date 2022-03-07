import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MatStepperModule } from '@angular/material/stepper';
import { NewToolPageRoutingModule } from './new-tool-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { NewToolPage } from './new-tool.page';
import { SharedUserHeaderModule } from 'src/app/composants/shared-user-header/shared-user-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewToolPageRoutingModule,
    SharedUserHeaderModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatStepperModule,
  ],
  declarations: [NewToolPage]
})
export class NewToolPageModule { }
