import {Component, OnInit, OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LanguageService} from '../../../core/services/language.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogged = true;
  currentLang = 'fr';
  translations: any = {};
  private langSub!: Subscription;
  private translationSub!: Subscription;

  constructor(private languageService: LanguageService, private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.langSub = this.languageService.getLanguage().subscribe(lang => {
      this.currentLang = lang;
    });

    this.translationSub = this.languageService.getTranslations().subscribe(data => {
      this.translations = data;
    });

    this.authService.getLoginStatus().subscribe(status => {
      this.isLogged = status;
    });
  }

  changeLang(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  navigateToLogin(): void {
    this.router.navigate(["/login"]);
  }
  navigateToRegister(): void {
    this.router.navigate(["/register"]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.translationSub?.unsubscribe();
  }
}
