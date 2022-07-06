import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { KitService } from '../_services/molding/kits/kit.service';

@Directive({
  selector: '[appPeremp]'
})
export class PerempDirective implements OnInit {
  @Input() appPeremp: {
    dateToCompare: Date;
    baseDate: Date;
  };
  constructor(private el: ElementRef, private kitService: KitService) {
  }
  ngOnInit(): void {
    const isPerim = this.kitService.isPerim(this.appPeremp.dateToCompare, this.appPeremp.baseDate);
    const color = (isPerim) ? 'var(--ion-color-danger)' : 'dark';
    this.el.nativeElement.style.color = color;
  }


}
