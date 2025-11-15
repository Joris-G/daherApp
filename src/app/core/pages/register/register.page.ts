import { Component } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { IonicModule } from '@ionic/angular';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    standalone: true,
    imports: [IonicModule, RegisterFormComponent],
})
export class RegisterPage {
  constructor(private titleService: TitleService) { }
  ionViewDidEnter() {
    this.titleService.setTitle(`Création d'un compte`);
  }
}
