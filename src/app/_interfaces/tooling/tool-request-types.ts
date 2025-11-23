/* eslint-disable @typescript-eslint/naming-convention */
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { User } from 'src/app/_interfaces/user';
import { OutillNoRefSAP, Tool } from './tool';


// ============================================================================
// ENUMS
// ============================================================================

export enum RequestType {
  SBO = 'sbo',
  MAINTENANCE = 'maintenance',
  CONTROLE = 'controle'
}

export enum RequestStatus {
  DRAFT = 'Brouillon',
  SUBMITTED = 'Nouvelle',
  IN_PROGRESS = 'En cours',
  COMPLETED = 'Finalisée',
  RETURNED = 'Retournée',
  CANCELLED = 'Annulée',
  STANDBY = 'En attente'
}

export enum TypeRapport {
  MAIL = 'Mail',
  DQRC = 'DQRC',
  PV_IDENTIFICATION = 'PV d`identification ou de contrôle'
}

export enum MoyenMesure {
  BRAS = 'Bras',
  LASER = 'Laser',
  LASER_TPROBE = 'laser + TProbe'
}


// ============================================================================
// TOOL REQUEST (Demande principale)
// ============================================================================
export class ToolRequest {
  id?: number;
  type: RequestType;
  typeData?: SpecCtrl | SpecMaintRep | SpecSBO;
  demandeur?: User;
  bloquantProd: boolean;
  createdAt?: Date;
  dateBesoin?: Date;
  outillage?: Tool;
  groupeAffectation?: GroupeAffectation;
  affectation?: string[];
  dateAffectation?: Date;
  datePlanif?: Date;
  statut?: RequestStatus;
  dateReal?: Date;
  userReal?: User;
  toolingNote?: string;
  // controle?: SpecCtrl;
  // maintenance?: SpecMaintRep;
  // sbo?: SpecSBO;
}
export type ToolRequestCreation = Omit<ToolRequest, 'programme' | 'description'>

// Type pour les formulaires (sans les champs auto-générés)
export interface ToolRequestFormValue {
  type: RequestType;
  bloquantProd: boolean;
  dateBesoin?: Date;
  aircraftProgram?: string;
  groupeAffectation?: number;
  toolingNote?: string;
  typeData: FormGroup
}

// ============================================================================
// SPÉCIFICATIONS CONTRÔLE
// ============================================================================
export class SpecCtrl {
  id?: number;
  idRequest?: number;
  //TODO faire un choix sur outillage
  outillage?: Tool;
  outillNoRefSAP?: OutillNoRefSAP
  // equipement?: Equipement;
  dateBesoin: Date;
  description: string;
  image?: string;
  fichier?: string;
  refPlan: string;
  indPlan: string;
  cheminCAO?: string;
  detailsControle?: string;
  tolerances?: string;
  dispoOut?: Date;
  typeRapport?: TypeRapport;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  ligneBudgetaire: string;
  visaControleur?: string;
  userCreat?: string;
  demandeur?: User;
  OT?: Tool;
  createdAt?: Date;
  modifiedAt?: Date;
  userModif?: User;
  interventionDate?: Date;
  statut?: string;
  constructor() { }
}
export interface SpecCtrlFormValue {
  refPlan: string;
  indPlan: string;
  cheminCAO?: string;
  description: string;
  detailsControle?: string;
  tolerances?: string;
  dispoOut?: Date;
  dateBesoin: Date;
  typeRapport?: TypeRapport;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  outillage?: number;
  outillNoRefSAP?: OutillNoRefSAP;
  ligneBudgetaire: string;
  visaControleur?: string;
  bloquantProd: boolean;
  immobilisationOutillage: boolean;
}

// ============================================================================
// SPÉCIFICATIONS MAINTENANCE
// ============================================================================
export interface SpecMaintRep {
  id?: number;
  outillage?: Tool;
  outillNoRefSAP: OutillNoRefSAP
  itemActionCorrective: MaintenanceItem[];
  // equipement: string;
  // OT?: Tool;
  // equipement?: string;
  // dateBesoin: Date;
  // respo?: string[];
  rep?: string[];
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat?: User;
  userModif?: User;
  userValideur?: User;
  image?: string;
  fichier?: string;
  sigle?: string;
  dateValid?: Date;
  demandeur?: User;

  // constructor() {
  //   this.itemActionCorrective = [new MaintenanceItem(1)];
  // }

  // addMaintenanceItem(): number {
  //   const rep = this.itemActionCorrective.length + 1;
  //   const maintenanceItem: MaintenanceItem = new MaintenanceItem(rep);
  //   return this.itemActionCorrective.push(maintenanceItem);
  // }

  // removeMaintenanceItem(rep: number) {
  //   const index = rep - 1;
  //   delete this.itemActionCorrective[index];
  // }
}

export interface MaintenanceItem {
  id?: number;
  rep: number;
  nonConformite: string;
  actionsCorrectives: string;
  respo?: string;
  delaiAction: Date;
  userReal?: string;
  dateReal?: Date;
  // constructor(rep: number) {
  //   this.rep = rep;
  //   // this.delaiAction = new Date();
  // }
}
export interface SpecMaintenanceFormValue {
  outillage?: number;
  outillNoRefSAP?: OutillNoRefSAP;
  dateBesoin?: Date;
  image?: string;
  fichier?: string;
  sigle?: string;
  userValideur?: number;
  dateValid?: Date;
  itemActionCorrective: MaintenanceItem[];
}

// ============================================================================
// SPÉCIFICATIONS SBO (Nouvelle demande outillage)
// ============================================================================
export interface SpecSBO {
  id: number;
  title: string;
  description: string;
  dateBesoin: Date;
  aircraftProgram?: string;
}
export type SpecSBOCreation = Omit<SpecSBO, "id" | "aircraftProgram">

export interface SpecSBOFormValue {
  title: string;
  description: string;
  dateBesoin: Date;
  aircraftProgram: string;
}

// ============================================================================
// REQUÊTES COMPLÈTES (avec spécifications)
// ============================================================================
// export interface ControlRequest {
//   toolRequest: ToolRequest;
//   specCtrl: SpecCtrl;
// }
// export interface MaintenanceRequest {
//   toolRequest: ToolRequest;
//   specMaintenance: SpecMaintRep;
// }
// export interface NewTool {
//   toolRequest: ToolRequest;
//   specSbo: SpecSBO;
// }


// export class ToolRequestFormGroup extends FormGroup {
//   declare value: ToolRequest;
//   declare controls: {
//     id: AbstractControl;
//     statut: AbstractControl;
//     groupeAffectation?: AbstractControl;
//     demandeur: AbstractControl;
//     createdAt: AbstractControl;
//     dateAffectation: AbstractControl;
//     datePlanif: AbstractControl;
//     dateReal: AbstractControl;
//     bloquantProd: AbstractControl;
//     aircraftProgram: AbstractControl;
//     needDate: AbstractControl;
//     title: AbstractControl;
//   };
//   constructor() {
//     super(({
//       id: new FormControl(),
//       statut: new FormControl(),
//       groupeAffectation: new FormControl(),
//       createdAt: new FormControl(),
//       dateAffectation: new FormControl(),
//       datePlanif: new FormControl(),
//       dateReal: new FormControl(),
//       demandeur: new FormControl(),
//       aircraftProgram: new FormControl(),
//       bloquantProd: new FormControl<boolean>(false),
//       needDate: new FormControl(),
//       title: new FormControl(),
//     }));
//   }
// }

// export class OutillNoRefSAPFormGroup extends FormGroup {
//   declare value: OutillNoRefSAP;
//   declare controls: {
//     identification: AbstractControl;
//     description: AbstractControl;
//     localisation: AbstractControl<string>;
//   };
//   constructor() {
//     super({
//       identification: new FormControl(''),
//       description: new FormControl(''),
//       localisation: new FormControl(''),
//     });
//   }
// }

// export class SpecCtrlFormGroup extends FormGroup {
//   declare value: SpecCtrl;
//   declare controls: {
//     refPlan: AbstractControl;
//     indPlan: AbstractControl;
//     cheminCAO: AbstractControl;
//     description: AbstractControl;
//     detailsControle: AbstractControl;
//     tolerances: AbstractControl;
//     dispoOut: AbstractControl;
//     dateBesoin: AbstractControl;
//     typeRapport: AbstractControl;
//     // interventionDate: AbstractControl;
//     moyenMesure: AbstractControl;
//     infosComplementaire: AbstractControl;
//     outillage: AbstractControl;
//     outillNoRefSAP: OutillNoRefSAPFormGroup;
//     ligneBudgetaire: AbstractControl;
//     statut: AbstractControl;
//     visaControleur: AbstractControl;
//     bloquantProd: AbstractControl;
//     immobilisationOutillage: AbstractControl;
//   };
//   constructor() {
//     super({
//       refPlan: new FormControl(''),
//       indPlan: new FormControl(''),
//       cheminCAO: new FormControl(''),
//       description: new FormControl(''),
//       detailsControle: new FormControl(''),
//       tolerances: new FormControl(''),
//       dispoOut: new FormControl(''),
//       dateBesoin: new FormControl(''),
//       typeRapport: new FormControl(''),
//       // interventionDate: new FormControl(''),
//       moyenMesure: new FormControl(''),
//       infosComplementaire: new FormControl(''),
//       outillage: new FormControl(''),
//       outillNoRefSAP: new OutillNoRefSAPFormGroup(),
//       ligneBudgetaire: new FormControl(''),
//       statut: new FormControl(''),
//       visaControleur: new FormControl(''),
//       bloquantProd: new FormControl(''),
//       immobilisationOutillage: new FormControl(''),
//     });
//   }
// }

// export class MaintFormGroup extends FormGroup {
//   declare value: SpecMaintRep;
//   declare controls: {
//     id?: AbstractControl;
//     outillage?: AbstractControl;
//     equipement?: AbstractControl;
//     dateBesoin?: AbstractControl;
//     image?: AbstractControl;
//     fichier?: AbstractControl;
//     sigle?: AbstractControl;
//     userValideur?: AbstractControl;
//     dateValid?: AbstractControl;
//     itemActionCorrective: ItemActionCorrectiveFormGroup;
//     outillNoRefSAP: OutillNoRefSAPFormGroup;
//   };
//   constructor() {
//     super(
//       {
//         outillage: new FormControl(),
//         dateBesoin: new FormControl(),
//         // equipment: new FormControl(),
//         image: new FormControl(),
//         fichier: new FormControl(),
//         sigle: new FormControl(),
//         userValideur: new FormControl(),
//         dateValid: new FormControl(),
//         itemActionCorrective: new ItemActionCorrectiveFormGroup(),
//         outillNoRefSAP: new OutillNoRefSAPFormGroup(),
//       }
//     );
//     this.value.itemActionCorrective = [new MaintenanceItem(1)];
//   }
// }

// export class ItemActionCorrectiveFormGroup extends FormGroup {
//   declare value: MaintenanceItem;
//   declare controls: {
//     nonConformite: AbstractControl;
//     actionsCorrectives: AbstractControl;
//     respo?: AbstractControl;
//     delaiAction: AbstractControl<Date>;
//     userReal?: AbstractControl;
//     dateReal?: AbstractControl;
//   };
//   constructor() {
//     super({
//       nonConformite: new FormControl(),
//       actionsCorrectives: new FormControl(),
//       respo: new FormControl(),
//       delaiAction: new FormControl(),
//       userReal: new FormControl(),
//       dateReal: new FormControl()
//     });
//   }
// }


// export interface MaintenanceItemFormGroup extends FormGroup {
//   value: MaintenanceItem;
//   controls: {
//     nonConformite: AbstractControl;
//     actionsCorrectives: AbstractControl;
//     respo?: AbstractControl;
//     delaiAction: AbstractControl;
//     userReal?: AbstractControl;
//     dateReal?: AbstractControl;
//     rep: AbstractControl;
//     id?: AbstractControl;
//   };
// }