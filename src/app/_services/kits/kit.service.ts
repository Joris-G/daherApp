import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interface/kit';
import { environment } from 'src/environments/environment';

const KIT: any[] = [
  {
    referenceSAP: 7172242,
    designationSAP: 'test Kit',
    idMM: '53454323-1',
    lotSAP: '',
    timeOut: 12.456,
    tackLife: 123.456,
    aCuirAv: new Date(2022, 1, 12),
    aDrapAv: new Date(2022, 1, 12),
    decongel: new Date(),
    peremptionMoins18: new Date(2022, 0, 12)
  },
  {
    referenceSAP: 7172345,
    designationSAP: 'test Kit 2',
    idMM: '5348949-1',
    lotSAP: '',
    timeOut: 12.456,
    tackLife: 123.456,
    aCuirAv: new Date(2022, 1, 12),
    aDrapAv: new Date(2022, 1, 9),
    decongel: new Date(),
    peremptionMoins18: new Date(2022, 2, 12)
  },
  {
    referenceSAP: 7174567,
    designationSAP: 'test Kit 3',
    idMM: '5343449-1',
    lotSAP: '',
    timeOut: 12.456,
    tackLife: 123.456,
    aCuirAv: new Date(2022, 0, 31),
    aDrapAv: new Date(2022, 0, 28),
    decongel: new Date(),
    peremptionMoins18: new Date(2022, 2, 12)
  },
  {
    referenceSAP: 7174567,
    designationSAP: 'test Kit 4',
    idMM: '5379449-1',
    lotSAP: '',
    timeOut: 12.456,
    tackLife: 123.456,
    aCuirAv: new Date(2022, 0, 12),
    aDrapAv: new Date(2022, 0, 31),
    decongel: new Date(),
    peremptionMoins18: new Date(2022, 2, 12)
  },
  {
    referenceSAP: 7174567,
    designationSAP: 'test Kit 5',
    idMM: '5337249-1',
    lotSAP: '',
    timeOut: 12.456,
    tackLife: 123.456,
    aCuirAv: new Date(2022, 0, 31),
    aDrapAv: new Date(2022, 0, 21),
    decongel: new Date(),
    peremptionMoins18: new Date(2022, 1, 12)
  }];
@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor(private http: HttpClient) { }

  getKitById(id: string) {
    return new Promise((resolve, reject) => {
      if (environment.production) {
        const httpHeaders = new HttpHeaders()
          .set('content-type', 'application/json');
        this.http.get(`${environment.apiServer}datas_kits?page=1&idMM=${id}`, { headers: httpHeaders })
          .subscribe((returnsData: any) => {
            console.log(returnsData);
            if (returnsData.length !== 0) {
              const returnKit: Kit = {
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
              console.log(returnKit);
              // this.updateDates(MOLDING);
              resolve(returnKit);
            } else {
              reject();
            }
          },
            (error) => {
              console.log(error);
              reject();
            });
      } else {
        resolve(KIT);
      }
    });
  }


  isPerim(dateToCheck: Date, baseDate: Date): boolean {
    console.log(dateToCheck, baseDate);
    return (dateToCheck < baseDate);
  }

  /**
   * test si kit déjà dans le moulage
   *
   * @param {Kit} kitToTest
   * @param {Kit[]} kits
   * @return {*}  {boolean}
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
}
