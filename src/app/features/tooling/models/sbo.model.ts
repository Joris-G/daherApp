import { FormControl } from "@angular/forms";
import { ToolRequestBase, ToolRequestBaseForm } from "./tool-request.model";
// ============================================================================
// SPÉCIFICATIONS SBO (Nouvelle demande outillage)
// ============================================================================
export type SpecSBORequest = ToolRequestBase & {
  title: string;
  description: string;
  aircraftProgram?: string;
}
//TODO programme avion
export type SpecSBOCreation = Omit<SpecSBORequest, "id" | "aircraftProgram">;
export type SpecSBOUpdate = Partial<SpecSBOCreation>;

export type SpecSBOStorage= {
  id: number;
  toolRequestId: number;
  title: string;
  description: string;
  //TODO programme avion
  aircraftProgram?: string;
}

export type SpecSBOForm = ToolRequestBaseForm & {
  title:FormControl<string>;
  description:FormControl<string>;
}
