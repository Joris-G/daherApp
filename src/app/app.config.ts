import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, LOCALE_ID } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { PreloadAllModules, RouteReuseStrategy, provideRouter, withPreloading } from "@angular/router";
import { IonicRouteStrategy } from "@ionic/angular";
import { provideIonicAngular } from "@ionic/angular/standalone";
import { TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { AuthInterceptor } from "./shared/services/auth.interceptor";
import { routes } from "./app.routes";

export const appConfig:ApplicationConfig = {
    providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
        provideRouter(routes, withPreloading(PreloadAllModules)),
        provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
        // File,
    // FileOpener,
        // PDFGenerator,
        provideAnimations()
    ]
}