import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ion-row[appDataRow]',
})
export class DataRowDirective implements OnInit {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.renderer.setStyle(this.elemRef.nativeElement, 'cursor', `pointer`);
    this.renderer.setStyle(this.elemRef.nativeElement, 'border', `1px solid var(--ion-color-light)`);
    for (let i = 0; i < this.elemRef.nativeElement.children.length; i++) {
      const element = this.elemRef.nativeElement.children[i];
      this.renderer.setStyle(element, 'display', `flex`);
      this.renderer.setStyle(element, 'justify-content', `left`);
      this.renderer.setStyle(element, 'align-items', `center`);
    }
  }
  private highlight(state: boolean) {
    if (state) {
      this.elemRef.nativeElement.style.backgroundColor = 'var(--ion-color-secondary)';
      this.elemRef.nativeElement.style.color = 'white';
    } else {
      this.elemRef.nativeElement.style.backgroundColor = '';
      this.elemRef.nativeElement.style.color = '';
    }

  }
}
