import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatStepperModule } from '@angular/material/stepper';
import { NewToolPageRoutingModule } from './new-tool-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { NewToolPage } from './new-tool.page';
import { SboModule } from 'src/app/composants/documents-pdf/sbo/sbo.module';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewToolPageRoutingModule,
    ReactiveFormsModule,
    NgxEditorModule,
    MatStepperModule,
    SboModule,
    MatExpansionModule,
  ],
  declarations: [NewToolPage]
})
export class NewToolPageModule { }
