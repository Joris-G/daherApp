import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';

@Component({
  selector: 'app-molding-kit-table',
  templateUrl: './molding-kit-table.component.html',
  styleUrls: ['./molding-kit-table.component.scss'],
})
export class MoldingKitTableComponent implements OnInit {
  @Input() molding: Molding;
  // public kitList: Kit[] = [];
  public dataSource = new MatTableDataSource<Kit>();
  public displayedColumns = [
    'referenceSAP',
    'idMM',
    'designationSAP',
    'peremptionMoins18',
    'aDrapAv',
    'aCuirAv',
    'commands'
  ];
  // private molding$: Subject<Molding>;

  constructor(
    public kitService: KitService,
    public moldingService: MoldingService
  ) { }

  ngOnInit() {
    // this.molding$ = this.moldingService.molding$;
  }


  /**
   * Supprime un kit de la liste de kit. Cette fonction n'a pas d'incidence tant que le moualge n'est pas sauvegardé
   *
   * @param index Index du kit dans la liste des kits
   * @memberof CreateMoldingPage
   */
  removeKitClick(index: number) {
    // this.molding.kits.splice(index, 1);
    // this.moldingService.updateDates(this.molding);
    // this.molding.kits.splice(index, 1);
    // this.moldingService.updateDates(this.molding);
  }
}
