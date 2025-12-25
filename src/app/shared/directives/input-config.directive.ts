import { Directive, inject } from "@angular/core";
import { IonInput } from "@ionic/angular/standalone";

/**
 * @description Configure globalement les propriétés des ion-input
 * @usage Applique automatiquement labelPlacement="floating" et fill="outline"
 */
@Directive({
  selector: 'ion-input',
  standalone: true
})
export class InputConfigDirective {
  private host = inject(IonInput);

  constructor() {
    // On définit les valeurs par défaut de manière déclarative
    this.host.labelPlacement = 'floating';
    this.host.fill = 'outline';
    this.host.clearInput = true;
  }
}