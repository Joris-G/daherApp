import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ion-row[appHeaderRow]'
})
export class HeaderRowDirective implements OnInit {


  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elemRef.nativeElement, 'background', `var(--ion-color-light)`);
    this.renderer.addClass(this.elemRef.nativeElement, 'ion-padding-vertical');
  }


}
