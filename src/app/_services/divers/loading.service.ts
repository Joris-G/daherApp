import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading: any;
  constructor(private loadingController: LoadingController) {
  }

  startLoading(message: string) {
    this.loadingController.create({
      cssClass: 'my-custom-class',
      message,
    })
      .then((response) => {
        response.present();
      });
  }

  async stopLoading() {
    setTimeout(() => {
      this.loadingController.dismiss();
    }, 100);

  }
}
