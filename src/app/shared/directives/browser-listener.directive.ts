import { Directive, HostListener } from '@angular/core';
import { AlertService } from '../services/divers/alert.service';

@Directive({
  selector: '[appBrowserListener]'
})
export class BrowserListenerDirective {


  constructor(
    private alertService: AlertService
  ) {
    console.log("hello constructor");
  }

}
