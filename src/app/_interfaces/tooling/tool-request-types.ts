/* eslint-disable @typescript-eslint/naming-convention */
import { AbstractControl, AbstractFormGroupDirective, FormControl, FormGroup } from '@angular/forms';
import { RequestStatus } from 'src/app/_enums/request-status';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { User } from 'src/app/_interfaces/user';
export enum RequestType {
  sbo = 1,
  maintenance = 2,
  controle = 3
}

export interface ControlRequest {
  toolRequest: ToolRequest;
  specCtrl: SpecCtrl;
}

export interface MaintenanceRequest {
  toolRequest: ToolRequest;
  specMaintenance: SpecMaintRep;
}

export interface NewTool {
  toolRequest: ToolRequest;
  specSbo: SpecSBO;
}

export class ToolRequest {
  id?: number;
  demandeur?: User | string;
  bloquantProd: boolean;
  createdAt?: Date;
  dateBesoin?: Date;
  outillage?: Tool | string;
  groupeAffectation?: GroupeAffectation;
  affectation?: string[];
  dateAffectation?: Date;
  // datePlanif?: Date;
  statut?: string;
  dateReal?: Date;
  userReal?: User;
  toolingNote?: string;
  type?: RequestType | string;
  controle?: SpecCtrl;
  maintenance?: SpecMaintRep;
  sbo?: SpecSBO;
}



export interface ToolRequestIri {
  id: number;
  createdAt: Date;
  requestType?: RequestType;
  requestor?: string;
  tool?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
  fileUrl?: string;
  needDate?: Date;
  affectedTo?: string;
  groupeAffectation?: string;
  affectationDate?: Date;
  requestStatus?: RequestStatus;
  realizationDate?: Date;
  toolingNote?: string;
  statut: string;
}


export class ToolRequestFormGroup extends FormGroup {
  value: ToolRequest;
  controls: {
    id: AbstractControl;
    statut: AbstractControl;
    groupeAffectation?: AbstractControl;
    demandeur: AbstractControl;
    createdAt: AbstractControl;
    dateAffectation: AbstractControl;
    datePlanif: AbstractControl;
    dateReal: AbstractControl;
    bloquantProd: AbstractControl;
  };
  constructor() {
    super(({
      id: new FormControl(),
      statut: new FormControl(),
      groupeAffectation: new FormControl(),
      createdAt: new FormControl(),
      dateAffectation: new FormControl(),
      datePlanif: new FormControl(),
      dateReal: new FormControl(),
      demandeur: new FormControl(),
      bloquantProd: new FormControl<boolean>(false)
    }));
  }
}

export class SpecCtrl {
  id?: number;
  idRequest?: number;
  outillage?: Tool;
  outillNoRefSAP?: {
    identification: string;
    description: string;
    localisation: string;
  };
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

export class SpecCtrlIri {
  id?: number;
  outillage: string;
  equipement?: string;
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

  interventionDate?: Date;
  statut?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat?: string;
  userModif?: string;

  static toIri(specCtrl: SpecCtrl): SpecCtrlIri {
    return {
      id: specCtrl.id ?? null,
      outillage: specCtrl.outillage ? Tool.toIri(specCtrl.outillage) : '',
      dateBesoin: specCtrl.dateBesoin,
      description: specCtrl.description,
      image: '',
      fichier: '',
      refPlan: specCtrl.refPlan,
      indPlan: specCtrl.indPlan,
      cheminCAO: specCtrl.cheminCAO,
      detailsControle: specCtrl.detailsControle,
      tolerances: specCtrl.tolerances,
      dispoOut: specCtrl.dispoOut,
      typeRapport: specCtrl.typeRapport,
      ligneBudgetaire: specCtrl.ligneBudgetaire,
      // userCreat: this.userService.getIri(this.authService.authUser),
    };
  }
}

export interface OutillNoRefSAP {
  identification: string;
  description: string;
  localisation: string;
}
export class OutillNoRefSAPFormGroup extends FormGroup {
  value: OutillNoRefSAP;
  controls: {
    identification: AbstractControl;
    description: AbstractControl;
    localisation: AbstractControl<string>;
  };
  constructor() {
    super({
      identification: new FormControl(''),
      description: new FormControl(''),
      localisation: new FormControl(''),
    });
  }
}

export class SpecCtrlFormGroup extends FormGroup {
  value: SpecCtrl;
  controls: {
    refPlan: AbstractControl;
    indPlan: AbstractControl;
    cheminCAO: AbstractControl;
    description: AbstractControl;
    detailsControle: AbstractControl;
    tolerances: AbstractControl;
    dispoOut: AbstractControl;
    dateBesoin: AbstractControl;
    typeRapport: AbstractControl;
    // interventionDate: AbstractControl;
    moyenMesure: AbstractControl;
    infosComplementaire: AbstractControl;
    outillage: AbstractControl;
    outillNoRefSAP: OutillNoRefSAPFormGroup;
    ligneBudgetaire: AbstractControl;
    statut: AbstractControl;
    visaControleur: AbstractControl;
    bloquantProd: AbstractControl;
    immobilisationOutillage: AbstractControl;
  };
  constructor() {
    super({
      refPlan: new FormControl(''),
      indPlan: new FormControl(''),
      cheminCAO: new FormControl(''),
      description: new FormControl(''),
      detailsControle: new FormControl(''),
      tolerances: new FormControl(''),
      dispoOut: new FormControl(''),
      dateBesoin: new FormControl(''),
      typeRapport: new FormControl(''),
      // interventionDate: new FormControl(''),
      moyenMesure: new FormControl(''),
      infosComplementaire: new FormControl(''),
      outillage: new FormControl(''),
      outillNoRefSAP: new OutillNoRefSAPFormGroup(),
      ligneBudgetaire: new FormControl(''),
      statut: new FormControl(''),
      visaControleur: new FormControl(''),
      bloquantProd: new FormControl(''),
      immobilisationOutillage: new FormControl(''),
    });
  }
}



export enum TypeRapport {
  mail = 'Mail',
  dqrc = 'DQRC',
  pvIndentificationOrControl = 'PV d`identification ou de contrôle'
}

export enum MoyenMesure {
  bras = 'Bras',
  laser = 'Laser',
  laserAndTProbe = 'laser + TProbe'
}


export class SpecMaintRep {
  id?: number;
  outillage?: Tool;
  outillNoRefSAP: {
    identification: string;
    description: string;
    localisation: string;
  };
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
  itemActionCorrective: MaintenanceItem[];
  demandeur?: User;

  constructor() {
    this.itemActionCorrective = [new MaintenanceItem(1)];
  }

  addMaintenanceItem(): number {
    const rep = this.itemActionCorrective.length + 1;
    const maintenanceItem: MaintenanceItem = new MaintenanceItem(rep);
    return this.itemActionCorrective.push(maintenanceItem);
  }

  removeMaintenanceItem(rep: number) {
    const index = rep - 1;
    delete this.itemActionCorrective[index];
  }
}

export interface SpecMaintRepIri {
  id?: number;
  // outillage?: string;
  equipement?: string;
  // dateBesoin: Date;
  itemActionCorrective?: string[];
  respo?: string[];
  delaiAction?: string[];
  userReal?: string[];
  dateReal?: string[];
  rep?: string[];
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat?: string;
  userModif?: string;
  userValideur?: string;
  image?: string;
  fichier?: string;
  // equipement: string;
  sigle?: string;
  causeDem?: string;
  dateValid?: Date;
}

export class MaintFormGroup extends FormGroup {
  value: SpecMaintRep;
  controls: {
    id?: AbstractControl;
    outillage?: AbstractControl;
    equipement?: AbstractControl;
    dateBesoin?: AbstractControl;
    image?: AbstractControl;
    fichier?: AbstractControl;
    sigle?: AbstractControl;
    userValideur?: AbstractControl;
    dateValid?: AbstractControl;
    itemActionCorrective: ItemActionCorrectiveFormGroup;
    outillNoRefSAP: OutillNoRefSAPFormGroup;
  };
  constructor() {
    super(
      {
        outillage: new FormControl(),
        dateBesoin: new FormControl(),
        // equipment: new FormControl(),
        image: new FormControl(),
        fichier: new FormControl(),
        sigle: new FormControl(),
        userValideur: new FormControl(),
        dateValid: new FormControl(),
        itemActionCorrective: new ItemActionCorrectiveFormGroup(),
        outillNoRefSAP: new OutillNoRefSAPFormGroup(),
      }
    );
    this.value.itemActionCorrective = [new MaintenanceItem(1)];
  }
}

export class ItemActionCorrectiveFormGroup extends FormGroup {
  value: MaintenanceItem;
  controls: {
    nonConformite: AbstractControl;
    actionsCorrectives: AbstractControl;
    respo?: AbstractControl;
    delaiAction: AbstractControl<Date>;
    userReal?: AbstractControl;
    dateReal?: AbstractControl;
  };
  constructor() {
    super({
      nonConformite: new FormControl(),
      actionsCorrectives: new FormControl(),
      respo: new FormControl(),
      delaiAction: new FormControl(),
      userReal: new FormControl(),
      dateReal: new FormControl()
    });
  }
}

export class MaintenanceItem {
  nonConformite: string;
  actionsCorrectives: string;
  respo?: string;
  delaiAction: Date;
  userReal?: string;
  dateReal?: Date;
  rep: number;
  id?: number;
  constructor(rep: number) {
    this.rep = rep;
    // this.delaiAction = new Date();
  }
}

export interface MaintenanceItemFormGroup extends FormGroup {
  value: MaintenanceItem;
  controls: {
    nonConformite: AbstractControl;
    actionsCorrectives: AbstractControl;
    respo?: AbstractControl;
    delaiAction: AbstractControl;
    userReal?: AbstractControl;
    dateReal?: AbstractControl;
    rep: AbstractControl;
    id?: AbstractControl;
  };
}


export class SpecSBO {
  title: string;
  description: string;
  dateBesoin: Date;
}
// export interface MaintenanceItemIri {
//   nonConformite?: string;
//   actionsCorrectives?: string;
//   respo?: string;
//   delaiAction?: Date;
//   userReal?: string;
//   dateReal?: Date;
//   rep: number;
// }
