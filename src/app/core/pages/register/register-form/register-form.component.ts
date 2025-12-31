import { Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserCreate } from 'src/app/_interfaces/user';
import { RoleFormComponent } from '../role-form/role-form.component';
import { IdentityFormComponent } from '../identity-form/identity-form.component';


@Component({
  standalone: true,
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss'],
    imports: [
      ReactiveFormsModule,
        RoleFormComponent,
        IdentityFormComponent,
    ]
})
export class RegisterFormComponent {
  public registerForm = input<FormGroup>();
  protected submitNewUser = output<UserCreate>();

  onSubmitNewUser() {
    const userToRegister: UserCreate = {
      ...this.registerForm().value,
    }
    this.submitNewUser.emit(userToRegister);
  }
}
