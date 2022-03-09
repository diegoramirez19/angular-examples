import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InternationalizationService } from './internationalization.service';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	constructor(private intService: InternationalizationService) { }

	public getCurrentLanguage(): string {
		let language: string = this.getFirstBrowserLanguage();
		return language;
	}

	public getCurrentLocale(): string {
		const lang = this.getCurrentLanguage();
		let locale = 'en-US';
		switch (lang.toLowerCase()) {
			case 'en':
				locale = 'en-US';
				break;
			case 'es':
				locale = 'es-ES';
				break;
			case 'it':
				locale = 'it-IT';
				break;
			case 'fr':
				locale = 'fr-FR';
				break;
		}
		return locale;
	}

	public getCurrentCurrencyCode(): string {
		const lang = this.getCurrentLanguage();
		let code = 'USD';
		switch (lang.toLowerCase()) {
			case 'en':
				code = 'USD';
				break;
			case 'es':
			case 'it':
			case 'fr':
				code = 'EUR';
				break;
		}
		return code;
	}

	private getFirstBrowserLanguage(): string {
		const nav: Navigator | any = window.navigator;
		const browserLanguagePropertyKeys: any = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
		let i = 0;
		let language = '';

		for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
			language = nav[browserLanguagePropertyKeys[i]];
			language === 'en' ? language = 'en-US' : language === 'es' ? language = 'es-ES' : language === 'en-US';
			if (language && language.length) {
				this.intService.setLanguage('es-ES');
				return language;
			}
		}
		return 'null';
	}

}
