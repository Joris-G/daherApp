import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { RoleGuard } from 'src/app/core/services/users/role.guard';
import { IonAccordionGroup } from '@ionic/angular';
import { TitleService } from 'src/app/core/services/title.service';

@Component({
  selector: 'app-create-molding',
  templateUrl: './create-molding.page.html',
  styleUrls: ['./create-molding.page.scss'],
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
