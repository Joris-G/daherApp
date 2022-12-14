import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AlertService } from './shared/services/divers/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostListener('window:beforeunload', ['$event'])
  async beforeunloadHandler(event): Promise<boolean> {
    event.preventDefault();
    const resp = await this.alertService.presentAlertConfirm(
      "Alerte fermeture application",
      "Voulez-vous vous déconnecter ?");
    // event.returnValue = false;
    return resp;
  }
  constructor(
    private titleService: Title,
    private alertService: AlertService
  ) { }
  ngOnInit(): void {
    this.initTitle();
  }

  private initTitle() {
    if (environment.name === 'QUAL') {
      const newTitle = `QUAL - ${this.titleService.getTitle()}`;
      this.titleService.setTitle(newTitle);
    }
  }

}
