export interface Division {
  id?: number;
  nom: string;

}
export type DivisionCreation = Omit<Division, 'id'>

export interface DivisionIri {
  id?: number;
  nom: string;
}
