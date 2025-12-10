import { computed, inject, Injectable, signal } from "@angular/core";
import { User, UserCreate, UsersState } from "src/app/_interfaces/user";
import { UsersService } from "./users.service";
import { finalize } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UsersStore {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly userService: UsersService = inject(UsersService);

  // ============================================================================
  // ÉTAT INTERNE (Signals Privés Modifiables)
  // ============================================================================
  private readonly state = signal<UsersState>({
    isCreatingUser: false,
    registeredUser: null,
    error: null,
    loggedUser: null,
    selectedUser: null,
    isLoadingUser: false,
    isUpdatingUser: false,
    isValidationRequired: false,
  });

  // ============================================================================
  // SÉLECTEURS (Signals en Lecture Seule)
  // ============================================================================

  /** Indique si un user est en cours de création. */
  public readonly isCreatingUser = computed(() => this.state().isCreatingUser);

  /** Indique si un user est enregistré. */
  public readonly registeredUser = computed(() => this.state().registeredUser);

  /** Indique si un user est en cours de validation par un administrateur. */
  public readonly isValidationRequired = computed(() => this.state().isValidationRequired);

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
  createUser(userToCreate: UserCreate) {
    this.updateState({ isCreatingUser: true });
    this.userService.registerUser(userToCreate)
      .pipe(
        finalize(() => {
          this.updateState({ isCreatingUser: false });
        }))
      .subscribe(
        {
          next: (user: User) => {
            this.updateState({
              isValidationRequired: user.isActive,
              registeredUser: user,
            });
          },
          error: (err: any) => {

          }
        });
  }


  // private confirmationProcess(user: User): void {
  //   const validationRequired = this.isValidationRequired(user);
  //   this.sendConfirmationMessage(validationRequired)
  //     .then(() => {
  //       this.redirectToLoginPage();
  //     });
  // }

  // private sendConfirmationMessage(validationRequired: boolean) {
  //   return this.alertService.simpleAlert(
  //     'Message d\'information',
  //     'Enregistrement effectué !',
  //     this.getCustomSuccessMessage(validationRequired)
  //   );
  // }



  // private getCustomSuccessMessage(validationRequired: boolean): string {
  //   const redirectMsg = `Vous allez être redirigé vers la page de connexion`;
  //   return (validationRequired) ? redirectMsg : `Votre demande nécessite une validation. ${redirectMsg}`;
  // }

  // TODO changer le backend pour qu'il renvoie l'info dans l'objet
  // private isValidationRequired(user: User) {
  //   return user.roles.includes('CE_MOULAGE') || user.roles.includes('CE_OUTIL');
  // }


  // ============================================================================
  // MÉTHODE INTERNE DE GESTION D'ÉTAT
  // ============================================================================

  /**
   * Met à jour une partie de l'état interne de manière immuable.
   * @param newState - Le sous-ensemble des propriétés de l'état à mettre à jour.
   */
  private updateState(newState: Partial<UsersState>): void {
    this.state.update(current => ({
      ...current,
      ...newState
    }));
  }
}