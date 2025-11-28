import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToolRequest } from 'src/app/tooling/tool-request-types';
import { ToolRequestService } from '../../services/tool-request.service';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestTableDataSourceService {

  public toolRequestsDataSource$: Observable<MatTableDataSource<ToolRequest>>;
  private filterSelectObjects;
  private matTableDataSource: MatTableDataSource<ToolRequest> = new MatTableDataSource<ToolRequest>([]);
  private subjectDataSource: BehaviorSubject<MatTableDataSource<ToolRequest>> = new BehaviorSubject(this.matTableDataSource);
  constructor(
    private toolRequestService: ToolRequestService,
  ) {
    this.toolRequestsDataSource$ = this.subjectDataSource.asObservable();
    this.toolRequestService.getToolRequests()
      .subscribe(
        requests => {
          this.matTableDataSource.data = requests;
          this.matTableDataSource.filterPredicate = this.createFilter();
          this.filterSelectObjects.filter((o) => {
            o.options = this.getFilterObject(this.matTableDataSource.data, o.columnProp);
          });
          this.subjectDataSource.next(this.matTableDataSource);
        }
      );
  }
  refreshDatas() {
    this.toolRequestService.getToolRequests()
      .subscribe(
        requests => {
          this.matTableDataSource.data = requests;
        }
      );
  }
  resetFilters() {
    this.matTableDataSource.filter = '';
  }
  setFilter(filterValues: any) {
    this.matTableDataSource.filter = JSON.stringify(filterValues);
  }

  private createFilter() {
    const filterFunction = (request: ToolRequest, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);
      console.log(searchTerms);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (col) {
          if (searchTerms[col].toString() !== '') {
            isFilterSet = true;
          } else {
            delete searchTerms[col];
          }
        }
      }
      let found = false;
      // console.log('début du filtre, pour chaque filtre actif');
      if (isFilterSet) {
        for (const col in searchTerms) {
          if (col) {
            // console.log('filtre Pour chaque mot de la propriété : ', col, 'je cherche le terme :', searchTerms[col]);
            searchTerms[col].trim().toLowerCase().split(' ').every(word => {
              // console.log(word);
              if (request[col]) {
                if (request[col].toString().toLowerCase().indexOf(word) !== -1 && isFilterSet) {
                  // console.log('terme trouvé je passe au mot suivant');
                  found = true;
                } else {
                  found = false;
                  // console.log('found false end boucle');
                  return false;
                }
              } else {
                switch (col) {
                  case 'demandeur':
                    if (request[request.type.toString().toLowerCase()][col].nom.toString().toLowerCase().indexOf(word) !== -1 && isFilterSet) {
                      // console.log('terme trouvé je passe au mot suivant');
                      found = true;
                    } else {
                      found = false;
                      // console.log('found false end boucle');
                      return false;
                    }
                    break;
                  case 'tool':
                    if (request[request.type.toString().toLowerCase()].outillage.designation.toString().toLowerCase().indexOf(word) !== -1 && isFilterSet) {
                      // console.log('terme trouvé je passe au mot suivant');
                      found = true;
                    } else {
                      found = false;
                      // console.log('found false end boucle');
                      return false;
                    }
                    break;
                  default:
                    break;
                }

              }
            });
            if (found === false) { return found; }
          }
        }
        return found;
      } else {
        return true;
      }
    };
    return filterFunction;
  }

  /**
*Get Uniqu values from columns to build filter
*
* @param fullObj
* @param key
* @return
* @memberof ToolRequestsPage
*/
  private getFilterObject(fullObj, key) {
    // console.log(fullObj, key);
    const uniqChk = [];
    fullObj.filter((obj) => {
      if (obj[key]) {
        if (!uniqChk.includes(obj[key])) {
          uniqChk.push(obj[key]);
        }
      } else {
        switch (key) {
          case 'demandeur':
            if (!uniqChk.includes(obj[obj.type.toString().toLowerCase()][key].nom)) {
              uniqChk.push(obj[obj.type.toString().toLowerCase()][key].nom);
            }
            break;
          case 'tool':
            if (!uniqChk.includes(obj[obj.type.toString().toLowerCase()].outillage.designation)) {
              uniqChk.push(obj[obj.type.toString().toLowerCase()].outillage.designation);
            }
            break;
          default:
            break;
        }

      }
      return obj;
    });
    return uniqChk;
  }

}
