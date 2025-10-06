import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
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
}
