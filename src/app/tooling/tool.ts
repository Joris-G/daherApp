export interface Tool {
  id: number;
  identification: string;
  sapToolNumber: string;
  designation: string;
  programme?: any;
  description?: string;
}
export type ToolCreation = Omit<Tool, 'id' | 'programme' | 'description'>

export class ToolUtils {
  static isTool(inputValue: any) {
    return Object.getOwnPropertyNames(inputValue).includes('sapToolNumber');
  }
}


export interface OutillNoRefSAP {
  identification: string;
  description: string;
  localisation: string;
}
