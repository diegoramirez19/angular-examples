import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES } from '../language/services/languages.constants';

@Component({
  selector: 'app-language-ng-translate',
  templateUrl: './language-ng-translate.component.html',
  styleUrls: ['./language-ng-translate.component.scss']
})
export class LanguageNgTranslateComponent implements OnInit {

  public languages = LANGUAGES;
  public languagueSelected = 'en-GB';
  
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  public setLanguage(language: any): void {
    this.translateService.use(language);
  }

}
