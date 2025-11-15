import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { appConfig } from './app/app.config';




if (environment.production) {
  enableProdMode();
}

registerLocaleData(fr);

bootstrapApplication(AppComponent, appConfig);
// .catch(err => console.log(err));
