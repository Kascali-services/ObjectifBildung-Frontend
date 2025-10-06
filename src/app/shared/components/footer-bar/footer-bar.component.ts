import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer-bar',
  imports: [
    NgForOf
  ],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.scss'
})
export class FooterBarComponent {
  language = 'fr';
  translations: any = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadLanguage(this.language);
  }

  loadLanguage(lang: string): void {
    this.http.get(`assets/language/${lang}.json`).subscribe({
      next: (data) => (this.translations = data),
      error: () => console.error(`Erreur lors du chargement de la langue : ${lang}`)
    });
  }

  changeLanguage(lang: string): void {
    this.language = lang;
    this.loadLanguage(lang);
  }

}
