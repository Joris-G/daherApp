import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { IonAccordionGroup, IonicModule } from '@ionic/angular';
import { TitleService } from 'src/app/shared/services/title.service';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';
import { ScanMoldingInputComponent } from '../../components/create-molding/scan-molding-input/scan-molding-input.component';
import { NgIf } from '@angular/common';
import { MoldingKitTableComponent } from '../../components/create-molding/molding-kit-table/molding-kit-table.component';
import { MoldingMaterialsTableComponent } from '../../components/create-molding/molding-materials-table/molding-materials-table.component';
import { MoldingInfoToolbarComponent } from '../../components/create-molding/molding-info-toolbar/molding-info-toolbar.component';
import { CreateMoldingToolbarComponent } from '../../components/create-molding/create-molding-toolbar/create-molding-toolbar.component';

@Component({
    selector: 'app-create-molding',
    templateUrl: './create-molding.page.html',
    styleUrls: ['./create-molding.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        ScanMoldingInputComponent,
        NgIf,
        MoldingKitTableComponent,
        MoldingMaterialsTableComponent,
        MoldingInfoToolbarComponent,
        CreateMoldingToolbarComponent,
    ],
})

export class CreateMoldingPage implements OnInit {
  @ViewChild('accordionGroup', { static: true }) accordionGroup: IonAccordionGroup;

  public isAdmin = false;
  public molding: Molding = null;
  private molding$: Observable<Molding> = this.moldingService.molding$.asObservable();

  constructor(
    private moldingService: MoldingService,
    private activatedRoute: ActivatedRoute,
    private roleGuard: RoleGuard,
    private titleService: TitleService,
  ) { }


  ionViewWillEnter() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.titleService.setTitle(`MODIFICATION MOULAGE n°${id}`);
      this.loadMoldingData(id);
      return;
    }
    this.moldingService.initMolding();
    this.titleService.setTitle(`CREATION D'UN MOULAGE`);

  }

  ngOnInit() {
    this.molding$.subscribe({
      next: (molding: Molding) => {
        this.molding = molding;
        if (this.molding.kits.length > 0) { this.accordionGroup.value = 'kits'; }
        if (this.molding.materialSupplementary.length > 0) { this.accordionGroup.value = 'materialSupplementary'; }

      }
    });
    this.isAdmin = this.roleGuard.isRole(['ROLE_ADMIN']);
  }

  /**
   * Charge le moulage dans la page
   *
   * @private
   * @param moldingId
   * @memberof CreateMoldingPage
   */
  private loadMoldingData(moldingId: string) {
    this.moldingService.loadMolding(moldingId);
  }

}
