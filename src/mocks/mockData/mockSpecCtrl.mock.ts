import { SpecCtrlStorage } from "src/app/features/tooling/models/controle-3d-request.model";

export const mockSpecCtrl: SpecCtrlStorage[] = [
    {
        id: 1,
        toolRequestId: 2,
        description: "string",
        refPlan: "string",
        image: "string",
        fichier: "string",
        indPlan: "string",
        cheminCAO: "string",
        detailsControle: "string",
        tolerances: "string",
        dispoOut: new Date(2026, 0, 25),
        typeRapport: "Mail",
        moyenMesure: "Bras",
        infosComplementaire: "string",
        visaControleur: "string",
        interventionDate: new Date(2026, 0, 26),
        immobilisationOutillage: 2,
        ligneBudgetaire: "string"
    },
]