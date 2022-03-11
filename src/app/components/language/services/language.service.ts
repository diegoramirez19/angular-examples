import { Injectable } from '@angular/core';
import { InternationalizationService } from './internationalization.service';

@Injectable({
	providedIn: 'root'
})
export class LanguageService {

	constructor(private intService: InternationalizationService) { }
	
	public init(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const language = this.getCurrentLanguage();
      return resolve({});
    });
  }

	public getCurrentLanguage(): string {
		let language: string = this.getFirstBrowserLanguage();
		return language;
	}

	private getFirstBrowserLanguage(): string {
		const nav: Navigator | any = window.navigator;
		const browserLanguagePropertyKeys: any = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'];
		let language = '';
		for (let i = 0; i < browserLanguagePropertyKeys.length; i++) {
			language = nav[browserLanguagePropertyKeys[i]];
			language === 'en' ? language = 'en-US' : language === 'es' ? language = 'es-ES' : language === 'en-US';
			this.intService.setLanguage(language);
			return language;
		}
		return 'null';
	}

}
