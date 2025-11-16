import { Component, HostListener } from '@angular/core';
import { IonApp, IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';
// import { AlertService } from './shared/services/divers/alert.service';
import { addIcons } from 'ionicons';
import { informationCircleOutline, accessibilityOutline, personCircleOutline, logOutOutline, filterOutline, personCircle, arrowBackOutline, closeCircleOutline, saveOutline, printOutline, stopOutline, trashOutline, searchOutline, link, scan, print, save, checkmarkOutline, checkmarkDoneOutline, airplane, settingsOutline, constructOutline, closeOutline, lockClosedOutline, keyOutline, calendarOutline, add, checkmark, documentAttachOutline, refreshOutline, sendOutline, refreshCircleOutline, } from 'ionicons/icons';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  // @HostListener('window:beforeunload', ['$event'])
  // async beforeunloadHandler(event): Promise<boolean> {
  //   event.preventDefault();
  //   const resp = await this.alertService.presentAlertConfirm(
  //     "Alerte fermeture application",
  //     "Voulez-vous vous déconnecter ?");
  //   // event.returnValue = false;
  //   return resp;
  // }
  constructor(

    // private alertService: AlertService
  ) {
    addIcons({ informationCircleOutline, accessibilityOutline, personCircleOutline, logOutOutline, filterOutline, personCircle, arrowBackOutline, closeCircleOutline, saveOutline, printOutline, stopOutline, trashOutline, searchOutline, link, scan, print, save, checkmarkOutline, checkmarkDoneOutline, airplane, settingsOutline, constructOutline, closeOutline, lockClosedOutline, keyOutline, calendarOutline, add, checkmark, documentAttachOutline, refreshOutline, sendOutline, refreshCircleOutline });
  }

}
