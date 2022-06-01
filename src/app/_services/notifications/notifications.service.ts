import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private socket: Socket,
    private http: HttpClient) { }
  newNotif() {
    this.http.post('http://localhost:3000/send-notification', { message: 'testmessage' })
      .subscribe((res) => {
        alert(res);
      });
  }
}
