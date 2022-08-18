import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';

@Component({
  selector: 'app-molding-kit-table',
  templateUrl: './molding-kit-table.component.html',
  styleUrls: ['./molding-kit-table.component.scss'],
})
export class MoldingKitTableComponent {
  @Input() kits: Kit[];
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

  /**
   * Supprime un kit de la liste de kit. Cette fonction n'a pas d'incidence tant que le moualge n'est pas sauvegardé
   *
   * @param index Index du kit dans la liste des kits
   * @memberof CreateMoldingPage
   */
  removeKitClick(index: number) {
    //TODO réparer le click
    // this.molding.kits.splice(index, 1);
    // this.moldingService.updateDates(this.molding);
    // this.molding.kits.splice(index, 1);
    // this.moldingService.updateDates(this.molding);
  }
}
