import { ToolRequest } from "./tool-request-types";

export const filterSelectObjects: ToolRequestFilter[] = [
    {
      name: 'Statut',
      columnProp: 'statut',
      options: []
    },
    {
      name: 'Type de demande',
      columnProp: 'type',
      options: []
    },
    {
      name: 'Demandeur',
      columnProp: 'demandeur',
      options: []
    },
    {
      name: 'Outillage',
      columnProp: 'outillage',
      options: []
    },
  ];

  export interface ToolRequestFilter{
      name: string,
      columnProp: keyof ToolRequest,
      options: string[]
  }