import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode, provideZoneChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { appConfig } from './app/app.config';

// Démarrer MSW en mode développement uniquement
async function enableMocking() {
  if (!environment.production) {
    const { worker } = await import('./mocks/browser');

    return worker.start({
      onUnhandledRequest: 'warn',
      serviceWorker: {
        url: '/mockServiceWorker.js'
      }
    }).then(() => {
      console.log('🔶 MSW is running - Mock API active');
    }).catch(err => {
      console.error('❌ MSW failed to start:', err);
    });
  }
  return Promise.resolve();
}

if (environment.production) {
  enableProdMode();
}
registerLocaleData(fr);
enableMocking().then(() => {
bootstrapApplication(AppComponent, {...appConfig, providers: [provideZoneChangeDetection(), ...appConfig.providers]})
  .catch(err => console.log(err));
});