export interface Tool {
  id?: number;
  identification: string;
  sapToolNumber: string;
  designation: string;
  programme?: any;
  description?: string;
}
export type ToolCreation = Omit<Tool, 'programme' | 'description'>

export class ToolUtils {
  static isTool(inputValue: any) {
    return Object.getOwnPropertyNames(inputValue).includes('sapToolNumber');
  }
  static toIri(tool: Tool): string {
    return `api/tools/${tool.id}`;
  }
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

export interface OutillNoRefSAP {
  identification: string;
  description: string;
  localisation: string;
}
