import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Country, TranslationRequest, TranslationService} from '../../../core/services/translation.service';

@Component({
    selector: 'app-translation-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './translation-form.component.html',
    styleUrls: ['./translation-form.component.scss']
})
export class TranslationFormComponent implements OnInit {
    countries: Country[] = [];
    documentTypes: any[] = [];
    documents: any[] = [];

    request: TranslationRequest = {
        country: '',
        documentType: '',
        specificDocument: '',
        description: '',
        sourceLang: '',
        targetLang: '',
    };

    price = 0;
    selectedFile: File | null = null;

    constructor(private translationService: TranslationService) {}

    ngOnInit(): void {
        this.countries = this.translationService.getCountries();
        this.documentTypes = this.translationService.getDocumentTypes();
    }

    onCountryChange() {
        this.documents = this.translationService.getDocumentsByCountry(this.request.country);
    }

    onTypeChange() {
        const selectedType = this.documentTypes.find(d => d.id === this.request.documentType);
        if (!selectedType?.requiresSpecificDoc) {
            this.request.specificDocument = '';
        }
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        this.request.file = this.selectedFile!;
    }

    calculatePrice() {
        this.price = this.translationService.calculatePrice(this.request);
    }

    submit() {
        this.translationService.submitTranslation(this.request);
        alert('Demande de traduction soumise avec succès !');
    }
}

