import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { map, } from 'rxjs/operators';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { RequestService } from 'src/app/shared/services/request.service';

@Injectable()
export class KitService {
  constructor(
    private requestService: RequestService,
    private alertService: AlertService,
  ) { }

  getKitById(id: string) {
    // const kitSubject: Subject<Kit> = new Subject();
    return this.requestService.createGetRequest(`${environment.moldingApi}datas_kits?page=1&idMM=${id}`)
      .pipe(
        // takeWhile((returnsData) => returnsData.length > 0 ),
        map((returnsData) => {
          if (returnsData.length === 0) {
            this.alertService.simpleAlert(
              `Erreur`,
              `Kit non trouvé`,
              `Veuillez ré-essayer`
            );
            throw new Error(`aucun kit ne correspond au numéro : ${id}`);
          }
          const kit: Kit = {
            id: returnsData[0].id,
            aCuirAv: returnsData[0].ACuirAv,
            aDrapAv: returnsData[0].ADrapAv,
            createdAt: returnsData[0].createdAt,
            decongel: returnsData[0].Decongel,
            designationSAP: returnsData[0].DesignationSAP,
            idMM: returnsData[0].idMM,
            lotSAP: returnsData[0].LotSAP,
            peremptionMoins18: returnsData[0].PeremptionMoins18,
            referenceSAP: returnsData[0].ReferenceSAP,
            status: returnsData[0].status,
            tackLife: returnsData[0].TackLife,
            timeOut: returnsData[0].TimeOut,
            updateAt: returnsData[0].updateAt
          };
          return kit;
        }),
        // catchError((error) => this.handleError(error))
      );
    // return kitSubject;
  }
  // if (returnsData.length > 0) {
  // (error) => {
  //   console.error(error);


  isPerim(dateToCheck: Date, baseDate: Date): boolean {
    return (new Date(dateToCheck) < new Date(baseDate));
  }

  /**
   * test si kit déjà dans le moulage
   *
   * @param kitToTest du type KIT
   * @param kits la liste des kits
   * @return retourne un boolean
   * @memberof KitService
   */
  kitIsInKits(kitToTest: Kit, kits: Kit[]): boolean {
    return kits.some(kit => kit.idMM === kitToTest.idMM);
  }

  getIri(kit: Kit): string {
    return `/api/datas_kits/${kit.id}`;
  }

  updateKit(kit: Kit) {
    return this.requestService.createPatchRequest(`${environment.apiServer}/${environment.moldingApi}/datas_kits/${kit.id}`, kit);
  }
  // private async wrongKitInputAlert() {

  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Erreur Kit',
  //     subHeader: 'Kit non conforme',
  //     message: 'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.',
  //     buttons: ['OK']
  //   });

  //   await alert.present();

  //   const { role } = await alert.onDidDismiss();
  //   // console.log('onDidDismiss resolved with role', role);
  // }

  private handleError(error: Error, errorValue: any = 'error') {
    // console.error(error);
    this.alertService.simpleAlert(
      'Erreur Kit',
      'Kit non conforme',
      'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.');
    return of();
  }
}
