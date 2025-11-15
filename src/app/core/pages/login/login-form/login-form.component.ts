import { Component, isDevMode, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonInput, NavController, IonicModule } from '@ionic/angular';
import { UpdateAppService } from 'src/app/shared/services/applicationUpdates/update-app.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { environment } from 'src/environments/environment';
import { LoginRedirectionService } from '../services/login-redirection.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        IonicModule,
        RouterLink,
    ],
})
export class LoginFormComponent implements OnInit {

  @ViewChild('password') password: IonInput;
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,

  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['']
    });
  }
  ionViewWillEnter(): void {
    this.loginForm.reset();
    if (isDevMode()) {
      this.loginForm.setValue({
        username: environment.username,
        password: environment.password
      });
    }
  }
  onSubmit() {
    // TODO this.updateService.showUpdates();
    const userName = this.loginForm.get('username').value.replace(/^0+/, '');
    const password = this.loginForm.get('password').value || userName;
    this.authService.authenticate(userName, password);
  }
}
