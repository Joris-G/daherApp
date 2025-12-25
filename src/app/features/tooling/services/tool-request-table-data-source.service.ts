import { inject, Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { ToolRequest } from '../models/tool-request.model';


// TODO se poser la question de l'utiliter de cette class
@Injectable({
  providedIn: 'root'
})
export class ToolRequestTableDataSourceService {
  private readonly toolRequestService = inject(ToolRequestService);

  public toolRequestsDataSource$: Observable<MatTableDataSource<ToolRequest>>;
  // private filterSelectObjects;
  private matTableDataSource: MatTableDataSource<ToolRequest> = new MatTableDataSource<ToolRequest>([]);
  private subjectDataSource: BehaviorSubject<MatTableDataSource<ToolRequest>> = new BehaviorSubject(this.matTableDataSource);

  constructor() {
    this.toolRequestsDataSource$ = this.subjectDataSource.asObservable();
    this.toolRequestService.getToolRequests()
      .subscribe(
        (requests: ToolRequest[]) => {
          this.matTableDataSource.data = requests;
          this.matTableDataSource.filterPredicate = this.createFilter();
          // this.filterSelectObjects.filter((o) => {
          //   o.options = getFilterObject(this.matTableDataSource.data, o.columnProp);
          // });
          this.subjectDataSource.next(this.matTableDataSource);
        }
      );
  }

  // TODO voir si cette méthode est utile
  private refreshDatas() {
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
}


/**
 * Type utilitaire pour extraire soit une clé de l'objet, soit via une fonction personnalisée.
 */
export type ValueExtractor<T, R> = keyof T | ((item: T) => R | undefined | null);

/**
 * Extrait les valeurs uniques d'un tableau d'objets.
 * Utilise un Set pour une complexité algorithmique optimale en O(n).
 * @template T Le type des objets du tableau.
 * @template R Le type de la valeur de retour attendue.
 * @param {T[]} data - Le tableau d'objets source.
 * @param {ValueExtractor<T, R>} selector - La clé ou la fonction d'extraction.
 * @returns {R[]} Un tableau de valeurs uniques, filtrant les valeurs nulles/indéfinies.
 */
export const getUniqueValues = <T, R = any>(
  data: T[],
  selector: ValueExtractor<T, R>
): R[] => {
  const uniqueSet = new Set<R>();

  for (const item of data) {
    let value: any;

    if (typeof selector === 'function') {
      value = selector(item);
    } else {
      value = item[selector];
    }

    // On n'ajoute que si la valeur n'est pas "falsy" (selon ton besoin initial)
    if (value !== undefined && value !== null && value !== '') {
      uniqueSet.add(value);
    }
  }

  return Array.from(uniqueSet);
};



/**
 *Get Uniqu values from columns to build filter
 * @param fullObj
 * @param key
 * @returns
 */
export const getFilterObject = (fullObj, key) => {
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
  };
