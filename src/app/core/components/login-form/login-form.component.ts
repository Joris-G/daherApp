import { Component, inject, isDevMode, output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Credentials } from 'src/app/shared/services/users/credentials.interface';
import { FloatLabelModule } from 'primeng/floatlabel'
import { ButtonGroupModule } from 'primeng/buttongroup'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext';

@Component({
  standalone: true,
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
  host: { class: 'flex-1 flex flex-col justify-center items-center w-full bg-gray-50 dark:bg-gray-900' },
  imports: [
    FloatLabelModule,
    InputTextModule,
    ButtonGroupModule,
    ButtonModule,
        ReactiveFormsModule,
      RouterLink,
    ]
})
export class LoginFormComponent {
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  protected loginForm: FormGroup;
  public onSubmit = output<Credentials>();
  constructor() {

    this.loginForm = this.formBuilder.group({
      email: ['admin@test.com', Validators.required],
      password: [' ', Validators.required]
    });
  }


  ionViewWillEnter(): void {
    this.loginForm.reset();
    if (isDevMode()) {
      this.loginForm.setValue({
        email: '',
        password: ''
      });
    }
  }

  submit() {
    const email = this.loginForm.get('email').value.replace(/^0+/, '');
    const password = this.loginForm.get('password').value || email;
    this.onSubmit.emit({ email, password });
  }
}
