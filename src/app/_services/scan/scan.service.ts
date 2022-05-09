import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Core } from 'src/app/_interfaces/molding/core';
import { Kit } from 'src/app/_interfaces/molding/kit';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { CoreService } from 'src/app/_services/molding/core/core.service';
import { KitService } from 'src/app/_services/molding/kits/kit.service';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';

const REGEXKIT = new RegExp('^([0-9]){8}-[0-9]$');
const REGEXSAPTOOLNUMBER = new RegExp('^OT([0-9]){6}$');
const REGEXNIDAHEXCEL = new RegExp('^]C201');
@Injectable()
export class ScanService {

  public scanState: boolean;
  constructor(
    private kitService: KitService,
    private toolService: ToolService,
    private coreService: CoreService) {
  }


  /**
   * Flux du traitement du scan
   * Reste à faire : Développer la partie Core, densification, ...
   *
   * @param scanInputValue
   * @return retourne un objet Kit ou Tool
   * @memberof ScanService
   */
  getScanInput(scanInputValue: string): Observable<Kit | Tool | Core | undefined> {
    const typeInput = this.getTypeInput(scanInputValue);
    if (typeInput) {
      let obs: Observable<Kit | Tool | Core | undefined>;
      switch (typeInput) {
        case 'kit':
          obs = this.sendKit(scanInputValue);
          break;
        case 'core':
          obs = this.sendCore(scanInputValue);
          break;
        case 'tool':
          obs = this.sendTool(scanInputValue);
          break;

        default:
          obs = of(undefined);
          break;
      }
      return obs;
    }
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


  private sendKit(kitInput: string): Observable<Kit> {
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
