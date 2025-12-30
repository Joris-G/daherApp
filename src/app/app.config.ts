import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, LOCALE_ID } from "@angular/core";
import { PreloadAllModules, provideRouter, withComponentInputBinding, withHashLocation, withPreloading } from "@angular/router";
import { TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { AuthInterceptor } from "./shared/services/users/auth.interceptor";
import { routes } from "./app.routes";
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import Material from '@primeuix/themes/material';

registerLocaleData(fr);

export const appConfig:ApplicationConfig = {
    providers: [
        // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        // provideIonicAngular({
        //     rippleEffect: false,
        // }),
        provideRouter(routes, withPreloading(PreloadAllModules), withHashLocation(), withComponentInputBinding()),
        provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
        // provideAnimations(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Material
            }
        })
        // File,
    // FileOpener,
        // PDFGenerator,
    ]

}

function providePrimeNG(arg0: { theme: { preset: any; }; }): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
    throw new Error("Function not implemented.");
}
