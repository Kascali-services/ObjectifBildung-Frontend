import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      // 👇 Ajoute ceci pour activer le scroll automatique et les ancres
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled', // revient en haut à chaque navigation
        anchorScrolling: 'enabled',           // active le scroll vers les ancres (#id)
      })
    ),
    provideHttpClient(),
  ],
};
