import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './composants/menu/menu.module';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { LoginNoticeComponent } from './composants/notices/login-notice/login-notice.component';
import { HeaderService } from './composants/shared-user-header/header.service';
import { SharedUserHeaderComponent } from './composants/shared-user-header/shared-user-header.component';
import { UserSheetComponent } from './composants/user-sheet/user-sheet.component';
import { ComponentModule } from './composants/component/component.module';



const config: SocketIoConfig = { url: 'http://localhost:3000', options: { transports: ['websocket', 'polling', 'flashsocket'] } };

@NgModule({
  declarations: [
    AppComponent,
    LoginNoticeComponent,
    // PerempDirective,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    SocketIoModule.forRoot(config),
    AppRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    ComponentModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    File,
    FileOpener,
    PDFGenerator
  ],
  bootstrap: [AppComponent],
  exports: [
    // PerempDirective,
    CommonModule,
    MenuModule,
    ComponentModule,
  ]
})
export class AppModule { }
