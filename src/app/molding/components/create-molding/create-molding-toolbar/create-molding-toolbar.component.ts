import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { IMoldingStatus } from 'src/app/_interfaces/molding/molding';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-create-molding-toolbar',
    templateUrl: './create-molding-toolbar.component.html',
    styleUrls: ['./create-molding-toolbar.component.scss'],
    standalone: true,
    imports: [IonicModule, NgIf],
})
export class CreateMoldingToolbarComponent {
  public isActive: boolean;
  public isMoldingComplete: boolean;
  private moldingStatus$: Observable<IMoldingStatus>;
  constructor(
    private moldingService: MoldingService,
  ) {
    this.moldingService.molding$.asObservable().subscribe((molding) => {
      console.log("create molding toolbar receive new Molding");
      this.isActive = molding.isActive;
    });
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

  setInactiveClick(): void {
    this.moldingService.cancelMolding();
  }
}
