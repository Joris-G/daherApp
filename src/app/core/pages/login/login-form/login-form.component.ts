import { Component, inject, isDevMode, OnInit, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { RouterLink } from '@angular/router';
import { Credentials } from 'src/app/shared/services/users/credentials.interface';
import { IonButton, IonItem, IonLabel, IonNote, IonText, IonInput, IonButtons, IonIcon, IonItemGroup } from '@ionic/angular/standalone';



@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: true,
  imports: [IonItemGroup,
    ReactiveFormsModule,
        RouterLink,
    IonItem,
    IonLabel,
    IonText,
    IonNote,
    IonInput,
    IonButton,
    IonButtons,
    IonIcon,

    ],
})
export class LoginFormComponent implements OnInit {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  protected loginForm: FormGroup;
  public onSubmit = output<Credentials>();

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
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

  submit() {
    const username = this.loginForm.get('username').value.replace(/^0+/, '');
    const password = this.loginForm.get('password').value || username;
    this.onSubmit.emit({ username, password });
  }
}
