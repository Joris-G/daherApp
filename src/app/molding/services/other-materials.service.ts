import { Injectable } from '@angular/core';
import { AdditionalMaterial } from 'src/app/_interfaces/molding/composite-material-types';
import { RequestService } from 'src/app/core/services/request.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtherMaterialsService {

  constructor(private requestService: RequestService) { }

  addOne(mat: AdditionalMaterial) {
    return this.requestService.createPostRequest(`${environment.moldingApi}additional_materials`, mat);
    // .subscribe(
    //   () => {
    //     console.log('materiau ajouté');
    //   },
    //   (err) => {
    //     console.error('Erreur lors de l\'ajout du matériau', err);
    //   });
  }

}
