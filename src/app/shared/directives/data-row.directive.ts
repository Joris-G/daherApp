import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: 'ion-row[appDataRow]',
    standalone: true,
})
export class DataRowDirective implements OnInit {
  @Input() isUrgent: boolean;
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }


  ngOnInit(): void {
    this.setBackground();
    this.renderer.setStyle(this.elemRef.nativeElement, 'cursor', `pointer`);
    this.renderer.setStyle(this.elemRef.nativeElement, 'border-bottom', `1px solid var(--ion-color-light)`);
    for (const child of this.elemRef.nativeElement.children) {
      this.renderer.setStyle(child, 'display', `flex`);
      this.renderer.setStyle(child, 'justify-content', `left`);
      this.renderer.setStyle(child, 'align-items', `center`);
    }
  }

  private setBackground(): void {
    if (this.isUrgent) { this.setStyleUrgent(); }
    else { this.setStyleNormal(); }
  }

  private highlight(state: boolean) {
    if (state) { this.setStyleHighligth(); }
    else { this.setBackground(); }
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
