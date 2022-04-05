import { Injectable } from '@angular/core';
import { Core } from 'src/app/_interface/core';
import { Kit } from 'src/app/_interface/kit';
import { Tool } from 'src/app/_interface/tool';
import { CoreService } from '../core/core.service';
import { AlertService } from '../divers/alert.service';
import { LoadingService } from '../divers/loading.service';
import { KitService } from '../kits/kit.service';
import { ToolService } from '../tools/tool.service';


@Injectable({
  providedIn: 'root'
})
export class ScanService {

  public scanState: boolean;
  constructor(
    private kitService: KitService,
    private toolService: ToolService,
    private coreService: CoreService) {
  }

  getScanInput(scanInputValue: string) {
    console.log(scanInputValue);

    return new Promise<Kit | Tool | Core>((resolve, reject) => {
      // test de la valeur dans le scan. Identifier puis lancer la bonne fonction
      const regexKit = new RegExp('^([0-9]){8}-[0-9]$');
      const regexSapToolNumber = new RegExp('^OT([0-9]){6}$');
      const regexNidaHexcel = new RegExp('^]C201');
      if (scanInputValue.match(regexKit)) {
        console.log('kit');
        this.kitService.getKitById(scanInputValue)
          .then((kit: Kit) => {
            resolve(kit);
          },
            () => {
              reject();
            }
          );
      } else if (scanInputValue.match(regexSapToolNumber)) {
        console.log('tool');
        if (scanInputValue.startsWith('OT0')) {
          scanInputValue = scanInputValue.substr(3);
        }
        this.toolService.getToolByToolNumber(scanInputValue)
          .then((tool: Tool) => {
            resolve(tool);
          },
            () => {
              reject();
            })
          .catch(() => {
            console.error('catch get molding Tool ');
          });

      } else if (scanInputValue.match(regexNidaHexcel)) {
        this.coreService.getCoreByBatchNumber(scanInputValue)
          .then((core: Core) => {
            resolve(core);
          });
      } else {
        reject();
      }
    });
  }


}
