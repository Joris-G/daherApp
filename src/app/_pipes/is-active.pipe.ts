import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../_interface/user';

@Pipe({
  name: 'NotActive'
})
export class NotActivePipe implements PipeTransform {

  transform(users: User[]): User[] {
    if (users) {
      return users.filter(user => user.isActive === false
      );
    }
  }

}
