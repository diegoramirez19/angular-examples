import { Injectable } from '@angular/core';
import { i18n } from './i18n';

declare var require: any;
@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  public enFile: any = {};
  public esFile: any = {};

  initialize(translations: { [locale: string]: object }): void {
    i18n.translations = translations;
  }

  setLanguage = (language: string) => {
    const fullLocale = language;
    i18n.locale = fullLocale;
  }

  strings(name: string, params = {}): string {
    return i18n.t(name, params);
  }

  chargeInternationalization() {
    this.enFile = require('src/assets/languages/cc-en.json');
    this.esFile = require('src/assets/languages/cc-es.json');
    this.initialize({ ['en-US']: this.enFile, ['es-ES']: this.esFile })
  }
}
