import { computed, Injectable, signal } from "@angular/core";
interface MenuState {
    isOpen:boolean
}
@Injectable({providedIn:"root"})
export class MenuService{

    public readonly isOpen = computed(()=>this.state().isOpen);
     private readonly state = signal<MenuState>({
        isOpen:false
  });
  toggleMenu(ev:Event) {
    this.updateState({isOpen:!this.isOpen()})
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