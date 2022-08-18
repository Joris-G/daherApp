import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { KitService } from '../services/kit.service';
import { MoldingService } from '../services/molding.service';

@Directive({
  selector: '[appPeremp]',
})
export class PerempDirective implements OnInit {
  @Input() appPeremp: {
    dateToCompare: Date;
    // baseDate: Date;
  };
  constructor(
    private el: ElementRef,
    private kitService: KitService,
    private moldingService: MoldingService) {
  }
  ngOnInit(): void {
    const isPerim = this.kitService.isPerim(this.appPeremp.dateToCompare, this.moldingService.molding.moldingDay);
    const color = (isPerim) ? 'var(--ion-color-danger)' : 'dark';
    this.el.nativeElement.style.color = color;
  }


}
