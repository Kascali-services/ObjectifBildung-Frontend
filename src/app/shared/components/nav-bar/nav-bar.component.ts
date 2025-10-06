import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLogged = true;
  currentLang = 'fr';
  translations: any = {};
  private langSub!: Subscription;
  private translationSub!: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.languageService.getLanguage().subscribe(lang => {
      this.currentLang = lang;
    });

    this.translationSub = this.languageService.getTranslations().subscribe(data => {
      this.translations = data;
    });
  }

  changeLang(lang: string): void {
    this.languageService.setLanguage(lang);
  }

  toggleLogin(): void {
    this.isLogged = !this.isLogged;
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
    this.translationSub?.unsubscribe();
  }
}
