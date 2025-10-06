import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged = true;
  currentLang = 'fr';
  translations: {
    nav_about?: string;
    nav_services?: string;
    nav_translate?: string;
    nav_cv?: string;
    nav_dashboard?: string;
  } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadLanguage(this.currentLang);
  }

  async loadLanguage(lang: string): Promise<void> {
    try {
      const data = await firstValueFrom(
        this.http.get<typeof this.translations>(`assets/language/${lang}.json`)
      );
      this.translations = data;
      this.currentLang = lang;
    } catch (error) {
      console.error('Erreur lors du chargement de la langue :', lang);
    }
  }

  changeLang(lang: string): void {
    this.loadLanguage(lang);
  }

  toggleLogin(): void {
    this.isLogged = !this.isLogged;
  }
}
