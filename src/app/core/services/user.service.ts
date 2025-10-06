import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // 🔹 Simulation d’un utilisateur connecté (mock)
  private mockUser: User = {
    id: 1,
    firstname: 'Jean',
    lastname: 'Dupont',
    email: 'jean.dupont@example.com'
  };

  private userSubject = new BehaviorSubject<User | null>(this.mockUser);

  constructor() {}

  // Observable auquel le composant va souscrire
  getUser(): Observable<User | null> {
    return this.userSubject.asObservable();
  }

  // Exemple de mise à jour (utile plus tard avec backend)
  updateUser(user: User): void {
    this.userSubject.next(user);
  }

  // Déconnexion : supprime l’utilisateur courant
  clearUser(): void {
    this.userSubject.next(null);
  }
}
