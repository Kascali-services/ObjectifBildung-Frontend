import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  services = [
    {
      title: 'Traduction de documents',
      icon: 'bi bi-translate',
      description: 'Traduisez vos documents officiels entre le français, l’anglais et l’allemand avec précision et rapidité.'
    },
    {
      title: 'Générateur de CV en allemand',
      icon: 'bi bi-file-earmark-person',
      description: 'Créez un CV professionnel adapté aux standards allemands en quelques clics.'
    },
    {
      title: 'Préparation aux examens Goethe',
      icon: 'bi bi-journal-text',
      description: 'Entraînez-vous efficacement aux examens A1 à B2 (Deutsch als Fremdsprache) avec nos outils et ressources.'
    },
    {
      title: 'Assistance à la recherche de place (Ausbildung)',
      icon: 'bi bi-briefcase',
      description: 'Bénéficiez d’une orientation et d’une aide personnalisée pour trouver un contrat de formation en Allemagne.'
    }
  ];
}
