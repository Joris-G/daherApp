export class Tool {

  id?: number;
  identification: string;
  sapToolNumber: string;
  designation: string;
  programme?: any;
  description?: string;

  static isTool(inputValue: any) {
    return Object.getOwnPropertyNames(inputValue).includes('sapToolNumber');
  }
  // getIri(): string{
  //   return `api/tools/${this.id}`;
  // }
}

export class OtherTool {

  id?: number;
  identification: string;
  description?: string;
  designation: string;
  programmeAvion?: string;


  // getIri(): string{
  //   return `api/tools/${this.id}`;
  // }
}