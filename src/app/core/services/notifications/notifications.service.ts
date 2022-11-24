import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SwPush } from '@angular/service-worker';
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private httpHeaders = new HttpHeaders()
    .append('Access-Control-Allow-Origin', '*');


  constructor(
    private socket: Socket,
    // private _swPush: SwPush,
    private http: HttpClient) {


    Notification.requestPermission()
      .then((returnedPermission) => {
        console.log(returnedPermission);
        if (returnedPermission === 'granted') {
          this.socket.on('notification', data => {
            // this.data = data;
            // alert(data.message);
            // this._swPush.
            const notification = new Notification(
              'Notification depuis le serveur',
              { body: data.message, icon: 'assets/icons/icon-72x72.png' });
            // const serviceWorkerRegistration = new ServiceWorkerRegistration();
            // serviceWorkerRegistration.showNotification(
            //   'Notification depuis le serveur',
            //   { body: data.message, icon: 'assets/icons/icon-72x72.png' });
            // notification.close();
          });
        }
      });
  }
  newNotif() {
    this.http.post('http://localhost:3000/send-notification', { message: 'testmessage' }, { headers: this.httpHeaders })
      .subscribe((res) => {
        // alert(res);
      });
  }
}
