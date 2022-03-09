import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';
import { InternationalizationService } from './internationalization.service';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(
    private languageService: LanguageService,
    private intService: InternationalizationService
  ) { }

  public init(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const language = this.languageService.getCurrentLanguage();
      return resolve({});
    });
  }

  public translate(key: string): string {
    return this.intService.strings(key);
  }
}
