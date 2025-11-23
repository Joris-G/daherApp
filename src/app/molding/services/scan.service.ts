import { Injectable } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { AdditionalMaterial, Core, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { CoreService } from 'src/app/molding/services/core.service';
import { KitService } from 'src/app/molding/services/kit.service';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { MoldingService } from './molding.service';
import { ModalMaterialService } from './modal-material.service';

const REGEXKIT = new RegExp('^([0-9]){8}-[0-9]$');
const REGEXPROG = new RegExp('^PR[A-Z]([0-9]){5}$');
const REGEXSAPTOOLNUMBER = new RegExp('^OT([0-9]){6}$');
const REGEXNIDAHEXCEL = new RegExp('^]C201');

@Injectable({ providedIn: "root" })
export class ScanService {

  public focusState$ = new Subject<boolean>();
  public scanInput$ = new Subject<AdditionalMaterial | Kit | Tool>();
  private scanOperations$ = new Subject<void>();
  private scanState = false;
  constructor(
    private kitService: KitService,
    private toolService: ToolService,
    private coreService: CoreService,
    private moldingService: MoldingService,
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
  getScanInput(scanInputValue: string): Observable<void> {
    const typeInput = this.getTypeInput(scanInputValue);
    // let obs: Observable<Kit | Tool | AdditionalMaterial | undefined>;
    console.log(typeInput);
    switch (typeInput) {
      case 'kit':
        return this.sendKit(scanInputValue);
      case 'tool':
        return this.sendTool(scanInputValue);
      case 'prog':
        return of(null);
      case '':
        return from(this.materialModalService.createModal(scanInputValue));
        // this.materialModalService.materialObject;
        // obs = this.sendCore(scanInputValue);
    }

    // obs.subscribe(
    //   (response) => this.scanInput$.next(response),
    //   (err) => this.scanInput$.error(err)
    //   );
  }



  getTypeInput(inputValue: string): string {
    if (inputValue.match(REGEXKIT)) { return 'kit'; }
    else if (inputValue.match(REGEXSAPTOOLNUMBER)) { return 'tool'; }
    else if (inputValue.match(REGEXNIDAHEXCEL)) { return 'core'; }
    else if (inputValue.match(REGEXPROG)) { return 'prog'; }
    return '';
  }

  toggleFocusOnInput() {
    this.scanState = !this.scanState;
    this.focusState$.next(this.scanState);
  }

  private sendKit(kitInput: string) {
    const kit$ = this.kitService.getKitById(kitInput);
    kit$.subscribe(
      (kit: Kit) => {
        console.log(kit);
        this.moldingService.addKit(kit);
        this.scanOperations$.next();
        // return of(null);
      },
      (err) => {
        //TODO renvoyer l'erreur à l'utilisateur
        console.error(err);
        this.scanOperations$.next();
      }
    );
    return this.scanOperations$;
    // return kit$;
  }

  private sendTool(toolInput: string) {
    if (toolInput.startsWith('OT0')) {
      toolInput = toolInput.substr(3);
    }
    this.toolService.getToolByToolNumber(toolInput)
      .subscribe(
        (responseTool) => {
          this.moldingService.addTool(responseTool);
          this.scanOperations$.next();
        },
        (err) => {
          //TODO renvoyer l'erreur à l'utilisateur
          console.error(err);
          this.scanOperations$.next();
        }
      );
    return this.scanOperations$;
  }

  private sendCore(coreInput: string): Observable<Core> {
    return this.coreService.getCoreByBatchNumber(coreInput);
  }
}
