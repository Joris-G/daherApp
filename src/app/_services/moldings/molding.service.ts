import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interface/kit';
import { Molding, MoldingIri } from 'src/app/_interface/molding';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KitService } from '../kits/kit.service';
import { MoldingToolService } from '../moldingTools/molding-tool.service';

/** @type {*} */
// const MOLDING: Molding = {
//   idMolding: 1,
//   moldingDay: new Date(),
//   aCuireAv: new Date(),
//   aDraperAv: new Date(12, 10, 1991),
//   moldingUser: {
//     idUser: 1,
//     mail: 'j.grangier@daher.com',
//     matricule: 204292,
//     nom: 'GRANGIER',
//     prenom: 'Joris',
//     role: 'Admin'
//   },
//   moldingTool: {
//     idMoldingTool: 1,
//     identification: '19650Z01-73P5522000C003',
//     sapToolNumber: 'OT096902'
//   },
//   kits: [
//     {
//       id: 0,
//       idMM: '53456765-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     },
//     {
//       id: 0,
//       idMM: '53456765-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234, createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     },
//     {
//       id: 0,
//       idMM: '52345675-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     },
//     {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }, {
//       id: 0,
//       idMM: '54345678-1',
//       designationSAP: 'KIT TEST',
//       lotSAP: '',
//       aCuirAv: new Date(22, 2, 22),
//       aDrapAv: new Date(21, 2, 22),
//       decongel: new Date(21, 2, 22),
//       peremptionMoins18: new Date(21, 2, 22),
//       referenceSAP: 717223,
//       tackLife: 123,
//       timeOut: 1234,
//       createdAt: new Date(),
//       status: true,
//       updateAt: new Date()
//     }
//   ]
// };


@Injectable({
  providedIn: 'root'
})

export class MoldingService {
  public molding: Molding;
  constructor(
    private http: HttpClient,
    private kitService: KitService,
    private moldingToolService: MoldingToolService) {
  }
  saveMolding(moldingObject: MoldingIri) {
    console.log(moldingObject);
    return new Promise<void>((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .set('content-type', 'application/json');
      this.http.post(`${environment.apiServer}moldings`, moldingObject, { headers: httpHeaders })
        .subscribe((returnsData: any) => {
          console.log(returnsData);
          resolve();
          // if (returnsData.length !== 0) {
          //   const returnMoldingTool: MoldingTool = returnsData[0];
          //   console.log(returnMoldingTool);
          //   resolve(returnMoldingTool);
          //   // resolve(TOOL_TEST);
          // } else {
          //   reject();
          // }
        },
          (error) => {
            console.log(error);
            reject();
          });
    });
  }



  updateDates(molding: Molding): void {
    molding.aCuireAv = null;
    molding.aDraperAv = null;
    molding.kits.forEach((kit: Kit) => {
      if (kit.aCuirAv < molding.aCuireAv || !molding.aCuireAv) {
        molding.aCuireAv = kit.aCuirAv;
        molding.matPolym = kit;
      }

      if (kit.aDrapAv < molding.aDraperAv || !molding.aDraperAv) {
        molding.aDraperAv = kit.aDrapAv;
        molding.matDrap = kit;
      }
    });
  }



  getMoldingById(id: string) {
    return new Promise<Molding>((resolve, reject) => {
      // const molding = MOLDING;
      // resolve(molding);
    });
  }

  toIri(molding: Molding): MoldingIri {
    return {
      idMolding: molding.idMolding,
      kits: molding.kits.map((kit: Kit) => this.kitService.getIri(kit)),
      moldingDay: molding.moldingDay,
      moldingUser: molding.moldingUser,
      outillage: this.moldingToolService.getIri(molding.moldingTool),
      aCuireAv: molding.aCuireAv,
      aDraperAv: molding.aDraperAv,
      matPolym: this.kitService.getIri(molding.matPolym),
      matDrap: this.kitService.getIri(molding.matDrap),
    };
  }
}
