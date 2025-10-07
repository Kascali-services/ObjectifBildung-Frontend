import { Injectable } from '@angular/core';

export interface Country {
  id: string;
  name: string;
}

export interface DocumentType {
  id: string;
  label: string;
  requiresSpecificDoc: boolean;
}

export interface DocumentOption {
  id: string;
  name: string;
  countryId: string;
}

export interface TranslationRequest {
  country: string;
  documentType: string;
  specificDocument?: string;
  description?: string;
  sourceLang: string;
  targetLang: string;
  file?: File;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private countries: Country[] = [
    { id: 'cm', name: 'Cameroun' },
    { id: 'ci', name: 'Côte d’Ivoire' },
    { id: 'sn', name: 'Sénégal' }
  ];

  private documentTypes: DocumentType[] = [
    { id: 'diplome', label: 'Diplôme / Relevé de notes', requiresSpecificDoc: true },
    { id: 'attestation', label: 'Attestation / Certificat', requiresSpecificDoc: false },
    { id: 'autre', label: 'Autre document', requiresSpecificDoc: false }
  ];

  private documentsByCountry: DocumentOption[] = [
    { id: 'baccalaureat', name: 'Baccalauréat', countryId: 'cm' },
    { id: 'licence', name: 'Licence', countryId: 'cm' },
    { id: 'bts', name: 'BTS', countryId: 'ci' },
    { id: 'bac', name: 'BAC', countryId: 'sn' },
  ];

  getCountries(): Country[] {
    return this.countries;
  }

  getDocumentTypes(): DocumentType[] {
    return this.documentTypes;
  }

  getDocumentsByCountry(countryId: string): DocumentOption[] {
    return this.documentsByCountry.filter(doc => doc.countryId === countryId);
  }

  calculatePrice(request: TranslationRequest): number {
    // Simulation d’un calcul : prix de base + facteur selon type
    let base = 15;
    if (request.documentType === 'diplome') base += 10;
    if (request.documentType === 'attestation') base += 5;
    return base;
  }

  submitTranslation(request: TranslationRequest): void {
    console.log('Translation submitted:', request);
  }
}
