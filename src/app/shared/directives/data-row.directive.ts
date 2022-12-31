import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ion-row[appDataRow]',
})
export class DataRowDirective implements OnInit {
  @Input() isUrgent: boolean;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
    this.setBackground();
    this.renderer.setStyle(this.elemRef.nativeElement, 'cursor', `pointer`);
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-bottom', `1px solid var(--ion-color-light)`);
    for (let i = 0; i < this.elemRef.nativeElement.children.length; i++) {
      const element = this.elemRef.nativeElement.children[i];
      this.renderer.setStyle(element, 'display', `flex`);
      this.renderer.setStyle(element, 'justify-content', `left`);
      this.renderer.setStyle(element, 'align-items', `center`);
    }
  }
  private highlight(state: boolean) {
    (state) ? this.setStyleHighligth() : this.setBackground();

  }
  setBackground() {
    (this.isUrgent) ? this.setStyleUrgent() : this.setStyleNormal();
  }
  private setStyleNormal() {
    this.elemRef.nativeElement.style.backgroundColor = '';
    this.elemRef.nativeElement.style.color = '';
    this.elemRef.nativeElement.style.opacity = 1;
  }
  private setStyleUrgent() {
    this.elemRef.nativeElement.style.backgroundColor = 'var(--ion-color-danger)';
    this.elemRef.nativeElement.style.opacity = 0.7;
    this.elemRef.nativeElement.style.color = 'white';
  }
  private setStyleHighligth() {
    this.elemRef.nativeElement.style.backgroundColor = 'var(--ion-color-secondary)';
    this.elemRef.nativeElement.style.color = 'white';
  }


}
