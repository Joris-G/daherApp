import { NgModule } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';

@NgModule({
exports:[
  MatExpansionModule,
  MatDividerModule,
  MatTableModule
]
})
export class MaterialModule{}
