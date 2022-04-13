import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interface/kit';
import { Molding, MoldingIri } from 'src/app/_interface/molding';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KitService } from '../kits/kit.service';
import { ToolService } from '../tools/tool.service';
import { UsersService } from '../users/users.service';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})

export class MoldingService {
  public molding: Molding;
  constructor(
    private kitService: KitService,
    private toolService: ToolService,
    private userService: UsersService,
    private requestService: RequestService,
    private http: HttpClient) {
  }


  saveMolding(moldingObject: MoldingIri) {
    return this.requestService.createPostRequest(environment.moldingApi + 'moldings', moldingObject);
  }

  updateMolding(moldingObject: MoldingIri): Promise<Molding> {
    console.log(moldingObject);
    const url = environment.moldingApi + 'moldings/' + moldingObject.id;
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
      this.requestService.createGetRequest(environment.moldingApi + 'moldings/' + id)
        .then((returnsData: any) => {
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

  getMoldings() {
    return this.requestService.createGetRequest(environment.moldingApi + 'moldings');
  }

  toIri(molding: Molding): MoldingIri {
    return {
      id: molding.id,
      kits: molding.kits.map((kit: Kit) => this.kitService.getIri(kit)),
      moldingDay: molding.moldingDay,
      createdBy: this.userService.getIri(molding.createdBy),
      outillage: this.toolService.getIri(molding.outillage),
      aCuireAv: molding.aCuireAv,
      aDraperAv: molding.aDraperAv,
      matPolym: this.kitService.getIri(molding.matPolym),
      matDrap: this.kitService.getIri(molding.matDrap),
    };
  }
}
