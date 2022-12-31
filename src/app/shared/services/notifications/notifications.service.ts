import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  public socket = io("http://localhost:5000", {
    reconnectionDelayMax: 10000,
    query: {
      "my-key": "my-value"
    }
  });

  private httpHeaders = new HttpHeaders()
    .append('Access-Control-Allow-Origin', '*');


  constructor(
    private http: HttpClient) {
    Notification.requestPermission()
      .then((returnedPermission) => {
        console.log(returnedPermission);
        if (returnedPermission === 'granted') {
          this.socket.on('new_molding', (data) => {
            console.log("new_molding received")
          });
          // this.socket.on('connect_failed', () => { });
          // this.socket.on('notification', data => {
          // this.data = data;
          // alert(data.message);
          // this._swPush.
          // const notification = new Notification(
          //   'Notification depuis le serveur',
          //   { body: data.message, icon: 'assets/icons/icon-72x72.png' });
          // const serviceWorkerRegistration = new ServiceWorkerRegistration();
          // serviceWorkerRegistration.showNotification(
          //   'Notification depuis le serveur',
          //   { body: data.message, icon: 'assets/icons/icon-72x72.png' });
          // notification.close();
          // });
        }
      });
    this.socket.on('new_molding', () => {
      console.log("new molding alert");
    })
  }

  newNotif() {
    this.http.post('http://localhost:5000/send-notification', { message: 'testmessage' }, { headers: this.httpHeaders })
      .subscribe((res) => {
        // alert(res);
      });
  }


}
