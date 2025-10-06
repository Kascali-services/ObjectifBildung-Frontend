import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLang$ = new BehaviorSubject<string>('fr');
  private translations$ = new BehaviorSubject<any>({});

  constructor(private http: HttpClient) {
    this.loadLanguage(this.getCurrentLang());
  }

  setLanguage(lang: string): void {
    this.currentLang$.next(lang);
    this.loadLanguage(lang);
  }

  getLanguage() {
    return this.currentLang$.asObservable();
  }

  getCurrentLang(): string {
    return this.currentLang$.getValue();
  }

  getTranslations() {
    return this.translations$.asObservable();
  }

  private loadLanguage(lang: string): void {
    this.http.get(`assets/language/${lang}.json`).subscribe({
      next: (data) => this.translations$.next(data),
      error: () => console.error(`Erreur lors du chargement de la langue : ${lang}`)
    });
  }
}
