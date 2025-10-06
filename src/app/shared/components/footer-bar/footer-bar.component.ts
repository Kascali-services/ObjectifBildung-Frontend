import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer-bar',
  standalone: true,
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent implements OnInit, OnDestroy {
  translations: {
    footer?: {
      rights?: string;
      privacy?: string;
      terms?: string;
    };
  } = {};

  private translationSub!: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.translationSub = this.languageService.getTranslations().subscribe(data => {
      this.translations = data;
    });
  }

  ngOnDestroy(): void {
    this.translationSub?.unsubscribe();
  }
}
