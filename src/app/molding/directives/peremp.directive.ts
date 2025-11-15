import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { KitService } from '../services/kit.service';
import { MoldingService } from '../services/molding.service';

@Directive({
  selector: '[appPeremp]',
})
export class PerempDirective implements OnInit, OnChanges {
  @Input() appPeremp: {
    dateToCompare: Date;
    isLayup?: boolean;
  };
  constructor(
    private el: ElementRef,
    private kitService: KitService,
    private moldingService: MoldingService) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('change', this.appPeremp.isLayup);
    const isPerim = this.kitService.isPerim(this.appPeremp.dateToCompare, this.moldingService.molding.moldingDay);
    const isWarn = (isPerim && !this.appPeremp.isLayup)
    console.log(isWarn);
    const color = (isWarn) ? 'var(--ion-color-danger)' : '';
    this.el.nativeElement.style.color = color;
  }
  ngOnInit(): void {

  }





}


