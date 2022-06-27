import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedUserHeaderModule } from './composants/shared-user-header/shared-user-header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './composants/menu/menu.module';
// import { SharedAdminHeaderComponentModule } from './composants/shared-admin-header/shared-admin-header.module';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



const config: SocketIoConfig = { url: 'http://localhost:3000', options: { transports: ['websocket', 'polling', 'flashsocket'] } };

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    SharedUserHeaderModule,
    MenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileOpener,
    PDFGenerator,
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
