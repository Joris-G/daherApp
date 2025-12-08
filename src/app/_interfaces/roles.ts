export type Role =
  | 'USER'
  | 'METHODES'
  | 'CE_OUTIL'
  | 'CE_MOULAGE'
  | 'MOULEUR'
  | 'ADMIN'
  | 'RESP_OUTIL'
  | 'RESP_MOULAGE'
  | 'OUTILLEUR';

export type RoleList = Role[];

export const ROLE_LABELS: Record<Role, string> = {
  USER: 'Utilisateur',
  METHODES: 'Préparateur',
  CE_OUTIL: 'Chef d\'équipe outillage',
  MOULEUR: 'Mouleur',
  ADMIN: 'Administrateur',
  RESP_OUTIL: 'Responsable Outillage',
  CE_MOULAGE: 'Chef d\'équipe moulage',
  RESP_MOULAGE: 'Responsable moulage',
  OUTILLEUR: 'Outilleur'
};