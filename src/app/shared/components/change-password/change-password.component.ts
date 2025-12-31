import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { AuthStore } from '../../services/users/auth.store';

@Component({
  standalone: true,
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss'],
  imports: [ReactiveFormsModule,]
})
export class ChangePasswordComponent {
  private readonly authStore: AuthStore = inject(AuthStore);
  public changePasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
  ) {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', Validators.required]
    });
  }
  confirmChangePasswordClick() {
    const newUser = this.authStore.user();
    newUser.password = this.changePasswordForm.get('newPassword').value;
    this.userService.updateUser(newUser);
  }
  onSubmit() {

  }

}
