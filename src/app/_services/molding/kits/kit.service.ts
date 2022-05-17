import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interfaces/molding/kit';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/_services/request.service';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AlertService } from '../../divers/alert.service';

@Injectable()
export class KitService {

  constructor(
    private requestService: RequestService,
    private alertService: AlertService,
  ) { }

  getKitById(id: string): Observable<Kit | undefined> {
    return this.requestService.createGetRequest(`${environment.moldingApi}datas_kits?page=1&idMM=${id}`)
      .pipe(
        tap(
          (response) => this.log(response),
          (error) => {
            console.error(error);
            this.alertService.simpleAlert(
              'Erreur Kit',
              'Kit non conforme',
              'Il semble y avoir un problème avec le kit scanné. Vérifier le kit et essayer de nouveau.');
          }),
        map((returnsData) => {
          console.log(returnsData);
          if (returnsData.length > 0) {
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
            console.log(kit);
            return kit;
          }
          return of(undefined);
        }),
        catchError((error) => this.handleError(error, []))
      );
  }


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
    if (kits.length <= 0) {
      return false;
    }
    return kits.every(kit => kit.idMM === kitToTest.idMM);
  }

  getIri(kit: Kit): string {
    return `/api/datas_kits/${kit.id}`;
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

  private log(response: any) {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
