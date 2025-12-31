import { Injectable } from '@angular/core';

// TODO A remplacer par un spinner
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
  private hasStarted = false;
  /**
   * Creates an instance of LoadingService.
   *
   * @param  loadingController
   * @memberof LoadingService
   */
  constructor() {
  }

  /**
   * Création d'un loader avec un message personalisé. Lancement du loader.
   *
   * @param message C'est le message que verra l'utilisateur pendant le chargement
   * @memberof LoadingService
   */
  async startLoading(message: string = 'Chargement ...') {
    // const loader = await this.loadingController.create({
    //   spinner: 'lines',
    //   cssClass: 'app-loader',
    //   message,
    // });

    // this.hasStarted = true;

    // await loader.present();

  }


  /**
   * Arrête le loader
   *
   * @memberof LoadingService
   */
  async stopLoading() {
    // if (!this.hasStarted) return;
    // await this.loadingController.dismiss();
    // this.hasStarted = false;
  }
}
