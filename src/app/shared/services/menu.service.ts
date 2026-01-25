import { computed, Injectable, signal } from "@angular/core";
interface MenuState {
    isOpen:boolean
}
@Injectable({providedIn:"root"})
export class MenuService{
  private readonly state = signal<MenuState>({ isOpen: false });

  /** Signal exposé pour la lecture de l'état d'ouverture */
    public readonly isOpen = computed(()=>this.state().isOpen);

  /**
 * Alterne l'état d'ouverture du menu.
 * @param {Event} [ev] - Optionnel : événement déclencheur.
 */
  public toggleMenu(ev: Event) {
    this.updateState({isOpen:!this.isOpen()})
  }

  /**
   * Définit explicitement l'état d'ouverture.
   * @param {boolean} open 
   */
  public setMenuState(open: boolean): void {
    this.updateState({ isOpen: open });
  }

   /**
     * Met à jour une partie de l'état interne de manière immuable.
     * @param {Partial<MenuState>} newState - Le sous-ensemble des propriétés de l'état à mettre à jour.
     */
    private updateState(newState: Partial<MenuState>): void {
      this.state.update(current => ({
        ...current,
        ...newState
      }));
    }

}