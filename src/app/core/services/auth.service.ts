import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {
  private isLogged$ = new BehaviorSubject<boolean>(false);

  login(email: string, password: string): boolean {
    // Simule une connexion sans backend
    if (email === 'test@objectifbildung.com' && password === '1234') {
      this.isLogged$.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLogged$.next(false);
  }

  getLoginStatus() {
    return this.isLogged$.asObservable();
  }

  isAuthenticated(): boolean {
    return this.isLogged$.getValue();
  }

  register(email: string, password: string): boolean {
    // Simule une inscription sans backend
    if (email && password && email.includes('@')) {
      // Tu pourrais stocker temporairement l'utilisateur ici si besoin
      this.isLogged$.next(true); // Connecte automatiquement après inscription
      return true;
    }
    return false;
  }

}
