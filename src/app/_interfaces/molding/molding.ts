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
export interface Molding {
  id: number;
  kits: Kit[];
  moldingDay: Date;
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
  materialSupplementary?: AdditionalMaterial[];
}

export interface MoldingIri {
  id: number;
  kits: string[];
  moldingDay: Date;
  createdBy: string;
  outillage: string;
  aCuireAv: Date;
  aDraperAv: Date;
  matPolym: string;
  matDrap: string;
  woList?: any[];
  updatedAt?: Date;
  materialSupplementary?: string[];
}
