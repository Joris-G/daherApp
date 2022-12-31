import { Component, HostListener } from '@angular/core';
import { AlertService } from './shared/services/divers/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @HostListener('window:beforeunload', ['$event'])
  async beforeunloadHandler(event): Promise<boolean> {
    event.preventDefault();
    const resp = await this.alertService.presentAlertConfirm(
      "Alerte fermeture application",
      "Voulez-vous vous déconnecter ?");
    // event.returnValue = false;
    return resp;
  }
  constructor(
    private alertService: AlertService
  ) { }

}
