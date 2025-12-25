import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withComponentInputBinding, withHashLocation, withPreloading } from "@angular/router";
import { IonicRouteStrategy } from "@ionic/angular";
import { provideIonicAngular } from "@ionic/angular/standalone";
import { TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { AuthInterceptor } from "./shared/services/users/auth.interceptor";
import { routes } from "./app.routes";
import { fr_FR, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(fr);

export const appConfig:ApplicationConfig = {
    providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideIonicAngular({
            rippleEffect: false,
        }),
        provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation(), withComponentInputBinding()),
        provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },

        // File,
    // FileOpener,
        // PDFGenerator,
        provideAnimations(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), provideAnimationsAsync()
    ]

}