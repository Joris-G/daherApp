import { Component } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(private titleService: TitleService) { }
  ionViewDidEnter() {
    this.titleService.setTitle(`Création d'un compte`);
  }
}
