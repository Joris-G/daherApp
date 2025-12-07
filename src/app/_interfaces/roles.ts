export type Role = string;
export type RoleList = Role[];
export const ROLE_LIST: RoleList = [
    'USER',
    'ADMIN',
];

enum usersRole  {
  'USER'= 'Utilisateur',
  'METHODES'= 'Préparateur',
  'CE_OUTIL'= 'Chef d\'équipe outillage',
  'MOULEUR'= 'Mouleur',
  'ADMIN'= 'Administrateur'

};