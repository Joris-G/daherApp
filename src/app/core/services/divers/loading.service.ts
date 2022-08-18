import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

/**
 * Création d'un loader simple
 *
 * @export
 * @class LoadingService
 */
@Injectable({
  providedIn: 'root'
})

export class LoadingService {

  /**
   * Creates an instance of LoadingService.
   *
   * @param  loadingController
   * @memberof LoadingService
   */
  constructor(private loadingController: LoadingController) {
  }

  /**
   * Création d'un loader avec un message personalisé. Lancement du loader.
   *
   * @param message C'est le message que verra l'utilisateur pendant le chargement
   * @memberof LoadingService
   */
  startLoading(message: string = 'Chargement ...') {
    this.loadingController.create({
      spinner: 'lines',
      cssClass: 'my-custom-class',
      message,
    })
      .then((response) => {
        response.present();
      });
  }


  /**
   * Arrête le loader
   *
   * @memberof LoadingService
   */
  async stopLoading() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 100);

  }
}
