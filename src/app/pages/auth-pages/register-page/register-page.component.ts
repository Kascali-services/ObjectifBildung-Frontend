import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-register-page',
  imports: [
    FormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})

export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(private router: Router, private authService: AuthService) {
  }

  onRegister(): void {
    this.error = '';

    // 🔹 Vérifications basiques
    if (!this.email || !this.password || !this.confirmPassword) {
      this.error = 'Veuillez remplir tous les champs.';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // 🔹 Simulation d’un enregistrement (à remplacer par un AuthService plus tard)
    console.log('Registering user:', this.email);

    const success = this.authService.register(this.email, this.password);
    if (success) {
      this.router.navigate(['/']); // Redirection après inscription
    } else {
      this.error = 'Inscription invalide';
    }
    // 🔹 Simulation de succès
    setTimeout(() => {
      alert('Compte créé avec succès !');
      this.router.navigate(['/login']);
    }, 500);
  }
}
