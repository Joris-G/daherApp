import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AppSharedModule,
    // Toujours déclarer en dernier pour éviter les erreurs de routes
    AppRoutingModule,

  ],
  providers: [
    // { useClass: GlobalErrorHandler, provide: ErrorHandler },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    File,
    FileOpener,
    PDFGenerator,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
