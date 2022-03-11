import { Component } from '@angular/core';

import { InternationalizationService } from './components/language/services/internationalization.service';
import { LanguageService } from './components/language/services/language.service';
/*
  Service to use ng-translate
*/
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  param = {value: 'world'};

  constructor(
    private internazionalization: InternationalizationService,
    private language: LanguageService,
  ) {
    this.internazionalization.chargeInternationalization();
    this.language.init();
  }

}
