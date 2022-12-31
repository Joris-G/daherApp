import { Component, isDevMode, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonInput, NavController } from '@ionic/angular';
import { UpdateAppService } from 'src/app/shared/services/applicationUpdates/update-app.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { AuthService } from 'src/app/shared/services/users/auth.service';
import { environment } from 'src/environments/environment';
import { LoginRedirectionService } from '../services/login-redirection.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  @ViewChild('password') password: IonInput;
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private redirectionService: LoginRedirectionService,
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
    this.authService.authenticate(userName, password)
      .subscribe({
        next: () => {
          this.redirectionService.reRouteUser();
        },
        error: () => {
          this.loginForm.reset();
        }
      });
  }


}