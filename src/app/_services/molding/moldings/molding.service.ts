import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interfaces/molding/kit';
import { Molding, MoldingIri } from 'src/app/_interfaces/molding/molding';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KitService } from '../kits/kit.service';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';
import { UsersService } from 'src/app/_services/users/users.service';
import { RequestService } from 'src/app/_services/request.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Service de gestion des kits
 *
 * @export
 * @class MoldingService
 */
@Injectable({
  providedIn: 'root'
})

export class MoldingService {

  /**
   * Creates an instance of MoldingService.
   *
   * @param kitService
   * @param toolService
   * @param userService
   * @param requestService
   * @memberof MoldingService
   */
  constructor(
    private kitService: KitService,
    private toolService: ToolService,
    private userService: UsersService,
    private requestService: RequestService,
  ) {
  }


  /**
   *
   *
   * @param moldingObject
   * @return un observable
   * @memberof MoldingService
   */
  saveMolding(moldingObject: MoldingIri): Observable<Molding | undefined> {
    return this.requestService.createPostRequest(`${environment.moldingApi}moldings`, moldingObject)
      .pipe(
        map((response: any) => {
          response.kits = this.moldingServerToMoldingObject(response);
          return response;
        })
      );
  }


  /**
   *
   *
   * @param moldingObject
   * @return observable
   * @memberof MoldingService
   */
  updateMolding(moldingObject: MoldingIri): Observable<Molding> {
    const url = `${environment.moldingApi}moldings/${moldingObject.id}`;
    return this.requestService.createPatchRequest(url, moldingObject);
  }


  /**
   * Recalcul le kit le plus défavorable
   *
   * @param molding
   * @memberof MoldingService
   */
  updateDates(molding: Molding): void {
    molding.aCuireAv = null;
    molding.aDraperAv = null;
    molding.matPolym = molding.kits.reduce((defPolym, kit) => (defPolym.aCuirAv > kit.aCuirAv) ? kit : defPolym);
    molding.aCuireAv = molding.matPolym.aCuirAv;
    molding.matDrap = molding.kits.reduce((defDrap, kit) => (defDrap.aDrapAv > kit.aDrapAv) ? kit : defDrap);
    molding.aDraperAv = molding.matDrap.aDrapAv;
    // molding.kits.forEach((kit: Kit) => {
    //   if (kit.aCuirAv < molding.aCuireAv || !molding.aCuireAv) {
    //     molding.aCuireAv = kit.aCuirAv;
    //     molding.matPolym = kit;
    //   }

    //   if (kit.aDrapAv < molding.aDraperAv || !molding.aDraperAv) {
    //     molding.aDraperAv = kit.aDrapAv;
    //     molding.matDrap = kit;
    //   }
    // });
  }


  /**
   * Cette fonction sera à détruire une fois l'issue gitHub #23 sera résolue
   * https://github.com/Joris-G/daherApp/issues/23
   *
   * @param moldingToTransform
   * @return objet moulage converti depuis la donnée reçue du serveur
   * @memberof MoldingService
   */
  moldingServerToMoldingObject(moldingToTransform: any): Kit[] {
    return moldingToTransform.kits.map((kitApi: any) => {
      const kit: Kit = {
        aCuirAv: kitApi.ACuirAv,
        aDrapAv: kitApi.ADrapAv,
        createdAt: kitApi.createdAt,
        decongel: kitApi.Decongel,
        designationSAP: kitApi.DesignationSAP,
        id: kitApi.id,
        idMM: kitApi.idMM,
        lotSAP: kitApi.LotSAP,
        peremptionMoins18: kitApi.PeremptionMoins18,
        referenceSAP: kitApi.ReferenceSAP,
        status: kitApi.status,
        tackLife: kitApi.TackLife,
        timeOut: kitApi.TimeOut
      };
      return kit;
    });
  }

  /**
   * Construit un objet molding depuis le serveur.
   *
   * @param id id du mouage. C'est l'id qui est encodé sur le code barre de la fiche de moulage
   * @return
   * @memberof MoldingService
   */
  getMoldingById(id: string): Observable<Molding | undefined> {
    return this.requestService.createGetRequest(`${environment.moldingApi}moldings/${id}`)
      .pipe(
        map((returnsData: any) => {
          returnsData.kits = this.moldingServerToMoldingObject(returnsData);
          return returnsData;
        })
      );
  }


  /**
   * Fonction utilisé dans la page d'administration pour lister tout les moulages.
   *
   * @return retourne la liste complète des moulages
   * @memberof MoldingService
   */
  getMoldings(): Observable<Molding[] | undefined> {
    return this.requestService.createGetRequest(`${environment.moldingApi}moldings`);
  }

  toIri(molding: Molding): MoldingIri {
    return {
      id: molding.id,
      kits: molding.kits.map((kit: Kit) => this.kitService.getIri(kit)),
      moldingDay: molding.moldingDay,
      createdBy: this.userService.getIri(molding.createdBy),
      outillage: (molding.OT) ? this.toolService.getIri(molding.OT) : null,
      aCuireAv: molding.aCuireAv,
      aDraperAv: molding.aDraperAv,
      matPolym: this.kitService.getIri(molding.matPolym),
      matDrap: this.kitService.getIri(molding.matDrap),
    };
  }
}
