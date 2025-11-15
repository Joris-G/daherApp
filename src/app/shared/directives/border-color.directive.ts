import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective implements OnInit {
  @Input() borderColor: string | boolean;
  @Input() poste: string;
  constructor(private elemRef: ElementRef) {


  }
  ngOnInit(): void {
    this.setBorder();
    this.setColor();
  }
  private setColor() {
    let color: string;
    switch (this.poste) {
      case 'Operateur':
        color = 'primary';
        break;
      case 'Maitrise':
        color = 'secondary';
        break;
      case '':
        break;
      default:
        break;
    }
    this.elemRef.nativeElement.style.color = `var(--ion-color-${color})`;

  }
  private setBorder() {
    const size = "2px";
    const type = "solid";
    let color: string;
    if (typeof this.borderColor === 'string') {
      color = this.borderColor
    } else {
      color = (this.borderColor) ? 'success' : 'danger';
    }
    const cssColor = `${size} ${type} var(--ion-color-${color})`;
    console.log(cssColor, this.borderColor);
    this.elemRef.nativeElement.style.border = cssColor;
    this.elemRef.nativeElement.style.boxShadow = `0 0 5px var(--ion-color-${color})`;
  }

}
