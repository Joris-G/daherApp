import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/users/auth.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {
  public changePasswordForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private authService: AuthService,

  ) {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', Validators.required]
    });
  }
  confirmChangePasswordClick() {
    const newUser = this.authService.authUser;
    newUser.password = this.changePasswordForm.get('newPassword').value;
    this.userService.updateUser(newUser);
  }
  onSubmit() {

  }

}
