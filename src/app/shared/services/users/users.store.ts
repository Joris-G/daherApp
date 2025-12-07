import { computed, Injectable, signal } from "@angular/core";
import { UsersState } from "src/app/_interfaces/user";

@Injectable({providedIn:'root'})
export class UsersStore{
    // ============================================================================
      // ÉTAT INTERNE (Signals Privés Modifiables)
      // ============================================================================
      private readonly state = signal<UsersState>({
        isCreatingUser: false,
        error: null,
        loggedUser: null,
        selectedUser:null,
        isLoadingUser: false,
        isUpdatingUser: false,
      });
    
      // ============================================================================
      // SÉLECTEURS (Signals en Lecture Seule)
      // ============================================================================
    
      /** Indique si un user est en cours de création. */
      public readonly isCreatingUser = computed(() => this.state().isCreatingUser);
    
      /** un utilisateur selectionné */
      public readonly selectedUser = computed(() => this.state().selectedUser);
    
      /** Message d'erreur s'il y a eu un problème dans une des étapes. */
      public readonly error = computed(() => this.state().error);
    
      /** L'utilisateur connecté */
      public readonly loggedUser = computed(() => this.state().loggedUser);
    
      /** Indique si un user existante est en cours de chargement (pour l'édition). */
      public readonly isLoadingUser = computed(() => this.state().isLoadingUser); // 👈 Nouveau
    
      /** Indique si le user est en cours de mise à jour. */
      public readonly isUpdatingUser = computed(() => this.state().isUpdatingUser); // 👈 Nouveau
    
      // ============================================================================
  // MUTATIONS (Méthodes Publiques d'Action)
  // ============================================================================

}