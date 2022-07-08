import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { AdditionalMaterial, Core, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { CoreService } from 'src/app/_services/molding/core/core.service';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';
import { ModalMaterialService } from '../molding/modal/modal-material.service';

const REGEXKIT = new RegExp('^([0-9]){8}-[0-9]$');
const REGEXPROG = new RegExp('^PR[A-Z]([0-9]){5}$');
const REGEXSAPTOOLNUMBER = new RegExp('^OT([0-9]){6}$');
const REGEXNIDAHEXCEL = new RegExp('^]C201');
@Injectable()
export class ScanService {
  public scanInput$ = new Subject<AdditionalMaterial | Kit | Tool>();
  public scanState: boolean;
  constructor(
    private kitService: KitService,
    private toolService: ToolService,
    private coreService: CoreService,
    private materialModalService: ModalMaterialService) {
  }


  /**
   * Flux du traitement du scan
   * Reste à faire : Développer la partie Core, densification, ...
   *
   * @param scanInputValue
   * @return retourne un objet Kit ou Tool
   * @memberof ScanService
   */
  getScanInput(scanInputValue: string) {
    const typeInput = this.getTypeInput(scanInputValue);
    let obs: Observable<Kit | Tool | AdditionalMaterial | undefined>;
    console.log(typeInput);
    switch (typeInput) {
      case 'kit':
        obs = this.sendKit(scanInputValue);
        break;
      case 'tool':
        obs = this.sendTool(scanInputValue);
        break;
      case 'prog':
        obs = of(undefined);
        break;
      case '':
        this.materialModalService.createModal(scanInputValue);
        obs = this.materialModalService.materialObject;
        // obs = this.sendCore(scanInputValue);
        break;
    }
    console.log(obs);
    obs.subscribe((response) => this.scanInput$.next(response), (err) => this.scanInput$.error(err));
  }



  getTypeInput(inputValue: string): string {
    if (inputValue.match(REGEXKIT)) { return 'kit'; }
    else if (inputValue.match(REGEXSAPTOOLNUMBER)) { return 'tool'; }
    else if (inputValue.match(REGEXNIDAHEXCEL)) { return 'core'; }
    else if (inputValue.match(REGEXPROG)) { return 'prog'; }
    return '';
  }


  private sendKit(kitInput: string): Observable<Kit | undefined> {
    return this.kitService.getKitById(kitInput);
  }

  private sendTool(toolInput: string): Observable<Tool> {
    if (toolInput.startsWith('OT0')) {
      toolInput = toolInput.substr(3);
    }
    return this.toolService.getToolByToolNumber(toolInput);
  }

  private sendCore(coreInput: string): Observable<Core> {
    return this.coreService.getCoreByBatchNumber(coreInput);
  }
}
