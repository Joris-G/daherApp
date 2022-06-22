import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Core, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { CoreService } from 'src/app/_services/molding/core/core.service';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';
import { ModalMaterialService } from '../molding/modal/modal-material.service';

const REGEXKIT = new RegExp('^([0-9]){8}-[0-9]$');
const REGEXSAPTOOLNUMBER = new RegExp('^OT([0-9]){6}$');
const REGEXNIDAHEXCEL = new RegExp('^]C201');
@Injectable()
export class ScanService {

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
  getScanInput(scanInputValue: string): Observable<Kit | Tool | Core | any> {
    const typeInput = this.getTypeInput(scanInputValue);
    console.log(typeInput);
    let obs: Observable<Kit | Tool | Core | undefined>;
    switch (typeInput) {
      case 'kit':
        obs = this.sendKit(scanInputValue);
        break;
      case 'tool':
        obs = this.sendTool(scanInputValue);
        break;
      case 'core':
      case '':
        this.materialModalService.createModal(scanInputValue);
        obs = this.materialModalService.materialObject;
        // obs = this.sendCore(scanInputValue);
        break;
    }
    console.log(obs);
    return obs;
  }



  getTypeInput(inputValue: string): string {
    if (inputValue.match(REGEXKIT)) {
      return 'kit';
    } else if (inputValue.match(REGEXSAPTOOLNUMBER)) {
      return 'tool';
    } else if (inputValue.match(REGEXNIDAHEXCEL)) {
      return 'core';
    }
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
