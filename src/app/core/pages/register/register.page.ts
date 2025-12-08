import { Component, inject } from '@angular/core';
import { TitleService } from 'src/app/shared/services/title.service';
import { IonicModule } from '@ionic/angular';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFormBuilder } from './register-forms-builder';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    standalone: true,
    imports: [IonicModule, RegisterFormComponent],
})
export class RegisterPage {
  private readonly registerFormBuilder = inject(RegisterFormBuilder);
  protected registerForm: FormGroup


  //TODO externaliser la mise à jours des titres de page dans un sercice qui intercept le routing
  constructor(private titleService: TitleService) {
    this.registerForm = this.registerFormBuilder.initRegisterForm();
  }
  ionViewDidEnter() {
    this.titleService.setTitle(`Création d'un compte`);
  }
}
