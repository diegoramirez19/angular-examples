import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { LANGUAGES } from './services/languages.constants';
import { InternationalizationService } from './services/internationalization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageService } from './services/language.service';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public languages = LANGUAGES;
  public form: FormGroup;

  constructor(
    private interService: InternationalizationService,
    private languageService: LanguageService,
    private translationService: TranslationService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      languageSelected: [{ code: 'en-US', name: 'English' }, [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  public setLanguage(language: Language) {
    this.interService.setLanguage(language.code)
  }

}

interface Language {
  code: string, name: string
}
