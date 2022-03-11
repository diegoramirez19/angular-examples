import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { LANGUAGES } from './services/languages.constants';
import { InternationalizationService } from './services/internationalization.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Language {
  code: string, name: string
}

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  public languages = LANGUAGES;
  public form: FormGroup;
  public languagesKeys = [
    '_EMAIL',
    '_PASSWORD',
    '_FORGOT_PASSWORD',
    '_REMEMBER',
    '_ENTER',
    '_PROPERTIES'
  ];

  constructor(
    public international: InternationalizationService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selected: ['en-US', [Validators.required]]
    })
  }

  public setLanguage(language: Language) {
    this.international.setLanguage(language.code)
  }

}