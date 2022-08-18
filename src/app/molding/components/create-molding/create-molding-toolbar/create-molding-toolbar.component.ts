import { Component } from '@angular/core';
import { MoldingService } from 'src/app/molding/services/molding.service';

@Component({
  selector: 'app-create-molding-toolbar',
  templateUrl: './create-molding-toolbar.component.html',
  styleUrls: ['./create-molding-toolbar.component.scss'],
})
export class CreateMoldingToolbarComponent {
  constructor(
    private moldingService: MoldingService,
  ) { }


  saveMoldingClick(print?: boolean) {
    this.moldingService.saveMolding(print);
  }
}
