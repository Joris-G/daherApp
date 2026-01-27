import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ApplicationConfig, LOCALE_ID } from "@angular/core";
import { PreloadAllModules, provideRouter, withComponentInputBinding, withHashLocation, withPreloading } from "@angular/router";
// import { TINYMCE_SCRIPT_SRC } from "@tinymce/tinymce-angular";
import { AuthInterceptor } from "./shared/services/users/auth.interceptor";
import { routes } from "./app.routes";
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import Material from '@primeuix/themes/material';
import { providePrimeNG } from "primeng/config";
import { definePreset } from '@primeuix/themes';

registerLocaleData(fr);

const MyCustomPreset = definePreset(Material, {
    semantic: {
        primary: {
            500: '#00325F',
            400: '#024A90',
        },

    }
});

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
        // { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
        // provideAnimations(), provideNzI18n(fr_FR), importProvidersFrom(FormsModule), provideAnimationsAsync(),
        providePrimeNG(
            {
            theme: {
                    preset: MyCustomPreset,
                },
                translation: {
                    startsWith: 'Commence par',
                    contains: 'Contient',
                    notContains: 'Ne contient pas',
                    endsWith: 'Se termine par',
                    equals: 'Égal à',
                    notEquals: 'Différent de',
                    noFilter: 'Aucun filtre',
                    lt: 'Inférieur à',
                    lte: 'Inférieur ou égal à',
                    gt: 'Supérieur à',
                    gte: 'Supérieur ou égal à',
                    is: 'Est',
                    isNot: 'N\'est pas',
                    before: 'Avant',
                    after: 'Après',
                    dateIs: 'La date est',
                    dateIsNot: 'La date n\'est pas',
                    dateBefore: 'Avant le',
                    dateAfter: 'Après le',
                    clear: 'Effacer',
                    apply: 'Appliquer',
                    matchAll: 'Correspondre à tous',
                    matchAny: 'Correspondre à n\'importe lequel',
                    addRule: 'Ajouter une règle',
                    removeRule: 'Retirer la règle',
                    accept: 'Oui',
                    reject: 'Non',
                    choose: 'Choisir',
                    upload: 'Envoyer',
                    cancel: 'Annuler',
                    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
                    dayNamesShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
                    dayNamesMin: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
                    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
                    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
                    dateFormat: 'dd/mm/yy',
                    firstDayOfWeek: 1,
                    today: 'Aujourd\'hui',
                    weekHeader: 'Sem',
                    weak: 'Faible',
                    medium: 'Moyen',
                    strong: 'Fort',
                    passwordPrompt: 'Saisissez un mot de passe',
                    emptyMessage: 'Aucun résultat trouvé',
                    emptyFilterMessage: 'Aucun résultat trouvé'
            }
            }
        )
        // File,
    // FileOpener,
        // PDFGenerator,
    ]

}
