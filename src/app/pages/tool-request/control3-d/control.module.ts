import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Control3DPageRoutingModule } from './control-routing.module';
import { Control3DPage } from './control.page';
import { ControledddModule } from 'src/app/composants/documents-pdf/controle3d/controleddd.module';
import { ToolInputModule } from 'src/app/composants/tool-input/tool-input.module';
import { ToolRequestFooterModule } from 'src/app/composants/tool-request-footer/tool-request-footer.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Control3DPageRoutingModule,
    ControledddModule,
    ToolInputModule,
    ToolRequestFooterModule,
    EditorModule
  ],
  declarations: [Control3DPage],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class Control3DPageModule { }
