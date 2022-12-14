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
// import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { io } from "socket.io-client";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppSharedModule } from './shared/shared.module';
import { AuthInterceptor } from './shared/services/auth.interceptor';



// const config: SocketIoConfig = { url: 'http://localhost:3000', options: { transports: ['websocket', 'polling', 'flashsocket'] } };
import { Manager } from "socket.io-client";

const manager = new Manager("http://localhost:3000", {
  reconnectionDelayMax: 10000,
  query: {
    "my-key": "my-value"
  }
});

const socket = manager.socket("/my-namespace", {
  auth: {
    token: "123"
  }
});
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    // SocketIoModule.forRoot(config),
    BrowserAnimationsModule,
    HttpClientModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000'
    // }),
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
