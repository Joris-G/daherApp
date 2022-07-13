import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/app/_interfaces/user';
import { PageParams } from './page-params';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  public pageParams$ = new Subject<PageParams>();
  private pageParams: PageParams;
  constructor() {
    console.log('new header Service');
    console.log(this.pageParams$);
  }

  changePageParams(pageParams: PageParams, where: string) {
    this.pageParams = Object.assign(pageParams, this.pageParams);
    console.log('change', where, pageParams);

    // this.pageParams$.subscribe((value) => { console.log(value); });
    this.pageParams$.next(pageParams);
  }

  updateUser(user: User) {
    this.pageParams.user = user;
    this.changePageParams(this.pageParams, 'test');
  }

  test() {
    console.log('test');
  }

}
