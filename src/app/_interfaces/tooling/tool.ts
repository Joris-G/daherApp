export class Tool {

  id?: number;
  identification: string;
  sapToolNumber: string;
  designation: string;
  programmeAvion?: string;
  description?: string;

  static isTool(inputValue: any) {
    return Object.getOwnPropertyNames(inputValue).includes('sapToolNumber');
  }
  // getIri(): string{
  //   return `api/tools/${this.id}`;
  // }
}
