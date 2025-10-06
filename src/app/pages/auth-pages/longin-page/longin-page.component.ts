import {Component} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-longin-page',
  imports: [
    FormsModule
  ],
  templateUrl: './longin-page.component.html',
  styleUrl: './longin-page.component.scss'
})
export class LonginPageComponent {
  email = '';
  password = '';
  error = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(): void {
    const success = this.authService.login(this.email, this.password);
    if (!success) {
      this.error = 'Identifiants incorrects';
    } else {
      // Redirection ou mise à jour de l'état global
      this.router.navigate(['/']);
    }
  }
}
