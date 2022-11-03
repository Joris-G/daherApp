import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateHeurePipe } from './dateHeure.pipe';



@NgModule({
  declarations: [
    DateHeurePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DateHeurePipe
  ]
})
export class PipeModule { }
