import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { IMoldingStatus } from 'src/app/_interfaces/molding/molding';

@Component({
  selector: 'app-create-molding-toolbar',
  templateUrl: './create-molding-toolbar.component.html',
  styleUrls: ['./create-molding-toolbar.component.scss'],
})
export class CreateMoldingToolbarComponent {
  // public isMoldingComplete = false;
  public isMoldingComplete: boolean;
  private moldingStatus$: Observable<IMoldingStatus>;
  constructor(
    private moldingService: MoldingService,
  ) {
    this.moldingStatus$ = this.moldingService.moldingStatus$;
    this.moldingStatus$.subscribe({
      next: (moldingStatus) => {
        this.isMoldingComplete = moldingStatus.moldingStatus;
      }
    });
  }


  saveMoldingClick(print?: boolean) {
    this.moldingService.saveMolding(print);
    // this.moldingService.moldingStatus.next(true);
  }
}
