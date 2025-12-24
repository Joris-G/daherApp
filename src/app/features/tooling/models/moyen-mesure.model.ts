/**
 * @type MoyenMesure
 * @description Union de littéraux de chaînes représentant les moyens de mesure disponibles.
 */
export type MoyenMesure =
  | 'Bras'
  | 'Laser'
  | 'laser + TProbe';

/**
 * @constant MOYENS_MESURE
 * @description Liste des valeurs de MoyenMesure à utiliser dans les templates (par ex. ion-select).
 */
export const MOYENS_MESURE: readonly MoyenMesure[] = [
  'Bras',
  'Laser',
  'laser + TProbe',
] as const;