import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interface/kit';
import { Molding, MoldingIri } from 'src/app/_interface/molding';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KitService } from '../kits/kit.service';
import { MoldingToolService } from '../moldingTools/molding-tool.service';
import { UsersService } from '../users/users.service';
import { RequestService } from '../request.service';

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
    private kitService: KitService,
    private moldingToolService: MoldingToolService,
    private userService: UsersService,
    private requestService: RequestService,
    private http: HttpClient) {
  }
  saveMolding(moldingObject: MoldingIri) {
    console.log(moldingObject);
    return new Promise<Molding>((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .set('content-type', 'application/json');
      // .set('Access-Control-Allow-Credentials', 'true');
      this.http.post(`${environment.apiServer}moldings`, moldingObject, { headers: httpHeaders })
        .subscribe((returnsData: Molding) => {
          console.log(returnsData);
          resolve(returnsData);
        },
          (error) => {
            console.error(error);
            reject();
          });
    });
  }

  updateMolding(moldingObject: MoldingIri): Promise<Molding> {
    console.log(moldingObject);
    const url = `${environment.apiServer}moldings/${moldingObject.id}`;
    return this.requestService.createPutRequest(url, moldingObject);
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

  moldingServerToMoldingObject(moldingToTransform: any): Molding {
    const newListKit: Kit[] = [];
    moldingToTransform.kits.forEach(kitApi => {
      let newKit: Kit = null;
      newKit = {
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
      newListKit.push(newKit);
    });
    moldingToTransform.kits = newListKit;
    return moldingToTransform;
  }

  getMoldingById(id: string) {
    return new Promise((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .append('content-type', 'application/json');
      // .append('Access-Control-Allow-Origins', 'http://localhost:8100/')
      // .append('Access-Control-Allow-methods', 'GET, OPTIONS, POST, PUT, PATCH, DELETE');
      this.http.get(`${environment.apiServer}moldings/${id}`, { headers: httpHeaders })
        .subscribe((returnsData: any) => {
          const newListKit: Kit[] = [];
          returnsData.kits.forEach(kitApi => {
            let newKit: Kit = null;
            newKit = {
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
            newListKit.push(newKit);
          });
          returnsData.kits = newListKit;
          console.log(returnsData);
          resolve(returnsData);
        },
          (error) => {
            console.log(error);
            reject();
          });
    });
  }

  toIri(molding: Molding): MoldingIri {
    return {
      id: molding.id,
      kits: molding.kits.map((kit: Kit) => this.kitService.getIri(kit)),
      moldingDay: molding.moldingDay,
      moldingUser: this.userService.getIri(molding.moldingUser),
      outillage: this.moldingToolService.getIri(molding.outillage),
      aCuireAv: molding.aCuireAv,
      aDraperAv: molding.aDraperAv,
      matPolym: this.kitService.getIri(molding.matPolym),
      matDrap: this.kitService.getIri(molding.matDrap),
    };
  }
}
