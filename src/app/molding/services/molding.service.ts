import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EmptyError, forkJoin, from, Observable, of, Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { IMoldingStatus, Molding, MoldingIri, MoldingStatus } from 'src/app/_interfaces/molding/molding';
import { environment } from 'src/environments/environment';
import { KitService } from './kit.service';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { RequestService } from 'src/app/core/services/request.service';
import { AdditionalMaterial, Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { CoreService } from './core.service';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { AlertService } from 'src/app/core/services/divers/alert.service';
import { LoadingService } from 'src/app/core/services/divers/loading.service';
import { OtherMaterialsService } from './other-materials.service';

/**
 * Service de gestion des moulages
 *
 * @export
 * @class MoldingService
 */
@Injectable(
  {
    providedIn: 'root'
  }
)

export class MoldingService {
  public molding: Molding;
  public molding$: Subject<Molding> = new Subject();
  public toolStatus: Subject<boolean> = new Subject();
  public moldingStatus$: Observable<IMoldingStatus>;
  private moldingStatus: MoldingStatus = new MoldingStatus();

  // private moldingStatus$: Observable<boolean> = this.moldingStatus.asObservable();
  private moldingIri: MoldingIri;


  constructor(
    private kitService: KitService,
    private matService: OtherMaterialsService,
    private toolService: ToolService,
    private requestService: RequestService,
    private coreService: CoreService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private loadingService: LoadingService,
  ) {
    this.moldingStatus$ = this.moldingStatus.moldingStatus.asObservable();
  }

  setToolStatus(status: boolean): void {
    this.moldingStatus.setToolStatus(status);
  }
  setKitStatus(status: boolean): void {
    this.moldingStatus.setKitStatus(status);
  }


  removeKit(index: number) {
    this.molding.kits.splice(index, 1);
    // this.saveMolding()
    this.updateDates();
    this.updateMoldings();
    this.updateKitStatus();
  }


  /**
   *: Observable<Molding>
   *
   * @param moldingObject
   * @return un observable
   * @memberof MoldingService
   */
  saveMolding(print: boolean) {
    // const check$: Observable<void> = this.checkMoldingDatas();
    // const savingOtherMat$: Observable<any[]> = this.saveOtherMaterials();
    // // const saveMolding: Observable<void>;
    // //TODO check les additionnal materials
    // savingOtherMat$
    //   .subscribe(
    //     (resp: AdditionalMaterial[]) => {
    //       console.log(resp);
    //       this.molding.materialSupplementary = resp;
    this.moldingIri = this.toIri();
    // resp.subscribe(() => {
    const saveMethod = (this.molding.id) ? this.patchMolding() : this.postMolding();
    saveMethod
      .subscribe((val) => {
        if (print) { this.printMolding(); }
      });
    // });

    // });
    // },
    // (err) => {
    //   //TODO mettre en place un service d'erreur qui se chargera de créer les alertes ou non en fonction d'un param
    //   this.alertService.simpleAlert('La vérification du moulage a échoué', err.title, err.message);
    // });
  }


  loadMolding(moldingId: string) {
    this.loadingService.startLoading('Patienter pendant le chargement du moulage');
    // TODO à rebrancher qqp this.molding.updatedAt = new Date();
    this.getMoldingById(moldingId)
      .subscribe(
        (molding) => {
          this.molding = molding;
          this.updateMoldings();
          this.setKitStatus(true);
          this.setToolStatus(true);
          this.loadingService.stopLoading();
        },
        (error) => {
          console.error(error);
          this.loadingService.stopLoading();
          this.alertService.simpleAlert(
            'Erreur moulage',
            `Erreur de récupération du moulage`,
            `Le moulage ${moldingId} n'existe pas`,
          );
        }
      );
  }

  /**
     * Vérifie les données du moulage :
     * # vérifie la présence de l'outillage
     * # vérifie s'il y a au moins un kit
     *
     * @return
     * @memberof CreateMoldingPage
     */
  // checkMoldingDatas(): void {
  //   // if (this.molding.OT === undefined) {
  //     // const missingToolMsg = 'Voulez-vous continuer sans outillage ?';
  //     this.alertService.presentAlertConfirm('OUTILLAGE MANQUANT', missingToolMsg)
  //       .then(
  //         (response) => {
  //           if (response) {
  //             this.moldingStatus.next(true);
  //           } else {
  //             const title = 'OUTILLAGE MANQUANT';
  //             const message = 'Veuillez renseigner l\'outillage de moulage';
  //             this.moldingStatus.next(false);
  //           }
  //         },
  //         (err) => {
  //           const title = `Outillage de moulage manquant`;
  //           const message = 'Il n\'y a pas eu de réponse de l\'utilisateur';
  //           this.moldingStatus.error(new Error(message));
  //         });
  //   // } else
  //    if (this.molding.kits.length === 0) {
  //     const title = 'Il n\'y a pas de kit';
  //     const message = `Pour insérer un kit matière munissez vous d'une fiche de vie et scannez le code barre.
  //           Si besoin d'aide complémentaire appelez le 06.87.89.24.25`;
  //     this.moldingStatus.error(new Error(message));
  //   } else {
  //     this.moldingStatus.next(true);
  //   }
  // }



  /**
   * Recalcul le kit le plus défavorable
   *
   * @todo supprimer les lignes commentées
   * @param molding
   * @memberof MoldingService
   */
  updateDates(): void {
    // REINITIALISATION
    this.molding.aCuireAv = null;
    this.molding.aDraperAv = null;
    if (this.molding.kits.length <= 0) { return; }
    // IDENTIFIER MATIERES DEFAVORABLES
    this.molding.matPolym = this.molding.kits.reduce((defPolym, kit) => {
      if (defPolym.aCuirAv > kit.aCuirAv) {
        return kit;
      } else {
        return defPolym;
      }
    });
    this.molding.matDrap = this.molding.kits.reduce((defDrap, kit) => (defDrap.aDrapAv > kit.aDrapAv) ? kit : defDrap);


    // RESULTATS DATE LIMITES EN PRENANT EN COMPTE LA POSSIBILITE DE DEPASSEMENT DE LA DATE A -18°C
    // console.log(molding.kits);
    const smallest18Kit = this.molding.kits.reduce((previousKit, kit) => {
      // console.log(previousKit.peremptionMoins18);
      // console.log(kit.peremptionMoins18);
      // console.log((previousKit.peremptionMoins18 > kit.peremptionMoins18));
      if (previousKit.peremptionMoins18 > kit.peremptionMoins18) {
        return kit;
      }
      return previousKit;
    });

    // A POLYMERIER AVANT LE :
    if (this.molding.matPolym.aCuirAv < smallest18Kit.peremptionMoins18) {
      this.molding.aCuireAv = this.molding.matPolym.aCuirAv;
    } else {
      this.molding.aCuireAv = smallest18Kit.peremptionMoins18;
    }

    // A DRAPER AVANT LE :
    if (this.molding.matDrap.aDrapAv < smallest18Kit.peremptionMoins18) {
      this.molding.aDraperAv = this.molding.matDrap.aDrapAv;
    } else {
      this.molding.aDraperAv = smallest18Kit.peremptionMoins18;
    }
  }


  /**
   * Construit un objet molding depuis le serveur.
   *
   * @param id id du mouage. C'est l'id qui est encodé sur le code barre de la fiche de moulage
   * @return
   * @memberof MoldingService
   */
  getMoldingById(id: string): Observable<Molding> {
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
  getMoldings(): Observable<Molding[]> {
    return this.requestService.createGetRequest(`${environment.moldingApi}moldings`);
  }

  addKit(kit: Kit) {
    const kitIsInKits = this.kitService.kitIsInKits(kit, this.molding.kits);
    if (!kitIsInKits) {
      this.molding.kits.push(kit);
      this.updateDates();
      this.updateMoldings();
    } else {
      this.alertService.presentToast('Le kit a déjà été scanné');
      console.error('kit en doublon');
    }
    this.updateKitStatus();

  }

  addNida(material) {
    this.molding.materialSupplementary.push(material);
    this.updateMoldings();
  }

  /**
   * On  traite une entrée d'un Tool
   *
   * @private
   * @param toolObj
   * @memberof CreateMoldingPage
   */
  addTool(responseTool: Tool) {
    this.molding.OT = responseTool;
    this.alertService.presentToast('Outillage associé !');
    this.setToolStatus(true);
    this.updateMoldings();
  }


  private updateKitStatus() {
    if (this.molding.kits.length > 0) {
      this.setKitStatus(true);
    } else {
      this.setKitStatus(false);
    }
  }
  private saveOtherMaterials(): Observable<any[]> {
    return forkJoin(this.molding.materialSupplementary.map(mat => this.matService.addOne(mat)));
  }

  private postMolding() {
    const moldingIri = this.toIri();
    return this.requestService.createPostRequest(`${environment.moldingApi}moldings`, moldingIri, true);
    // .pipe(
    //   map((response: any) => {
    //       response.kits = this.moldingServerToMoldingObject(response);
    //       return response;
    //     })
    //     );
  }

  /**
   *
   *
   * @param moldingObject
   * @return observable
   * @memberof MoldingService
   */
  private patchMolding(): Observable<Molding> {
    const moldingIri = this.toIri();
    const url = `${environment.moldingApi}moldings/${moldingIri.id}`;
    return this.requestService.createPatchRequest(url, moldingIri);
  }

  private updateMoldings() {
    this.molding$.next(this.molding);
  }

  private toIri(): MoldingIri {
    const molding = this.molding;
    return {
      id: molding.id,
      kits: molding.kits.map((kit: Kit) => this.kitService.getIri(kit)),
      materialSupplementary: molding.materialSupplementary.map((mat: any) => this.coreService.getIri(mat)),
      moldingDay: molding.moldingDay,
      // createdBy: this.userService.getIri(molding.createdBy),
      outillage: (molding.OT) ? this.toolService.getIri(molding.OT) : null,
      aCuireAv: molding.aCuireAv,
      aDraperAv: molding.aDraperAv,
      matPolym: this.kitService.getIri(molding.matPolym),
      matDrap: this.kitService.getIri(molding.matDrap),
    };
  }

  //TODO à supprimer
  /**
   * Cette fonction sera à détruire une fois l'issue gitHub #23 sera résolue
   * https://github.com/Joris-G/daherApp/issues/23
   *
   * @param moldingToTransform
   * @return objet moulage converti depuis la donnée reçue du serveur
   * @memberof MoldingService
   */
  private moldingServerToMoldingObject(moldingToTransform: any): Kit[] {
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
* Navigue vers l'impression des moulages
*
* @private
* @memberof CreateMoldingPage
*/
  private printMolding() {
    return of(this.navCtrl.navigateForward(['molding/print-molding-sheet', this.molding.id]));
  }
}
