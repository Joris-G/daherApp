import { Routes } from "@angular/router";
import { PrintMoldingSheetPage } from "./pages/print-molding-sheet/print-molding-sheet.page";
import { CreateMoldingPage } from "./pages/create-molding/create-molding.page";

export const MOLDING_ROUTES: Routes = [
  {
    path: '',
    children: [
      { path: 'print/:id', component: PrintMoldingSheetPage },
      { path: 'print', component: PrintMoldingSheetPage },

      { path: 'create', component: CreateMoldingPage },
      { path: 'edit/:id', component: CreateMoldingPage },

      { path: '**', redirectTo: '' }
    ]
  }
];