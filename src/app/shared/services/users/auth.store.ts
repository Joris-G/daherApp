import { Injectable, signal, computed, inject } from '@angular/core';
import { User } from 'src/app/_interfaces/user';
import { AuthService } from './auth.service';
import { firstValueFrom, of } from 'rxjs';
import { Credentials } from './credentials.interface';
import { AuthUser } from './auth.interface';
import { NavController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AuthStore {
  private readonly authService: AuthService= inject(AuthService);
  private readonly navCtrl: NavController=inject(NavController);
  // Signals privés (état interne)
  private _user = signal<User | null>(null);
  private _token = signal<string | null>(null);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);

  // Signals publics en lecture seule
  user = this._user.asReadonly();
  token = this._token.asReadonly();
  loading = this._loading.asReadonly();
  error = this._error.asReadonly();

  // Computed signals (valeurs dérivées)
  isAuthenticated = computed(() => !!this._user() && !!this._token());
  userRole = computed(() => this._user()?.roles ?? 'guest');
  isAdmin = computed(() => this.userRole().includes('admin'));

  constructor() {
    this.loadFromStorage();
  }

  // Actions pour modifier l'état
  async login(credentials: Credentials) {
    this._loading.set(true);
    this._error.set(null);
    try {
      const response = await firstValueFrom<AuthUser>(this.authService.login(credentials));
      
      this._user.set(response.user);
      this._token.set(response.token);
      
      // Persistance
      localStorage.setItem('auth_token', response.token);
      localStorage.setItem('auth_user', JSON.stringify(response.user));
      
    } catch (error: any) {
      this._error.set(error.message || 'Erreur de connexion');
      throw error;
    } finally {
      this._loading.set(false);
      return of(true);
    }
  }

  async logout() {
    this._loading.set(true);
    
    try {
      await firstValueFrom(this.authService.logout());
    } catch (error) {
      console.error('Erreur lors de la déconnexion', error);
    } finally {
      this.clearState();
      this.navCtrl.navigateRoot('/login');
    }
  }

  private clearState() {
    this._user.set(null);
    this._token.set(null);
    this._error.set(null);
    this._loading.set(false);
    
    localStorage.removeItem('auth_token');
    localStorage.removeItem('auth_user');
  }

  private loadFromStorage() {
    const token = localStorage.getItem('auth_token');
    const userStr = localStorage.getItem('auth_user');
    
    if (token && userStr) {
      this._token.set(token);
      this._user.set(JSON.parse(userStr));
    }
  }

  // Méthode pour rafraîchir les données utilisateur
  async refreshUser() {
    if (!this._token()) return;
    
    try {
      const user = await firstValueFrom(this.authService.getAuthUser());
      this._user.set(user);
    } catch (error) {
      this.clearState();
    }
  }
}