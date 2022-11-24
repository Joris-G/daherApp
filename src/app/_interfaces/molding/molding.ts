import { BehaviorSubject, Subject } from 'rxjs';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { User } from 'src/app/_interfaces/user';
import { AdditionalMaterial, Core, Kit } from './composite-material-types';

/**
 * En base de donnée :
 *
 * matPolym &  matDrap : idKit le plus dévaforable respectivement pour la polym et pour le drapage
 * moldingUser : id
 * kits : boucler sur une autre table pour enregistrer les kits sur avec l'id de moulage en liaison
 *
 * @export
 * @interface Molding
 */
export class Molding {
  id: number;
  kits: Kit[] = [];
  moldingDay: Date = new Date();
  createdBy: User;
  outillage: string;
  aCuireAv?: Date;
  aDraperAv?: Date;
  matPolym?: Kit;
  matDrap?: Kit;
  woList?: any[];
  updatedAt?: Date;
  status?: boolean;
  userCreat?: User;
  OT?: Tool;
  materialSupplementary?: AdditionalMaterial[] = [];

  getIri() {
    return `api/moldings/${this.id}`;
  }
}

export interface MoldingIri {
  id: number;
  kits: string[];
  moldingDay: Date;
  createdBy?: string;
  outillage: string;
  aCuireAv: Date;
  aDraperAv: Date;
  matPolym: string;
  matDrap: string;
  woList?: any[];
  updatedAt?: Date;
  materialSupplementary?: string[];
}

export class MoldingStatus {
  public moldingStatus: Subject<IMoldingStatus> = new BehaviorSubject({
    moldingStatus: false,
    kitStatus: false,
    toolStatus: false
  });
  private toolStatus: boolean;
  private kitStatus: boolean;
  constructor(toolStatus: boolean = false, kitStatus: boolean = false) {
    console.log('new molding status');
    this.kitStatus = kitStatus;
    this.toolStatus = toolStatus;
    this.upDateMoldingStatus();
  }

  setToolStatus(status: boolean) {
    this.toolStatus = status;
    this.upDateMoldingStatus();
  }
  setKitStatus(status: boolean) {
    this.kitStatus = status;
    this.upDateMoldingStatus();
  }

  getToolStatus(): boolean {
    return this.toolStatus;
  }
  getKitStatus(): boolean {
    return this.kitStatus;
  }

  upDateMoldingStatus() {
    const status = (this.kitStatus && this.toolStatus);
    this.moldingStatus.next({
      moldingStatus: status,
      kitStatus: this.kitStatus,
      toolStatus: this.toolStatus
    });
  }
}

export interface IMoldingStatus {
  moldingStatus: boolean;
  toolStatus: boolean;
  kitStatus: boolean;
}
