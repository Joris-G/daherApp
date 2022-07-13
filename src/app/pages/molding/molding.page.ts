import { Component } from '@angular/core';
import { HeaderService } from 'src/app/composants/shared-user-header/header.service';
import { PageParams } from 'src/app/composants/shared-user-header/page-params';
@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage {
  public page: any = {
    pageTitle: 'MODULE MOULAGE',
    contentId: 'molding-content'
  };
  constructor(private headerService: HeaderService) {
    const pageParam: PageParams = { title: 'MOULAGE', visible: true };
    this.headerService.changePageParams(pageParam, 'molding');
  }

}
