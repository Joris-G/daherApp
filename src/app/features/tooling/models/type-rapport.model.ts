/**
 * @type TypeRapport
 * @description Union de littéraux de chaînes représentant les types de rapport possibles.
 * Utilisé pour la sécurité de type.
 */
export type TypeRapport =
  | 'Mail'
  | 'DQRC'
  | 'PV d`identification ou de contrôle';

/**
 * @constant RAPPORT_TYPES
 * @description Liste des valeurs de TypeRapport à utiliser dans les templates (par ex. ion-select).
 */
export const RAPPORT_TYPES: readonly TypeRapport[] = [
  'Mail',
  'DQRC',
  'PV d`identification ou de contrôle',
] as const;

