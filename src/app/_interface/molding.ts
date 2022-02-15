import { Kit } from './kit';
import { MoldingTool } from './molding-tool';
import { User } from './user';

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
  idMolding: number;
  kits: Kit[];
  moldingDay: Date;
  moldingUser: User;
  moldingTool: MoldingTool;
  aCuireAv?: Date;
  aDraperAv?: Date;
  matPolym?: Kit;
  matDrap?: Kit;
  woList?: any[];
  updatedAt?: Date;
}
